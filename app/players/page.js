"use client";

import { useState } from "react";
import PlayerCard from "../components/ui/PlayerCard";

// Mock data
const players = [
  {
    id: 1,
    name: "Ahmed Al-Qahtani",
    position: "FWD",
    team: "Strike Force",
    image: null,
    goals: 15,
    assists: 8,
    matches: 22
  },
  {
    id: 2,
    name: "Mohammed Hassan",
    position: "MID",
    team: "Thunder FC",
    image: null,
    goals: 8,
    assists: 12,
    matches: 20
  },
  {
    id: 3,
    name: "Khaled Ibrahim",
    position: "DEF",
    team: "Red Lions",
    image: null,
    goals: 2,
    assists: 4,
    matches: 24
  },
  {
    id: 4,
    name: "Omar Saleh",
    position: "GK",
    team: "Eagles United",
    image: null,
    goals: 0,
    assists: 0,
    matches: 18
  },
  {
    id: 5,
    name: "Abdullah Mansour",
    position: "FWD",
    team: null,
    image: null,
    goals: 12,
    assists: 5,
    matches: 16
  },
  {
    id: 6,
    name: "Fahad Al-Otaibi",
    position: "MID",
    team: null,
    image: null,
    goals: 6,
    assists: 9,
    matches: 15
  }
];

export default function PlayersPage() {
  const [positionFilter, setPositionFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlayers = players.filter(player => {
    const matchesPosition = positionFilter === "all" || player.position === positionFilter;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (player.team && player.team.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPosition && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-righteous text-5xl md:text-6xl mb-4">
            PLAYER <span className="text-primary">DATABASE</span>
          </h1>
          <p className="font-helvetica text-xl text-gray-600 max-w-2xl">
            Discover talented football players competing in Cash Cup tournaments. View stats, achievements, and player profiles.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-base-200 py-8 sticky top-20 z-40 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="form-control flex-1 w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search players or teams..."
                className="input input-bordered w-full font-helvetica"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Position Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                className={`btn btn-sm ${positionFilter === "all" ? "btn-primary" : "btn-outline"} font-righteous`}
                onClick={() => setPositionFilter("all")}
              >
                All
              </button>
              <button
                className={`btn btn-sm ${positionFilter === "GK" ? "btn-primary" : "btn-outline"} font-righteous`}
                onClick={() => setPositionFilter("GK")}
              >
                GK
              </button>
              <button
                className={`btn btn-sm ${positionFilter === "DEF" ? "btn-primary" : "btn-outline"} font-righteous`}
                onClick={() => setPositionFilter("DEF")}
              >
                DEF
              </button>
              <button
                className={`btn btn-sm ${positionFilter === "MID" ? "btn-primary" : "btn-outline"} font-righteous`}
                onClick={() => setPositionFilter("MID")}
              >
                MID
              </button>
              <button
                className={`btn btn-sm ${positionFilter === "FWD" ? "btn-primary" : "btn-outline"} font-righteous`}
                onClick={() => setPositionFilter("FWD")}
              >
                FWD
              </button>
            </div>

            {/* Sort */}
            <select className="select select-bordered select-sm font-helvetica">
              <option>Sort by Goals</option>
              <option>Sort by Assists</option>
              <option>Sort by Matches</option>
              <option>Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-righteous text-2xl text-white">
              Showing {filteredPlayers.length} player{filteredPlayers.length !== 1 ? "s" : ""}
            </h2>
          </div>

          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlayers.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-base-200 rounded-lg">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <h3 className="font-righteous text-2xl text-gray-400 mb-2">No players found</h3>
              <p className="font-helvetica text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Scorers Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-righteous text-4xl mb-8 text-center">
            TOP <span className="text-primary">SCORERS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {players
              .sort((a, b) => b.goals - a.goals)
              .slice(0, 3)
              .map((player, index) => (
                <div key={player.id} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto">
                      <span className="font-righteous text-4xl text-black">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-righteous text-xl text-primary">{player.name}</h3>
                  <p className="font-helvetica text-gray-400">{player.team || "Free Agent"}</p>
                  <p className="font-righteous text-3xl mt-2">{player.goals} Goals</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-righteous text-4xl text-black mb-4">
            ARE YOU A PLAYER?
          </h2>
          <p className="font-helvetica text-lg text-black mb-8">
            Register to create your profile and get discovered by teams
          </p>
          <a href="/signup" className="btn btn-lg bg-black text-primary hover:bg-black/90 font-righteous border-none">
            Create Player Profile
          </a>
        </div>
      </section>
    </div>
  );
}
