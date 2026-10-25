-- Run once in the SQL editor of your own Supabase project.
create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb check (jsonb_typeof(state) = 'object'),
  updated_at timestamptz not null default now()
);
alter table public.learning_progress enable row level security;
revoke all on public.learning_progress from anon;
grant select, insert, update on public.learning_progress to authenticated;
create policy "Read own progress" on public.learning_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own progress" on public.learning_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own progress" on public.learning_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Field timestamps merge independently so two devices cannot erase each other's completed lessons.
create or replace function public.merge_progress_map(a jsonb, b jsonb)
returns jsonb language sql immutable set search_path = '' as $$
  select coalesce(jsonb_object_agg(key, value), '{}'::jsonb)
  from (
    select distinct on (key) key, value
    from (
      select key, value, 0 as priority from jsonb_each(coalesce(a, '{}'::jsonb))
      union all
      select key, value, 1 as priority from jsonb_each(coalesce(b, '{}'::jsonb))
    ) items
    where jsonb_typeof(value) = 'object'
    order by key, coalesce((value->>'updatedAt')::numeric, 0) desc, priority asc
  ) latest
$$;

create or replace function public.merge_learning_progress(a jsonb, b jsonb)
returns jsonb language sql immutable set search_path = '' as $$
  select jsonb_build_object(
    'completed', (select coalesce(jsonb_agg(id order by id), '[]'::jsonb) from
      (select distinct id from jsonb_array_elements_text(coalesce(a->'completed','[]'::jsonb) || coalesce(b->'completed','[]'::jsonb)) as entries(id)) ids),
    'reviews', public.merge_progress_map(a->'reviews', b->'reviews'),
    'results', public.merge_progress_map(a->'results', b->'results'),
    'assessments', public.merge_progress_map(a->'assessments', b->'assessments'),
    'assessment', coalesce(b->'assessment', a->'assessment', 'null'::jsonb)
  )
$$;

create or replace function public.sync_progress(incoming jsonb)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare merged jsonb;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if jsonb_typeof(incoming) is distinct from 'object'
    or jsonb_typeof(incoming->'completed') is distinct from 'array'
    or jsonb_typeof(incoming->'reviews') is distinct from 'object'
    or jsonb_typeof(incoming->'results') is distinct from 'object'
    or jsonb_typeof(incoming->'assessments') is distinct from 'object'
    or octet_length(incoming::text) > 4000000 then
      raise exception 'Invalid progress';
  end if;
  insert into public.learning_progress as p (user_id, state)
    values (auth.uid(), public.merge_learning_progress('{}'::jsonb, incoming))
  on conflict (user_id) do update
    set state = public.merge_learning_progress(p.state, excluded.state), updated_at = now()
  returning state into merged;
  return merged;
end;
$$;
revoke all on function public.sync_progress(jsonb) from public, anon;
grant execute on function public.sync_progress(jsonb) to authenticated;
