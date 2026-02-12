"use client";

import Link from "next/link";
import { useState } from "react";

export default function DemoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Demo Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform font-heading text-sm tracking-wider"
          title="Demo Navigation"
        >
          Demo
        </button>
      </div>

      {/* Demo Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="bg-base-100 border border-base-300 shadow-xl w-56">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-sm text-secondary">Demo Nav</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-xs text-neutral/60"
                >
                  Close
                </button>
              </div>

              <div className="space-y-1 font-body text-sm">
                <Link
                  href="/sitemap"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-primary w-full font-heading text-xs"
                >
                  All Pages
                </Link>

                <div className="py-3">
                  <p className="text-xs text-neutral/40 uppercase tracking-wide mb-2">Dashboards</p>
                  <div className="space-y-1">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Player
                    </Link>
                    <Link
                      href="/manager"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Manager
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Admin
                    </Link>
                  </div>
                </div>

                <div className="py-3 border-t border-base-300">
                  <p className="text-xs text-neutral/40 uppercase tracking-wide mb-2">Browse</p>
                  <div className="space-y-1">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/events"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Events
                    </Link>
                    <Link
                      href="/players"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Players
                    </Link>
                    <Link
                      href="/teams"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:bg-base-200 text-neutral/70 hover:text-primary transition-colors"
                    >
                      Teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
