import type { NationalTeamBias } from "../../data/fan-test/types";

type NationalTeamBiasCardProps = {
  team: NationalTeamBias;
};

export function NationalTeamBiasCard({ team }: NationalTeamBiasCardProps) {
  return (
    <section className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
        你的国家队滤镜
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">{team.name}</h2>
          <p className="mt-1 text-lg font-semibold text-cyan-100">
            {team.roastTitle}
          </p>
        </div>
        <span className="rounded-md border border-cyan-200/30 px-3 py-2 text-xs font-semibold text-cyan-100">
          {team.warningLabel}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-200">{team.roastDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {team.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-md bg-cyan-200/15 px-3 py-1 text-xs font-semibold text-cyan-100"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}
