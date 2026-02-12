"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";

export default function ManagerTeamPage() {
  const teamInfo = {
    name: "Strike Force",
    founded: "2020",
    homeVenue: "Al-Hamra Sports Complex",
    manager: "Mohammed Al-Rashid",
    captain: "Ahmed Al-Qahtani",
    division: "Premier League",
    ranking: 3
  };

  const stats = {
    matchesPlayed: 24,
    wins: 15,
    draws: 5,
    losses: 4,
    goalsFor: 48,
    goalsAgainst: 22,
    points: 50,
    winRate: 62.5
  };

  const upcomingMatches = [
    { date: "Oct 28", opponent: "Thunder FC", venue: "Home", time: "18:00" },
    { date: "Nov 1", opponent: "Red Lions", venue: "Away", time: "19:00" },
    { date: "Nov 5", opponent: "Eagles United", venue: "Home", time: "18:30" }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/manager" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4 uppercase">
            TEAM MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Manage your team and view performance
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-8">
        {/* Team Information */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <h2 className="card-title font-heading text-3xl text-secondary mb-6 uppercase">
              {teamInfo.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
              <div>
                <p className="text-neutral/60 text-sm">Founded</p>
                <p className="text-secondary text-lg">{teamInfo.founded}</p>
              </div>
              <div>
                <p className="text-neutral/60 text-sm">Home Venue</p>
                <p className="text-secondary text-lg">{teamInfo.homeVenue}</p>
              </div>
              <div>
                <p className="text-neutral/60 text-sm">Division</p>
                <p className="text-secondary text-lg">{teamInfo.division}</p>
              </div>
              <div>
                <p className="text-neutral/60 text-sm">Manager</p>
                <p className="text-secondary text-lg">{teamInfo.manager}</p>
              </div>
              <div>
                <p className="text-neutral/60 text-sm">Captain</p>
                <p className="text-secondary text-lg">{teamInfo.captain}</p>
              </div>
              <div>
                <p className="text-neutral/60 text-sm">League Ranking</p>
                <p className="text-primary text-lg font-heading">#{teamInfo.ranking}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/manager/roster" className="btn btn-primary font-heading uppercase">
                Manage Roster
              </Link>
              <Link href="/manager/transfers" className="btn btn-outline btn-primary font-heading uppercase">
                Transfers
              </Link>
              <Link href="/manager/analytics" className="btn btn-outline btn-primary font-heading uppercase">
                View Analytics
              </Link>
            </div>
          </div>
        </div>

        {/* Season Statistics */}
        <div>
          <h2 className="font-heading text-3xl text-secondary mb-6 uppercase">
            SEASON <span className="text-primary">STATISTICS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Matches Played" value={stats.matchesPlayed} />
            <StatCard label="Wins" value={stats.wins} />
            <StatCard label="Draws" value={stats.draws} />
            <StatCard label="Losses" value={stats.losses} />
            <StatCard label="Goals For" value={stats.goalsFor} />
            <StatCard label="Goals Against" value={stats.goalsAgainst} />
            <StatCard label="Points" value={stats.points} />
            <StatCard label="Win Rate" value={`${stats.winRate}%`} />
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <h2 className="card-title font-heading text-2xl text-secondary mb-4 uppercase">Upcoming Matches</h2>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-base-200 rounded-lg border border-base-300 hover:border-primary transition-all">
                  <div className="flex-1">
                    <p className="text-secondary font-heading text-lg uppercase">{match.opponent}</p>
                    <p className="text-neutral/60 font-body text-sm">
                      {match.date} • {match.time} • {match.venue}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-3 md:mt-0">
                    <button className="btn btn-sm btn-primary font-heading uppercase">
                      Match Details
                    </button>
                    <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                      Set Lineup
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
