import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { MOTIVATIONAL_QUOTES } from "@/lib/quotes";

export function MotivationalQuote() {
  const [quote, setQuote] = useState(MOTIVATIONAL_QUOTES[0]);

  useEffect(() => {
    const i = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    setQuote(MOTIVATIONAL_QUOTES[i]);
  }, []);

  return (
    <div className="relative animate-fade-up">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-3xl bg-gradient-warm opacity-30 blur-2xl"
      />
      <div className="relative rounded-3xl border border-border/60 bg-cream/90 dark:bg-card p-7 shadow-glow animate-pulse-glow">
        <Quote className="h-6 w-6 text-primary" />
        <p className="mt-3 text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Daily motivation
        </p>
      </div>
    </div>
  );
}

export default MotivationalQuote;