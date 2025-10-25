"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 border-primary sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="font-righteous text-2xl md:text-3xl text-primary hover:text-primary/80 transition-colors">
            CASH CUP
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-helvetica text-white">
            <li>
              <Link href="/events" className="hover:text-primary transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/players" className="hover:text-primary transition-colors">
                Players
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-primary transition-colors">
                Teams
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-end gap-2">
          <Link href="/login" className="btn btn-ghost btn-sm text-white hover:text-primary hidden md:inline-flex">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm text-black font-righteous">
            Sign Up
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost btn-square lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral border-t border-primary">
          <ul className="menu menu-vertical py-2 font-helvetica text-white">
            <li>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/players" onClick={() => setMobileMenuOpen(false)}>
                Players
              </Link>
            </li>
            <li>
              <Link href="/teams" onClick={() => setMobileMenuOpen(false)}>
                Teams
              </Link>
            </li>
            <li className="md:hidden">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
