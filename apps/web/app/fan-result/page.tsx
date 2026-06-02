"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AxisBreakdown } from "../../components/fan-test/AxisBreakdown";
import { FanPersonaCard } from "../../components/fan-test/FanPersonaCard";
import { NationalTeamBiasCard } from "../../components/fan-test/NationalTeamBiasCard";
import type { FanTestResult } from "../../data/fan-test/types";
import { calculateFanPersona } from "../../lib/fan-test/scoring";
import {
  fanTestStorageKey,
  type FanTestStoredPayload,
} from "../../lib/fan-test/storage";

type CopyState = "idle" | "copied" | "unsupported";

export default function FanResultPage() {
  const [payload, setPayload] = useState<FanTestStoredPayload | null>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    const storedValue = window.localStorage.getItem(fanTestStorageKey);

    if (!storedValue) {
      return;
    }

    try {
      setPayload(JSON.parse(storedValue) as FanTestStoredPayload);
    } catch {
      window.localStorage.removeItem(fanTestStorageKey);
    }
  }, []);

  const result = useMemo<FanTestResult | null>(() => {
    if (!payload) {
      return null;
    }

    return calculateFanPersona(payload);
  }, [payload]);

  async function copyFriendCircleCopy() {
    if (!result) {
      return;
    }

    const text = `${result.persona.friendCircleCopy}\n${result.shareLine}`;

    if (!navigator.clipboard) {
      setCopyState("unsupported");
      return;
    }

    await navigator.clipboard.writeText(text);
    setCopyState("copied");
  }

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-6 text-white sm:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-300">
            Football SBTI
          </p>
          <h1 className="mt-4 text-4xl font-semibold">还没有测试结果</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            localStorage 里没有找到已完成的世界杯犯病人格测试。先做完 16 道题，再回来截图发疯。
          </p>
          <Link
            className="mt-8 rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
            href="/fan-test"
          >
            去测试
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
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
            {result.code}
          </div>
        </header>

        <div className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <FanPersonaCard result={result} />
            <CopyPanel
              copyState={copyState}
              friendCircleCopy={result.persona.friendCircleCopy}
              shareLine={result.shareLine}
              onCopy={copyFriendCircleCopy}
            />
          </div>

          <div className="space-y-6">
            <NationalTeamBiasCard team={result.selectedNationalTeam} />
            <AxisBreakdown axisBreakdown={result.axisBreakdown} />
            <ActionPanel />
          </div>
        </div>
      </div>
    </main>
  );
}

function CopyPanel({
  copyState,
  friendCircleCopy,
  shareLine,
  onCopy,
}: {
  copyState: CopyState;
  friendCircleCopy: string;
  shareLine: string;
  onCopy: () => void;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-lime-300">
        朋友圈文案
      </h2>
      <p className="mt-4 rounded-md bg-slate-950/70 p-4 text-sm leading-7 text-slate-200">
        {friendCircleCopy}
      </p>

      <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-lime-300">
        毒舌总结
      </h2>
      <p className="mt-4 rounded-md bg-slate-950/70 p-4 text-sm leading-7 text-slate-200">
        {shareLine}
      </p>

      <button
        className="mt-5 rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
        type="button"
        onClick={onCopy}
      >
        复制朋友圈文案
      </button>
      {copyState === "copied" ? (
        <p className="mt-3 text-sm text-lime-200">已复制。</p>
      ) : null}
      {copyState === "unsupported" ? (
        <p className="mt-3 text-sm text-slate-300">
          当前浏览器不支持自动复制，直接选中文案复制即可。
        </p>
      ) : null}
    </section>
  );
}

function ActionPanel() {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
      <div className="flex flex-wrap gap-3">
        <Link
          className="rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
          href="/fan-test"
        >
          重新测试
        </Link>
        <Link
          className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30"
          href="/"
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}
