"use client";

import { useState } from "react";
import PlayerCard from "../components/ui/PlayerCard";

const players = [
  { id: 1, name: "Ahmed Al-Qahtani", position: "FWD", team: "Strike Force", image: null, goals: 15, assists: 8, matches: 22 },
  { id: 2, name: "Mohammed Hassan", position: "MID", team: "Thunder FC", image: null, goals: 8, assists: 12, matches: 20 },
  { id: 3, name: "Khaled Ibrahim", position: "DEF", team: "Red Lions", image: null, goals: 2, assists: 4, matches: 24 },
  { id: 4, name: "Omar Saleh", position: "GK", team: "Eagles United", image: null, goals: 0, assists: 0, matches: 18 },
  { id: 5, name: "Abdullah Mansour", position: "FWD", team: null, image: null, goals: 12, assists: 5, matches: 16 },
  { id: 6, name: "Fahad Al-Otaibi", position: "MID", team: null, image: null, goals: 6, assists: 9, matches: 15 }
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

  const positions = ["all", "GK", "DEF", "MID", "FWD"];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-base-100 py-16 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
            Player <span className="text-primary">Database</span>
          </h1>
          <p className="font-body text-lg text-neutral/60 max-w-2xl">
            Discover talented football players competing in Cash Cup tournaments. View stats, achievements, and profiles.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-base-200 py-6 sticky top-16 z-40 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search players or teams..."
                className="w-full px-4 py-2 border border-base-300 bg-base-100 font-body text-sm focus:border-primary focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {positions.map(pos => (
                <button
                  key={pos}
                  className={`px-4 py-2 text-sm font-heading transition-colors ${
                    positionFilter === pos
                      ? "bg-primary text-white"
                      : "bg-base-100 text-neutral/70 hover:text-primary border border-base-300"
                  }`}
                  onClick={() => setPositionFilter(pos)}
                >
                  {pos === "all" ? "All" : pos}
                </button>
              ))}
            </div>

            <select className="px-3 py-2 border border-base-300 bg-base-100 font-body text-sm">
              <option>Sort by Goals</option>
              <option>Sort by Assists</option>
              <option>Sort by Matches</option>
              <option>Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-body text-neutral/60 mb-8">
            Showing {filteredPlayers.length} player{filteredPlayers.length !== 1 ? "s" : ""}
          </p>

          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlayers.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-base-200 border border-base-300">
              <svg className="w-16 h-16 mx-auto text-neutral/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <h3 className="font-heading text-xl text-secondary mb-2">No players found</h3>
              <p className="font-body text-neutral/50">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Top Scorers */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-secondary mb-10 text-center">
            Top <span className="text-primary">Scorers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {players
              .sort((a, b) => b.goals - a.goals)
              .slice(0, 3)
              .map((player, index) => (
                <div key={player.id} className="text-center bg-base-100 border border-base-300 p-8">
                  <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center mx-auto mb-4 font-heading text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl text-secondary">{player.name}</h3>
                  <p className="font-body text-neutral/50 text-sm">{player.team || "Free Agent"}</p>
                  <p className="font-heading text-3xl text-primary mt-3">{player.goals}</p>
                  <p className="font-body text-neutral/40 text-sm">Goals</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">
            Are You a Player?
          </h2>
          <p className="font-body text-white/60 mb-8">
            Register to create your profile and get discovered by teams
          </p>
          <a href="/signup" className="btn btn-primary font-heading text-sm tracking-wider">
            Create Player Profile
          </a>
        </div>
      </section>
    </div>
  );
}
