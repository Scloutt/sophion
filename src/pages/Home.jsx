const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SophionHeader } from "@/components/layout/SophionHeader";
import { SophionFooter } from "@/components/layout/SophionFooter";
import { MotivationalQuote } from "@/components/home/MotivationalQuote";
import { FloatingShapes } from "@/components/home/FloatingShapes";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <SophionHeader />

      <section className="relative mx-auto max-w-6xl px-6 pt-14 pb-10 sm:pt-20">
        <FloatingShapes />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream/70 dark:bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              A warmer way to study
            </span>
            <h1 className="mt-5 text-6xl font-black tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Soph<span className="text-gradient-warm">ion</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
              Smart Practice. Simple Learning.
            </p>

            <div className="mt-8">
              <MotivationalQuote />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 max-w-sm">
              <Link
                to="/subjects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-warm px-5 py-4 text-sm font-semibold text-white shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                Past Papers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/topic-questions"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-4 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/10"
              >
                Topic Questions
              </Link>
              <Link
                to="/revision-notes"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-4 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/10"
              >
                Revision Notes
              </Link>
              <Link
                to="/subjects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-foreground/30 px-5 py-4 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/10"
              >
                Explore Subjects
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-warm">
              <img
                src="https://media.db.com/images/public/6a250646e26ab0f0a9d08dcd/17ce806f5_sophion-hero.jpg"
                alt="Students studying together"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cream dark:bg-card border border-border px-4 py-3 shadow-warm animate-float">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Today</p>
              <p className="text-sm font-semibold text-foreground">+30 min focus</p>
            </div>
            <div className="absolute -top-5 -right-4 rounded-2xl bg-gradient-sun px-4 py-3 text-white shadow-warm animate-float-slow">
              <p className="text-xs uppercase tracking-widest opacity-80">Streak</p>
              <p className="text-lg font-bold">7 days 🔥</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10" />

      <SophionFooter />
    </div>
  );
}