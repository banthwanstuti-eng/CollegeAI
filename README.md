# CollegeAI
AI-powered college administration platform with multi-agent system for attendance, fees, and academic services
# CollegeAI

An AI-powered college administration platform where students, faculty, and administrators access college services through a single interface. A central AI Orchestrator routes questions to specialized agents (Attendance, Finance, Academic), which retrieve information from the backend and can trigger controlled workflows like approvals and notifications.

## Project Goal

Build a working system where a student can ask a question like "What is my attendance?" and get a real-time answer through the full chain:
React (Frontend) → FastAPI (Backend) → AI Orchestrator → Specialized Agent → Database → AI Response → Frontend

## Tech Stack

- **Frontend:** React (Vite), JavaScript
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL
- **AI Layer:** Multi-agent orchestration, RAG (Retrieval-Augmented Generation) for policy Q&A
- **Version Control:** Git + GitHub
## Team & Roles

| Member | Role | Branch |
|--------|------|--------|
| Member 1 | Frontend | `frontend` |
| Member 2 | Backend + Database | `backend` |
| Member 3 | AI / Multi-Agent System | `ai` |
| Member 4 | Integration + Security + Workflow | `integration` |

## Branching Rules

- `main` — stable, tested code only. No one commits directly to main.
- Each member works on their own branch and pushes regularly.
- Member 4 integrates all branches and merges tested features into `main`.

## Minimum Viable Product (MVP)

- Student, Faculty, and Admin login
- Student dashboard
- AI chat
- Academic, Attendance, and Finance agents
- College policy RAG
- One approval workflow (e.g. attendance correction)
- Notifications
- Audit logs

## Getting Started

1. Clone the repo:
   \`\`\`
   git clone YOUR_REPOSITORY_URL
   \`\`\`
2. Checkout your assigned branch:
   \`\`\`
   git checkout YOUR_BRANCH
   \`\`\`
3. Follow the setup instructions inside your folder (`frontend/`, `backend/`, or `ai/`).

## Rules

- Never commit `.env` files, API keys, or passwords.
- Commit small, meaningful changes — not one giant commit.
- Announce in the group chat when a feature/API is ready, including the branch and endpoint name.
