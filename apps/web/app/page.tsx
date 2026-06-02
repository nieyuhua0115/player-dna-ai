"use client";

import {
  type TraitKey,
  type TraitVector,
} from "@player-dna/player-matching";
import Link from "next/link";
import { useMemo, useState } from "react";
import { players } from "../data/players";
import { commonQuestions, getQuestionsForRole } from "../data/questions";
import { localizeQuestion, uiCopy } from "../lib/i18n";
import { buildUserTraits } from "../lib/scoring/buildUserTraits";
import { matchPlayers } from "../lib/scoring/matchPlayers";
import {
  getRoleLabels,
  getTraitLabels,
  type Language,
} from "../lib/scoring/traitCopy";
import type {
  PlayerDNAAnswerMap,
  PlayerDNAQuestion,
  PlayerDNAResult,
  RoleFamily,
  UserTraitProfile,
} from "../lib/scoring/types";

type StepState = "intro" | "quiz" | "result";

export default function Home() {
  const [step, setStep] = useState<StepState>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<PlayerDNAAnswerMap>({});
  const [language, setLanguage] = useState<Language>("zh");

  const selectedRole = getSelectedRole(answers);
  const questions = useMemo(() => getQuestionsForRole(selectedRole), [selectedRole]);
  const currentQuestion = questions[questionIndex];
  const localizedQuestion = currentQuestion ? localizeQuestion(currentQuestion, language) : undefined;
  const selectedOptionValues = answers[currentQuestion?.id] ?? [];
  const answeredCount = questions.filter((question) => answers[question.id]?.length).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const copy = uiCopy[language];
  const roleLabels = getRoleLabels(language);

  const userProfile = useMemo<UserTraitProfile | null>(() => {
    if (!selectedRole) {
      return null;
    }

    return buildUserTraits(questions, answers, selectedRole);
  }, [answers, questions, selectedRole]);

  const result = useMemo<PlayerDNAResult | null>(() => {
    if (step !== "result" || !userProfile) {
      return null;
    }

    return matchPlayers(userProfile, players, language);
  }, [language, step, userProfile]);

  function startQuiz() {
    setStep("quiz");
    setQuestionIndex(0);
  }

  function restart() {
    setAnswers({});
    setQuestionIndex(0);
    setStep("intro");
  }

  function selectOption(question: PlayerDNAQuestion, optionValue: string) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [question.id]: [optionValue],
    }));
  }

  function goNext() {
    if (!currentQuestion) {
      return;
    }

    const nextIndex = questionIndex + 1;

    if (nextIndex >= questions.length) {
      if (selectedRole) {
        setStep("result");
      }
      return;
    }

    setQuestionIndex(nextIndex);
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
              {copy.productLabel}
            </p>
            <h1 className="mt-2 text-2xl font-semibold">PlayerDNA</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/70"
              type="button"
              onClick={() => setLanguage((current) => current === "zh" ? "en" : "zh")}
            >
              {copy.languageToggle}
            </button>
            <div className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-300">
              {copy.localMvp}
            </div>
          </div>
        </header>

        {step === "intro" ? (
          <IntroScreen copy={copy} onStart={startQuiz} />
        ) : null}

        {step === "quiz" && currentQuestion && localizedQuestion ? (
          <QuizScreen
            copy={copy}
            currentIndex={questionIndex}
            language={language}
            progress={progress}
            question={localizedQuestion}
            roleFamily={selectedRole}
            roleLabels={roleLabels}
            selectedOptionValues={selectedOptionValues}
            totalQuestions={questions.length}
            onBack={goPrevious}
            onNext={goNext}
            onRestart={restart}
            onSelect={selectOption}
          />
        ) : null}

        {step === "result" && result && userProfile ? (
          <ResultScreen
            answers={answers}
            copy={copy}
            language={language}
            result={result}
            roleFamily={userProfile.roleFamily}
            roleLabels={roleLabels}
            totalQuestions={questions.length}
            userProfile={userProfile}
            onRestart={restart}
          />
        ) : null}
      </div>
    </main>
  );
}

function IntroScreen({
  copy,
  onStart,
}: {
  copy: (typeof uiCopy)[Language];
  onStart: () => void;
}) {
  return (
    <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          {copy.chooseMode}
        </p>
        <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white">
          {copy.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {copy.intro}
        </p>
      </div>

      <div className="grid gap-4">
        <button
          className="rounded-lg border border-emerald-300/35 bg-emerald-300 p-6 text-left text-slate-950 transition hover:bg-emerald-200"
          type="button"
          onClick={onStart}
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em]">
            {copy.playerDnaMode}
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight">
            {copy.playerDnaTitle}
          </h3>
          <p className="mt-3 text-sm font-semibold text-slate-800">
            {copy.playerDnaDesc}
          </p>
        </button>

        <Link
          className="rounded-lg border border-lime-300/35 bg-white/[0.05] p-6 text-left transition hover:border-lime-300/70 hover:bg-white/[0.08]"
          href="/fan-test"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-300">
            {copy.fanMode}
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight text-white">
            {copy.fanTitle}
          </h3>
          <p className="mt-3 text-sm font-semibold text-slate-300">
            {copy.fanDesc}
          </p>
        </Link>
      </div>
    </section>
  );
}

