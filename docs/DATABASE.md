# Database Design

## Goal

This database is built for a SaaS platform where many companies can use their own AI website consultant.

The main entity is `companies`.

Every important record must belong to a company.

---

## Tables

### 1. companies

Stores company profiles.

Fields:
- id: uuid, primary key
- name: text
- slug: text, unique
- email: text
- phone: text
- website: text
- logo: text
- created_at: timestamp
- updated_at: timestamp

---

### 2. company_users

Connects Supabase auth users to companies.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- user_id: uuid, Supabase auth user id
- role: text

Roles:
- owner
- admin
- member

---

### 3. knowledge_items

Stores information the AI assistant can use.

Examples:
- services
- prices
- FAQ
- company rules
- regions
- opening hours

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- title: text
- content: text
- category: text
- is_active: boolean
- created_at: timestamp
- updated_at: timestamp

---

### 4. ai_settings

Stores AI behavior per company.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- assistant_name: text
- tone: text
- language: text
- system_prompt: text
- created_at: timestamp
- updated_at: timestamp

---

### 5. chat_sessions

Stores chat conversations.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- visitor_id: text
- status: text
- created_at: timestamp
- updated_at: timestamp

Statuses:
- open
- closed
- lead_created

---

### 6. messages

Stores messages inside chat sessions.

Fields:
- id: uuid, primary key
- session_id: uuid, foreign key to chat_sessions.id
- role: text
- content: text
- created_at: timestamp

Roles:
- user
- assistant
- system

---

### 7. leads

Stores contact requests collected by the AI assistant.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- session_id: uuid, foreign key to chat_sessions.id
- name: text
- email: text
- phone: text
- message: text
- status: text
- created_at: timestamp

Statuses:
- new
- contacted
- closed

---

### 8. widget_settings

Stores website widget configuration per company.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- position: text
- primary_color: text
- welcome_message: text
- is_active: boolean
- created_at: timestamp
- updated_at: timestamp

---

### 9. subscriptions

Stores billing information.

Fields:
- id: uuid, primary key
- company_id: uuid, foreign key to companies.id
- plan: text
- status: text
- current_period_start: timestamp
- current_period_end: timestamp
- created_at: timestamp
- updated_at: timestamp

Plans:
- starter
- pro
- premium

Statuses:
- active
- canceled
- past_due
- trialing

---

## Relationships

- One company can have many users.
- One company can have many knowledge items.
- One company can have one AI settings record.
- One company can have many chat sessions.
- One chat session can have many messages.
- One company can have many leads.
- One company can have one widget settings record.
- One company can have one subscription.

---

## Security

Row Level Security must be enabled on all tables.

A user may only access data from companies where they are listed in `company_users`.

Public website visitors may only access the chat API through controlled API routes, not directly through Supabase tables.

---

## Migration Plan

Tables will be created with Supabase CLI migrations.

First migration:
- companies
- company_users

Second migration:
- knowledge_items
- ai_settings

Third migration:
- chat_sessions
- messages
- leads

Fourth migration:
- widget_settings
- subscriptions