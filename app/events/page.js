"use client";

import { useState } from "react";
import TournamentCard from "../components/ui/TournamentCard";

// Mock data
const tournaments = [
  {
    id: 1,
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament for the best teams in Jeddah",
    status: "registration",
    startDate: "Nov 15, 2024",
    prizePool: "10,000 SAR",
    teamsRegistered: 12,
    maxTeams: 16,
    entryFee: "500 SAR"
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
    entryFee: "1,000 SAR"
  },
  {
    id: 3,
    name: "Ramadan Cup 2024",
    description: "Special tournament during the holy month",
    status: "ongoing",
    startDate: "Oct 20, 2024",
    prizePool: "15,000 SAR",
    teamsRegistered: 16,
    maxTeams: 16,
    entryFee: "750 SAR"
  },
  {
    id: 4,
    name: "Summer Knockout",
    description: "Fast-paced knockout tournament",
    status: "completed",
    startDate: "Sep 1, 2024",
    prizePool: "8,000 SAR",
    teamsRegistered: 8,
    maxTeams: 8,
    entryFee: "400 SAR"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const filteredTournaments = tournaments.filter(t =>
    filter === "all" ? true : t.status === filter
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-righteous text-5xl md:text-6xl mb-4">
            TOURNAMENT <span className="text-primary">EVENTS</span>
          </h1>
          <p className="font-helvetica text-xl text-gray-300 max-w-2xl">
            Browse and register for upcoming football tournaments. Compete for cash prizes and glory!
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-base-100 border-b-2 border-primary sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="tabs tabs-boxed bg-transparent gap-2 py-4">
            <button
              className={`tab font-righteous ${filter === "all" ? "tab-active bg-primary text-black" : "bg-base-200 text-white hover:text-primary"}`}
              onClick={() => setFilter("all")}
            >
              All Events
            </button>
            <button
              className={`tab font-righteous ${filter === "registration" ? "tab-active bg-primary text-black" : "bg-base-200 text-white hover:text-primary"}`}
              onClick={() => setFilter("registration")}
            >
              Open Registration
            </button>
            <button
              className={`tab font-righteous ${filter === "upcoming" ? "tab-active bg-primary text-black" : "bg-base-200 text-white hover:text-primary"}`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`tab font-righteous ${filter === "ongoing" ? "tab-active bg-primary text-black" : "bg-base-200 text-white hover:text-primary"}`}
              onClick={() => setFilter("ongoing")}
            >
              Ongoing
            </button>
            <button
              className={`tab font-righteous ${filter === "completed" ? "tab-active bg-primary text-black" : "bg-base-200 text-white hover:text-primary"}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-righteous text-2xl text-white">
              Showing {filteredTournaments.length} {filter !== "all" ? filter : ""} tournament{filteredTournaments.length !== 1 ? "s" : ""}
            </h2>

            {/* Sort Dropdown */}
            <select className="select select-bordered select-sm font-helvetica">
              <option>Sort by Date</option>
              <option>Sort by Prize Pool</option>
              <option>Sort by Teams</option>
            </select>
          </div>

          {filteredTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <h3 className="font-righteous text-2xl text-white mb-2">No tournaments found</h3>
              <p className="font-helvetica text-gray-400">Check back later for new events</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-base-100 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-righteous text-4xl mb-4">
            WANT TO HOST A <span className="text-primary">TOURNAMENT?</span>
          </h2>
          <p className="font-helvetica text-lg text-gray-300 mb-8">
            Contact our team to organize your own professional football tournament
          </p>
          <a href="mailto:cashcup.info@gmail.com" className="btn btn-primary btn-lg font-righteous">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
