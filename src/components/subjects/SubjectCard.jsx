import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SubjectIcon } from "./SubjectIcon";

export function SubjectCard({ subject, level, to, disabled }) {
  const inner = (
    <>
      <div
        aria-hidden
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${subject.accent} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
      />
      <div className="relative flex items-start justify-between">
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${subject.accent} text-white shadow-warm`}>
          <SubjectIcon icon={subject.icon} className="h-7 w-7" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
      <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-foreground">
        {subject.name}
      </h3>
      <p className="relative mt-1 text-sm text-muted-foreground">{subject.blurb}</p>
    </>
  );

  const className =
    "group relative block overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm";

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className={`${className} cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-soft`}
        title="Coming soon"
      >
        {inner}
        <p className="relative mt-4 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Coming soon
        </p>
      </div>
    );
  }

  if (to === "papers") {
    if (level === "as") {
      return (
        <Link to={`/papers/as/${subject.id}`} className={className}>{inner}</Link>
      );
    }
    if (level === "a") {
      return (
        <Link to={`/papers/a/${subject.id}`} className={className}>{inner}</Link>
      );
    }
    if (subject.id === "maths") {
      return (
        <Link to="/papers/maths" className={className}>{inner}</Link>
      );
    }
    return (
      <Link to={`/papers/${subject.id}`} className={className}>{inner}</Link>
    );
  }

  if (to === "notes") {
    return (
      <Link to={`/notes/${level}/${subject.id}`} className={className}>{inner}</Link>
    );
  }

  // Default: any other route (e.g. "level-subject" or actual paths)
  return (
    <Link to={`/levels/${level}/${subject.id}`} className={className}>{inner}</Link>
  );
}

export default SubjectCard;