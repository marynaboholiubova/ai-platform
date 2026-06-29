alter table companies
add column if not exists industry text;

alter table companies
add column if not exists language text not null default 'nl';

alter table companies
add column if not exists plan text not null default 'starter';

alter table companies
add column if not exists onboarding_completed boolean not null default false;