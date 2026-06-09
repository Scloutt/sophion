import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Sparkles, Lightbulb, AlertTriangle, ChevronRight, Menu, X } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { getLevel, getSubject } from "@/lib/papers";

import { IGCSE_MATHS_NOTES } from "@/lib/notes-data";
import { IGCSE_CHEMISTRY_NOTES } from "@/lib/igcse-chemistry-notes";
import { IGCSE_PHYSICS_NOTES } from "@/lib/igcse-physics-notes";
import { IGCSE_BIOLOGY_NOTES } from "@/lib/igcse-biology-notes";
import { AS_MATHS_PURE_NOTES } from "@/lib/as-maths-pure-notes";
import { AS_MATHS_STATS_NOTES } from "@/lib/as-maths-stats-notes";
import { AS_MATHS_MECHANICS_NOTES } from "@/lib/as-maths-mechanics-notes";
import { AS_BIOLOGY_NOTES } from "@/lib/as-biology-notes";
import { AS_CHEMISTRY_NOTES } from "@/lib/as-chemistry-notes";
import { AS_PHYSICS_NOTES } from "@/lib/as-physics-notes";

function getNotes(levelId, subjectId, section) {
  if (levelId === "igcse" && subjectId === "maths") return IGCSE_MATHS_NOTES;
  if (levelId === "igcse" && subjectId === "chemistry") return IGCSE_CHEMISTRY_NOTES;
  if (levelId === "igcse" && subjectId === "physics") return IGCSE_PHYSICS_NOTES;
  if (levelId === "igcse" && subjectId === "biology") return IGCSE_BIOLOGY_NOTES;
  if (levelId === "as" && subjectId === "biology") return AS_BIOLOGY_NOTES;
  if (levelId === "as" && subjectId === "chemistry") return AS_CHEMISTRY_NOTES;
  if (levelId === "as" && subjectId === "physics") return AS_PHYSICS_NOTES;
  if (levelId === "as" && subjectId === "maths") {
    if (section === "stats") return AS_MATHS_STATS_NOTES;
    if (section === "mechanics") return AS_MATHS_MECHANICS_NOTES;
    return AS_MATHS_PURE_NOTES;
  }
  return undefined;
}

const UNIT_THEMES = [
  { grad: "from-red-400 to-red-600", ring: "#ef4444" },
  { grad: "from-amber-400 to-amber-600", ring: "#f59e0b" },
  { grad: "from-lime-400 to-lime-600", ring: "#84cc16" },
  { grad: "from-emerald-400 to-emerald-600", ring: "#10b981" },
  { grad: "from-cyan-400 to-cyan-600", ring: "#06b6d4" },
  { grad: "from-blue-400 to-blue-600", ring: "#3b82f6" },
  { grad: "from-violet-400 to-violet-600", ring: "#8b5cf6" },
  { grad: "from-pink-400 to-pink-600", ring: "#ec4899" },
];

const AS_MATHS_SECTIONS = [
  { id: "pure", label: "Pure Mathematics" },
  { id: "stats", label: "Statistics" },
  { id: "mechanics", label: "Mechanics" },
];

export default function NotesPage() {
  const { level: levelId, subject: subjectId } = useParams();
  const level = getLevel(levelId);
  const subject = getSubject(subjectId);
  const [mathsSection, setMathsSection] = React.useState("pure");

  if (!level || !subject) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <SophionHeader />
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h1 className="text-3xl font-black">Notes not found</h1>
          <p className="mt-3 text-muted-foreground">That combination doesn't exist.</p>
          <Link to="/revision-notes" className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-foreground/30 px-5 py-2.5 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to notes
          </Link>
        </section>
        <SophionFooter />
      </div>
    );
  }

  const isASMaths = levelId === "as" && subjectId === "maths";
  const doc = getNotes(levelId, subjectId, mathsSection);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/revision-notes"
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-foreground/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to revision notes
        </Link>

        {!doc ? (
          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center shadow-warm animate-fade-up sm:p-20">
            <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
            <p className="relative inline-flex items-center gap-2 rounded-full border border-border bg-cream/80 dark:bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> {level.name} {subject.name}
            </p>
            <h1 className="relative mt-6 text-5xl font-black tracking-tight sm:text-7xl">
              <span className="text-gradient-warm">COMING SOON</span>
            </h1>
            <p className="relative mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Notes for {level.name} {subject.name} are on the way. Check back soon.
            </p>
          </div>
        ) : (
          <NotesDoc
            doc={doc}
            isASMaths={isASMaths}
            mathsSection={mathsSection}
            setMathsSection={setMathsSection}
          />
        )}
      </section>
      <SophionFooter />
    </div>
  );
}

