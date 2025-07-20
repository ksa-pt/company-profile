"use client"

import { useEffect, useState } from 'react';

export default function Navbar({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const timeout = setTimeout(() => {
      const allElements = document.querySelectorAll("section, div, p, h1, h2, h3");

      for (const el of allElements) {
        if (el.textContent?.toLowerCase().includes(debouncedQuery.toLowerCase())) {
          try {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch (e) {
            // fallback
            el.scrollIntoView({ behavior: "smooth" });
          }
          console.log("Scrolled to:", el);
          break;
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [debouncedQuery]);

  return (
    <nav className="bg-blue-500 text-white p-4 sm:p-6">
      <div className="flex items-center justify-between md:hidden">
        <span className="font-bold">KSA</span>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row md:items-center md:justify-between ${
          isOpen ? 'block' : 'hidden'
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 font-semibold items-start md:items-center">
          {menu.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <a href={item.href} className="transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded px-4 py-2 text-black hidden md:block outline-none"
        />
      </div>
    </nav>
  );
}
