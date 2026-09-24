"use client";
import { useState } from "react";

const items = [
  ["Books", "#books"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Vlogs", "#vlogs"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/80 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-wide">
          Shantaye <span className="text-rose">Brown</span>
        </a>
        <ul className="hidden gap-8 text-sm text-bone/80 md:flex">
          {items.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-rose">{label}</a>
            </li>
          ))}
        </ul>
        <a href="#books" className="btn-primary hidden !py-2 md:inline-flex">Read Zel</a>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          <span className="block h-0.5 w-6 bg-bone" />
          <span className="mt-1.5 block h-0.5 w-6 bg-bone" />
          <span className="mt-1.5 block h-0.5 w-4 bg-rose" />
        </button>
      </nav>
      {open && (
        <ul className="container-x flex flex-col gap-4 pb-6 md:hidden">
          {items.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block text-lg">{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
