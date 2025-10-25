"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminPaymentsPage() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingPayments = [
    {
      id: 1,
      type: "Tournament Entry",
      team: "Desert Warriors",
      tournament: "Cash Cup 5v5",
      amount: "500 SAR",
      dueDate: "Oct 30, 2024",
      status: "pending"
    },
    {
      id: 2,
      type: "Prize Payout",
      team: "Strike Force",
      tournament: "Ramadan Cup 2024",
      amount: "7,500 SAR",
      dueDate: "Oct 28, 2024",
      status: "processing"
    }
  ];

  const completedPayments = [
    {
      id: 1,
      type: "Tournament Entry",
      team: "Strike Force",
      tournament: "Cash Cup 5v5",
      amount: "500 SAR",
      completedDate: "Oct 15, 2024",
      method: "Bank Transfer",
      transactionId: "TXN001234"
    },
    {
      id: 2,
      type: "Tournament Entry",
      team: "Thunder FC",
      tournament: "Cash Cup 5v5",
      amount: "500 SAR",
      completedDate: "Oct 16, 2024",
      method: "Credit Card",
      transactionId: "TXN001235"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge-warning",
      processing: "badge-info",
      completed: "badge-success",
      failed: "badge-error"
    };
    return badges[status] || "badge-neutral";
  };

  const totalPending = pendingPayments.reduce(
    (sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0
  );

  const totalCompleted = completedPayments.reduce(
    (sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0
  );

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            PAYMENT OVERSIGHT
          </h1>
          <p className="font-helvetica text-white">
            Monitor and manage all platform payments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Pending Amount</h3>
              <p className="text-warning text-3xl font-righteous">
                {totalPending.toLocaleString()} SAR
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Completed (This Month)</h3>
              <p className="text-success text-3xl font-righteous">
                {totalCompleted.toLocaleString()} SAR
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Total Transactions</h3>
              <p className="text-primary text-3xl font-righteous">
                {pendingPayments.length + completedPayments.length}
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="text-gray-400 text-sm font-helvetica">Processing</h3>
              <p className="text-info text-3xl font-righteous">
                {pendingPayments.filter(p => p.status === 'processing').length}
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

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-helvetica">
                        <div>
                          <p className="text-gray-400 text-sm">Team</p>
                          <p className="text-white">{payment.team}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Tournament</p>
                          <p className="text-white">{payment.tournament}</p>
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
                      <button className="btn btn-sm btn-success font-righteous">
                        Confirm Payment
                      </button>
                      <button className="btn btn-sm btn-outline btn-primary font-righteous">
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline text-error hover:bg-error hover:text-white hover:border-error font-righteous">
                        Flag Issue
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
                <p className="font-helvetica text-gray-400">No pending payments to review</p>
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
                      <th className="font-righteous">ID</th>
                      <th className="font-righteous">Type</th>
                      <th className="font-righteous">Team</th>
                      <th className="font-righteous">Tournament</th>
                      <th className="font-righteous">Amount</th>
                      <th className="font-righteous">Method</th>
                      <th className="font-righteous">Date</th>
                      <th className="font-righteous">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="font-helvetica">
                    {completedPayments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-base-100 border-base-300">
                        <td className="text-gray-400">{payment.transactionId}</td>
                        <td className="text-white">{payment.type}</td>
                        <td className="text-white">{payment.team}</td>
                        <td className="text-white">{payment.tournament}</td>
                        <td className="text-primary font-righteous">{payment.amount}</td>
                        <td className="text-white">{payment.method}</td>
                        <td className="text-gray-400">{payment.completedDate}</td>
                        <td>
                          <button className="btn btn-xs btn-outline btn-primary font-righteous">
                            Receipt
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

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center mt-8 gap-4">
          <button className="btn btn-primary font-righteous">
            Export Payment Report
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Send Payment Reminders
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
