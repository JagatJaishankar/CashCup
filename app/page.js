"use client";

import Link from "next/link";
import MatchCard from "./components/ui/MatchCard";
import TournamentCard from "./components/ui/TournamentCard";

// Mock data - will be replaced with API calls
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Football field pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
            <rect
              x="50"
              y="150"
              width="900"
              height="200"
              stroke="#DBFF00"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="500"
              cy="250"
              r="50"
              stroke="#DBFF00"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="500"
              y1="150"
              x2="500"
              y2="350"
              stroke="#DBFF00"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="font-righteous text-5xl md:text-7xl mb-6">
              FOOTBALL IS <span className="text-primary">LIFE</span>
            </h1>
            <p className="font-helvetica text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform local football tournaments into professionally managed
              events with transparent operations and real-time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="btn btn-primary btn-lg font-righteous text-black"
              >
                View Tournaments
              </Link>
              <Link
                href="/signup"
                className="btn btn-outline btn-primary btn-lg font-righteous"
              >
                Join as Player
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="font-righteous text-4xl text-primary">250+</div>
              <div className="font-helvetica text-gray-400">Active Players</div>
            </div>
            <div className="text-center">
              <div className="font-righteous text-4xl text-primary">50+</div>
              <div className="font-helvetica text-gray-400">
                Registered Teams
              </div>
            </div>
            <div className="text-center">
              <div className="font-righteous text-4xl text-primary">15+</div>
              <div className="font-helvetica text-gray-400">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="font-righteous text-4xl text-primary">100K+</div>
              <div className="font-helvetica text-gray-400">SAR in Prizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-righteous text-4xl text-white">
              LIVE <span className="text-primary">MATCHES</span>
            </h2>
            <Link
              href="/events"
              className="btn btn-ghost btn-sm text-primary font-helvetica"
            >
              View All →
            </Link>
          </div>

          {liveMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-base-200 rounded-lg">
              <p className="font-helvetica text-gray-400">
                No live matches at the moment
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-righteous text-4xl text-white">
              UPCOMING <span className="text-primary">TOURNAMENTS</span>
            </h2>
            <Link
              href="/events"
              className="btn btn-ghost btn-sm text-primary font-helvetica"
            >
              View All →
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
      <section className="py-16 bg-base-100 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-righteous text-4xl text-center mb-12">
            WHY <span className="text-primary">CASH CUP?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-righteous text-xl text-primary mb-2">
                Professional Management
              </h3>
              <p className="font-helvetica text-gray-300">
                Organized tournaments with transparent operations and digital
                contracts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <h3 className="font-righteous text-xl text-primary mb-2">
                Real-Time Updates
              </h3>
              <p className="font-helvetica text-gray-300">
                Live score tracking and instant match notifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="font-righteous text-xl text-primary mb-2">
                Cash Prizes
              </h3>
              <p className="font-helvetica text-gray-300">
                Competitive prize pools with multiple payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-righteous text-4xl md:text-5xl text-black mb-6">
            READY TO COMPETE?
          </h2>
          <p className="font-helvetica text-lg text-black mb-8">
            Join hundreds of players and teams competing in professional
            tournaments across Jeddah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn btn-lg bg-black text-primary hover:bg-black/90 font-righteous border-none"
            >
              Register Now
            </Link>
            <Link
              href="/events"
              className="btn btn-lg btn-outline border-black text-black hover:bg-black hover:text-primary font-righteous"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
// random comment
