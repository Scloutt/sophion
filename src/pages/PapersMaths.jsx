import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator } from "lucide-react";

const options = [
  { id: "maths-higher", label: "Maths Higher", blurb: "Papers 1H, 1HR, 2H, 2HR" },
  { id: "maths-foundation", label: "Maths Foundation", blurb: "Papers 1F, 1FR, 2F, 2FR" },
];

export default function PapersMaths() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border/60 bg-card/40 backdrop-blur">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-warm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Maths Past Papers</h1>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-xl px-6 py-12">
        <p className="text-muted-foreground mb-6">Choose a tier to continue.</p>
        <div className="grid gap-4">
          {options.map((o) => (
            <Link
              key={o.id}
              to={`/papers/${o.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-warm text-white shadow-warm">
                <Calculator className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold">{o.label}</h2>
                <p className="text-sm text-muted-foreground">{o.blurb}</p>
              </div>
              <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}