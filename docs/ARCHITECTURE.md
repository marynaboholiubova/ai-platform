# AI Platform Architecture

## Goal

This project is a SaaS platform for AI website consultants.

The platform will allow companies to:
- create an account;
- configure their company profile;
- add knowledge for the AI assistant;
- receive leads from website visitors;
- view chat history;
- connect the AI widget to their own website.

## Tech Stack

- Next.js
- TypeScript
- CSS Modules
- Supabase
- Supabase Auth
- OpenAI
- Resend

## Project Structure

### app/

Contains Next.js routes, pages, layouts and API routes.

Examples:
- app/page.tsx
- app/login/page.tsx
- app/dashboard/page.tsx
- app/api/chat/route.ts

Business logic should not live directly inside pages.

---

### components/

Contains reusable UI components.

Components should only handle presentation and user interaction.

Examples:
- buttons
- cards
- forms
- dashboard components
- chat components

---

### lib/

Contains external integrations and low-level utilities.

Examples:
- Supabase clients
- AI clients
- helper functions
- shared utilities

---

### services/

Contains business logic.

Examples:
- company service
- chat service
- lead service
- knowledge base service

Pages and API routes should call services instead of containing business logic directly.

---

### hooks/

Contains React hooks for client-side logic.

Examples:
- useChat
- useCompany
- useLeads

---

### types/

Contains shared TypeScript types.

Examples:
- Company
- Lead
- ChatMessage
- KnowledgeItem

---

### config/

Contains project-wide constants and configuration.

Examples:
- navigation links
- pricing plans
- default AI settings

## SaaS Domain Model

The main entity is Company.

A company can have:
- users;
- knowledge base items;
- AI assistant settings;
- chat sessions;
- messages;
- leads;
- widget settings;
- billing subscription.

## Supabase Structure

Supabase will store:
- companies
- company users
- knowledge base
- chat sessions
- chat messages
- leads
- widget settings
- billing data

## Architecture Rules

1. Pages should stay simple.
2. Components should not contain business logic.
3. Supabase access should go through lib or services.
4. API routes should call services.
5. Types should be shared from the types folder.
6. AI logic should be isolated in lib/ai and services.
7. The platform must be built for multiple companies from the beginning.