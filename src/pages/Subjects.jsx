import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { LEVELS, SUBJECTS } from "@/lib/papers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BOARDS_DISPLAY = [
  { id: "edexcel", name: "Pearson Edexcel", tagline: "Pearson Edexcel International past papers.", disabled: false },
  { id: "cambridge", name: "Cambridge", tagline: "Cambridge Assessment International past papers.", disabled: true },
];

export default function Subjects() {
  const [boardId, setBoardId] = useState("edexcel");
  const board = BOARDS_DISPLAY.find((b) => b.id === boardId);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-foreground/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Choose your level</h1>
          <p className="mt-2 text-muted-foreground">Pick a level, then a subject — the Big Four across IGCSE, AS, and A Levels.</p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md flex-1">
            <label htmlFor="board-select" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Exam board
            </label>
            <Select value={boardId} onValueChange={setBoardId}>
              <SelectTrigger
                id="board-select"
                className="mt-2 h-12 rounded-xl border-2 border-foreground/20 bg-cream/80 dark:bg-card text-base font-semibold"
              >
                <SelectValue placeholder="Select exam board" />
              </SelectTrigger>
              <SelectContent>
                {BOARDS_DISPLAY.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                    {b.disabled ? " — Coming soon" : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="mt-2 text-sm text-muted-foreground">{board?.tagline}</p>
          </div>
          {board?.disabled && (
            <span className="self-start rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:self-end">
              Coming soon
            </span>
          )}
        </div>

        {LEVELS.map((level) => (
          <div key={level.id} className="mt-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Level</p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{level.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{level.tagline}</p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SUBJECTS.map((s) => (
                <SubjectCard
                  key={`${boardId}-${level.id}-${s.id}`}
                  subject={s}
                  level={level.id}
                  to="papers"
                  disabled={board?.disabled}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <SophionFooter />
    </div>
  );
}