create table company_users (
    id uuid primary key default gen_random_uuid(),

    company_id uuid not null references companies(id) on delete cascade,
    user_id uuid not null references auth.users(id) on delete cascade,

    role text not null default 'owner',

    created_at timestamptz default now(),

    unique(company_id, user_id)
);

alter table company_users enable row level security;