"use client";

import Link from "next/link";
import MatchCard from "../../components/ui/MatchCard";
import { use } from "react";

export default function EventDetailsPage({ params }) {
  const { id } = use(params);

  const tournament = {
    id: id,
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament bringing together the most skilled players and competitive teams in Jeddah for an unforgettable football experience.",
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
      "Red card = player sent off",
      "Teams must register 7 days before start"
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

  const statusStyles = {
    registration: "bg-success/10 text-success",
    upcoming: "bg-info/10 text-info",
    ongoing: "bg-warning/10 text-warning",
    completed: "bg-base-200 text-neutral/60"
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="bg-base-100 py-12 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/events" className="font-body text-sm text-neutral/50 hover:text-primary transition-colors">
              Events
            </Link>
            <span className="text-neutral/30">/</span>
            <span className={`px-2 py-1 text-xs font-heading uppercase ${statusStyles[tournament.status]}`}>
              {tournament.status}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl text-secondary mb-4">
            {tournament.name}
          </h1>
          <p className="font-body text-lg text-neutral/60 max-w-3xl">
            {tournament.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Info */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">Tournament Details</h2>
              <div className="grid grid-cols-2 gap-6 font-body">
                <div>
                  <p className="text-neutral/40 text-sm mb-1">Start Date</p>
                  <p className="font-heading text-secondary">{tournament.startDate}</p>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm mb-1">End Date</p>
                  <p className="font-heading text-secondary">{tournament.endDate}</p>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm mb-1">Venue</p>
                  <p className="font-heading text-secondary">{tournament.venue}</p>
                </div>
                <div>
                  <p className="text-neutral/40 text-sm mb-1">Format</p>
                  <p className="font-heading text-secondary">{tournament.format}</p>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">Tournament Rules</h2>
              <ul className="space-y-3 font-body text-neutral/70">
                {tournament.rules.map((rule, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-heading">0{index + 1}</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registered Teams */}
            <div className="bg-base-100 border border-base-300 p-6">
              <h2 className="font-heading text-xl text-secondary mb-6">
                Registered Teams ({tournament.teamsRegistered}/{tournament.maxTeams})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {registeredTeams.map(team => (
                  <Link key={team.id} href={`/teams/${team.id}`}>
                    <div className="p-4 border border-base-300 hover:border-primary transition-colors">
                      <h3 className="font-heading text-secondary">{team.name}</h3>
                      <p className="font-body text-sm text-neutral/50">{team.players} players</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fixtures */}
            {matches.length > 0 && (
              <div className="bg-base-100 border border-base-300 p-6">
                <h2 className="font-heading text-xl text-secondary mb-6">Fixtures</h2>
                <div className="space-y-4">
                  {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prize Pool */}
            <div className="bg-secondary text-white p-6">
              <h2 className="font-heading text-sm text-primary mb-4">Prize Pool</h2>
              <div className="text-center py-4">
                <div className="font-heading text-4xl text-white mb-6">
                  {tournament.prizePool}
                </div>
                <div className="space-y-3 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary">1st Place</span>
                    <span>{tournament.distribution.first}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">2nd Place</span>
                    <span>{tournament.distribution.second}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">3rd Place</span>
                    <span>{tournament.distribution.third}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration */}
            <div className="bg-base-100 border-2 border-primary p-6">
              <h3 className="font-heading text-sm text-secondary mb-2">Entry Fee</h3>
              <div className="font-heading text-3xl text-primary mb-4">
                {tournament.entryFee}
              </div>
              <p className="font-body text-sm text-neutral/50 mb-6">
                {tournament.maxTeams - tournament.teamsRegistered} spots remaining
              </p>
              {tournament.status === "registration" ? (
                <button className="btn btn-primary w-full font-heading text-sm">
                  Register Your Team
                </button>
              ) : (
                <button className="btn btn-disabled w-full font-heading text-sm">
                  Registration Closed
                </button>
              )}
            </div>

            {/* Contact */}
            <div className="bg-base-200 p-6">
              <h3 className="font-heading text-sm text-secondary mb-2">Need Help?</h3>
              <p className="font-body text-sm text-neutral/50 mb-4">
                Contact our team for questions about the tournament
              </p>
              <a href="mailto:cashcup.info@gmail.com" className="btn btn-outline btn-sm w-full font-body">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
