"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminCheckInPage() {
  const [selectedTournament, setSelectedTournament] = useState("1");
  const [scannerActive, setScannerActive] = useState(false);

  const tournaments = [
    { id: "1", name: "Cash Cup 5v5 Championship", date: "Nov 15, 2024" },
    { id: "2", name: "Ramadan Cup 2024", date: "Oct 20, 2024" }
  ];

  const checkInData = [
    {
      id: 1,
      team: "Strike Force",
      manager: "Mohammed Al-Rashid",
      players: 8,
      checkedIn: 8,
      status: "completed",
      time: "17:30"
    },
    {
      id: 2,
      team: "Thunder FC",
      manager: "Fahad Al-Mutairi",
      players: 8,
      checkedIn: 6,
      status: "partial",
      time: "17:45"
    },
    {
      id: 3,
      team: "Red Lions",
      manager: "Hassan Al-Tamimi",
      players: 8,
      checkedIn: 0,
      status: "pending",
      time: "-"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      completed: "badge-success",
      partial: "badge-warning",
      pending: "badge-error"
    };
    return badges[status] || "badge-neutral";
  };

  const handleManualCheckIn = (teamId) => {
    console.log("Manual check-in for team:", teamId);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            CHECK-IN MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Monitor and manage tournament check-ins
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Tournament Selector */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300 mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
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
                      {t.name} - {t.date}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setScannerActive(!scannerActive)}
                className={`btn ${scannerActive ? 'btn-error' : 'btn-primary'} font-righteous`}
              >
                {scannerActive ? 'Stop Scanner' : 'Start QR Scanner'}
              </button>
            </div>
          </div>
        </div>

        {/* QR Scanner */}
        {scannerActive && (
          <div className="card bg-base-200 shadow-xl border-2 border-primary mb-8">
            <div className="card-body">
              <h3 className="card-title font-righteous text-xl text-white mb-4">QR Code Scanner Active</h3>
              <div className="w-full h-64 bg-black rounded-lg flex items-center justify-center border-4 border-primary">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-primary mb-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3z"/>
                  </svg>
                  <p className="text-primary font-righteous text-lg">Scanning for QR Codes...</p>
                  <p className="text-gray-400 font-helvetica text-sm mt-2">Point the camera at the check-in QR code</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Check-in Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Teams</h3>
              <p className="text-primary text-3xl font-righteous">{checkInData.length}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Completed</h3>
              <p className="text-success text-3xl font-righteous">
                {checkInData.filter(t => t.status === 'completed').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Partial</h3>
              <p className="text-warning text-3xl font-righteous">
                {checkInData.filter(t => t.status === 'partial').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Pending</h3>
              <p className="text-error text-3xl font-righteous">
                {checkInData.filter(t => t.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        {/* Check-in List */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300">
          <div className="card-body">
            <h3 className="card-title font-righteous text-2xl text-white mb-4">Team Check-in Status</h3>

            <div className="space-y-4">
              {checkInData.map(team => (
                <div key={team.id} className="card bg-base-100 shadow-lg border-2 border-base-300 hover:border-primary transition-all">
                  <div className="card-body">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="font-righteous text-xl text-white">{team.team}</h4>
                          <span className={`badge ${getStatusBadge(team.status)}`}>
                            {team.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-helvetica text-sm">
                          <div>
                            <p className="text-gray-400">Manager</p>
                            <p className="text-white">{team.manager}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Players Checked In</p>
                            <p className="text-white">
                              <span className={team.checkedIn === team.players ? 'text-success' : 'text-warning'}>
                                {team.checkedIn}
                              </span>
                              {' / '}
                              {team.players}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Check-in Time</p>
                            <p className="text-white">{team.time}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Progress</p>
                            <progress
                              className="progress progress-primary w-full"
                              value={team.checkedIn}
                              max={team.players}
                            ></progress>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleManualCheckIn(team.id)}
                          className="btn btn-sm btn-primary font-righteous"
                        >
                          Manual Check-in
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-righteous">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="btn btn-outline btn-primary font-righteous">
            Export Check-in Report
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Send Reminder to Pending Teams
          </button>
        </div>
      </div>
    </div>
  );
}
