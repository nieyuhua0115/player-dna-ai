"use client";

import {
  buildUserStyleProfile,
  generatePlayerDNAResult,
  traitDefinitions,
  type AnswerMap,
  type PlayerDNAResult,
  type Question,
  type TraitKey,
  type TraitVector,
} from "@player-dna/player-matching";
import Link from "next/link";
import { useMemo, useState } from "react";
import { players } from "../data/players";
import { questions } from "../data/questions";

type StepState = "intro" | "quiz" | "result";

export default function Home() {
  const [step, setStep] = useState<StepState>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const currentQuestion = questions[questionIndex];
  const selectedOptionIds = answers[currentQuestion?.id] ?? [];
  const answeredCount = questions.filter((question) => answers[question.id]?.length).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const result = useMemo<PlayerDNAResult | null>(() => {
    if (step !== "result") {
      return null;
    }

    const userProfile = buildUserStyleProfile(questions, answers);
    return generatePlayerDNAResult(userProfile, players);
  }, [answers, step]);

  function startQuiz() {
    setStep("quiz");
    setQuestionIndex(0);
  }

  function restart() {
    setAnswers({});
    setQuestionIndex(0);
    setStep("intro");
  }

  function selectOption(question: Question, optionId: string) {
    setAnswers((previousAnswers) => {
      const current = previousAnswers[question.id] ?? [];
      const next =
        question.type === "multi"
          ? current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId]
          : [optionId];

      return {
        ...previousAnswers,
        [question.id]: next,
      };
    });
  }

  function goNext() {
    if (questionIndex === questions.length - 1) {
      setStep("result");
      return;
    }

    setQuestionIndex((index) => index + 1);
  }

  function goPrevious() {
    setQuestionIndex((index) => Math.max(0, index - 1));
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Football Style Matcher
            </p>
            <h1 className="mt-2 text-2xl font-semibold">PlayerDNA</h1>
          </div>
          <div className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-300">
            Local MVP
          </div>
        </header>

        {step === "intro" ? (
          <IntroScreen onStart={startQuiz} />
        ) : null}

        {step === "quiz" && currentQuestion ? (
          <QuizScreen
            currentIndex={questionIndex}
            progress={progress}
            question={currentQuestion}
            selectedOptionIds={selectedOptionIds}
            totalQuestions={questions.length}
            onBack={goPrevious}
            onNext={goNext}
            onRestart={restart}
            onSelect={selectOption}
          />
        ) : null}

        {step === "result" && result ? (
          <ResultScreen
            answers={answers}
            result={result}
            totalQuestions={questions.length}
            onRestart={restart}
          />
        ) : null}
      </div>
    </main>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Choose your mode
        </p>
        <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white">
          PlayerDNA / Football Style Matcher
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          一个本地可跑的足球风格实验室。你可以测自己的球风 DNA，也可以测世界杯期间是哪种看球吗喽。
        </p>
      </div>

      <div className="grid gap-4">
        <button
          className="rounded-lg border border-emerald-300/35 bg-emerald-300 p-6 text-left text-slate-950 transition hover:bg-emerald-200"
          type="button"
          onClick={onStart}
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em]">
            PlayerDNA
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight">
            我踢球像哪个职业球员？
          </h3>
          <p className="mt-3 text-sm font-semibold text-slate-800">
            给踢球的人，测试你的球风 DNA。
          </p>
        </button>

        <Link
          className="rounded-lg border border-lime-300/35 bg-white/[0.05] p-6 text-left transition hover:border-lime-300/70 hover:bg-white/[0.08]"
          href="/fan-test"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-300">
            Football SBTI 毒舌版
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight text-white">
            世界杯犯病人格测试
          </h3>
          <p className="mt-3 text-sm font-semibold text-slate-300">
            给所有看球的人，测测你是哪种看球吗喽。
          </p>
        </Link>
      </div>
    </section>
  );
}

