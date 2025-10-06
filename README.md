# SPA Doctor Portfolio

A small personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS. This repo contains a component-driven UI (Radix + custom components) and example content for a spa/doctor style portfolio.

Key features
- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Radix UI primitives and a collection of UI components in `components/ui`
- Pre-built sections: hero, experience, education, publications, appointment, footer

Tech stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI components

Prerequisites
- Node.js (LTS) — Node 18 or later is recommended for modern Next.js versions
- pnpm (recommended, this repo includes `pnpm-lock.yaml`). npm or yarn will also work, but examples below use pnpm.

Quick start

Install dependencies

```bash
pnpm install
```

Run the development server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser. Next.js will automatically reload on changes.

Build for production

```bash
pnpm build
pnpm start
```

Lint

```bash
pnpm lint
```

Project structure (important files/folders)

- `app/` - Next.js App Router pages and layouts (entry point for pages)
- `components/` - App-specific sections and UI components (includes `ui/` primitives)
- `public/` - Static assets
- `styles/` - Global CSS (Tailwind) and other style resources
- `hooks/`, `lib/` - Small utilities and hooks used across the app
- `next.config.mjs`, `tsconfig.json`, `package.json` - project config

Environment variables
- None required to run locally by default. If you add analytics or other 3rd-party integrations, add a `.env.local` file and document variables here.

Deployment

This project is well suited for Vercel (recommended) — the platform that maintains Next.js. You can also deploy to other providers that support Node.js and Next.js. For a quick deploy, connect this repository to Vercel and use the default build command (`pnpm build`) and output settings.

Adding a license

There is no LICENSE file in this repository. If you want to open-source this project, add a `LICENSE` file (for example MIT) at the repository root.

Contributing

- Keep changes small and focused.
- Prefer TypeScript types for new code and follow existing project patterns.
- Run the dev server and lint before opening a PR.

Troubleshooting

- If you see issues with Node or package versions, try using a supported Node LTS (18+) and run `pnpm install --frozen-lockfile`.
- If Tailwind styles aren't applied, make sure `globals.css` is imported in `app/layout.tsx` and that PostCSS/Tailwind are installed.

Contact

If you want help or want me to add more developer docs (example tests, Dockerfile, CI pipeline, or a deployment guide), tell me what you'd like and I'll add it.

---

_Generated: README added to the project root containing usage and contributor notes._
