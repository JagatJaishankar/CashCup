"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManagerPaymentsPage() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingPayments = [
    {
      id: 1,
      type: "Tournament Entry",
      tournament: "Winter Championship 2024",
      amount: "1,000 SAR",
      dueDate: "Nov 1, 2024",
      status: "pending"
    },
    {
      id: 2,
      type: "Player Salary",
      player: "Ahmed Al-Qahtani",
      amount: "5,000 SAR",
      dueDate: "Nov 1, 2024",
      status: "pending"
    }
  ];

  const completedPayments = [
    {
      id: 1,
      type: "Tournament Entry",
      tournament: "Cash Cup 5v5 Championship",
      amount: "500 SAR",
      paidDate: "Oct 1, 2024",
      status: "completed",
      method: "Bank Transfer"
    },
    {
      id: 2,
      type: "Player Salary",
      player: "Khalid Al-Zahrani",
      amount: "4,000 SAR",
      paidDate: "Oct 1, 2024",
      status: "completed",
      method: "Bank Transfer"
    },
    {
      id: 3,
      type: "Tournament Entry",
      tournament: "Ramadan Cup 2024",
      amount: "750 SAR",
      paidDate: "Sep 15, 2024",
      status: "completed",
      method: "Credit Card"
    }
  ];

  const upcomingPayments = [
    {
      id: 1,
      type: "Player Salary",
      description: "Monthly salaries for 8 players",
      amount: "35,000 SAR",
      dueDate: "Dec 1, 2024"
    },
    {
      id: 2,
      type: "Tournament Entry",
      tournament: "New Year Cup",
      amount: "600 SAR",
      dueDate: "Dec 15, 2024"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge-warning",
      completed: "badge-success",
      overdue: "badge-error"
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
            PAYMENT MANAGEMENT
          </h1>
          <p className="font-helvetica text-white">
            Track and manage all team payments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Pending Payments</h3>
              <p className="text-warning text-3xl font-righteous">
                {pendingPayments.reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0).toLocaleString()} SAR
              </p>
              <p className="text-gray-400 text-sm font-helvetica mt-1">
                {pendingPayments.length} payment{pendingPayments.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Paid (This Month)</h3>
              <p className="text-success text-3xl font-righteous">
                {completedPayments
                  .filter(p => p.paidDate.includes('Oct'))
                  .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0)
                  .toLocaleString()} SAR
              </p>
              <p className="text-gray-400 text-sm font-helvetica mt-1">
                {completedPayments.filter(p => p.paidDate.includes('Oct')).length} payment{completedPayments.filter(p => p.paidDate.includes('Oct')).length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Upcoming This Month</h3>
              <p className="text-primary text-3xl font-righteous">
                {upcomingPayments
                  .filter(p => p.dueDate.includes('Dec'))
                  .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0)
                  .toLocaleString()} SAR
              </p>
              <p className="text-gray-400 text-sm font-helvetica mt-1">
                {upcomingPayments.filter(p => p.dueDate.includes('Dec')).length} payment{upcomingPayments.filter(p => p.dueDate.includes('Dec')).length !== 1 ? 's' : ''}
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
            Pending ({pendingPayments.length})
          </button>
          <button
            className={`tab font-righteous ${activeTab === 'completed' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
          <button
            className={`tab font-righteous ${activeTab === 'upcoming' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
        </div>

        {/* Pending Payments */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingPayments.map(payment => (
              <div key={payment.id} className="card bg-base-200 shadow-xl border-2 border-base-300 hover:border-primary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-righteous text-2xl text-white">{payment.type}</h3>
                        <span className={`badge ${getStatusBadge(payment.status)}`}>
                          {payment.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-helvetica">
                        <div>
                          <p className="text-gray-400 text-sm">Description</p>
                          <p className="text-white">{payment.tournament || payment.player}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Amount</p>
                          <p className="text-primary font-righteous text-lg">{payment.amount}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Due Date</p>
                          <p className="text-white">{payment.dueDate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-primary font-righteous">
                        Pay Now
                      </button>
                      <button className="btn btn-sm btn-outline btn-primary font-righteous">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pendingPayments.length === 0 && (
              <div className="text-center py-20 bg-base-200 rounded-lg">
                <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <h3 className="font-righteous text-2xl text-white mb-2">All Caught Up!</h3>
                <p className="font-helvetica text-gray-400">You have no pending payments</p>
              </div>
            )}
          </div>
        )}

        {/* Completed Payments */}
        {activeTab === 'completed' && (
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="text-white border-base-300">
                      <th className="font-righteous">Type</th>
                      <th className="font-righteous">Description</th>
                      <th className="font-righteous">Amount</th>
                      <th className="font-righteous">Paid Date</th>
                      <th className="font-righteous">Method</th>
                      <th className="font-righteous">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-helvetica">
                    {completedPayments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-base-100 border-base-300">
                        <td className="text-white">{payment.type}</td>
                        <td className="text-white">{payment.tournament || payment.player}</td>
                        <td className="text-primary font-righteous">{payment.amount}</td>
                        <td className="text-gray-400">{payment.paidDate}</td>
                        <td className="text-white">{payment.method}</td>
                        <td>
                          <span className={`badge ${getStatusBadge(payment.status)}`}>
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Payments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingPayments.map(payment => (
              <div key={payment.id} className="card bg-base-200 shadow-xl border-2 border-base-300">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-righteous text-2xl text-white mb-3">{payment.type}</h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-helvetica">
                        <div>
                          <p className="text-gray-400 text-sm">Description</p>
                          <p className="text-white">{payment.tournament || payment.description}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Amount</p>
                          <p className="text-primary font-righteous text-lg">{payment.amount}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Due Date</p>
                          <p className="text-white">{payment.dueDate}</p>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-sm btn-outline btn-primary font-righteous">
                      Set Reminder
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
