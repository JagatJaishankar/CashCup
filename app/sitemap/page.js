"use client";

import Link from "next/link";

export default function SitemapPage() {
  const pages = {
    "Main Pages": [
      { name: "Home", path: "/" },
      { name: "Events", path: "/events" },
      { name: "Event Details (Example)", path: "/events/1" },
      { name: "Players", path: "/players" },
      { name: "Player Profile (Example)", path: "/players/1" },
      { name: "Teams", path: "/teams" },
      { name: "Team Profile (Example)", path: "/teams/1" },
    ],
    "Authentication": [
      { name: "Login", path: "/login" },
      { name: "Sign Up", path: "/signup" },
    ],
    "Player Dashboard": [
      { name: "Dashboard Home", path: "/dashboard" },
      { name: "My Profile", path: "/dashboard/profile" },
      { name: "My Contracts", path: "/dashboard/contracts" },
      { name: "My Tournaments", path: "/dashboard/tournaments" },
      { name: "Tournament Check-In", path: "/dashboard/check-in" },
      { name: "My Statistics", path: "/dashboard/statistics" },
    ],
    "Manager Dashboard": [
      { name: "Manager Home", path: "/manager" },
      { name: "Team Management", path: "/manager/team" },
      { name: "Roster Management", path: "/manager/roster" },
      { name: "Transfer Management", path: "/manager/transfers" },
      { name: "Tournament Management", path: "/manager/tournaments" },
      { name: "Payment Management", path: "/manager/payments" },
      { name: "Sponsor Management", path: "/manager/sponsors" },
      { name: "Team Analytics", path: "/manager/analytics" },
    ],
    "Admin Dashboard": [
      { name: "Admin Home", path: "/admin" },
      { name: "Create Tournament", path: "/admin/tournaments/create" },
      { name: "Edit Tournament (Example)", path: "/admin/tournaments/1" },
      { name: "Transfer Approvals", path: "/admin/transfers" },
      { name: "User Management", path: "/admin/users" },
      { name: "Check-In Management", path: "/admin/check-in" },
      { name: "Score Management", path: "/admin/scores" },
      { name: "Payment Oversight", path: "/admin/payments" },
      { name: "Audit Log", path: "/admin/audit" },
      { name: "Platform Analytics", path: "/admin/analytics" },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Home
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            SITE MAP
          </h1>
          <p className="font-helvetica text-white">
            Complete navigation guide for Cash Cup platform
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(pages).map(([category, links]) => (
            <div key={category} className="card bg-base-200 shadow-lg border-2 border-base-300">
              <div className="card-body p-4">
                <h3 className="text-gray-400 text-xs font-helvetica">{category}</h3>
                <p className="text-primary text-3xl font-righteous">{links.length}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pages by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(pages).map(([category, links]) => (
            <div key={category} className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl text-white mb-4">
                  {category}
                </h2>
                <div className="space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="flex items-center justify-between p-3 bg-base-100 rounded-lg hover:bg-base-300 hover:border-primary border-2 border-transparent transition-all group"
                    >
                      <span className="font-helvetica text-white group-hover:text-primary">
                        {link.name}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="card bg-primary text-black shadow-xl border-2 border-primary mt-8">
          <div className="card-body">
            <h3 className="card-title font-righteous text-2xl">
              Demo Instructions
            </h3>
            <div className="font-helvetica space-y-2">
              <p><strong>For Presentation:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Start with the <Link href="/" className="underline font-bold">Home Page</Link> to show the landing experience</li>
                <li>Browse <Link href="/events" className="underline font-bold">Events</Link>, <Link href="/players" className="underline font-bold">Players</Link>, and <Link href="/teams" className="underline font-bold">Teams</Link></li>
                <li>Show <Link href="/login" className="underline font-bold">Login Page</Link> with role selection</li>
                <li>Demonstrate each dashboard:
                  <ul className="list-circle list-inside ml-6">
                    <li><Link href="/dashboard" className="underline font-bold">Player Dashboard</Link> - 5 sub-pages</li>
                    <li><Link href="/manager" className="underline font-bold">Manager Dashboard</Link> - 7 sub-pages</li>
                    <li><Link href="/admin" className="underline font-bold">Admin Dashboard</Link> - 9 sub-pages</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Login */}
        <div className="flex justify-center mt-8">
          <Link href="/login" className="btn btn-primary btn-lg font-righteous">
            Back to Demo Login
          </Link>
        </div>
      </div>
    </div>
  );
}
