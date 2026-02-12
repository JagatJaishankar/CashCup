"use client";

import Link from "next/link";
import StatCard from "../components/ui/StatCard";
import MatchCard from "../components/ui/MatchCard";
import PlayerCard from "../components/ui/PlayerCard";

export default function ManagerDashboard() {
  // Mock team data
  const team = {
    name: "Strike Force",
    manager: "Hassan Al-Dosari",
    playerCount: 12
  };

  const stats = {
    wins: 18,
    draws: 5,
    losses: 4,
    tournaments: 3
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

  const roster = [
    {
      id: 1,
      name: "Ahmed Al-Qahtani",
      position: "FWD",
      team: team.name,
      goals: 15,
      assists: 8,
      matches: 22
    },
    {
      id: 2,
      name: "Mohammed Hassan",
      position: "MID",
      team: team.name,
      goals: 8,
      assists: 12,
      matches: 20
    }
  ];

  const pendingTransfers = [
    {
      id: 1,
      player: "Abdullah Mansour",
      fromTeam: "Free Agent",
      status: "pending",
      date: "Oct 20, 2024"
    }
  ];

  const tournaments = [
    {
      id: 1,
      name: "Cash Cup 5v5 Championship",
      status: "registered",
      startDate: "Nov 15, 2024",
      paymentStatus: "paid"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="bg-base-200 border-b border-base-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-primary mb-2 uppercase">
                MANAGER DASHBOARD
              </h1>
              <p className="font-body text-xl text-neutral/60">
                Welcome back, {team.manager}!
              </p>
            </div>
            <Link href="/manager/team" className="btn btn-outline btn-primary font-heading uppercase">
              Team Settings
            </Link>
          </div>

          <div className="flex gap-4 items-center font-body">
            <Link href="/teams/1" className="text-primary hover:underline font-heading text-xl uppercase">
              {team.name}
            </Link>
            <span className="text-neutral/60">•</span>
            <span className="text-neutral/60">{team.playerCount} Players</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Stats */}
            <div>
              <h2 className="font-heading text-2xl mb-6 text-secondary uppercase">
                TEAM <span className="text-primary">STATISTICS</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Wins" value={stats.wins} />
                <StatCard label="Draws" value={stats.draws} />
                <StatCard label="Losses" value={stats.losses} />
                <StatCard label="Tournaments" value={stats.tournaments} />
              </div>
            </div>

            {/* Upcoming Matches */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-2xl text-secondary uppercase">
                  UPCOMING <span className="text-primary">MATCHES</span>
                </h2>
                <Link href="/manager/tournaments" className="btn btn-ghost btn-sm text-primary">
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
                <div className="text-center py-12 bg-base-200 rounded-lg border border-base-300">
                  <p className="font-body text-neutral/60">No upcoming matches</p>
                </div>
              )}
            </div>

            {/* Team Roster */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-2xl text-secondary uppercase">
                  TEAM <span className="text-primary">ROSTER</span>
                </h2>
                <Link href="/manager/roster" className="btn btn-ghost btn-sm text-primary">
                  Manage Roster
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roster.map(player => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>

              <div className="text-center mt-6">
                <Link href="/manager/roster" className="btn btn-outline btn-primary font-heading uppercase">
                  Add Players
                </Link>
              </div>
            </div>

            {/* Pending Transfers */}
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title font-heading text-2xl text-secondary uppercase">Pending Transfers</h2>
                  <Link href="/manager/transfers" className="btn btn-ghost btn-sm text-primary">
                    View All
                  </Link>
                </div>

                {pendingTransfers.length > 0 ? (
                  <div className="space-y-3">
                    {pendingTransfers.map(transfer => (
                      <div key={transfer.id} className="flex justify-between items-center p-4 bg-base-200 rounded-lg border border-base-300">
                        <div>
                          <h3 className="font-heading text-secondary uppercase">{transfer.player}</h3>
                          <p className="font-body text-sm text-neutral/60">
                            From: {transfer.fromTeam}
                          </p>
                          <p className="font-body text-xs text-neutral/60">{transfer.date}</p>
                        </div>
                        <span className="badge badge-warning">Pending</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-6 font-body text-neutral/60">
                    No pending transfers
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body">
                <h3 className="font-heading text-xl text-primary mb-4 uppercase">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/manager/tournaments" className="btn btn-outline btn-primary btn-block font-heading uppercase">
                    Register for Tournament
                  </Link>
                  <Link href="/manager/roster" className="btn btn-outline btn-primary btn-block font-heading uppercase">
                    Manage Roster
                  </Link>
                  <Link href="/manager/transfers" className="btn btn-outline btn-primary btn-block font-heading uppercase">
                    Request Transfer
                  </Link>
                  <Link href="/manager/payments" className="btn btn-outline btn-primary btn-block font-heading uppercase">
                    View Payments
                  </Link>
                </div>
              </div>
            </div>

            {/* Tournaments */}
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body">
                <h3 className="font-heading text-xl mb-4 text-secondary uppercase">Registered Tournaments</h3>
                <div className="space-y-3">
                  {tournaments.map(tournament => (
                    <div key={tournament.id} className="p-3 bg-base-200 rounded-lg border border-base-300">
                      <h4 className="font-heading text-sm text-secondary uppercase">{tournament.name}</h4>
                      <p className="font-body text-xs text-neutral/60">{tournament.startDate}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="badge badge-success badge-xs">Registered</span>
                        <span className="badge badge-success badge-xs">Paid</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/events" className="btn btn-ghost btn-sm text-primary mt-2 font-body">
                  Browse Tournaments
                </Link>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="card bg-primary shadow-sm">
              <div className="card-body">
                <h3 className="font-heading text-xl text-white mb-4 uppercase">Financial Summary</h3>
                <div className="space-y-2 font-body text-white">
                  <div className="flex justify-between">
                    <span>Entry Fees Paid:</span>
                    <span className="font-heading">2,500 SAR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prize Money Won:</span>
                    <span className="font-heading">8,000 SAR</span>
                  </div>
                  <div className="divider my-2 before:bg-white/20 after:bg-white/20"></div>
                  <div className="flex justify-between font-semibold">
                    <span>Net Balance:</span>
                    <span className="font-heading text-lg">+5,500 SAR</span>
                  </div>
                </div>
                <Link href="/manager/payments" className="btn bg-white text-primary hover:bg-white/90 border-none btn-sm mt-4 font-heading uppercase">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
