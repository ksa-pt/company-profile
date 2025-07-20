"use client"

import { useState } from 'react';

export default function Navbar({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

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
          className="rounded px-4 py-2 text-black hidden md:block"
        />
      </div>
    </nav>
  );
}
