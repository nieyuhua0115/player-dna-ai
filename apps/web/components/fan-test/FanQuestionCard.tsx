import type { FanQuestion } from "../../data/fan-test/types";

type FanQuestionCardProps = {
  question: FanQuestion;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
};

export function FanQuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: FanQuestionCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/20 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime-300">
        Football SBTI
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">
        {question.text}
      </h2>
      {question.subtitle ? (
        <p className="mt-2 text-sm leading-6 text-slate-400">{question.subtitle}</p>
      ) : null}

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              className={`rounded-md border px-4 py-4 text-left transition ${
                isSelected
                  ? "border-lime-300 bg-lime-300 text-slate-950"
                  : "border-white/10 bg-slate-950/70 text-slate-200 hover:border-lime-300/70"
              }`}
              type="button"
              onClick={() => onSelect(option.id)}
            >
              <span className="block text-sm font-semibold">{option.label}</span>
              {option.description ? (
                <span className="mt-1 block text-xs opacity-80">
                  {option.description}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
