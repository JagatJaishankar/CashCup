"use client";

import Link from "next/link";
import MatchCard from "../../components/ui/MatchCard";
import { use } from "react";

export default function EventDetailsPage({ params }) {
  const { id } = use(params);

  // Mock data - would fetch based on id
  const tournament = {
    id: id,
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament for the best teams in Jeddah. This championship brings together the most skilled players and competitive teams in the region for an unforgettable football experience.",
    status: "registration",
    startDate: "Nov 15, 2024",
    endDate: "Nov 22, 2024",
    venue: "Al-Hamra Sports Complex, Jeddah",
    prizePool: "10,000 SAR",
    distribution: {
      first: "5,000 SAR",
      second: "3,000 SAR",
      third: "2,000 SAR"
    },
    teamsRegistered: 12,
    maxTeams: 16,
    entryFee: "500 SAR",
    format: "Group Stage + Knockout",
    rules: [
      "5 players per team on the field",
      "Matches are 20 minutes (10min halves)",
      "Rolling substitutions allowed",
      "Yellow card = 2 min penalty",
      "Red card = player sent off, team plays short",
      "Teams must register minimum 7 days before start"
    ]
  };

  const registeredTeams = [
    { id: 1, name: "Strike Force", players: 8 },
    { id: 2, name: "Thunder FC", players: 10 },
    { id: 3, name: "Red Lions", players: 9 },
    { id: 4, name: "Eagles United", players: 7 },
  ];

  const matches = [
    {
      id: 1,
      tournament: tournament.name,
      homeTeam: "Strike Force",
      awayTeam: "Thunder FC",
      status: "scheduled",
      date: "Nov 15, 2024",
      time: "18:00",
      venue: tournament.venue
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/events" className="btn btn-ghost btn-sm text-primary">
              ← Back to Events
            </Link>
            <span className={`badge ${tournament.status === "registration" ? "badge-success" : "badge-info"} font-helvetica uppercase`}>
              {tournament.status}
            </span>
          </div>
          <h1 className="font-righteous text-4xl md:text-6xl text-primary mb-4">
            {tournament.name}
          </h1>
          <p className="font-helvetica text-xl text-gray-300 max-w-3xl">
            {tournament.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Info */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Tournament Information</h2>

                <div className="grid grid-cols-2 gap-4 font-helvetica">
                  <div>
                    <p className="text-gray-500 text-sm">Start Date</p>
                    <p className="font-righteous text-lg">{tournament.startDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">End Date</p>
                    <p className="font-righteous text-lg">{tournament.endDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Venue</p>
                    <p className="font-righteous text-lg">{tournament.venue}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Format</p>
                    <p className="font-righteous text-lg">{tournament.format}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Tournament Rules</h2>
                <ul className="space-y-2 font-helvetica">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Registered Teams */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">
                  Registered Teams ({tournament.teamsRegistered}/{tournament.maxTeams})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {registeredTeams.map(team => (
                    <Link key={team.id} href={`/teams/${team.id}`}>
                      <div className="p-4 bg-base-200 rounded-lg hover:bg-primary hover:text-black transition-all cursor-pointer">
                        <h3 className="font-righteous text-lg">{team.name}</h3>
                        <p className="font-helvetica text-sm opacity-70">{team.players} players</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixtures */}
            {matches.length > 0 && (
              <div className="card bg-base-200 shadow-xl border-2 border-base-300">
                <div className="card-body">
                  <h2 className="card-title font-righteous text-2xl mb-4">Fixtures</h2>
                  <div className="space-y-4">
                    {matches.map(match => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prize Pool */}
            <div className="card bg-black text-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-righteous text-primary">Prize Pool</h2>
                <div className="text-center py-4">
                  <div className="font-righteous text-5xl text-primary mb-4">
                    {tournament.prizePool}
                  </div>
                  <div className="divider"></div>
                  <div className="space-y-2 font-helvetica">
                    <div className="flex justify-between">
                      <span className="text-primary">1st Place:</span>
                      <span>{tournament.distribution.first}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">2nd Place:</span>
                      <span>{tournament.distribution.second}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">3rd Place:</span>
                      <span>{tournament.distribution.third}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration */}
            <div className="card bg-base-200 shadow-xl border-2 border-primary">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-2">Entry Fee</h3>
                <div className="font-righteous text-3xl text-primary mb-4">
                  {tournament.entryFee}
                </div>
                <p className="font-helvetica text-sm text-gray-400 mb-4">
                  {tournament.maxTeams - tournament.teamsRegistered} spots remaining
                </p>
                {tournament.status === "registration" ? (
                  <button className="btn btn-primary btn-block font-righteous">
                    Register Your Team
                  </button>
                ) : (
                  <button className="btn btn-disabled btn-block font-righteous">
                    Registration Closed
                  </button>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="font-righteous text-lg mb-2">Need Help?</h3>
                <p className="font-helvetica text-sm text-gray-400 mb-4">
                  Contact our team for any questions about the tournament
                </p>
                <a href="mailto:cashcup.info@gmail.com" className="btn btn-sm btn-outline font-helvetica">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
