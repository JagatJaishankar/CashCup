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
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/manager" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4 uppercase">
            ROSTER MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Manage your team roster and player assignments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Actions and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="tabs tabs-boxed bg-base-200 border border-base-300 inline-flex">
              <button
                className={`tab font-heading uppercase ${selectedPosition === 'all' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('all')}
              >
                All
              </button>
              <button
                className={`tab font-heading uppercase ${selectedPosition === 'GK' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('GK')}
              >
                GK
              </button>
              <button
                className={`tab font-heading uppercase ${selectedPosition === 'DEF' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('DEF')}
              >
                DEF
              </button>
              <button
                className={`tab font-heading uppercase ${selectedPosition === 'MID' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('MID')}
              >
                MID
              </button>
              <button
                className={`tab font-heading uppercase ${selectedPosition === 'FWD' ? 'tab-active' : ''}`}
                onClick={() => setSelectedPosition('FWD')}
              >
                FWD
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/manager/transfers" className="btn btn-primary font-heading uppercase">
              + Add Player
            </Link>
            <button className="btn btn-outline btn-primary font-heading uppercase">
              Export Roster
            </button>
          </div>
        </div>

        {/* Roster Table */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-secondary border-base-300">
                    <th className="font-heading uppercase">#</th>
                    <th className="font-heading uppercase">Player Name</th>
                    <th className="font-heading uppercase">Position</th>
                    <th className="font-heading uppercase">Status</th>
                    <th className="font-heading uppercase">Goals</th>
                    <th className="font-heading uppercase">Assists</th>
                    <th className="font-heading uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body">
                  {filteredRoster.map((player) => (
                    <tr key={player.id} className="hover:bg-base-200 border-base-300">
                      <td className="text-primary font-heading text-lg">{player.number}</td>
                      <td className="text-secondary">{player.name}</td>
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
                      <td className="text-secondary">{player.goals}</td>
                      <td className="text-secondary">{player.assists}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="btn btn-xs btn-primary font-heading uppercase">
                            Edit
                          </button>
                          <button className="btn btn-xs btn-outline text-error hover:bg-error hover:text-white hover:border-error font-heading uppercase">
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
                <p className="text-neutral/60 font-body">No players found in this position</p>
              </div>
            )}
          </div>
        </div>

        {/* Squad Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <p className="text-neutral/60 text-sm font-body">Total Players</p>
              <p className="text-primary text-3xl font-heading">{roster.length}</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <p className="text-neutral/60 text-sm font-body">Active</p>
              <p className="text-success text-3xl font-heading">
                {roster.filter(p => p.status === 'active').length}
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <p className="text-neutral/60 text-sm font-body">Injured</p>
              <p className="text-error text-3xl font-heading">
                {roster.filter(p => p.status === 'injured').length}
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <p className="text-neutral/60 text-sm font-body">Suspended</p>
              <p className="text-warning text-3xl font-heading">
                {roster.filter(p => p.status === 'suspended').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
