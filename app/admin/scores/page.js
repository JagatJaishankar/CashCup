"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminScoresPage() {
  const [selectedTournament, setSelectedTournament] = useState("1");
  const [editingMatch, setEditingMatch] = useState(null);

  const tournaments = [
    { id: "1", name: "Cash Cup 5v5 Championship", status: "upcoming" },
    { id: "2", name: "Ramadan Cup 2024", status: "ongoing" }
  ];

  const matches = [
    {
      id: 1,
      homeTeam: "Strike Force",
      awayTeam: "Thunder FC",
      homeScore: 3,
      awayScore: 1,
      status: "completed",
      date: "Oct 20, 2024",
      time: "18:00",
      venue: "Al-Hamra Sports Complex"
    },
    {
      id: 2,
      homeTeam: "Red Lions",
      awayTeam: "Eagles United",
      homeScore: 2,
      awayScore: 2,
      status: "completed",
      date: "Oct 20, 2024",
      time: "19:30",
      venue: "Al-Hamra Sports Complex"
    },
    {
      id: 3,
      homeTeam: "Desert Warriors",
      awayTeam: "Golden Stars",
      homeScore: 0,
      awayScore: 0,
      status: "live",
      date: "Oct 25, 2024",
      time: "18:00",
      venue: "King's Stadium"
    },
    {
      id: 4,
      homeTeam: "Strike Force",
      awayTeam: "Red Lions",
      homeScore: null,
      awayScore: null,
      status: "scheduled",
      date: "Nov 1, 2024",
      time: "18:30",
      venue: "Al-Hamra Sports Complex"
    }
  ];

  const [matchScores, setMatchScores] = useState(matches);

  const handleScoreUpdate = (matchId, team, value) => {
    setMatchScores(matchScores.map(match => {
      if (match.id === matchId) {
        return {
          ...match,
          [team === 'home' ? 'homeScore' : 'awayScore']: parseInt(value) || 0
        };
      }
      return match;
    }));
  };

  const handleSaveScore = (matchId) => {
    console.log("Saving score for match:", matchId);
    setEditingMatch(null);
  };

  const getStatusBadge = (status) => {
    const badges = {
      live: "badge-error animate-pulse",
      completed: "badge-success",
      scheduled: "badge-info"
    };
    return badges[status] || "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            SCORE MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Update and manage match scores
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Tournament Selector */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300 mb-8">
          <div className="card-body">
            <label className="label">
              <span className="label-text text-white font-helvetica font-semibold">Select Tournament</span>
            </label>
            <select
              className="select select-bordered bg-base-100 text-white w-full md:max-w-md"
              value={selectedTournament}
              onChange={(e) => setSelectedTournament(e.target.value)}
            >
              {tournaments.map(t => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.status})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Match Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Matches</h3>
              <p className="text-primary text-3xl font-righteous">{matchScores.length}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Live Matches</h3>
              <p className="text-error text-3xl font-righteous animate-pulse">
                {matchScores.filter(m => m.status === 'live').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Completed</h3>
              <p className="text-success text-3xl font-righteous">
                {matchScores.filter(m => m.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matchScores.map(match => (
            <div key={match.id} className="card bg-base-200 shadow-xl border-2 border-base-300 hover:border-primary transition-all">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`badge ${getStatusBadge(match.status)}`}>
                      {match.status}
                    </span>
                    <span className="text-gray-400 font-helvetica text-sm">
                      {match.date} • {match.time}
                    </span>
                  </div>
                  <span className="text-gray-400 font-helvetica text-sm">{match.venue}</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  {/* Home Team */}
                  <div className="flex-1 text-right">
                    <h4 className="font-righteous text-xl text-white mb-2">{match.homeTeam}</h4>
                  </div>

                  {/* Score Section */}
                  <div className="flex items-center gap-4">
                    {editingMatch === match.id ? (
                      <>
                        <input
                          type="number"
                          min="0"
                          className="input input-bordered bg-base-100 text-white text-center w-16"
                          value={match.homeScore || 0}
                          onChange={(e) => handleScoreUpdate(match.id, 'home', e.target.value)}
                        />
                        <span className="text-gray-400 font-righteous text-2xl">:</span>
                        <input
                          type="number"
                          min="0"
                          className="input input-bordered bg-base-100 text-white text-center w-16"
                          value={match.awayScore || 0}
                          onChange={(e) => handleScoreUpdate(match.id, 'away', e.target.value)}
                        />
                      </>
                    ) : (
                      <div className="bg-black px-8 py-4 rounded-lg border-2 border-primary min-w-[120px]">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-primary font-righteous text-3xl">
                            {match.homeScore !== null ? match.homeScore : '-'}
                          </span>
                          <span className="text-white font-righteous text-2xl">:</span>
                          <span className="text-primary font-righteous text-3xl">
                            {match.awayScore !== null ? match.awayScore : '-'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex-1 text-left">
                    <h4 className="font-righteous text-xl text-white mb-2">{match.awayTeam}</h4>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {editingMatch === match.id ? (
                      <>
                        <button
                          onClick={() => handleSaveScore(match.id)}
                          className="btn btn-sm btn-success font-righteous"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingMatch(null)}
                          className="btn btn-sm btn-outline font-righteous"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingMatch(match.id)}
                          className="btn btn-sm btn-primary font-righteous"
                        >
                          Edit Score
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-righteous">
                          Details
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="btn btn-primary font-righteous">
            + Add Match Result
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Export Results
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            View Standings
          </button>
        </div>
      </div>
    </div>
  );
}
