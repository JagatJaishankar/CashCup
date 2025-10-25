"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";

export default function StatisticsPage() {
  const stats = {
    career: {
      matchesPlayed: 22,
      goals: 15,
      assists: 8,
      yellowCards: 2,
      redCards: 0,
      mvpAwards: 3,
      winRate: 65
    },
    season: {
      matchesPlayed: 12,
      goals: 9,
      assists: 5,
      yellowCards: 1,
      redCards: 0
    }
  };

  const recentMatches = [
    { date: "Oct 20", opponent: "Thunder FC", goals: 2, assists: 1, result: "W 3-1" },
    { date: "Oct 18", opponent: "Red Lions", goals: 1, assists: 0, result: "D 1-1" },
    { date: "Oct 15", opponent: "Eagles United", goals: 0, assists: 2, result: "W 2-0" },
    { date: "Oct 12", opponent: "Desert Warriors", goals: 0, assists: 0, result: "L 0-2" },
    { date: "Oct 10", opponent: "Golden Stars", goals: 2, assists: 1, result: "W 4-1" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            MY STATISTICS
          </h1>
          <p className="font-helvetica text-white">
            Complete overview of your performance
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12 space-y-8">
        {/* Career Statistics */}
        <div>
          <h2 className="font-righteous text-3xl text-white mb-6">
            CAREER <span className="text-primary">STATISTICS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Matches Played" value={stats.career.matchesPlayed} />
            <StatCard label="Goals" value={stats.career.goals} />
            <StatCard label="Assists" value={stats.career.assists} />
            <StatCard label="MVP Awards" value={stats.career.mvpAwards} />
            <StatCard label="Yellow Cards" value={stats.career.yellowCards} />
            <StatCard label="Red Cards" value={stats.career.redCards} />
            <StatCard label="Win Rate" value={`${stats.career.winRate}%`} />
            <StatCard label="Goals/Match" value={(stats.career.goals / stats.career.matchesPlayed).toFixed(2)} />
          </div>
        </div>

        {/* Season Statistics */}
        <div>
          <h2 className="font-righteous text-3xl text-white mb-6">
            SEASON <span className="text-primary">2024</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <StatCard label="Matches" value={stats.season.matchesPlayed} />
            <StatCard label="Goals" value={stats.season.goals} />
            <StatCard label="Assists" value={stats.season.assists} />
            <StatCard label="Yellow Cards" value={stats.season.yellowCards} />
            <StatCard label="Red Cards" value={stats.season.redCards} />
          </div>
        </div>

        {/* Recent Matches */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300">
          <div className="card-body">
            <h2 className="card-title font-righteous text-2xl text-white mb-4">Recent Matches</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-white">
                    <th className="font-righteous">Date</th>
                    <th className="font-righteous">Opponent</th>
                    <th className="font-righteous">Goals</th>
                    <th className="font-righteous">Assists</th>
                    <th className="font-righteous">Result</th>
                  </tr>
                </thead>
                <tbody className="font-helvetica">
                  {recentMatches.map((match, index) => (
                    <tr key={index} className="hover:bg-base-100">
                      <td className="text-gray-400">{match.date}</td>
                      <td className="text-white">{match.opponent}</td>
                      <td className="text-primary font-righteous">{match.goals}</td>
                      <td className="text-primary font-righteous">{match.assists}</td>
                      <td>
                        <span className={`badge ${match.result.startsWith('W') ? 'badge-success' : match.result.startsWith('D') ? 'badge-warning' : 'badge-error'}`}>
                          {match.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
