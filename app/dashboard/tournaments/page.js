"use client";

import Link from "next/link";
import TournamentCard from "../../components/ui/TournamentCard";

export default function PlayerTournamentsPage() {
  const myTournaments = [
    {
      id: 1,
      name: "Cash Cup 5v5 Championship",
      description: "Elite 5v5 tournament for the best teams in Jeddah",
      status: "upcoming",
      startDate: "Nov 15, 2024",
      prizePool: "10,000 SAR",
      teamsRegistered: 12,
      maxTeams: 16,
      entryFee: "500 SAR",
      myTeam: "Strike Force",
      checkedIn: false
    },
    {
      id: 2,
      name: "Ramadan Cup 2024",
      description: "Special tournament during the holy month",
      status: "ongoing",
      startDate: "Oct 20, 2024",
      prizePool: "15,000 SAR",
      teamsRegistered: 16,
      maxTeams: 16,
      entryFee: "750 SAR",
      myTeam: "Strike Force",
      checkedIn: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            MY TOURNAMENTS
          </h1>
          <p className="font-helvetica text-white">
            View all tournaments you're registered for
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myTournaments.map(tournament => (
            <div key={tournament.id} className="relative">
              <TournamentCard tournament={tournament} />
              {!tournament.checkedIn && tournament.status === 'upcoming' && (
                <div className="absolute top-4 right-4 z-10">
                  <Link href="/dashboard/check-in" className="btn btn-primary btn-sm font-righteous">
                    Check In
                  </Link>
                </div>
              )}
              {tournament.checkedIn && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="badge badge-success gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    Checked In
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {myTournaments.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h3 className="font-righteous text-2xl text-white mb-2">No Tournaments</h3>
            <p className="font-helvetica text-gray-400 mb-4">You're not registered for any tournaments yet</p>
            <Link href="/events" className="btn btn-primary font-righteous">
              Browse Tournaments
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