function QuizScreen({
  copy,
  currentIndex,
  language,
  progress,
  question,
  roleFamily,
  roleLabels,
  selectedOptionValues,
  totalQuestions,
  onBack,
  onNext,
  onRestart,
  onSelect,
}: {
  copy: (typeof uiCopy)[Language];
  currentIndex: number;
  language: Language;
  progress: number;
  question: PlayerDNAQuestion;
  roleFamily?: RoleFamily;
  roleLabels: Record<RoleFamily, string>;
  selectedOptionValues: string[];
  totalQuestions: number;
  onBack: () => void;
  onNext: () => void;
  onRestart: () => void;
  onSelect: (question: PlayerDNAQuestion, optionValue: string) => void;
}) {
  const canContinue = selectedOptionValues.length > 0;
  const stageLabel = question.role === "common"
    ? copy.commonProfile
    : language === "zh"
      ? `${roleLabels[question.role]}${copy.scenarioSuffix}`
      : `${roleLabels[question.role]} ${copy.scenarioSuffix}`;

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            {language === "zh"
              ? `${copy.question} ${currentIndex + 1} ${copy.ofQuestions} ${totalQuestions} ${copy.questionsUnit}`
              : `${copy.question} ${currentIndex + 1} ${copy.ofQuestions} ${totalQuestions}`}
          </span>
          <span>{language === "zh" ? `${copy.progress} ${progress}%` : `${progress}% ${copy.progress}`}</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {stageLabel}
          </p>
          <p className="text-sm text-slate-400">
            {roleFamily
              ? roleLabels[roleFamily]
              : language === "zh"
                ? `${copy.commonFirst} ${commonQuestions.length} ${copy.commonFirstSuffix}`
                : `${commonQuestions.length} ${copy.commonFirstSuffix}`}
          </p>
        </div>
        <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">
          {question.text}
        </h2>
        {question.description ? (
          <p className="mt-3 text-sm leading-6 text-slate-400">{question.description}</p>
        ) : null}

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionValues.includes(option.value);

            return (
              <button
                key={option.value}
                className={`rounded-md border px-4 py-4 text-left text-sm font-medium transition ${
                  isSelected
                    ? "border-emerald-300 bg-emerald-300 text-slate-950"
                    : "border-white/10 bg-slate-900/80 text-slate-200 hover:border-emerald-300/70"
                }`}
                type="button"
                onClick={() => onSelect(question, option.value)}
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
          {copy.restart}
        </button>
        <div className="flex gap-3">
          <button
            className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentIndex === 0}
            type="button"
            onClick={onBack}
          >
            {copy.previous}
          </button>
          <button
            className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!canContinue}
            type="button"
            onClick={onNext}
          >
            {currentIndex === totalQuestions - 1 ? copy.viewResult : copy.next}
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultScreen({
  answers,
  copy,
  language,
  result,
  roleFamily,
  roleLabels,
  totalQuestions,
  userProfile,
  onRestart,
}: {
  answers: PlayerDNAAnswerMap;
  copy: (typeof uiCopy)[Language];
  language: Language;
  result: PlayerDNAResult;
  roleFamily: RoleFamily;
  roleLabels: Record<RoleFamily, string>;
  totalQuestions: number;
  userProfile: UserTraitProfile;
  onRestart: () => void;
}) {
  const answeredCount = Object.values(answers).filter((answer) => answer.length > 0).length;
  const topTraits = getTopTraits(userProfile.traits, 8, language);

  return (
    <section className="grid flex-1 gap-6 py-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg border border-emerald-300/30 bg-emerald-300 p-6 text-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.18em]">
          {copy.cardTitle}
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight">
          {result.topMatch.player.name}
        </h2>
        <p className="mt-2 text-lg font-semibold">{result.userArchetype}</p>
        <p className="mt-5 text-sm leading-7 text-slate-800">
          {language === "zh"
            ? `${copy.basedOnPrefix} ${answeredCount} / ${totalQuestions} ${copy.basedOnMiddle}${roleLabels[roleFamily]}${copy.basedOnSuffix}`
            : `${copy.basedOnPrefix} ${answeredCount} ${copy.basedOnMiddle} ${totalQuestions} ${copy.basedOnSuffix}`}
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
          {copy.retake}
        </button>
      </div>

      <div className="grid gap-6">
        <Panel title={copy.report}>
          <p className="text-sm leading-7 text-slate-300">{result.report}</p>
        </Panel>

        <Panel title={copy.why}>
          <div className="grid gap-4">
            {result.matches.map((match) => (
              <div key={match.player.id} className="rounded-md border border-white/10 bg-slate-900/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-white">{match.player.name}</p>
                  <p className="text-sm text-emerald-300">
                    {language === "zh"
                      ? `${copy.matchScore} ${Math.round(match.finalScore * 100)}`
                      : `${Math.round(match.finalScore * 100)} ${copy.matchScore}`}
                  </p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-slate-300">
                  {match.explanations.map((explanation) => (
                    <div key={`${match.player.id}-${explanation.label}`} className="flex justify-between gap-4">
                      <span className="text-slate-500">{explanation.label}</span>
                      <span className="text-right">{explanation.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6 md:grid-cols-2">
          <Panel title={copy.strengths}>
            <List items={result.strengths} />
          </Panel>
          <Panel title={copy.development}>
            <List items={result.developmentAreas} />
          </Panel>
        </div>

        <Panel title={copy.tacticalFit}>
          <List items={result.tacticalFit} />
        </Panel>

        <Panel title={copy.traitSnapshot}>
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

function getTopTraits(traits: TraitVector, count: number, language: Language) {
  const labels = getTraitLabels(language);

  return Object.entries(traits)
    .map(([key, value]) => ({
      key: key as TraitKey,
      label: labels[key as TraitKey],
      value,
    }))
    .sort((left, right) => right.value - left.value)
    .slice(0, count);
}

function getSelectedRole(answers: PlayerDNAAnswerMap): RoleFamily | undefined {
  const value = answers.primary_role?.[0];

  if (
    value === "winger" ||
    value === "fullback" ||
    value === "defender" ||
    value === "forward" ||
    value === "midfielder" ||
    value === "goalkeeper"
  ) {
    return value;
  }

  return undefined;
}
