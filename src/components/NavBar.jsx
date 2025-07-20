"use client"

import { useState } from 'react';

export default function Navbar({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-6">
      <div className="flex items-center justify-between md:hidden mb-3">
        <span className="font-bold text-lg">KSA</span>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <div className="md:hidden mb-3">
        <input
          type="text"
          placeholder="Search here..."
          className="rounded px-4 py-1 text-black w-full"
        />
      </div>

      <div
        className={`flex flex-col md:flex-row md:items-center md:justify-between ${
          isOpen ? 'block' : 'hidden'
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 font-semibold items-start md:items-center">
          {menu.map((item, index) => (
            <li key={index} className="hover:underline cursor-pointer">
              <a href={item.href} className="transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <input
          type="text"
          placeholder="Search here..."
          className="rounded px-4 py-1 text-black hidden md:block"
        />
      </div>
    </nav>
  );
}
