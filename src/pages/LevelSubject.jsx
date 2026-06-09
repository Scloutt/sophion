import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { SubjectIcon } from "@/components/subjects/SubjectIcon";
import { getLevel, getSubject } from "@/lib/papers";

export default function LevelSubject() {
  const { level: levelId, subject: subjectId } = useParams();
  const level = getLevel(levelId);
  const subject = getSubject(subjectId);

  if (!level || !subject) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Not found</h1>
          <Link to="/" className="text-primary underline mt-4 inline-block">Go home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />
      <div className="mx-auto max-w-4xl px-6 py-14">
        <Link
          to={`/levels/${level.id}`}
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-foreground/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {level.name}
        </Link>

        <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center shadow-warm animate-fade-up sm:p-16">
          <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
          <div aria-hidden className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent/40 blur-2xl" />

          <div className={`relative mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${subject.accent} text-white shadow-warm animate-float`}>
            <SubjectIcon icon={subject.icon} className="h-10 w-10" />
          </div>

          <p className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-cream/80 dark:bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> {level.name} · {subject.name}
          </p>

          <h1 className="relative mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Topic Questions — <span className="text-gradient-warm">COMING SOON</span>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            We're crafting warm, focused practice questions for {level.name} {subject.name}. Until then,
            jump into past papers and keep the streak alive.
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/subjects"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-warm px-6 py-3 text-sm font-semibold text-white shadow-warm transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              {subject.name} past papers
            </Link>
            <Link
              to={`/levels/${level.id}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-soft transition-all hover:-translate-y-0.5"
            >
              Back to {level.name}
            </Link>
          </div>
        </div>
      </div>
      <SophionFooter />
    </div>
  );
}