# NexusSynth Monorepo

Production-ready walking skeleton for the NexusSynth platform.

## Structure
- `apps/web` – Vite + React frontend (calls API, shows health + hello).
- `apps/api` – Fastify API with health check, hello route, auth stub, DB stub.
- `packages/ui` – Shared React UI primitives.
- `packages/core` – Config, auth, DB/health stubs, shared logic.
- `packages/types` – Shared TypeScript types.
- `infra` – Docker Compose dev preview.

## Quick start
```bash
npm install
npm run dev:api   # http://localhost:4000
npm run dev:web   # http://localhost:5173 (uses VITE_API_URL)
```

## Tooling
- Workspaces with npm
- TypeScript, ESLint, Prettier
- Vitest test harness
- CI workflow for install/lint/test/build

## Documentation
- [NexusSynth Architectural Blueprint](docs/nexus-synth-architecture.md)
- Environment template: `.env.example`
