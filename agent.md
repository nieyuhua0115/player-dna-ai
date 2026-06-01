# agent.md

## Project

This is PlayerDNA / Football Style Matcher, a local-first full-stack and AI infrastructure side project.

The goal is to build a web tool where a user answers football style questions and receives a Player DNA Card showing:
- closest professional player match
- top 4 player blend percentages
- style archetype
- strengths
- development areas
- tactical fit
- scouting-style summary

This repository should serve three goals at the same time:
- a football interest product
- an AI-assisted coding showcase
- an AI inference / AI infrastructure case study

## Product Principles

- Prioritize a complete local demo over architectural ambition.
- The MVP loop is questionnaire -> trait vector -> deterministic matching -> result card.
- Results should feel explainable, not random.
- Keep the first version fast to run, easy to screenshot, and easy to explain in a README or technical article.
- Do not require login, a database, paid APIs, or a running inference server for V1.

## MVP Scope

V1 includes:
- Next.js + TypeScript + Tailwind web app.
- Local static data for questions and professional player profiles.
- 20-30 football style questions.
- 30-50 initial professional player profiles.
- Deterministic trait scoring.
- Weighted similarity matching.
- Player DNA Card result page.
- Template-generated scouting report.
- Local setup instructions and basic tests.

V1 does not include:
- authentication
- hosted database
- production deployment
- live football data ingestion
- complex machine learning
- real LLM inference dependency
- social sharing or image export

## Target Stack

- TypeScript
- Next.js App Router
- Tailwind CSS
- Local JSON / TypeScript data files
- Shared matching package
- Vitest or Jest for matching tests
- Local inference server integration later

The AI inference server should remain optional in V1.

## Target Repository Structure

```txt
player-dna-ai/
  apps/
    web/
      app/
      components/
      lib/
      package.json
  packages/
    player-matching/
      src/
        archetypes.ts
        index.ts
        reportTemplate.ts
        scoring.ts
        traits.ts
        types.ts
      package.json
    prompts/
      scouting-report.en.md
      scouting-report.zh.md
    evals/
      sample-answers.json
      expected-results.md
  services/
    inference-server/
      README.md
  data/
    players.json
    questions.json
  .github/
    pull_request_template.md
  README.md
  agent.md
```

## Trait System

All traits use a 0-100 scale.

Core traits:
- pace
- acceleration
- dribbling
- oneVsOne
- cutInside
- goOutside
- shooting
- finishing
- crossing
- passing
- creativity
- offBall
- defensiveWorkRate
- pressing
- physicality
- holdUpPlay
- riskTaking
- tempoControl
- transitionThreat
- weakFoot
- aerialAbility
- ballRetention
- longPassing
- shortCombination
- finalThirdDecision

User trait vectors should start from a neutral baseline such as 50.
Question answers apply small, explicit trait effects.
Final trait values must be clamped to 0-100.

## Matching Design

V1 matching is deterministic.

Recommended flow:
1. Convert answers into a user trait vector and metadata.
2. Compare the vector with professional player profiles.
3. Use weighted normalized distance or cosine similarity.
4. Add small metadata boosts for position, preferred foot, role, and zone overlap.
5. Return top 4 matches.
6. Convert top 4 scores into blend percentages.
7. Generate archetype, strengths, development areas, tactical fit, and report text.

Avoid hidden randomness in V1.

## Initial Player Groups

Start with attackers and midfielders.

Wingers:
- Vinicius Jr
- Rafael Leao
- Son Heung-min
- Bukayo Saka
- Mohamed Salah
- Nico Williams
- Ousmane Dembele
- Jack Grealish
- Khvicha Kvaratskhelia
- Phil Foden

Forwards:
- Kylian Mbappe
- Erling Haaland
- Harry Kane
- Karim Benzema
- Olivier Giroud
- Lautaro Martinez
- Victor Osimhen

