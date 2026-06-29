create table ai_settings (
    id uuid primary key default gen_random_uuid(),

    company_id uuid not null unique references companies(id) on delete cascade,

    assistant_name text not null default 'AI Assistant',
    tone text not null default 'professional',
    language text not null default 'nl',
    system_prompt text,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

alter table ai_settings enable row level security;


create table knowledge_items (
    id uuid primary key default gen_random_uuid(),

    company_id uuid not null references companies(id) on delete cascade,

    title text not null,
    content text not null,
    category text,
    is_active boolean not null default true,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

alter table knowledge_items enable row level security;


create table widget_settings (
    id uuid primary key default gen_random_uuid(),

    company_id uuid not null unique references companies(id) on delete cascade,

    position text not null default 'bottom-right',
    primary_color text not null default '#020617',
    welcome_message text not null default 'Hallo! Waarmee kan ik je helpen?',
    is_active boolean not null default true,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

alter table widget_settings enable row level security;