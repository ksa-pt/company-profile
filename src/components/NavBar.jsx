"use client";
import { useState, useEffect } from "react";
import { Mail, Linkedin, Search, Menu as MenuIcon, X } from "lucide-react";

export default function Header({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;
    const timeout = setTimeout(() => {
      const allElements = document.querySelectorAll("section, div, p, h1, h2, h3");
      for (const el of allElements) {
        if (el.textContent?.toLowerCase().includes(debouncedQuery.toLowerCase())) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [debouncedQuery]);

  // Mailto link
  const mailto =
    "mailto:ptkunsejahteraabadi@gmail.com" +
    "?cc=nurfahmi.alifdaffa@gmail.com" +
    "&subject=Collaboration%20Inquiry%20-%20KSA%20Indonesia" +
    "&body=Hi%20KSA%20Indonesia%2C%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20your%20team.%20Please%20contact%20me%20back.%0D%0A%0D%0AThanks!";

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="KSA Indonesia Logo"
            className="w-14 h-14 object-contain rounded-lg shadow-sm"
          />
          <span className="text-2xl font-bold text-[#3BBFC3] tracking-wide hidden sm:block">
            KSA Indonesia
          </span>
        </div>
        {/* Main Menu */}
        <ul className="hidden md:flex gap-7">
          {menu.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="font-semibold px-3 py-2 rounded-lg text-[#222222] hover:bg-[#3BBFC3]/10 hover:text-[#3BBFC3] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Right Area */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/pt-kun-sejahtera-abadi/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3BBFC3] hover:text-[#F7931E] p-2 transition"
            title="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          {/* Contact Us */}
          <a
            href={mailto}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3BBFC3]/90 text-white hover:bg-[#F7931E] transition font-semibold shadow"
          >
            <Mail size={18} /> Contact Us
          </a>
          {/* Search */}
          <button
            className="text-[#3BBFC3] hover:text-[#F7931E] p-2 md:ml-2"
            onClick={() => setShowSearch((v) => !v)}
          >
            <Search size={22} />
          </button>
          {showSearch && (
            <input
              type="text"
              autoFocus
              placeholder="Search…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="ml-2 rounded-lg px-4 py-2 border border-[#3BBFC3]/30 focus:border-[#3BBFC3] outline-none transition w-48"
            />
          )}
          {/* Hamburger (mobile) */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-100 px-4 py-3 shadow-lg animate-fade-in-down">
          <ul className="flex flex-col gap-3">
            {menu.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="font-semibold px-3 py-2 rounded hover:bg-[#3BBFC3]/10 hover:text-[#3BBFC3] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div className="flex items-center mt-3 gap-2">
              <Search size={22} className="text-[#3BBFC3]" />
              <input
                type="text"
                placeholder="Search…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="rounded-lg px-3 py-2 border border-[#3BBFC3]/30 w-full"
              />
            </div>
            <a
              href={mailto}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3BBFC3]/90 text-white hover:bg-[#F7931E] transition font-semibold mt-2 shadow"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={18} /> Contact Us
            </a>
            <a
              href="https://www.linkedin.com/company/pt-kun-sejahtera-abadi/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#3BBFC3] hover:text-[#F7931E] transition font-semibold mt-1"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}