"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminAuditPage() {
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const auditLogs = [
    {
      id: 1,
      timestamp: "Oct 25, 2024 14:32:15",
      user: "Admin User",
      action: "Tournament Created",
      details: "Created 'Winter Championship 2024'",
      type: "tournament",
      ipAddress: "192.168.1.100"
    },
    {
      id: 2,
      timestamp: "Oct 25, 2024 14:15:42",
      user: "Mohammed Al-Rashid",
      action: "Transfer Approved",
      details: "Approved transfer of Hassan Al-Tamimi to Strike Force",
      type: "transfer",
      ipAddress: "192.168.1.105"
    },
    {
      id: 3,
      timestamp: "Oct 25, 2024 13:58:20",
      user: "Admin User",
      action: "User Suspended",
      details: "Suspended user account: Omar Al-Ghamdi",
      type: "user",
      ipAddress: "192.168.1.100"
    },
    {
      id: 4,
      timestamp: "Oct 25, 2024 13:45:10",
      user: "System",
      action: "Payment Processed",
      details: "Tournament entry fee payment confirmed - Strike Force",
      type: "payment",
      ipAddress: "SYSTEM"
    },
    {
      id: 5,
      timestamp: "Oct 25, 2024 13:30:05",
      user: "Admin User",
      action: "Score Updated",
      details: "Updated match score: Strike Force 3 - 1 Thunder FC",
      type: "score",
      ipAddress: "192.168.1.100"
    },
    {
      id: 6,
      timestamp: "Oct 25, 2024 12:22:18",
      user: "Fahad Al-Mutairi",
      action: "Team Registered",
      details: "Registered Thunder FC for Cash Cup 5v5",
      type: "tournament",
      ipAddress: "192.168.1.112"
    },
    {
      id: 7,
      timestamp: "Oct 25, 2024 11:15:33",
      user: "Admin User",
      action: "Settings Changed",
      details: "Updated tournament registration deadline",
      type: "settings",
      ipAddress: "192.168.1.100"
    }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesType = filterType === 'all' || log.type === filterType;
    const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getActionBadge = (type) => {
    const badges = {
      tournament: "badge-info",
      transfer: "badge-warning",
      user: "badge-error",
      payment: "badge-success",
      score: "badge-primary",
      settings: "badge-secondary"
    };
    return badges[type] || "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            AUDIT LOG
          </h1>
          <p className="font-helvetica text-white">
            Track all system activities and changes
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Activity Summary */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">Tournament</h3>
              <p className="text-info text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'tournament').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">Transfer</h3>
              <p className="text-warning text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'transfer').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">User</h3>
              <p className="text-error text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'user').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">Payment</h3>
              <p className="text-success text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'payment').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">Score</h3>
              <p className="text-primary text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'score').length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body p-4">
              <h3 className="text-gray-400 text-xs font-helvetica">Settings</h3>
              <p className="text-secondary text-2xl font-righteous">
                {auditLogs.filter(l => l.type === 'settings').length}
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search audit logs..."
              className="input input-bordered bg-base-200 text-white w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="tabs tabs-boxed bg-base-200">
            <button
              className={`tab font-righteous ${filterType === 'all' ? 'tab-active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              All
            </button>
            <button
              className={`tab font-righteous ${filterType === 'tournament' ? 'tab-active' : ''}`}
              onClick={() => setFilterType('tournament')}
            >
              Tournament
            </button>
            <button
              className={`tab font-righteous ${filterType === 'user' ? 'tab-active' : ''}`}
              onClick={() => setFilterType('user')}
            >
              User
            </button>
            <button
              className={`tab font-righteous ${filterType === 'payment' ? 'tab-active' : ''}`}
              onClick={() => setFilterType('payment')}
            >
              Payment
            </button>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="card bg-base-200 shadow-xl border-2 border-base-300">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="text-white border-base-300">
                    <th className="font-righteous">Timestamp</th>
                    <th className="font-righteous">User</th>
                    <th className="font-righteous">Action</th>
                    <th className="font-righteous">Type</th>
                    <th className="font-righteous">Details</th>
                    <th className="font-righteous">IP Address</th>
                  </tr>
                </thead>
                <tbody className="font-helvetica">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-base-100 border-base-300">
                      <td className="text-gray-400 text-sm">{log.timestamp}</td>
                      <td className="text-white">{log.user}</td>
                      <td className="text-white font-semibold">{log.action}</td>
                      <td>
                        <span className={`badge ${getActionBadge(log.type)}`}>
                          {log.type}
                        </span>
                      </td>
                      <td className="text-gray-400 max-w-xs">{log.details}</td>
                      <td className="text-gray-400 text-sm font-mono">{log.ipAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredLogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 font-helvetica">No audit logs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Export Options */}
        <div className="flex flex-wrap justify-center mt-8 gap-4">
          <button className="btn btn-primary font-righteous">
            Export Audit Log
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Download as CSV
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Email Report
          </button>
        </div>
      </div>
    </div>
  );
}
