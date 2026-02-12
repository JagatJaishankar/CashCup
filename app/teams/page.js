"use client";

import { useState } from "react";
import TeamCard from "../components/ui/TeamCard";

const teams = [
  { id: 1, name: "Strike Force", logo: null, manager: "Hassan Al-Dosari", playerCount: 12, wins: 18, trophies: 3 },
  { id: 2, name: "Thunder FC", logo: null, manager: "Khalid Mansour", playerCount: 15, wins: 22, trophies: 5 },
  { id: 3, name: "Red Lions", logo: null, manager: "Omar Ibrahim", playerCount: 10, wins: 14, trophies: 2 },
  { id: 4, name: "Eagles United", logo: null, manager: "Ahmed Saleh", playerCount: 11, wins: 16, trophies: 4 },
  { id: 5, name: "Desert Warriors", logo: null, manager: "Fahad Al-Otaibi", playerCount: 9, wins: 12, trophies: 1 },
  { id: 6, name: "Golden Stars", logo: null, manager: "Mohammed Hassan", playerCount: 13, wins: 20, trophies: 3 }
];

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (team.manager && team.manager.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-base-100 py-16 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
            Team <span className="text-primary">Directory</span>
          </h1>
          <p className="font-body text-lg text-neutral/60 max-w-2xl">
            Explore teams competing in Cash Cup tournaments. View rosters, achievements, and statistics.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-base-200 py-6 sticky top-16 z-40 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search teams or managers..."
                className="w-full px-4 py-2 border border-base-300 bg-base-100 font-body text-sm focus:border-primary focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select className="px-3 py-2 border border-base-300 bg-base-100 font-body text-sm">
              <option>Sort by Wins</option>
              <option>Sort by Trophies</option>
              <option>Sort by Players</option>
              <option>Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-12 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-body text-neutral/60 mb-8">
            Showing {filteredTeams.length} team{filteredTeams.length !== 1 ? "s" : ""}
          </p>

          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTeams.map(team => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-base-200 border border-base-300">
              <svg className="w-16 h-16 mx-auto text-neutral/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <h3 className="font-heading text-xl text-secondary mb-2">No teams found</h3>
              <p className="font-body text-neutral/50">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      {/* Trophy Leaders */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-secondary mb-10 text-center">
            Trophy <span className="text-primary">Leaders</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams
              .sort((a, b) => b.trophies - a.trophies)
              .slice(0, 3)
              .map((team, index) => (
                <div key={team.id} className="text-center bg-base-100 border border-base-300 p-8">
                  <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center mx-auto mb-4 font-heading text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl text-secondary">{team.name}</h3>
                  <p className="font-body text-neutral/50 text-sm">{team.manager}</p>
                  <p className="font-heading text-3xl text-primary mt-3">{team.trophies}</p>
                  <p className="font-body text-neutral/40 text-sm">Trophies</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Manage a Team?
          </h2>
          <p className="font-body text-white/60 mb-8">
            Register your team and start competing in Cash Cup tournaments
          </p>
          <a href="/signup" className="btn btn-primary font-heading text-sm tracking-wider">
            Register Your Team
          </a>
        </div>
      </section>
    </div>
  );
}
