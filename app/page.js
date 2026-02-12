"use client";

import Link from "next/link";
import MatchCard from "./components/ui/MatchCard";
import TournamentCard from "./components/ui/TournamentCard";

const liveMatches = [
  {
    id: 1,
    tournament: "Cash Cup 4v4",
    homeTeam: "Strike Force",
    awayTeam: "Thunder FC",
    homeScore: 2,
    awayScore: 1,
    status: "live",
    date: "Today",
    time: "18:30",
    venue: "Al-Hamra Sports Complex",
  },
  {
    id: 2,
    tournament: "Cash Cup 4v4",
    homeTeam: "Red Lions",
    awayTeam: "Eagles United",
    homeScore: 0,
    awayScore: 0,
    status: "live",
    date: "Today",
    time: "19:00",
    venue: "Al-Hamra Sports Complex",
  },
];

const upcomingTournaments = [
  {
    id: 1,
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament for the best teams in Jeddah",
    status: "registration",
    startDate: "Nov 15, 2024",
    prizePool: "10,000 SAR",
    teamsRegistered: 12,
    maxTeams: 16,
    entryFee: "500 SAR",
  },
  {
    id: 2,
    name: "Winter League 2024",
    description: "Season-long competition with weekly matches",
    status: "upcoming",
    startDate: "Dec 1, 2024",
    prizePool: "25,000 SAR",
    teamsRegistered: 8,
    maxTeams: 20,
    entryFee: "1,000 SAR",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative bg-base-100 py-24 md:py-32 overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
            <rect x="50" y="150" width="900" height="200" stroke="#0a0a0a" strokeWidth="2" fill="none" />
            <circle cx="500" cy="250" r="50" stroke="#0a0a0a" strokeWidth="2" fill="none" />
            <line x1="500" y1="150" x2="500" y2="350" stroke="#0a0a0a" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 text-secondary tracking-tight">
              Football is <span className="text-primary">Life</span>
            </h1>
            <p className="font-body text-lg md:text-xl mb-10 text-neutral/70 max-w-2xl mx-auto leading-relaxed">
              Professional tournament management with transparent operations, digital contracts, and real-time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="btn btn-primary btn-lg font-heading text-sm tracking-wider">
                View Tournaments
              </Link>
              <Link href="/signup" className="btn btn-outline btn-secondary btn-lg font-heading text-sm tracking-wider">
                Join as Player
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
            <div className="stat-card text-center">
              <div className="font-heading text-4xl md:text-5xl text-secondary">250+</div>
              <div className="font-body text-sm text-neutral/60 mt-1">Active Players</div>
            </div>
            <div className="stat-card text-center">
              <div className="font-heading text-4xl md:text-5xl text-secondary">50+</div>
              <div className="font-body text-sm text-neutral/60 mt-1">Teams</div>
            </div>
            <div className="stat-card text-center">
              <div className="font-heading text-4xl md:text-5xl text-secondary">15+</div>
              <div className="font-body text-sm text-neutral/60 mt-1">Tournaments</div>
            </div>
            <div className="stat-card text-center">
              <div className="font-heading text-4xl md:text-5xl text-secondary">100K+</div>
              <div className="font-body text-sm text-neutral/60 mt-1">SAR in Prizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary">
              Live <span className="text-primary">Matches</span>
            </h2>
            <Link href="/events" className="btn btn-ghost btn-sm font-body text-primary hover:bg-primary/10">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {liveMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-base-100 border border-base-300">
              <p className="font-body text-neutral/60">No live matches at the moment</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary">
              Upcoming <span className="text-primary">Tournaments</span>
            </h2>
            <Link href="/events" className="btn btn-ghost btn-sm font-body text-primary hover:bg-primary/10">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-14 text-secondary">
            Why <span className="text-primary">Cash Cup?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-base-100 border border-base-300 p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-secondary mb-3">Professional Management</h3>
              <p className="font-body text-neutral/70 text-sm leading-relaxed">
                Organized tournaments with transparent operations and digital contracts
              </p>
            </div>

            <div className="bg-base-100 border border-base-300 p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-secondary mb-3">Real-Time Updates</h3>
              <p className="font-body text-neutral/70 text-sm leading-relaxed">
                Live score tracking and instant match notifications
              </p>
            </div>

            <div className="bg-base-100 border border-base-300 p-8 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-secondary mb-3">Cash Prizes</h3>
              <p className="font-body text-neutral/70 text-sm leading-relaxed">
                Competitive prize pools with multiple payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Ready to Compete?
          </h2>
          <p className="font-body text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Join hundreds of players and teams competing in professional tournaments across Jeddah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn btn-primary btn-lg font-heading text-sm tracking-wider">
              Register Now
            </Link>
            <Link href="/events" className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary btn-lg font-heading text-sm tracking-wider">
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
