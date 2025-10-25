"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminTransfersPage() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingTransfers = [
    {
      id: 1,
      player: "Hassan Al-Tamimi",
      position: "MID",
      fromTeam: "Desert Warriors",
      toTeam: "Strike Force",
      fee: "15,000 SAR",
      requestDate: "Oct 20, 2024",
      status: "pending"
    },
    {
      id: 2,
      player: "Tariq Al-Dosari",
      position: "DEF",
      fromTeam: "Red Lions",
      toTeam: "Thunder FC",
      fee: "12,000 SAR",
      requestDate: "Oct 18, 2024",
      status: "pending"
    }
  ];

  const approvedTransfers = [
    {
      id: 1,
      player: "Abdullah Al-Harbi",
      position: "FWD",
      fromTeam: "Eagles United",
      toTeam: "Strike Force",
      fee: "20,000 SAR",
      approvedDate: "Sep 15, 2024",
      status: "approved"
    }
  ];

  const rejectedTransfers = [
    {
      id: 1,
      player: "Yousef Al-Salem",
      position: "MID",
      fromTeam: "Thunder FC",
      toTeam: "Golden Stars",
      fee: "16,000 SAR",
      rejectedDate: "Sep 5, 2024",
      reason: "Team did not meet financial requirements",
      status: "rejected"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge-warning",
      approved: "badge-success",
      rejected: "badge-error"
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
            TRANSFER MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Review and approve player transfer requests
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Pending Reviews</h3>
              <p className="text-warning text-3xl font-righteous">{pendingTransfers.length}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Approved (This Month)</h3>
              <p className="text-success text-3xl font-righteous">{approvedTransfers.length}</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Transfer Value</h3>
              <p className="text-primary text-3xl font-righteous">
                {[...pendingTransfers, ...approvedTransfers]
                  .reduce((sum, t) => sum + parseInt(t.fee.replace(/[^0-9]/g, '')), 0)
                  .toLocaleString()} SAR
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-200 mb-8">
          <button
            className={`tab font-righteous ${activeTab === 'pending' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending ({pendingTransfers.length})
          </button>
          <button
            className={`tab font-righteous ${activeTab === 'approved' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('approved')}
          >
            Approved
          </button>
          <button
            className={`tab font-righteous ${activeTab === 'rejected' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('rejected')}
          >
            Rejected
          </button>
        </div>

        {/* Pending Transfers */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingTransfers.map(transfer => (
              <div key={transfer.id} className="card bg-base-200 shadow-xl border-2 border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-righteous text-2xl text-white">{transfer.player}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {transfer.position}
                        </span>
                        <span className={`badge ${getStatusBadge(transfer.status)}`}>
                          {transfer.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-helvetica">
                        <div>
                          <p className="text-gray-400 text-sm">From Team</p>
                          <p className="text-white">{transfer.fromTeam}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">To Team</p>
                          <p className="text-white">{transfer.toTeam}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Transfer Fee</p>
                          <p className="text-primary font-righteous">{transfer.fee}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Request Date</p>
                          <p className="text-white">{transfer.requestDate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-success font-righteous">
                        Approve
                      </button>
                      <button className="btn btn-sm btn-outline btn-primary font-righteous">
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white hover:border-error font-righteous">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pendingTransfers.length === 0 && (
              <div className="text-center py-20 bg-base-200 rounded-lg">
                <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <h3 className="font-righteous text-2xl text-white mb-2">All Caught Up!</h3>
                <p className="font-helvetica text-gray-400">No pending transfer requests to review</p>
              </div>
            )}
          </div>
        )}

        {/* Approved Transfers */}
        {activeTab === 'approved' && (
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="text-white border-base-300">
                      <th className="font-righteous">Player</th>
                      <th className="font-righteous">Position</th>
                      <th className="font-righteous">From</th>
                      <th className="font-righteous">To</th>
                      <th className="font-righteous">Fee</th>
                      <th className="font-righteous">Approved Date</th>
                      <th className="font-righteous">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="font-helvetica">
                    {approvedTransfers.map((transfer) => (
                      <tr key={transfer.id} className="hover:bg-base-100 border-base-300">
                        <td className="text-white">{transfer.player}</td>
                        <td>
                          <span className="badge badge-outline text-primary border-primary">
                            {transfer.position}
                          </span>
                        </td>
                        <td className="text-white">{transfer.fromTeam}</td>
                        <td className="text-white">{transfer.toTeam}</td>
                        <td className="text-primary font-righteous">{transfer.fee}</td>
                        <td className="text-gray-400">{transfer.approvedDate}</td>
                        <td>
                          <button className="btn btn-xs btn-outline btn-primary font-righteous">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Rejected Transfers */}
        {activeTab === 'rejected' && (
          <div className="space-y-4">
            {rejectedTransfers.map(transfer => (
              <div key={transfer.id} className="card bg-base-200 shadow-xl border-2 border-base-300">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-righteous text-2xl text-white">{transfer.player}</h3>
                    <span className="badge badge-outline text-primary border-primary">
                      {transfer.position}
                    </span>
                    <span className={`badge ${getStatusBadge(transfer.status)}`}>
                      {transfer.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-helvetica mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">From Team</p>
                      <p className="text-white">{transfer.fromTeam}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">To Team</p>
                      <p className="text-white">{transfer.toTeam}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Transfer Fee</p>
                      <p className="text-primary font-righteous">{transfer.fee}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Rejected Date</p>
                      <p className="text-white">{transfer.rejectedDate}</p>
                    </div>
                  </div>

                  <div className="alert alert-error">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <span className="font-helvetica">Rejection Reason: {transfer.reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
