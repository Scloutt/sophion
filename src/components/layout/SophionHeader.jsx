const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function SophionHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="https://media.db.com/images/public/6a250646e26ab0f0a9d08dcd/d37dee913_sophionlogo.png"
            alt="Sophion logo"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-tight">
            Soph<span className="text-gradient-warm">ion</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/subjects">Past Papers</NavLink>
          <NavLink to="/topic-questions">Topic Questions</NavLink>
          <NavLink to="/revision-notes">Revision Notes</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function NavLink({ to, exact, children }) {
  const location = useLocation();
  const isActive = exact 
    ? location.pathname === to 
    : location.pathname.startsWith(to);
  
  return (
    <Link
      to={to}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-secondary text-foreground font-semibold"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}

export default SophionHeader;