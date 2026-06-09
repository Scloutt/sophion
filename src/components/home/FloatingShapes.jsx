import React from "react";

export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[8%] top-[18%] h-20 w-20 rounded-3xl bg-gradient-warm opacity-30 animate-float" />
      <div className="absolute right-[10%] top-[12%] h-14 w-14 rounded-full bg-accent opacity-50 animate-float-slow" />
      <div className="absolute left-[14%] bottom-[10%] h-10 w-10 rotate-12 rounded-xl bg-primary/40 animate-float-slow" />
      <div className="absolute right-[14%] bottom-[18%] h-24 w-24 rounded-full bg-gradient-sun opacity-25 blur-2xl animate-float" />
      <div className="absolute left-1/2 top-[6%] h-3 w-3 -translate-x-1/2 rounded-full bg-primary animate-float" />
    </div>
  );
}

export default FloatingShapes;