import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Microscope, Atom, Waves, Calculator, ChevronRight, BookMarked, FlaskConical, Zap, Pi } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { LEVELS, SUBJECTS } from "@/lib/papers";

const SUBJECT_CONFIG = {
  biology: {
    Icon: Microscope,
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    iconBg: "bg-emerald-500",
    text: "text-emerald-700 dark:text-emerald-400",
    hover: "hover:border-emerald-400 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30",
    tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  chemistry: {
    Icon: FlaskConical,
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-500",
    text: "text-blue-700 dark:text-blue-400",
    hover: "hover:border-blue-400 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
    tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  physics: {
    Icon: Zap,
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    iconBg: "bg-violet-500",
    text: "text-violet-700 dark:text-violet-400",
    hover: "hover:border-violet-400 hover:shadow-violet-100 dark:hover:shadow-violet-900/30",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  maths: {
    Icon: Pi,
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-400",
    hover: "hover:border-amber-400 hover:shadow-amber-100 dark:hover:shadow-amber-900/30",
    tag: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
};

const LEVELS_DISPLAY = [
  { id: "igcse", name: "IGCSE" },
  { id: "as", name: "AS Level" },
  { id: "a", name: "A Level" },
];

export default function TopicQuestions() {
  const [activeLevel, setActiveLevel] = useState("igcse");

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-warm px-8 py-10 sm:px-14 sm:py-14">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-warm opacity-20 blur-3xl" />
          <div aria-hidden className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-gradient-sun opacity-15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              <BookMarked className="h-3.5 w-3.5 text-primary" />
              Topic Questions
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Practice by <span className="text-gradient-warm">topic.</span>
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">
              Drill down into exactly what you need — curated questions organised by topic for every subject and level.
            </p>
          </div>
        </div>
      </section>

      {/* Level tabs */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="flex gap-2 p-1.5 rounded-2xl bg-card border border-border shadow-soft w-fit">
          {LEVELS_DISPLAY.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${
                activeLevel === lvl.id
                  ? "bg-gradient-warm text-white shadow-warm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {lvl.name}
            </button>
          ))}
        </div>
      </section>

      {/* Subject grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {SUBJECTS.map((subject) => {
            const cfg = SUBJECT_CONFIG[subject.id] || SUBJECT_CONFIG.maths;
            const { Icon } = cfg;

            return (
              <Link
                key={subject.id}
                to={`/topic-questions/coming-soon`}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 ${cfg.bg} ${cfg.border} ${cfg.hover} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              >
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${cfg.iconBg} text-white shadow-md mb-5`}>
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black tracking-tight text-foreground">{subject.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">{subject.blurb}</p>

                {/* Level badge */}
                <div className="mt-4 flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${cfg.tag}`}>
                    {LEVELS_DISPLAY.find(l => l.id === activeLevel)?.name}
                  </span>
                  <ChevronRight className={`h-4 w-4 ${cfg.text} transition-transform group-hover:translate-x-0.5`} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <SophionFooter />
    </div>
  );
}