"use client";

import { useState } from "react";
import TournamentCard from "../components/ui/TournamentCard";

const tournaments = [
  {
    id: 1,
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament for top teams in Jeddah",
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

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "registration", label: "Open Registration" },
    { value: "upcoming", label: "Upcoming" },
    { value: "ongoing", label: "Ongoing" },
    { value: "completed", label: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-base-100 py-16 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
            Tournament <span className="text-primary">Events</span>
          </h1>
          <p className="font-body text-lg text-neutral/60 max-w-2xl">
            Browse and register for upcoming football tournaments. Compete for cash prizes and recognition.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-base-200 border-b border-base-300 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={`px-4 py-2 text-sm font-heading whitespace-nowrap transition-colors ${
                  filter === option.value
                    ? "bg-primary text-white"
                    : "bg-base-100 text-neutral/70 hover:text-primary border border-base-300"
                }`}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-12 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="font-body text-neutral/60">
              Showing {filteredTournaments.length} {filter !== "all" ? filter : ""} tournament{filteredTournaments.length !== 1 ? "s" : ""}
            </p>

            <select className="px-3 py-2 border border-base-300 bg-base-100 font-body text-sm">
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
            <div className="text-center py-20 bg-base-200 border border-base-300">
              <svg className="w-16 h-16 mx-auto text-neutral/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <h3 className="font-heading text-xl text-secondary mb-2">No tournaments found</h3>
              <p className="font-body text-neutral/50">Check back later for new events</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-secondary mb-4">
            Want to Host a <span className="text-primary">Tournament?</span>
          </h2>
          <p className="font-body text-neutral/60 mb-8">
            Contact our team to organize your own professional football tournament
          </p>
          <a href="mailto:cashcup.info@gmail.com" className="btn btn-primary font-heading text-sm tracking-wider">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
