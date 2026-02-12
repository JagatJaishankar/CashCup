"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManagerTransfersPage() {
  const [activeTab, setActiveTab] = useState("incoming");

  const incomingOffers = [
    {
      id: 1,
      player: "Hassan Al-Tamimi",
      position: "MID",
      currentTeam: "Desert Warriors",
      fee: "15,000 SAR",
      salary: "4,500 SAR/month",
      status: "pending",
      date: "Oct 20, 2024"
    },
    {
      id: 2,
      player: "Tariq Al-Dosari",
      position: "DEF",
      currentTeam: "Red Lions",
      fee: "12,000 SAR",
      salary: "3,800 SAR/month",
      status: "pending",
      date: "Oct 18, 2024"
    }
  ];

  const outgoingOffers = [
    {
      id: 1,
      player: "Majed Al-Ruwaili",
      position: "DEF",
      targetTeam: "Thunder FC",
      fee: "18,000 SAR",
      status: "negotiating",
      date: "Oct 22, 2024"
    }
  ];

  const completedTransfers = [
    {
      id: 1,
      player: "Abdullah Al-Harbi",
      position: "FWD",
      type: "incoming",
      from: "Eagles United",
      fee: "20,000 SAR",
      date: "Sep 15, 2024"
    },
    {
      id: 2,
      player: "Yousef Al-Salem",
      position: "MID",
      type: "outgoing",
      to: "Golden Stars",
      fee: "16,000 SAR",
      date: "Sep 10, 2024"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge-warning",
      negotiating: "badge-info",
      accepted: "badge-success",
      rejected: "badge-error"
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
            TRANSFER MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Manage incoming and outgoing player transfers
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-200 border border-base-300 mb-8">
          <button
            className={`tab font-heading uppercase ${activeTab === 'incoming' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('incoming')}
          >
            Incoming Offers ({incomingOffers.length})
          </button>
          <button
            className={`tab font-heading uppercase ${activeTab === 'outgoing' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('outgoing')}
          >
            Outgoing Offers ({outgoingOffers.length})
          </button>
          <button
            className={`tab font-heading uppercase ${activeTab === 'completed' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>

        {/* Incoming Offers */}
        {activeTab === 'incoming' && (
          <div className="space-y-4">
            {incomingOffers.map(offer => (
              <div key={offer.id} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl text-secondary uppercase">{offer.player}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {offer.position}
                        </span>
                        <span className={`badge ${getStatusBadge(offer.status)}`}>
                          {offer.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-body">
                        <div>
                          <p className="text-neutral/60 text-sm">Current Team</p>
                          <p className="text-secondary">{offer.currentTeam}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Transfer Fee</p>
                          <p className="text-primary font-heading">{offer.fee}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Salary Request</p>
                          <p className="text-primary font-heading">{offer.salary}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Offer Date</p>
                          <p className="text-secondary">{offer.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-success font-heading uppercase">
                        Accept Offer
                      </button>
                      <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                        Negotiate
                      </button>
                      <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white hover:border-error font-heading uppercase">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {incomingOffers.length === 0 && (
              <div className="text-center py-20 bg-base-200 rounded-lg border border-base-300">
                <svg className="w-24 h-24 mx-auto text-neutral/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="font-heading text-2xl text-secondary mb-2 uppercase">No Incoming Offers</h3>
                <p className="font-body text-neutral/60">You don't have any pending transfer offers</p>
              </div>
            )}
          </div>
        )}

        {/* Outgoing Offers */}
        {activeTab === 'outgoing' && (
          <div className="space-y-4">
            {outgoingOffers.map(offer => (
              <div key={offer.id} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl text-secondary uppercase">{offer.player}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {offer.position}
                        </span>
                        <span className={`badge ${getStatusBadge(offer.status)}`}>
                          {offer.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                        <div>
                          <p className="text-neutral/60 text-sm">Target Team</p>
                          <p className="text-secondary">{offer.targetTeam}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Asking Fee</p>
                          <p className="text-primary font-heading">{offer.fee}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Offer Date</p>
                          <p className="text-secondary">{offer.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white hover:border-error font-heading uppercase">
                        Cancel Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="btn btn-primary btn-block font-heading uppercase">
              + List Player for Transfer
            </button>
          </div>
        )}

        {/* Completed Transfers */}
        {activeTab === 'completed' && (
          <div className="space-y-4">
            {completedTransfers.map(transfer => (
              <div key={transfer.id} className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl text-secondary uppercase">{transfer.player}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {transfer.position}
                        </span>
                        <span className={`badge ${transfer.type === 'incoming' ? 'badge-success' : 'badge-info'}`}>
                          {transfer.type}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                        <div>
                          <p className="text-neutral/60 text-sm">
                            {transfer.type === 'incoming' ? 'From' : 'To'}
                          </p>
                          <p className="text-secondary">{transfer.from || transfer.to}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Transfer Fee</p>
                          <p className="text-primary font-heading">{transfer.fee}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Completed Date</p>
                          <p className="text-secondary">{transfer.date}</p>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                      View Contract
                    </button>
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
