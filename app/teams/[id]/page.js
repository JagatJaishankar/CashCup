"use client";

import Link from "next/link";
import PlayerCard from "../../components/ui/PlayerCard";
import StatCard from "../../components/ui/StatCard";
import { use } from "react";

export default function TeamProfilePage({ params }) {
  const { id } = use(params);

  // Mock data - would fetch based on id
  const team = {
    id: id,
    name: "Strike Force",
    logo: null,
    coverImage: null,
    manager: "Hassan Al-Dosari",
    foundedDate: "Jan 2023",
    homeVenue: "Al-Hamra Sports Complex",
    description: "Strike Force is one of Jeddah's premier football teams, known for our attacking style and commitment to developing young talent. We compete at the highest level in Cash Cup tournaments and pride ourselves on our professional approach.",
    contactEmail: "strikeforce@example.com",
    socialMedia: {
      instagram: "@strikeforce",
      twitter: "@strikeforce_fc"
    },
    statistics: {
      tournamentsWon: 3,
      matchesPlayed: 45,
      wins: 28,
      draws: 10,
      losses: 7,
      winRate: 62
    }
  };

  const roster = [
    {
      id: 1,
      name: "Ahmed Al-Qahtani",
      position: "FWD",
      team: team.name,
      image: null,
      goals: 15,
      assists: 8,
      matches: 22
    },
    {
      id: 3,
      name: "Khaled Ibrahim",
      position: "DEF",
      team: team.name,
      image: null,
      goals: 2,
      assists: 4,
      matches: 24
    },
    {
      id: 4,
      name: "Omar Saleh",
      position: "GK",
      team: team.name,
      image: null,
      goals: 0,
      assists: 0,
      matches: 18
    }
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
    <div className="min-h-screen bg-black">
      {/* Cover Image */}
      <section className="h-64 bg-secondary relative">
        {/* Football field pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
            <rect x="50" y="150" width="900" height="200" stroke="#DBFF00" strokeWidth="2" fill="none"/>
            <circle cx="500" cy="250" r="50" stroke="#DBFF00" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Team Header */}
      <section className="bg-base-200 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16 pb-6">
            {/* Team Logo */}
            <div className="w-32 h-32 rounded-lg bg-primary border-4 border-white flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="font-righteous text-5xl text-black">{team.name.charAt(0)}</span>
            </div>

            {/* Team Info */}
            <div className="flex-1">
              <Link href="/teams" className="btn btn-ghost btn-sm text-primary mb-2">
                ← Back to Teams
              </Link>
              <h1 className="font-righteous text-4xl md:text-5xl mb-2">{team.name}</h1>
              <div className="flex flex-wrap gap-4 font-helvetica text-gray-400">
                <span>Founded: {team.foundedDate}</span>
                <span>•</span>
                <span>Manager: {team.manager}</span>
                <span>•</span>
                <span>Home: {team.homeVenue}</span>
              </div>
            </div>

            {/* Contact Button */}
            <button className="btn btn-primary font-righteous">
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
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">About the Team</h2>
                <p className="font-helvetica text-gray-700">{team.description}</p>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="font-righteous text-3xl mb-6">
                TEAM <span className="text-primary">STATISTICS</span>
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
              <h2 className="font-righteous text-3xl mb-6">
                TEAM <span className="text-primary">ROSTER</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roster.map(player => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/players" className="btn btn-outline btn-primary font-righteous">
                  View All Players
                </Link>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Recent Matches</h2>
                <div className="space-y-3">
                  {recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                      <div className="flex items-center gap-4 flex-1">
                        <span className="font-helvetica text-sm text-gray-500 w-20">{match.date}</span>
                        <span className="font-righteous">vs {match.opponent}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-righteous text-lg">{match.score}</span>
                        <span className={`badge ${match.result === 'W' ? 'badge-success' : match.result === 'D' ? 'badge-warning' : 'badge-error'} font-righteous`}>
                          {match.result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trophies */}
            <div className="card bg-black text-white shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4 text-primary">
                  Trophy Cabinet
                </h3>
                <div className="space-y-4">
                  {trophies.map((trophy, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <div>
                        <p className="font-righteous">{trophy.name}</p>
                        <p className="font-helvetica text-sm text-gray-400">{trophy.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4">Contact Information</h3>
                <div className="space-y-3 font-helvetica text-sm">
                  <div>
                    <p className="text-gray-500">Email</p>
                    <a href={`mailto:${team.contactEmail}`} className="text-primary hover:underline">
                      {team.contactEmail}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500">Social Media</p>
                    <div className="flex gap-2 mt-1">
                      <a href={`https://instagram.com/${team.socialMedia.instagram}`} className="text-primary hover:underline">
                        Instagram
                      </a>
                      <a href={`https://twitter.com/${team.socialMedia.twitter}`} className="text-primary hover:underline">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Team CTA */}
            <div className="card bg-primary shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-black mb-2">Join Our Team</h3>
                <p className="font-helvetica text-sm text-black mb-4">
                  Interested in playing for {team.name}? Send us your profile.
                </p>
                <button className="btn bg-black text-primary hover:bg-black/90 border-none font-righteous">
                  Apply to Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
