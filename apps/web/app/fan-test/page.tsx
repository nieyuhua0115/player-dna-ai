"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FanProgressBar } from "../../components/fan-test/FanProgressBar";
import { FanQuestionCard } from "../../components/fan-test/FanQuestionCard";
import { fanQuestions } from "../../data/fan-test/questions";
import { nationalTeams } from "../../data/fan-test/nationalTeams";
import {
  fanTestStorageKey,
  type FanTestStoredPayload,
} from "../../lib/fan-test/storage";

type FanTestStep = "intro" | "team" | "quiz";

export default function FanTestPage() {
  const router = useRouter();
  const [step, setStep] = useState<FanTestStep>("intro");
  const [selectedNationalTeamId, setSelectedNationalTeamId] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = fanQuestions[questionIndex];
  const selectedOptionId = answers[currentQuestion?.id];
  const canContinue =
    step === "team" ? Boolean(selectedNationalTeamId) : Boolean(selectedOptionId);

  function startQuiz() {
    setStep("team");
  }

  function restart() {
    setStep("intro");
    setSelectedNationalTeamId("");
    setQuestionIndex(0);
    setAnswers({});
  }

  function selectOption(optionId: string) {
    if (!currentQuestion) {
      return;
    }

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionId,
    }));
  }

  function goPrevious() {
    if (step === "team") {
      setStep("intro");
      return;
    }

    if (questionIndex === 0) {
      setStep("team");
      return;
    }

    setQuestionIndex((index) => Math.max(0, index - 1));
  }

  function goNext() {
    if (step === "team") {
      setStep("quiz");
      setQuestionIndex(0);
      return;
    }

    if (!currentQuestion || !selectedOptionId) {
      return;
    }

    if (questionIndex === fanQuestions.length - 1) {
      const payload: FanTestStoredPayload = {
        selectedNationalTeamId,
        answers,
      };

      window.localStorage.setItem(fanTestStorageKey, JSON.stringify(payload));
      router.push("/fan-result");
      return;
    }

    setQuestionIndex((index) => index + 1);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link href="/" className="group">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
              Football SBTI
            </p>
            <h1 className="mt-2 text-2xl font-semibold group-hover:text-lime-200">
              世界杯犯病人格测试
            </h1>
          </Link>
          <div className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-300">
            Local MVP
          </div>
        </header>

        {step === "intro" ? <IntroStep onStart={startQuiz} /> : null}

        {step === "team" ? (
          <TeamStep
            selectedNationalTeamId={selectedNationalTeamId}
            onSelect={setSelectedNationalTeamId}
            onBack={goPrevious}
            onNext={goNext}
          />
        ) : null}

        {step === "quiz" && currentQuestion ? (
          <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col py-8">
            <FanProgressBar
              current={questionIndex + 1}
              total={fanQuestions.length}
            />
            <div className="mt-8">
              <FanQuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                onSelect={selectOption}
              />
            </div>
            <NavControls
              canContinue={canContinue}
              isFinal={questionIndex === fanQuestions.length - 1}
              onBack={goPrevious}
              onNext={goNext}
              onRestart={restart}
            />
          </section>
        ) : null}
      </div>
    </main>
  );
}

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          World Cup Fan Persona Test
        </p>
        <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white">
          世界杯快来了。
        </h2>
        <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-slate-300">
          <p>有人看战术，有人看球星；</p>
          <p>有人看命运，有人看帅哥；</p>
          <p>有人四年不看球，一到世界杯突然开始指挥国家队。</p>
        </div>
        <p className="mt-6 text-xl font-semibold text-lime-200">
          16 道题，测出你的世界杯犯病人格。
        </p>
        <button
          className="mt-8 rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
          type="button"
          onClick={onStart}
        >
          开始测试
        </button>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
        <h3 className="text-lg font-semibold text-white">本测试纯属娱乐。</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          如有冒犯，说明测得挺准。结果只调侃看球行为和球迷心态，不攻击国家、民族、地域或现实身份。
        </p>
      </div>
    </section>
  );
}

function TeamStep({
  selectedNationalTeamId,
  onSelect,
  onBack,
  onNext,
}: {
  selectedNationalTeamId: string;
  onSelect: (teamId: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col py-8">
      <div className="rounded-lg border border-white/10 bg-white/[0.05] p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
          Part 1
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">
          你世界杯最容易代入/最有感情的国家队是？
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          这个答案不参与 16 型人格计算，只生成你的国家队滤镜诊断。
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nationalTeams.map((team) => {
            const isSelected = selectedNationalTeamId === team.id;

            return (
              <button
                key={team.id}
                className={`rounded-md border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-cyan-200 bg-cyan-200 text-slate-950"
                    : "border-white/10 bg-slate-950/70 text-slate-200 hover:border-cyan-200/70"
                }`}
                type="button"
                onClick={() => onSelect(team.id)}
              >
                <span className="block text-sm font-semibold">{team.label}</span>
                <span className="mt-1 block text-xs opacity-80">
                  {team.roastTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <NavControls
        canContinue={Boolean(selectedNationalTeamId)}
        isFinal={false}
        onBack={onBack}
        onNext={onNext}
      />
    </section>
  );
}

function NavControls({
  canContinue,
  isFinal,
  onBack,
  onNext,
  onRestart,
}: {
  canContinue: boolean;
  isFinal: boolean;
  onBack: () => void;
  onNext: () => void;
  onRestart?: () => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      {onRestart ? (
        <button
          className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30"
          type="button"
          onClick={onRestart}
        >
          重新开始
        </button>
      ) : (
        <span />
      )}
      <div className="flex gap-3">
        <button
          className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30"
          type="button"
          onClick={onBack}
        >
          上一步
        </button>
        <button
          className="rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canContinue}
          type="button"
          onClick={onNext}
        >
          {isFinal ? "查看结果" : "下一步"}
        </button>
      </div>
    </div>
  );
}
