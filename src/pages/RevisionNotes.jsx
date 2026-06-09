import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Atom, Microscope, Calculator, Waves, ChevronRight } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { SUBJECTS } from "@/lib/papers";

const BOARDS_DISPLAY = [
  { id: "edexcel", name: "Pearson Edexcel", disabled: false },
  { id: "cambridge", name: "Cambridge", disabled: true },
];

const LEVELS_DISPLAY = [
  { id: "igcse", name: "IGCSE", description: "International General Certificate of Secondary Education" },
  { id: "as", name: "AS Level", description: "Advanced Subsidiary Level" },
  { id: "a", name: "A Level", description: "Advanced Level" },
];

const SUBJECT_ICONS = {
  biology: Microscope,
  chemistry: Atom,
  physics: Waves,
  maths: Calculator,
};

const SUBJECT_COLORS = {
  biology: { bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-800", icon: "bg-emerald-500", text: "text-emerald-700 dark:text-emerald-400", hover: "hover:border-emerald-400 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30" },
  chemistry: { bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800", icon: "bg-blue-500", text: "text-blue-700 dark:text-blue-400", hover: "hover:border-blue-400 hover:shadow-blue-100 dark:hover:shadow-blue-900/30" },
  physics: { bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-200 dark:border-violet-800", icon: "bg-violet-500", text: "text-violet-700 dark:text-violet-400", hover: "hover:border-violet-400 hover:shadow-violet-100 dark:hover:shadow-violet-900/30" },
  maths: { bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-200 dark:border-amber-800", icon: "bg-amber-500", text: "text-amber-700 dark:text-amber-400", hover: "hover:border-amber-400 hover:shadow-amber-100 dark:hover:shadow-amber-900/30" },
};

const AVAILABLE_NOTES = new Set(["igcse-biology", "igcse-chemistry", "igcse-physics", "igcse-maths", "as-maths", "as-biology", "as-chemistry", "as-physics"]);

export default function RevisionNotes() {
  const [boardId, setBoardId] = useState("edexcel");
  const [activeLevel, setActiveLevel] = useState("igcse");

  const board = BOARDS_DISPLAY.find((b) => b.id === boardId);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-warm px-8 py-10 sm:px-14 sm:py-14">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-warm opacity-20 blur-3xl" />
          <div aria-hidden className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-gradient-sun opacity-15 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                Revision Notes
              </div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Study <span className="text-gradient-warm">smarter.</span>
              </h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-xl">
                Concise, exam-ready notes for every subject and level — written the way your brain actually remembers things.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Exam board</p>
              <div className="flex gap-2">
                {BOARDS_DISPLAY.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => !b.disabled && setBoardId(b.id)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold border-2 transition-all ${
                      boardId === b.id && !b.disabled
                        ? "bg-gradient-warm text-white border-transparent shadow-warm"
                        : b.disabled
                        ? "border-border text-muted-foreground opacity-50 cursor-not-allowed"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    {b.name}
                    {b.disabled && <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">Soon</span>}
                  </button>
                ))}
              </div>
            </div>
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
        <p className="mt-3 text-sm text-muted-foreground pl-1">
          {LEVELS_DISPLAY.find((l) => l.id === activeLevel)?.description}
        </p>
      </section>

      {/* Subject grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {SUBJECTS.map((subject) => {
            const colors = SUBJECT_COLORS[subject.id] || SUBJECT_COLORS.maths;
            const Icon = SUBJECT_ICONS[subject.id] || BookOpen;
            const hasNotes = AVAILABLE_NOTES.has(`${activeLevel}-${subject.id}`);
            const isDisabled = board?.disabled || !hasNotes;
            const href = `/notes/${activeLevel}/${subject.id}`;

            const card = (
              <div
                className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 ${colors.bg} ${colors.border} ${colors.hover} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colors.icon} text-white shadow-md mb-5`}>
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black tracking-tight text-foreground">{subject.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">{subject.blurb}</p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  {isDisabled ? (
                    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Coming soon
                    </span>
                  ) : (
                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.text}`}>
                      Open notes
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              </div>
            );

            return isDisabled ? (
              <div key={subject.id}>{card}</div>
            ) : (
              <Link key={subject.id} to={href}>{card}</Link>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-3 gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft text-center">
          {[
            { label: "Subjects covered", value: "4" },
            { label: "Units of content", value: "30+" },
            { label: "Exam-ready tips", value: "100+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-gradient-warm">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SophionFooter />
    </div>
  );
}