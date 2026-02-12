"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManagerSponsorsPage() {
  const [activeTab, setActiveTab] = useState("active");

  const activeSponsors = [
    {
      id: 1,
      name: "TechSports Arabia",
      logo: "TS",
      type: "Main Sponsor",
      contractValue: "50,000 SAR/year",
      startDate: "Jan 1, 2024",
      endDate: "Dec 31, 2024",
      status: "active",
      benefits: ["Jersey branding", "Stadium banners", "Social media promotion"]
    },
    {
      id: 2,
      name: "Jeddah Sports Gear",
      logo: "JSG",
      type: "Kit Sponsor",
      contractValue: "30,000 SAR/year",
      startDate: "Jan 1, 2024",
      endDate: "Dec 31, 2024",
      status: "active",
      benefits: ["Kit supply", "Training equipment", "Merchandise discount"]
    }
  ];

  const pendingSponsors = [
    {
      id: 1,
      name: "Arabian Energy Drinks",
      logo: "AED",
      type: "Beverage Sponsor",
      proposedValue: "20,000 SAR/year",
      submittedDate: "Oct 15, 2024",
      status: "pending"
    }
  ];

  const potentialSponsors = [
    {
      id: 1,
      name: "Local Restaurant Chain",
      industry: "Food & Beverage",
      estimatedValue: "15,000 SAR/year",
      lastContact: "Oct 10, 2024"
    },
    {
      id: 2,
      name: "Sports Equipment Store",
      industry: "Retail",
      estimatedValue: "25,000 SAR/year",
      lastContact: "Sep 28, 2024"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: "badge-success",
      pending: "badge-warning",
      expired: "badge-error"
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
            SPONSOR MANAGEMENT
          </h1>
          <p className="font-body text-neutral/60">
            Manage team sponsors and partnerships
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Active Sponsors</h3>
              <p className="text-success text-3xl font-heading">{activeSponsors.length}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Total Annual Value</h3>
              <p className="text-primary text-3xl font-heading">
                {activeSponsors
                  .reduce((sum, s) => sum + parseInt(s.contractValue.replace(/[^0-9]/g, '')), 0)
                  .toLocaleString()} SAR
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="text-neutral/60 text-sm font-body">Pending Proposals</h3>
              <p className="text-warning text-3xl font-heading">{pendingSponsors.length}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-200 border border-base-300 mb-8">
          <button
            className={`tab font-heading uppercase ${activeTab === 'active' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Sponsors ({activeSponsors.length})
          </button>
          <button
            className={`tab font-heading uppercase ${activeTab === 'pending' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending ({pendingSponsors.length})
          </button>
          <button
            className={`tab font-heading uppercase ${activeTab === 'potential' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('potential')}
          >
            Potential Leads
          </button>
        </div>

        {/* Active Sponsors */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            {activeSponsors.map(sponsor => (
              <div key={sponsor.id} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-heading text-2xl">{sponsor.logo}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl text-secondary uppercase">{sponsor.name}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {sponsor.type}
                        </span>
                        <span className={`badge ${getStatusBadge(sponsor.status)}`}>
                          {sponsor.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body mb-4">
                        <div>
                          <p className="text-neutral/60 text-sm">Contract Value</p>
                          <p className="text-primary font-heading text-lg">{sponsor.contractValue}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Contract Period</p>
                          <p className="text-secondary">{sponsor.startDate} - {sponsor.endDate}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Benefits</p>
                          <p className="text-secondary">{sponsor.benefits.length} items</p>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <p className="text-neutral/60 text-sm font-body mb-2">Sponsorship Benefits:</p>
                        <div className="flex flex-wrap gap-2">
                          {sponsor.benefits.map((benefit, index) => (
                            <span key={index} className="badge badge-outline text-secondary">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <button className="btn btn-sm btn-primary font-heading uppercase">
                          View Contract
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                          Generate Report
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                          Contact Sponsor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="btn btn-primary btn-block font-heading uppercase">
              + Add New Sponsor
            </button>
          </div>
        )}

        {/* Pending Sponsors */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingSponsors.map(sponsor => (
              <div key={sponsor.id} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-base-200 rounded-lg flex items-center justify-center border-2 border-primary">
                        <span className="text-primary font-heading text-2xl">{sponsor.logo}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl text-secondary uppercase">{sponsor.name}</h3>
                        <span className="badge badge-outline text-primary border-primary">
                          {sponsor.type}
                        </span>
                        <span className={`badge ${getStatusBadge(sponsor.status)}`}>
                          {sponsor.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body mb-4">
                        <div>
                          <p className="text-neutral/60 text-sm">Proposed Value</p>
                          <p className="text-primary font-heading text-lg">{sponsor.proposedValue}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Submitted Date</p>
                          <p className="text-secondary">{sponsor.submittedDate}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button className="btn btn-sm btn-success font-heading uppercase">
                          Accept Proposal
                        </button>
                        <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                          Negotiate Terms
                        </button>
                        <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white hover:border-error font-heading uppercase">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pendingSponsors.length === 0 && (
              <div className="text-center py-20 bg-base-200 rounded-lg border border-base-300">
                <svg className="w-24 h-24 mx-auto text-neutral/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                </svg>
                <h3 className="font-heading text-2xl text-secondary mb-2 uppercase">No Pending Proposals</h3>
                <p className="font-body text-neutral/60">You don't have any sponsor proposals to review</p>
              </div>
            )}
          </div>
        )}

        {/* Potential Leads */}
        {activeTab === 'potential' && (
          <div className="space-y-4">
            {potentialSponsors.map(lead => (
              <div key={lead.id} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-secondary mb-3 uppercase">{lead.name}</h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                        <div>
                          <p className="text-neutral/60 text-sm">Industry</p>
                          <p className="text-secondary">{lead.industry}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Estimated Value</p>
                          <p className="text-primary font-heading">{lead.estimatedValue}</p>
                        </div>
                        <div>
                          <p className="text-neutral/60 text-sm">Last Contact</p>
                          <p className="text-secondary">{lead.lastContact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-primary font-heading uppercase">
                        Send Proposal
                      </button>
                      <button className="btn btn-sm btn-outline btn-primary font-heading uppercase">
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="btn btn-primary btn-block font-heading uppercase">
              + Add New Lead
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
