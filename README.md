# Brutal Ledger

Personal operating system — Ahmad Farooq.

## Modules
- Dashboard — daily overview with morning brief, habit ring, top tasks, schedule, weekly snapshot
- Habits — daily discipline tracker (Prayers, Health, Business, Finance) with smart auto-checks
- Tasks — project-based task management with built-in time tracker
- Calendar — time blocking with Google Calendar sync (bidirectional)
- Sleep — main sleep + naps with algorithmic quality flags
- Outreach — daily DM/comment counters + prospect pipeline with status tracking
- Content — LinkedIn post log + knowledge base with export
- Finance — personal expenses, income log, savings tracker (PKR)
- Scorecard — weekly/monthly review pulling live from all modules
- Pomodoro — 25/5, 45/15, 90/30 focus timer with session log

## Setup

1. Clone this repo
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
4. `npm run dev`

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (database + auth) — connect in next phase
- Google Calendar OAuth — connect in next phase
- Vercel (hosting)

## Notes
- Currently runs with local React state — all data persists in memory during session
- Supabase integration is the next phase to persist data across sessions
- Google Calendar OAuth requires a deployed URL for the OAuth callback
