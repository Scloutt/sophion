const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Instagram } from "lucide-react";

export function SophionFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="https://media.db.com/images/public/6a250646e26ab0f0a9d08dcd/d37dee913_sophionlogo.png" alt="Sophion" className="h-9 w-9 object-contain" />
          <p className="text-sm text-muted-foreground">
            Made for students, by students.
          </p>
        </div>
        <a
          href="https://www.instagram.com/sophionhq/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-warm text-white shadow-warm transition-transform duration-300 hover:scale-110 hover:rotate-6"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default SophionFooter;