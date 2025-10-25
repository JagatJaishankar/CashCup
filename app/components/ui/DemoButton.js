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
          className="btn btn-primary btn-lg shadow-2xl border-2 border-black hover:scale-110 transition-transform font-righteous text-black"
          title="Demo Navigation"
        >
          DEMO
        </button>
      </div>

      {/* Demo Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="card bg-base-200 shadow-2xl border-2 border-primary w-64">
            <div className="card-body p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-righteous text-primary">DEMO NAV</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-xs"
                >
                  Close
                </button>
              </div>

              <div className="space-y-2 font-helvetica text-sm">
                <Link
                  href="/sitemap"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-outline btn-primary w-full"
                >
                  All Pages
                </Link>

                <div className="divider my-2 text-xs text-gray-400">Dashboards</div>

                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Player
                </Link>
                <Link
                  href="/manager"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Manager
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Admin
                </Link>

                <div className="divider my-2 text-xs text-gray-400">Main</div>

                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Events
                </Link>
                <Link
                  href="/players"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Players
                </Link>
                <Link
                  href="/teams"
                  onClick={() => setIsOpen(false)}
                  className="block btn btn-sm btn-ghost w-full justify-start"
                >
                  Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
