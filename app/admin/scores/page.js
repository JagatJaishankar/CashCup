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
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4 font-body">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase font-bold mb-4">
            SCORE MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Update and manage match scores
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Tournament Selector */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body">
            <label className="label">
              <span className="label-text text-secondary font-body font-semibold">Select Tournament</span>
            </label>
            <select
              className="select select-bordered bg-base-100 text-secondary border-base-300 w-full md:max-w-md"
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
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Total Matches</h3>
              <p className="text-primary text-3xl font-heading font-bold">{matchScores.length}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Live Matches</h3>
              <p className="text-error text-3xl font-heading font-bold animate-pulse">
                {matchScores.filter(m => m.status === 'live').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Completed</h3>
              <p className="text-success text-3xl font-heading font-bold">
                {matchScores.filter(m => m.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matchScores.map(match => (
            <div key={match.id} className="card bg-base-100 shadow-lg border border-base-300 hover:border-primary transition-all">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`badge ${getStatusBadge(match.status)}`}>
                      {match.status}
                    </span>
                    <span className="text-neutral/60 font-body text-sm">
                      {match.date} • {match.time}
                    </span>
                  </div>
                  <span className="text-neutral/60 font-body text-sm">{match.venue}</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  {/* Home Team */}
                  <div className="flex-1 text-right">
                    <h4 className="font-heading text-xl text-secondary uppercase font-bold mb-2">{match.homeTeam}</h4>
                  </div>

                  {/* Score Section */}
                  <div className="flex items-center gap-4">
                    {editingMatch === match.id ? (
                      <>
                        <input
                          type="number"
                          min="0"
                          className="input input-bordered bg-base-100 text-secondary border-base-300 text-center w-16"
                          value={match.homeScore || 0}
                          onChange={(e) => handleScoreUpdate(match.id, 'home', e.target.value)}
                        />
                        <span className="text-neutral/60 font-heading text-2xl">:</span>
                        <input
                          type="number"
                          min="0"
                          className="input input-bordered bg-base-100 text-secondary border-base-300 text-center w-16"
                          value={match.awayScore || 0}
                          onChange={(e) => handleScoreUpdate(match.id, 'away', e.target.value)}
                        />
                      </>
                    ) : (
                      <div className="bg-base-200 px-8 py-4 rounded-lg border-2 border-primary min-w-[120px]">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-primary font-heading text-3xl font-bold">
                            {match.homeScore !== null ? match.homeScore : '-'}
                          </span>
                          <span className="text-secondary font-heading text-2xl">:</span>
                          <span className="text-primary font-heading text-3xl font-bold">
                            {match.awayScore !== null ? match.awayScore : '-'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex-1 text-left">
                    <h4 className="font-heading text-xl text-secondary uppercase font-bold mb-2">{match.awayTeam}</h4>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {editingMatch === match.id ? (
                      <>
                        <button
                          onClick={() => handleSaveScore(match.id)}
                          className="btn btn-sm btn-success font-heading uppercase"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingMatch(null)}
                          className="btn btn-sm btn-outline font-heading uppercase"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingMatch(match.id)}
                          className="btn btn-sm btn-primary font-heading uppercase"
                        >
                          Edit Score
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
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
          <button className="btn btn-primary font-heading uppercase">
            + Add Match Result
          </button>
          <button className="btn btn-outline btn-primary font-heading uppercase">
            Export Results
          </button>
          <button className="btn btn-outline btn-primary font-heading uppercase">
            View Standings
          </button>
        </div>
      </div>
    </div>
  );
}
