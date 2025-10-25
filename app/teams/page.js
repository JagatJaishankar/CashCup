"use client";

import { useState } from "react";
import TeamCard from "../components/ui/TeamCard";

// Mock data
const teams = [
  {
    id: 1,
    name: "Strike Force",
    logo: null,
    manager: "Hassan Al-Dosari",
    playerCount: 12,
    wins: 18,
    trophies: 3
  },
  {
    id: 2,
    name: "Thunder FC",
    logo: null,
    manager: "Khalid Mansour",
    playerCount: 15,
    wins: 22,
    trophies: 5
  },
  {
    id: 3,
    name: "Red Lions",
    logo: null,
    manager: "Omar Ibrahim",
    playerCount: 10,
    wins: 14,
    trophies: 2
  },
  {
    id: 4,
    name: "Eagles United",
    logo: null,
    manager: "Ahmed Saleh",
    playerCount: 11,
    wins: 16,
    trophies: 4
  },
  {
    id: 5,
    name: "Desert Warriors",
    logo: null,
    manager: "Fahad Al-Otaibi",
    playerCount: 9,
    wins: 12,
    trophies: 1
  },
  {
    id: 6,
    name: "Golden Stars",
    logo: null,
    manager: "Mohammed Hassan",
    playerCount: 13,
    wins: 20,
    trophies: 3
  }
];

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (team.manager && team.manager.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-righteous text-5xl md:text-6xl mb-4">
            TEAM <span className="text-primary">DIRECTORY</span>
          </h1>
          <p className="font-helvetica text-xl text-gray-600 max-w-2xl">
            Explore teams competing in Cash Cup tournaments. View rosters, achievements, and team statistics.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-base-200 py-8 sticky top-20 z-40 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="form-control flex-1 w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search teams or managers..."
                className="input input-bordered w-full font-helvetica"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort */}
            <select className="select select-bordered select-sm font-helvetica">
              <option>Sort by Wins</option>
              <option>Sort by Trophies</option>
              <option>Sort by Players</option>
              <option>Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-righteous text-2xl text-white">
              Showing {filteredTeams.length} team{filteredTeams.length !== 1 ? "s" : ""}
            </h2>
          </div>

          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTeams.map(team => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-base-200 rounded-lg">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <h3 className="font-righteous text-2xl text-gray-400 mb-2">No teams found</h3>
              <p className="font-helvetica text-gray-400">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Teams Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-righteous text-4xl mb-8 text-center">
            TROPHY <span className="text-primary">LEADERS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teams
              .sort((a, b) => b.trophies - a.trophies)
              .slice(0, 3)
              .map((team, index) => (
                <div key={team.id} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto">
                      <span className="font-righteous text-4xl text-black">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-righteous text-xl text-primary">{team.name}</h3>
                  <p className="font-helvetica text-gray-400">{team.manager}</p>
                  <p className="font-righteous text-3xl mt-2">{team.trophies} Trophies</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-righteous text-4xl text-black mb-4">
            MANAGE A TEAM?
          </h2>
          <p className="font-helvetica text-lg text-black mb-8">
            Register your team and start competing in Cash Cup tournaments
          </p>
          <a href="/signup" className="btn btn-lg bg-black text-primary hover:bg-black/90 font-righteous border-none">
            Register Your Team
          </a>
        </div>
      </section>
    </div>
  );
}