Midfielders:
- Kevin De Bruyne
- Luka Modric
- Jude Bellingham
- Pedri
- Rodri
- N'Golo Kante
- Bruno Fernandes
- Federico Valverde

Defenders and goalkeepers are later scope.

## AI Inference Integration Plan

V1:
- Do not call a real inference server.
- Generate scouting reports with deterministic templates.
- Keep the report output stable for testing and demos.

V2:
- Add a local Player Style API route in the web app.
- Forward report generation requests to a local inference server.
- Keep template reports as fallback.
- Use prompt templates from `packages/prompts`.

Future inference server capabilities:
- `/infer`
- `/batch_infer`
- `/embed`
- `/rerank`
- `/healthz`
- `/metrics`
- caching
- batching
- model routing
- prompt templates
- latency monitoring

The long-term architecture:

```txt
Next.js Web App
  -> Player Style API
  -> Trait Scoring / Similarity Engine
  -> Retrieval Layer
  -> Local Mini Inference Server
  -> LLM Generated Scouting Report
  -> Player DNA Card
```

## GitHub Workflow

Use GitHub the same way as `mini-inference-server`:
- one focused task per branch
- one focused commit or small commit series per task
- open a PR for review before merging
- keep diffs small and reviewable
- include tests or explain why tests are not relevant
- update docs when behavior or setup changes
- do not mix unrelated refactors with feature work

Recommended branch names:
- `chore/repo-skeleton`
- `feat/matching-types`
- `data/initial-questionnaire`
- `data/initial-player-profiles`
- `feat/quiz-flow`
- `feat/result-card`
- `test/matching-sanity`

Recommended commit style:
- `chore: create repo skeleton`
- `feat: define player matching types`
- `data: add initial questionnaire`
- `feat: implement similarity scoring`
- `docs: add local setup instructions`

Do not push directly to `main` once the GitHub repository is active.

## Commands

Install dependencies:

```bash
npm install
```

Run the web app:

```bash
npm run dev
```

Run checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The repo uses npm workspaces because pnpm is not installed in the current local environment.

## Diff Rules

Before finishing any implementation task:

1. Run relevant tests.
2. Run typecheck and lint when available.
3. Show changed files.
4. Summarize design decisions.
5. Mention assumptions.
6. Mention skipped tests or known limitations.

## Current Roadmap

1. Repository skeleton and GitHub workflow files.
2. Next.js web app scaffold.
3. Shared player matching package and TypeScript types.
4. Initial questionnaire data.
5. Initial player profile data.
6. Trait vector builder.
7. Similarity scoring and top 4 blend.
8. Archetype and deterministic report template.
9. Quiz flow UI.
10. Player DNA Card result UI.
11. Restart and demo sample path.
12. Matching sanity tests.
13. README with setup, architecture, and roadmap.
14. Local inference server integration.
15. Embedding / retrieval / rerank experiments.
16. Observability and AI infra demo polish.

## First Minimal Tasks

Each task should be a concrete commit / diff:

1. `chore: create repo skeleton`
2. `chore: scaffold Next.js web app`
3. `feat: define player matching types and trait keys`
4. `data: add initial questionnaire`
5. `data: add initial player profiles`
6. `feat: implement trait vector builder`
7. `feat: implement similarity scoring`
8. `feat: implement archetype and report template`
9. `feat: build quiz flow`
10. `feat: build result card`
11. `feat: add restart and sample demo path`
12. `test: add matching sanity tests`
13. `docs: add local setup and architecture notes`

## Engineering Principles

- Keep implementation realistic and local-first.
- Prefer explicit data models over clever abstractions.
- Prefer simple deterministic scoring before ML.
- Keep the product loop visible at all times.
- Design files and commits so they can be explained in public writing.
- Treat the AI inference server as a later integration, not a V1 dependency.
- Preserve existing user changes.
- Avoid over-engineering until the MVP is working end to end.
