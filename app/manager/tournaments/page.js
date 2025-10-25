"use client";

import Link from "next/link";
import TournamentCard from "../../components/ui/TournamentCard";
import { useState } from "react";

export default function ManagerTournamentsPage() {
  const [activeTab, setActiveTab] = useState("registered");

  const registeredTournaments = [
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
      paid: true,
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
      paid: true,
      checkedIn: true
    }
  ];

  const availableTournaments = [
    {
      id: 3,
      name: "Winter Championship 2024",
      description: "End of year championship tournament",
      status: "registration",
      startDate: "Dec 1, 2024",
      prizePool: "20,000 SAR",
      teamsRegistered: 8,
      maxTeams: 16,
      entryFee: "1,000 SAR"
    },
    {
      id: 4,
      name: "New Year Cup",
      description: "Kick off the new year with this exciting tournament",
      status: "registration",
      startDate: "Jan 5, 2025",
      prizePool: "12,000 SAR",
      teamsRegistered: 4,
      maxTeams: 12,
      entryFee: "600 SAR"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/manager" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            TOURNAMENT MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Register your team and manage tournament participation
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-200 mb-8">
          <button
            className={`tab font-righteous ${activeTab === 'registered' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('registered')}
          >
            Registered ({registeredTournaments.length})
          </button>
          <button
            className={`tab font-righteous ${activeTab === 'available' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            Available ({availableTournaments.length})
          </button>
        </div>

        {/* Registered Tournaments */}
        {activeTab === 'registered' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {registeredTournaments.map(tournament => (
              <div key={tournament.id} className="relative">
                <TournamentCard tournament={tournament} />

                {/* Status Badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  {tournament.paid && (
                    <span className="badge badge-success gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      Paid
                    </span>
                  )}
                  {tournament.checkedIn && (
                    <span className="badge badge-success gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      Checked In
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`/events/${tournament.id}`}
                    className="btn btn-sm btn-outline btn-primary font-righteous"
                  >
                    View Details
                  </Link>
                  {!tournament.checkedIn && tournament.status === 'upcoming' && (
                    <button className="btn btn-sm btn-primary font-righteous">
                      Check In Team
                    </button>
                  )}
                  {tournament.status === 'ongoing' && (
                    <button className="btn btn-sm btn-primary font-righteous">
                      View Fixtures
                    </button>
                  )}
                </div>
              </div>
            ))}

            {registeredTournaments.length === 0 && (
              <div className="col-span-2 text-center py-20 bg-base-200 rounded-lg">
                <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="font-righteous text-2xl text-white mb-2">No Registered Tournaments</h3>
                <p className="font-helvetica text-gray-400 mb-4">
                  Your team is not registered for any tournaments yet
                </p>
                <button
                  onClick={() => setActiveTab('available')}
                  className="btn btn-primary font-righteous"
                >
                  Browse Available Tournaments
                </button>
              </div>
            )}
          </div>
        )}

        {/* Available Tournaments */}
        {activeTab === 'available' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableTournaments.map(tournament => (
              <div key={tournament.id} className="relative">
                <TournamentCard tournament={tournament} />

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={`/events/${tournament.id}`}
                    className="btn btn-sm btn-outline btn-primary font-righteous"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-sm btn-primary font-righteous">
                    Register Team
                  </button>
                </div>
              </div>
            ))}

            {availableTournaments.length === 0 && (
              <div className="col-span-2 text-center py-20 bg-base-200 rounded-lg">
                <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="font-righteous text-2xl text-white mb-2">No Available Tournaments</h3>
                <p className="font-helvetica text-gray-400">
                  There are no tournaments open for registration at the moment
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
