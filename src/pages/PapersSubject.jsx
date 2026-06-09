import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { igcsePapers } from "@/lib/igcse-papers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const SUBJECT_MAP = {
  physics: { key: "Physics", label: "Physics" },
  chemistry: { key: "Chemistry", label: "Chemistry" },
  biology: { key: "Biology", label: "Biology" },
  "maths-higher": { key: "MathsHigher", label: "Maths Higher" },
  "maths-foundation": { key: "MathsFoundation", label: "Maths Foundation" },
};

const SESSION_ORDER = ["January", "May", "MayJune", "November"];
const SESSION_LABEL = {
  January: "January",
  May: "May",
  MayJune: "May/June",
  November: "November",
};

function sortSessions(a, b) {
  const ia = SESSION_ORDER.indexOf(a);
  const ib = SESSION_ORDER.indexOf(b);
  if (ia === -1 && ib === -1) return a.localeCompare(b);
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
}

export default function PapersSubject() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const entry = SUBJECT_MAP[subject];
  const data = entry ? igcsePapers[entry.key] : undefined;

  const [year, setYear] = useState("");
  const [session, setSession] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    setYear("");
    setSession("");
    setCode("");
  }, [subject]);

  const years = useMemo(
    () => (data ? Object.keys(data).sort((a, b) => Number(b) - Number(a)) : []),
    [data]
  );
  const sessions = useMemo(
    () => (data && year ? Object.keys(data[year]).sort(sortSessions) : []),
    [data, year]
  );
  const codes = useMemo(
    () => (data && year && session ? Object.keys(data[year][session]).sort() : []),
    [data, year, session]
  );

  const paper = data && year && session && code ? data[year][session][code] : null;

  if (!entry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Subject not found</h1>
          <Link to="/" className="text-primary underline">Go home</Link>
        </div>
      </div>
    );
  }

  const onYear = (v) => { setYear(v); setSession(""); setCode(""); };
  const onSession = (v) => { setSession(v); setCode(""); };

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
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            {entry.label} Past Papers
          </h1>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-xl px-6 py-10">
        <div className="rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-8 space-y-5">
          <Field label="Year">
            <Select value={year} onValueChange={onYear}>
              <SelectTrigger className="h-12 rounded-xl text-base">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Session">
            <Select value={session} onValueChange={onSession} disabled={!year}>
              <SelectTrigger className="h-12 rounded-xl text-base">
                <SelectValue placeholder={year ? "Select session" : "Select year first"} />
              </SelectTrigger>
              <SelectContent>
                {sessions.map((s) => (
                  <SelectItem key={s} value={s}>{SESSION_LABEL[s] ?? s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Paper">
            <Select value={code} onValueChange={setCode} disabled={!session}>
              <SelectTrigger className="h-12 rounded-xl text-base">
                <SelectValue placeholder={session ? "Select paper" : "Select session first"} />
              </SelectTrigger>
              <SelectContent>
                {codes.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <PaperButton label="Question Paper" url={paper?.qp ?? ""} disabled={!paper} />
            <PaperButton label="Mark Scheme" url={paper?.ms ?? ""} variant="outline" disabled={!paper} />
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

function PaperButton({ label, url, disabled, variant = "default" }) {
  if (disabled || !url) {
    return (
      <Button disabled size="lg" variant={variant} className="h-12 rounded-xl text-base w-full">
        {label} — Not Available
      </Button>
    );
  }
  return (
    <Button asChild size="lg" variant={variant} className="h-12 rounded-xl text-base w-full">
      <a href={url} target="_blank" rel="noopener noreferrer">Open {label}</a>
    </Button>
  );
}