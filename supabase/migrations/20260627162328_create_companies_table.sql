create extension if not exists "pgcrypto";

create table companies (
    id uuid primary key default gen_random_uuid(),

    name text not null,
    slug text not null unique,

    email text,
    phone text,
    website text,
    logo text,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

alter table companies enable row level security;