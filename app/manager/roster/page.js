"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManagerRosterPage() {
  const [selectedPosition, setSelectedPosition] = useState("all");

  const roster = [
    { id: 1, name: "Ahmed Al-Qahtani", position: "FWD", number: 10, status: "active", goals: 15, assists: 8 },
    { id: 2, name: "Khalid Al-Zahrani", position: "MID", number: 8, status: "active", goals: 7, assists: 12 },
    { id: 3, name: "Omar Al-Ghamdi", position: "DEF", number: 4, status: "active", goals: 2, assists: 3 },
    { id: 4, name: "Fahad Al-Mutairi", position: "GK", number: 1, status: "active", goals: 0, assists: 0 },
    { id: 5, name: "Abdullah Al-Harbi", position: "FWD", number: 9, status: "injured", goals: 12, assists: 5 },
    { id: 6, name: "Saeed Al-Shehri", position: "MID", number: 6, status: "active", goals: 5, assists: 9 },
    { id: 7, name: "Majed Al-Ruwaili", position: "DEF", number: 3, status: "suspended", goals: 1, assists: 2 },
    { id: 8, name: "Nawaf Al-Abed", position: "MID", number: 7, status: "active", goals: 8, assists: 6 }
  ];

  const filteredRoster = selectedPosition === "all"
    ? roster
    : roster.filter(player => player.position === selectedPosition);

  const getStatusBadge = (status) => {
    const badges = {
      active: "badge-success",
      injured: "badge-error",
      suspended: "badge-warning"
    };
    return badges[status] || "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/manager" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            ROSTER MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Manage your team roster and player assignments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Actions and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="tabs tabs-boxed bg-base-200 inline-flex">
              <button
                className={`tab font-righteous ${selectedPosition === 'all' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('all')}
              >
                All
              </button>
              <button
                className={`tab font-righteous ${selectedPosition === 'GK' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('GK')}
              >
                GK
              </button>
              <button
                className={`tab font-righteous ${selectedPosition === 'DEF' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('DEF')}
              >
                DEF
              </button>
              <button
                className={`tab font-righteous ${selectedPosition === 'MID' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('MID')}
              >
                MID
              </button>
              <button
                className={`tab font-righteous ${selectedPosition === 'FWD' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('FWD')}
              >
                FWD
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/manager/transfers" className="btn btn-primary font-righteous">
              + Add Player
            </Link>
            <button className="btn btn-outline btn-primary font-righteous">
              Export Roster
            </button>
          </div>
        </div>

        {/* Roster Table */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-white border-base-300">
                    <th className="font-righteous">#</th>
                    <th className="font-righteous">Player Name</th>
                    <th className="font-righteous">Position</th>
                    <th className="font-righteous">Status</th>
                    <th className="font-righteous">Goals</th>
                    <th className="font-righteous">Assists</th>
                    <th className="font-righteous">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-helvetica">
                  {filteredRoster.map((player) => (
                    <tr key={player.id} className="hover:bg-base-100 border-base-300">
                      <td className="text-primary font-righteous text-lg">{player.number}</td>
                      <td className="text-white">{player.name}</td>
                      <td>
                        <span className="badge badge-outline text-primary border-primary">
                          {player.position}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${getStatusBadge(player.status)}`}>
                          {player.status}
                        </span>
                      </td>
                      <td className="text-white">{player.goals}</td>
                      <td className="text-white">{player.assists}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="btn btn-xs btn-primary font-righteous">
                            Edit
                          </button>
                          <button className="btn btn-xs btn-outline text-error hover:bg-error hover:text-white hover:border-error font-righteous">
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredRoster.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 font-helvetica">No players found in this position</p>
              </div>
            )}
          </div>
        </div>

        {/* Squad Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="card bg-base-200 shadow-lg border-2 border-base-300">
            <div className="card-body">
              <p className="text-gray-400 text-sm font-helvetica">Total Players</p>
              <p className="text-primary text-3xl font-righteous">{roster.length}</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg border-2 border-base-300">
            <div className="card-body">
              <p className="text-gray-400 text-sm font-helvetica">Active</p>
              <p className="text-success text-3xl font-righteous">
                {roster.filter(p => p.status === 'active').length}
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg border-2 border-base-300">
            <div className="card-body">
              <p className="text-gray-400 text-sm font-helvetica">Injured</p>
              <p className="text-error text-3xl font-righteous">
                {roster.filter(p => p.status === 'injured').length}
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg border-2 border-base-300">
            <div className="card-body">
              <p className="text-gray-400 text-sm font-helvetica">Suspended</p>
              <p className="text-warning text-3xl font-righteous">
                {roster.filter(p => p.status === 'suspended').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
