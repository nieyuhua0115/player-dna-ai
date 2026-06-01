# PlayerDNA / Football Style Matcher

A local-first football style matcher.

Users answer football style questions, the app converts answers into a trait vector, compares that vector with professional player profiles, and outputs a Player DNA Card.

The first version is intentionally simple:
- local Next.js app
- local JSON / TypeScript data
- deterministic matching
- no login
- no database
- no required inference server

See `agent.md` for the project requirements, technical design, GitHub workflow, and implementation roadmap.

## Local setup

Install dependencies:

```bash
npm install
```

Run the web app:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

Check the scaffold:

```bash
npm run typecheck
npm run lint
npm run build
```
