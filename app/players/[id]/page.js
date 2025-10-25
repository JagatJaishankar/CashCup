"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";
import { use } from "react";

export default function PlayerProfilePage({ params }) {
  const { id } = use(params);

  // Mock data - would fetch based on id
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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/players" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Players
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Player Image */}
            <div className="w-48 h-48 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <svg className="w-32 h-32 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>

            {/* Player Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="font-righteous text-4xl md:text-6xl text-primary">
                  {player.name}
                </h1>
                <div className="badge badge-primary badge-lg font-righteous text-black">
                  #{player.jerseyNumber}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-helvetica mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Position</p>
                  <p className="text-white font-righteous text-lg">{player.position}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Team</p>
                  <Link href={`/teams/1`} className="text-primary hover:underline font-righteous text-lg">
                    {player.currentTeam}
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Age</p>
                  <p className="text-white font-righteous text-lg">{player.age} years</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Nationality</p>
                  <p className="text-white font-righteous text-lg">{player.nationality}</p>
                </div>
              </div>

              <p className="font-helvetica text-gray-300 max-w-2xl">
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
              <h2 className="font-righteous text-3xl mb-6">
                CAREER <span className="text-primary">STATISTICS</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard
                  label="Matches Played"
                  value={player.statistics.matchesPlayed}
                  icon={<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>}
                />
                <StatCard
                  label="Goals"
                  value={player.statistics.goals}
                  icon={<circle cx="12" cy="12" r="10"/>}
                />
                <StatCard
                  label="Assists"
                  value={player.statistics.assists}
                  icon={<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>}
                />
                <StatCard
                  label="Yellow Cards"
                  value={player.statistics.yellowCards}
                />
                <StatCard
                  label="Red Cards"
                  value={player.statistics.redCards}
                />
                <StatCard
                  label="MVP Awards"
                  value={player.statistics.mvpAwards}
                  icon={<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>}
                />
              </div>
            </div>

            {/* Achievements */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Achievements</h2>
                <div className="space-y-4">
                  {player.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-base-200 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-righteous text-lg">{achievement.title}</h3>
                        <p className="font-helvetica text-sm text-gray-400">{achievement.tournament}</p>
                        <p className="font-helvetica text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Recent Matches</h2>
                <div className="overflow-x-auto">
                  <table className="table font-helvetica">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMatches.map((match, index) => (
                        <tr key={index} className="hover">
                          <td>{match.date}</td>
                          <td className="font-righteous">{match.opponent}</td>
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Physical Stats */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4">Physical Attributes</h3>
                <div className="space-y-3 font-helvetica">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Height:</span>
                    <span className="font-righteous">{player.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Weight:</span>
                    <span className="font-righteous">{player.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Preferred Foot:</span>
                    <span className="font-righteous">{player.preferredFoot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date of Birth:</span>
                    <span className="font-righteous">{player.dateOfBirth}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Info */}
            <div className="card bg-black text-white shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4 text-primary">Contract Status</h3>
                <div className="space-y-3 font-helvetica">
                  <div>
                    <p className="text-gray-400 text-sm">Current Team</p>
                    <Link href="/teams/1" className="font-righteous text-lg text-primary hover:underline">
                      {player.currentTeam}
                    </Link>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Contract Expires</p>
                    <p className="font-righteous text-lg">{player.contractEnd}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Transfer */}
            <div className="card bg-primary shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-black mb-2">Interested in Transfer?</h3>
                <p className="font-helvetica text-sm text-black mb-4">
                  Contact the player's team for transfer inquiries
                </p>
                <button className="btn bg-black text-primary hover:bg-black/90 border-none font-righteous">
                  Contact Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
