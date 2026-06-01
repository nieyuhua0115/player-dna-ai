const nextSteps = [
  "Questionnaire schema",
  "Trait vector builder",
  "Similarity scoring",
  "Player DNA card",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-pitch-700">
              Football Style Matcher
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-950">
              PlayerDNA
            </h1>
          </div>
          <div className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
            Local MVP
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              V1 foundation
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-slate-950">
              Match your football style to professional player profiles.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              This scaffold is the base for the questionnaire, trait scoring
              engine, deterministic similarity matching, and final Player DNA
              card.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-md bg-pitch-700 px-4 py-3 text-sm font-semibold text-white">
                Next.js
              </span>
              <span className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700">
                TypeScript
              </span>
              <span className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Upcoming product loop
            </h3>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
