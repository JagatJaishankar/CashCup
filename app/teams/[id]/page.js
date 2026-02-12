"use client";

import Link from "next/link";
import PlayerCard from "../../components/ui/PlayerCard";
import StatCard from "../../components/ui/StatCard";
import { use } from "react";

export default function TeamProfilePage({ params }) {
  const { id } = use(params);

  const team = {
    id: id,
    name: "Strike Force",
    logo: null,
    manager: "Hassan Al-Dosari",
    foundedDate: "Jan 2023",
    homeVenue: "Al-Hamra Sports Complex",
    description: "Strike Force is one of Jeddah's premier football teams, known for our attacking style and commitment to developing young talent. We compete at the highest level in Cash Cup tournaments.",
    contactEmail: "strikeforce@example.com",
    socialMedia: { instagram: "@strikeforce", twitter: "@strikeforce_fc" },
    statistics: { tournamentsWon: 3, matchesPlayed: 45, wins: 28, draws: 10, losses: 7, winRate: 62 }
  };

  const roster = [
    { id: 1, name: "Ahmed Al-Qahtani", position: "FWD", team: team.name, image: null, goals: 15, assists: 8, matches: 22 },
    { id: 3, name: "Khaled Ibrahim", position: "DEF", team: team.name, image: null, goals: 2, assists: 4, matches: 24 },
    { id: 4, name: "Omar Saleh", position: "GK", team: team.name, image: null, goals: 0, assists: 0, matches: 18 }
  ];

  const recentMatches = [
    { date: "Oct 20", opponent: "Thunder FC", score: "3 - 1", result: "W" },
    { date: "Oct 18", opponent: "Red Lions", score: "1 - 1", result: "D" },
    { date: "Oct 15", opponent: "Eagles United", score: "2 - 0", result: "W" },
    { date: "Oct 12", opponent: "Desert Warriors", score: "0 - 2", result: "L" }
  ];

  const trophies = [
    { name: "Summer Cup 2024", date: "Sep 2024" },
    { name: "Spring League 2024", date: "May 2024" },
    { name: "Winter Championship 2023", date: "Dec 2023" }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Cover */}
      <section className="h-48 bg-base-200 relative">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
            <rect x="50" y="150" width="900" height="200" stroke="#0a0a0a" strokeWidth="2" fill="none"/>
            <circle cx="500" cy="250" r="50" stroke="#0a0a0a" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Team Header */}
      <section className="bg-base-100 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 pb-6">
            <div className="w-28 h-28 bg-secondary flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="font-heading text-4xl text-white">{team.name.charAt(0)}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <Link href="/teams" className="font-body text-sm text-neutral/50 hover:text-primary transition-colors">
                  Teams
                </Link>
                <span className="text-neutral/30">/</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl text-secondary mb-2">{team.name}</h1>
              <div className="flex flex-wrap gap-4 font-body text-sm text-neutral/50">
                <span>Founded {team.foundedDate}</span>
                <span>Manager: {team.manager}</span>
                <span>{team.homeVenue}</span>
              </div>
            </div>

            <button className="btn btn-primary font-heading text-sm">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-4">About the Team</h2>
              <p className="font-body text-neutral/70">{team.description}</p>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="font-heading text-2xl text-secondary mb-6">
                Team <span className="text-primary">Statistics</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard label="Tournaments Won" value={team.statistics.tournamentsWon} />
                <StatCard label="Matches Played" value={team.statistics.matchesPlayed} />
                <StatCard label="Wins" value={team.statistics.wins} />
                <StatCard label="Draws" value={team.statistics.draws} />
                <StatCard label="Losses" value={team.statistics.losses} />
                <StatCard label="Win Rate" value={`${team.statistics.winRate}%`} />
              </div>
            </div>

            {/* Roster */}
            <div>
              <h2 className="font-heading text-2xl text-secondary mb-6">
                Team <span className="text-primary">Roster</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roster.map(player => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/players" className="btn btn-outline font-heading text-sm">
                  View All Players
                </Link>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">Recent Matches</h2>
              <div className="space-y-3">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-base-200">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="font-body text-sm text-neutral/50 w-16">{match.date}</span>
                      <span className="font-heading text-secondary">vs {match.opponent}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-heading text-lg text-secondary">{match.score}</span>
                      <span className={`px-2 py-1 text-xs font-heading ${
                        match.result === 'W' ? 'bg-success/10 text-success' :
                        match.result === 'D' ? 'bg-warning/10 text-warning' :
                        'bg-error/10 text-error'
                      }`}>
                        {match.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trophies */}
            <div className="bg-secondary text-white p-6">
              <h3 className="font-heading text-sm text-primary mb-4">Trophy Cabinet</h3>
              <div className="space-y-4">
                {trophies.map((trophy, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <p className="font-heading text-white">{trophy.name}</p>
                      <p className="font-body text-sm text-white/50">{trophy.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h3 className="font-heading text-sm text-secondary mb-4">Contact</h3>
              <div className="space-y-3 font-body text-sm">
                <div>
                  <p className="text-neutral/40">Email</p>
                  <a href={`mailto:${team.contactEmail}`} className="text-primary hover:underline">
                    {team.contactEmail}
                  </a>
                </div>
                <div>
                  <p className="text-neutral/40">Social Media</p>
                  <div className="flex gap-3 mt-1">
                    <a href="#" className="text-primary hover:underline">Instagram</a>
                    <a href="#" className="text-primary hover:underline">Twitter</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Team CTA */}
            <div className="bg-primary p-6">
              <h3 className="font-heading text-sm text-secondary mb-2">Join Our Team</h3>
              <p className="font-body text-sm text-secondary/70 mb-4">
                Interested in playing for {team.name}? Send us your profile.
              </p>
              <button className="btn btn-secondary w-full font-heading text-sm">
                Apply to Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
