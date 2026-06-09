import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, BookMarked } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";

export default function TopicComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <SophionHeader />

      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center shadow-warm animate-fade-up sm:p-20">
          {/* blobs */}
          <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-warm opacity-25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gradient-sun opacity-20 blur-2xl" />

          {/* badge */}
          <p className="relative inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <BookMarked className="h-3.5 w-3.5 text-primary" />
            Topic Questions
          </p>

          {/* heading */}
          <h1 className="relative mt-8 text-6xl font-black tracking-tight sm:text-8xl">
            <span className="text-gradient-warm">Coming</span>
            <br />
            <span className="text-foreground">Soon</span>
          </h1>

          {/* sparkle decoration */}
          <div className="relative mt-6 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <Sparkles key={i} className="h-5 w-5 text-primary opacity-60" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>

          <p className="relative mx-auto mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            We're building focused topic-wise practice questions for every subject. Check back soon — it's going to be good.
          </p>

          <Link
            to="/topic-questions"
            className="relative mt-10 inline-flex items-center gap-2 rounded-2xl border-2 border-foreground/25 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-foreground/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Topic Questions
          </Link>
        </div>
      </section>

      <SophionFooter />
    </div>
  );
}