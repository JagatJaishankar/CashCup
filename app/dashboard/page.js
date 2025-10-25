"use client";

import Link from "next/link";
import StatCard from "../components/ui/StatCard";
import MatchCard from "../components/ui/MatchCard";

export default function PlayerDashboard() {
  // Mock player data
  const player = {
    name: "Ahmed Al-Qahtani",
    team: "Strike Force",
    position: "FWD",
    jerseyNumber: 10
  };

  const stats = {
    goals: 15,
    assists: 8,
    matches: 22,
    mvpAwards: 3
  };

  const upcomingMatches = [
    {
      id: 1,
      tournament: "Cash Cup 5v5",
      homeTeam: "Strike Force",
      awayTeam: "Thunder FC",
      status: "scheduled",
      date: "Nov 15, 2024",
      time: "18:00",
      venue: "Al-Hamra Sports Complex"
    }
  ];

  const contracts = [
    {
      id: 1,
      team: "Strike Force",
      startDate: "Jan 1, 2024",
      endDate: "Dec 31, 2024",
      status: "active"
    }
  ];

  const tournaments = [
    {
      id: 1,
      name: "Cash Cup 5v5 Championship",
      status: "upcoming",
      startDate: "Nov 15, 2024",
      checkInRequired: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-2">
                PLAYER DASHBOARD
              </h1>
              <p className="font-helvetica text-xl text-gray-300">
                Welcome back, {player.name}!
              </p>
            </div>
            <Link href="/dashboard/profile" className="btn btn-outline btn-primary font-righteous">
              Edit Profile
            </Link>
          </div>

          <div className="flex gap-4 items-center font-helvetica">
            <span className="badge badge-primary badge-lg font-righteous">{player.position} #{player.jerseyNumber}</span>
            <span className="text-gray-300">•</span>
            <Link href="/teams/1" className="text-primary hover:underline font-righteous">
              {player.team}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div>
              <h2 className="font-righteous text-2xl mb-6">
                YOUR <span className="text-primary">STATISTICS</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Goals" value={stats.goals} />
                <StatCard label="Assists" value={stats.assists} />
                <StatCard label="Matches" value={stats.matches} />
                <StatCard label="MVP Awards" value={stats.mvpAwards} />
              </div>
            </div>

            {/* Upcoming Matches */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-righteous text-2xl text-white">
                  UPCOMING <span className="text-primary">MATCHES</span>
                </h2>
                <Link href="/dashboard/tournaments" className="btn btn-ghost btn-sm text-primary">
                  View All
                </Link>
              </div>

              {upcomingMatches.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMatches.map(match => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-base-200 rounded-lg">
                  <p className="font-helvetica text-gray-500">No upcoming matches</p>
                </div>
              )}
            </div>

            {/* Contracts */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title font-righteous text-2xl text-white">Active Contracts</h2>
                  <Link href="/dashboard/contracts" className="btn btn-ghost btn-sm text-primary">
                    View All
                  </Link>
                </div>

                {contracts.map(contract => (
                  <div key={contract.id} className="p-4 bg-base-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-righteous text-lg">{contract.team}</h3>
                        <p className="font-helvetica text-sm text-gray-400">
                          {contract.startDate} - {contract.endDate}
                        </p>
                      </div>
                      <span className="badge badge-success">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Recent Activity</h2>
                <div className="space-y-3 font-helvetica">
                  <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Signed contract with Strike Force</p>
                    <span className="ml-auto text-sm text-gray-500">2 days ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Registered for Cash Cup 5v5 Championship</p>
                    <span className="ml-auto text-sm text-gray-500">5 days ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p>Won MVP award in Summer Cup</p>
                    <span className="ml-auto text-sm text-gray-500">1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card bg-black text-white shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/dashboard/profile" className="btn btn-outline btn-primary btn-block font-righteous">
                    Edit Profile
                  </Link>
                  <Link href="/dashboard/check-in" className="btn btn-outline btn-primary btn-block font-righteous">
                    Tournament Check-In
                  </Link>
                  <Link href="/dashboard/statistics" className="btn btn-outline btn-primary btn-block font-righteous">
                    View Full Stats
                  </Link>
                </div>
              </div>
            </div>

            {/* Tournaments */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4">My Tournaments</h3>
                <div className="space-y-3">
                  {tournaments.map(tournament => (
                    <div key={tournament.id} className="p-3 bg-base-200 rounded-lg">
                      <h4 className="font-righteous text-sm">{tournament.name}</h4>
                      <p className="font-helvetica text-xs text-gray-400">{tournament.startDate}</p>
                      {tournament.checkInRequired && (
                        <button className="btn btn-xs btn-primary mt-2 font-righteous">
                          Check In
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <Link href="/dashboard/tournaments" className="btn btn-ghost btn-sm text-primary mt-2 font-helvetica">
                  View All Tournaments
                </Link>
              </div>
            </div>

            {/* Achievements */}
            <div className="card bg-primary shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-black mb-4">Latest Achievement</h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-righteous text-lg text-black">MVP - Summer Cup 2024</h4>
                  <p className="font-helvetica text-sm text-black/80">September 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
