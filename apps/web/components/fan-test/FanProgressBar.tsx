type FanProgressBarProps = {
  current: number;
  total: number;
};

export function FanProgressBar({ current, total }: FanProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>
          Question {current} / {total}
        </span>
        <span>{percent}% complete</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-lime-300 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
