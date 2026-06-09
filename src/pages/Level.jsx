import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { SubjectCard } from "@/components/subjects/SubjectCard";
import { SUBJECTS, getLevel } from "@/lib/papers";

export default function Level() {
  const { level: levelId } = useParams();
  const level = getLevel(levelId);

  if (!level) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Level not found</h1>
          <Link to="/" className="text-primary underline mt-4 inline-block">Go home</Link>
        </div>
      </div>
    );
  }

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

        <div className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Level</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{level.name}</h1>
            <p className="mt-1 text-muted-foreground">{level.tagline}</p>
          </div>
          <Link
            to="/subjects"
            className="inline-flex items-center gap-2 self-start rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-warm"
          >
            <BookOpen className="h-4 w-4" /> {level.name} past papers
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUBJECTS.map((s) => (
            <SubjectCard key={s.id} subject={s} level={level.id} to="level-subject" />
          ))}
        </div>
      </section>
      <SophionFooter />
    </div>
  );
}