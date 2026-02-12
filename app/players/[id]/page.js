"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";
import { use } from "react";

export default function PlayerProfilePage({ params }) {
  const { id } = use(params);

  const player = {
    id: id,
    name: "Ahmed Al-Qahtani",
    position: "Forward",
    jerseyNumber: 10,
    dateOfBirth: "Jan 15, 1998",
    age: 26,
    height: "178 cm",
    weight: "72 kg",
    preferredFoot: "Right",
    nationality: "Saudi Arabia",
    currentTeam: "Strike Force",
    contractEnd: "Dec 31, 2024",
    bio: "Ahmed is a prolific striker known for his speed, technical ability, and clinical finishing. He has been a key player for Strike Force and has won multiple MVP awards in Cash Cup tournaments.",
    image: null,
    statistics: {
      matchesPlayed: 22,
      goals: 15,
      assists: 8,
      yellowCards: 2,
      redCards: 0,
      mvpAwards: 3
    },
    achievements: [
      { title: "Top Scorer", tournament: "Summer Cup 2024", date: "Sep 2024" },
      { title: "MVP", tournament: "Spring League 2024", date: "May 2024" },
      { title: "Golden Boot", tournament: "Ramadan Cup 2024", date: "Mar 2024" }
    ]
  };

  const recentMatches = [
    { date: "Oct 20", opponent: "Thunder FC", goals: 2, assists: 1, result: "W 3-1" },
    { date: "Oct 18", opponent: "Red Lions", goals: 1, assists: 0, result: "D 1-1" },
    { date: "Oct 15", opponent: "Eagles United", goals: 0, assists: 2, result: "W 2-0" }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="bg-base-100 py-12 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/players" className="font-body text-sm text-neutral/50 hover:text-primary transition-colors">
              Players
            </Link>
            <span className="text-neutral/30">/</span>
            <span className="font-body text-sm text-neutral/70">{player.name}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Player Image */}
            <div className="w-40 h-40 bg-base-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-24 h-24 text-neutral/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>

            {/* Player Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="font-heading text-3xl md:text-5xl text-secondary">
                  {player.name}
                </h1>
                <span className="px-3 py-1 bg-primary text-white font-heading text-sm">
                  #{player.jerseyNumber}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-body mb-6">
                <div>
                  <p className="text-neutral/40 text-sm">Position</p>
                  <p className="font-heading text-secondary">{player.position}</p>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm">Team</p>
                  <Link href={`/teams/1`} className="font-heading text-primary hover:underline">
                    {player.currentTeam}
                  </Link>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm">Age</p>
                  <p className="font-heading text-secondary">{player.age} years</p>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm">Nationality</p>
                  <p className="font-heading text-secondary">{player.nationality}</p>
                </div>
              </div>

              <p className="font-body text-neutral/60 max-w-2xl">
                {player.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Statistics */}
            <div>
              <h2 className="font-heading text-2xl text-secondary mb-6">
                Career <span className="text-primary">Statistics</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard label="Matches Played" value={player.statistics.matchesPlayed} />
                <StatCard label="Goals" value={player.statistics.goals} />
                <StatCard label="Assists" value={player.statistics.assists} />
                <StatCard label="Yellow Cards" value={player.statistics.yellowCards} />
                <StatCard label="Red Cards" value={player.statistics.redCards} />
                <StatCard label="MVP Awards" value={player.statistics.mvpAwards} />
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">Achievements</h2>
              <div className="space-y-4">
                {player.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-base-200">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-secondary">{achievement.title}</h3>
                      <p className="font-body text-sm text-neutral/50">{achievement.tournament}</p>
                      <p className="font-body text-xs text-neutral/40">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">Recent Matches</h2>
              <div className="overflow-x-auto">
                <table className="w-full font-body text-sm">
                  <thead>
                    <tr className="text-left text-neutral/40 border-b border-base-300">
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Opponent</th>
                      <th className="pb-3">Goals</th>
                      <th className="pb-3">Assists</th>
                      <th className="pb-3">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMatches.map((match, index) => (
                      <tr key={index} className="border-b border-base-200">
                        <td className="py-3 text-neutral/60">{match.date}</td>
                        <td className="py-3 font-heading text-secondary">{match.opponent}</td>
                        <td className="py-3 font-heading text-primary">{match.goals}</td>
                        <td className="py-3 font-heading text-primary">{match.assists}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 text-xs font-heading ${
                            match.result.startsWith('W') ? 'bg-success/10 text-success' :
                            match.result.startsWith('D') ? 'bg-warning/10 text-warning' :
                            'bg-error/10 text-error'
                          }`}>
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Physical Stats */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h3 className="font-heading text-sm text-secondary mb-4">Physical Attributes</h3>
              <div className="space-y-3 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral/50">Height</span>
                  <span className="font-heading text-secondary">{player.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral/50">Weight</span>
                  <span className="font-heading text-secondary">{player.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral/50">Preferred Foot</span>
                  <span className="font-heading text-secondary">{player.preferredFoot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral/50">Date of Birth</span>
                  <span className="font-heading text-secondary">{player.dateOfBirth}</span>
                </div>
              </div>
            </div>

            {/* Contract Info */}
            <div className="bg-secondary text-white p-6">
              <h3 className="font-heading text-sm text-primary mb-4">Contract Status</h3>
              <div className="space-y-4 font-body text-sm">
                <div>
                  <p className="text-white/50">Current Team</p>
                  <Link href="/teams/1" className="font-heading text-primary hover:underline">
                    {player.currentTeam}
                  </Link>
                </div>
                <div>
                  <p className="text-white/50">Contract Expires</p>
                  <p className="font-heading text-white">{player.contractEnd}</p>
                </div>
              </div>
            </div>

            {/* Contact for Transfer */}
            <div className="bg-primary p-6">
              <h3 className="font-heading text-sm text-secondary mb-2">Interested in Transfer?</h3>
              <p className="font-body text-sm text-secondary/70 mb-4">
                Contact the player's team for transfer inquiries
              </p>
              <button className="btn btn-secondary w-full font-heading text-sm">
                Contact Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
