import type { FanTestResult } from "../../data/fan-test/types";

type AxisBreakdownProps = {
  axisBreakdown: FanTestResult["axisBreakdown"];
};

export function AxisBreakdown({ axisBreakdown }: AxisBreakdownProps) {
  const rows = [
    { label: "情绪", value: axisBreakdown.emotion },
    { label: "审美", value: axisBreakdown.aesthetic },
    { label: "表达", value: axisBreakdown.expression },
    { label: "站队", value: axisBreakdown.loyalty },
  ];

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-lime-300">
        Axis breakdown
      </h2>
      <div className="mt-5 space-y-5">
        {rows.map(({ label, value }) => (
          <div key={label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-white">{label}</span>
              <span className="text-slate-300">
                {value.leftLabel} {value.leftPercent}% vs {value.rightLabel}{" "}
                {value.rightPercent}%
              </span>
            </div>
            <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-lime-300"
                style={{ width: `${value.leftPercent}%` }}
              />
              <div
                className="h-full bg-cyan-300"
                style={{ width: `${value.rightPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