function QuizScreen({
  currentIndex,
  progress,
  question,
  selectedOptionIds,
  totalQuestions,
  onBack,
  onNext,
  onRestart,
  onSelect,
}: {
  currentIndex: number;
  progress: number;
  question: Question;
  selectedOptionIds: string[];
  totalQuestions: number;
  onBack: () => void;
  onNext: () => void;
  onRestart: () => void;
  onSelect: (question: Question, optionId: string) => void;
}) {
  const canContinue = selectedOptionIds.length > 0;

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            Question {currentIndex + 1} / {totalQuestions}
          </span>
          <span>{progress}% complete</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {question.category}
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">
          {question.text}
        </h2>

        {question.type === "multi" ? (
          <p className="mt-3 text-sm text-slate-400">可多选。</p>
        ) : null}

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionIds.includes(option.id);

            return (
              <button
                key={option.id}
                className={`rounded-md border px-4 py-4 text-left text-sm font-medium transition ${
                  isSelected
                    ? "border-emerald-300 bg-emerald-300 text-slate-950"
                    : "border-white/10 bg-slate-900/80 text-slate-200 hover:border-emerald-300/70"
                }`}
                type="button"
                onClick={() => onSelect(question, option.id)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30"
          type="button"
          onClick={onRestart}
        >
          重新开始
        </button>
        <div className="flex gap-3">
          <button
            className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentIndex === 0}
            type="button"
            onClick={onBack}
          >
            上一题
          </button>
          <button
            className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!canContinue}
            type="button"
            onClick={onNext}
          >
            {currentIndex === totalQuestions - 1 ? "查看结果" : "下一题"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultScreen({
  answers,
  result,
  totalQuestions,
  onRestart,
}: {
  answers: AnswerMap;
  result: PlayerDNAResult;
  totalQuestions: number;
  onRestart: () => void;
}) {
  const answeredCount = Object.values(answers).filter((answer) => answer.length > 0).length;
  const userProfile = buildUserStyleProfile(questions, answers);
  const topTraits = getTopTraits(userProfile.traits, 8);

  return (
    <section className="grid flex-1 gap-6 py-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg border border-emerald-300/30 bg-emerald-300 p-6 text-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.18em]">
          Player DNA Card
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight">
          {result.topMatch.player.name}
        </h2>
        <p className="mt-2 text-lg font-semibold">{result.archetype}</p>
        <p className="mt-5 text-sm leading-7 text-slate-800">
          Based on {answeredCount} / {totalQuestions} answers. Deterministic
          local matching, no external API.
        </p>

        <div className="mt-6 space-y-3">
          {result.matches.map((match) => (
            <div key={match.player.id}>
              <div className="flex justify-between gap-4 text-sm font-semibold">
                <span>{match.player.name}</span>
                <span>{match.percentage}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-950/15">
                <div
                  className="h-full rounded-full bg-slate-950"
                  style={{ width: `${match.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-7 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          type="button"
          onClick={onRestart}
        >
          再测一次
        </button>
      </div>

      <div className="grid gap-6">
        <Panel title="Scouting report">
          <p className="text-sm leading-7 text-slate-300">{result.scoutingReport}</p>
        </Panel>

        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Strengths">
            <List items={result.strengths} />
          </Panel>
          <Panel title="Development areas">
            <List items={result.developmentAreas} />
          </Panel>
        </div>

        <Panel title="Tactical fit">
          <List items={result.tacticalFit} />
        </Panel>

        <Panel title="Trait snapshot">
          <div className="grid gap-3 sm:grid-cols-2">
            {topTraits.map(({ key, label, value }) => (
              <div key={key}>
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-300"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}

function Panel({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-6 text-slate-300">
      {items.map((item) => (
        <li key={item} className="border-l border-emerald-300/50 pl-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

function getTopTraits(traits: TraitVector, count: number) {
  const labels = Object.fromEntries(
    traitDefinitions.map((trait) => [trait.key, trait.label]),
  ) as Record<TraitKey, string>;

  return Object.entries(traits)
    .map(([key, value]) => ({
      key: key as TraitKey,
      label: labels[key as TraitKey],
      value,
    }))
    .sort((left, right) => right.value - left.value)
    .slice(0, count);
}