function NotesDoc({ doc, isASMaths, mathsSection, setMathsSection }) {
  const [activeUnit, setActiveUnit] = useState(doc.units[0]?.id || "");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef(null);

  // Track which unit is in view
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveUnit(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    doc.units.forEach((u) => {
      const el = document.getElementById(u.id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [doc]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  return (
    <div className="mt-8 animate-fade-up flex gap-6 items-start relative">

      {/* ── Sidebar (desktop) ── */}
      <aside className="hidden lg:flex flex-col sticky top-24 w-64 shrink-0 rounded-3xl border border-border bg-card shadow-soft overflow-hidden max-h-[calc(100vh-7rem)]">
        <div className="p-4 border-b border-border bg-gradient-warm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Topics</p>
          <p className="text-sm font-black text-white truncate mt-0.5">{doc.title}</p>
        </div>

        {isASMaths && (
          <div className="flex gap-1 p-2 border-b border-border bg-muted/40">
            {AS_MATHS_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setMathsSection(s.id)}
                className={`flex-1 rounded-lg px-2 py-1.5 text-[11px] font-semibold transition-all ${
                  mathsSection === s.id
                    ? "bg-gradient-warm text-white shadow"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {s.label.split(" ")[0]}
              </button>
            ))}
          </div>
        )}

        <nav className="overflow-y-auto flex-1 py-2">
          {doc.units.map((u, i) => {
            const t = UNIT_THEMES[i % UNIT_THEMES.length];
            const isActive = activeUnit === u.id;
            return (
              <button
                key={u.id}
                onClick={() => scrollTo(u.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all ${
                  isActive ? "bg-secondary" : "hover:bg-secondary/50"
                }`}
              >
                <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${t.grad} text-white text-xs font-bold shadow`}>
                  {u.n}
                </span>
                <span className={`text-xs leading-tight ${isActive ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                  {u.title}
                </span>
                {isActive && <ChevronRight className="h-3.5 w-3.5 text-primary ml-auto shrink-0" />}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile sidebar toggle ── */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-warm text-white shadow-warm"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ── Mobile sidebar drawer ── */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-72 max-w-[85vw] bg-card shadow-2xl h-full overflow-hidden">
            <div className="p-4 border-b border-border bg-gradient-warm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Topics</p>
                <p className="text-sm font-black text-white truncate mt-0.5">{doc.title}</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {isASMaths && (
              <div className="flex gap-1 p-2 border-b border-border bg-muted/40">
                {AS_MATHS_SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setMathsSection(s.id)}
                    className={`flex-1 rounded-lg px-2 py-1.5 text-[11px] font-semibold transition-all ${
                      mathsSection === s.id
                        ? "bg-gradient-warm text-white shadow"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {s.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            )}

            <nav className="overflow-y-auto flex-1 py-2">
              {doc.units.map((u, i) => {
                const t = UNIT_THEMES[i % UNIT_THEMES.length];
                const isActive = activeUnit === u.id;
                return (
                  <button
                    key={u.id}
                    onClick={() => scrollTo(u.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all ${
                      isActive ? "bg-secondary" : "hover:bg-secondary/50"
                    }`}
                  >
                    <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${t.grad} text-white text-xs font-bold shadow`}>
                      {u.n}
                    </span>
                    <span className={`text-xs leading-tight ${isActive ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                      {u.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* ── Main content ── */}
      <article className="flex-1 min-w-0">
        <header className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-warm sm:p-12">
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-white shadow-warm">
              <BookOpen className="h-6 w-6" />
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Revision Notes</p>
          </div>
          <h1 className="relative mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            <span className="text-gradient-warm">{doc.title}</span>
          </h1>
          <p className="relative mt-3 text-sm font-semibold text-muted-foreground">{doc.spec}</p>
          <p className="relative mt-4 max-w-2xl text-base text-foreground/80">{doc.subtitle}</p>
        </header>

        <div className="mt-12 space-y-14">
          {doc.units.map((u, i) => (
            <UnitBlock key={u.id} unit={u} theme={UNIT_THEMES[i % UNIT_THEMES.length]} />
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted-foreground">
          Good luck. You've done the work. Now go prove it.
        </p>
      </article>
    </div>
  );
}

function UnitBlock({ unit, theme }) {
  return (
    <section id={unit.id} className="scroll-mt-24">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme.grad} p-7 text-white shadow-warm sm:p-9`}>
        <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Unit {unit.n}</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{unit.title}</h2>
      </div>

      <div className="mt-6 space-y-6">
        {unit.sections.map((s) => (
          <div
            key={s.id}
            id={`${unit.id}-${s.id}`}
            className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            style={{ borderLeft: `6px solid ${theme.ring}` }}
          >
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: theme.ring }}>
              {s.title}
            </h3>
            <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              {s.blocks.map((block, bi) => (
                <NoteBlock key={bi} block={block} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NoteBlock({ block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "sub":
      return <h4 className="text-base font-bold text-foreground mt-2">{block.text}</h4>;
    case "bullets":
      return (
        <ul className="list-disc pl-5 space-y-1">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case "formula":
      return (
        <div className="rounded-xl bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground">
          {block.text}
        </div>
      );
    case "tip":
      return (
        <div className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
          <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm">{block.text}</p>
        </div>
      );
    case "warn":
      return (
        <div className="flex gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm">{block.text}</p>
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl border border-border bg-muted/50 px-4 py-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Example</p>
          <pre className="text-sm whitespace-pre-wrap font-mono">{block.text}</pre>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-muted">
                {block.headers.map((h, i) => <th key={i} className="px-3 py-2 text-left font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => <td key={ci} className="px-3 py-2">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}