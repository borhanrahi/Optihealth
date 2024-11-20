"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#080D14] h-[72px] w-full relative z-50">
      <div className="max-w-[1312px] mx-auto px-4 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <span className="text-2xl font-bold text-white">Optihealth</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="#" className="text-white hover:text-white/80">
                Our Story
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                Services
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                Team
              </Link>
            </div>

            <button className="px-6 py-2.5 bg-[#232D3B] rounded-full text-white border border-white/20 bg-gradient-to-b from-white/10 to-transparent hover:bg-[#2A3545] transition-colors">
              Get started for <span className="text-[#8B8E99]">free</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-[80%] h-full bg-[#080D14] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="h-[72px] flex items-center justify-between px-6 border-b border-white/10">
            <span className="text-xl font-bold text-white">Menu</span>
            <button className="p-2" onClick={() => setIsMenuOpen(false)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8 space-y-6">
            <Link
              href="#"
              className="block text-lg text-white hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="#"
              className="block text-lg text-white hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-lg text-white hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <button className="w-full px-6 py-2.5 bg-[#232D3B] rounded-full text-white border border-white/20 bg-gradient-to-b from-white/10 to-transparent hover:bg-[#2A3545] transition-colors">
              Get started for <span className="text-[#8B8E99]">free</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
