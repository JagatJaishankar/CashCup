"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="font-heading text-2xl md:text-3xl text-secondary hover:text-primary transition-colors">
            Cash Cup
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-body text-neutral">
            <li>
              <Link href="/events" className="hover:text-primary hover:bg-transparent transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/players" className="hover:text-primary hover:bg-transparent transition-colors">
                Players
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-primary hover:bg-transparent transition-colors">
                Teams
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-end gap-3">
          <Link href="/login" className="btn btn-ghost btn-sm font-body text-neutral hover:text-primary hover:bg-transparent hidden md:inline-flex">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm font-heading text-xs tracking-wider">
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost btn-square lg:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-300">
          <ul className="menu menu-vertical py-4 font-body text-neutral">
            <li>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">
                Events
              </Link>
            </li>
            <li>
              <Link href="/players" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">
                Players
              </Link>
            </li>
            <li>
              <Link href="/teams" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">
                Teams
              </Link>
            </li>
            <li className="md:hidden">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
