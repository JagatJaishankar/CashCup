"use client";

import Link from "next/link";
import StatCard from "../components/ui/StatCard";

export default function AdminDashboard() {
  const platformStats = {
    totalPlayers: 250,
    totalTeams: 50,
    activeTournaments: 3,
    totalRevenue: "150,000"
  };

  const pendingTransfers = [
    {
      id: 1,
      player: "Abdullah Mansour",
      fromTeam: "Free Agent",
      toTeam: "Strike Force",
      requestDate: "Oct 20, 2024",
      status: "pending"
    },
    {
      id: 2,
      player: "Fahad Al-Otaibi",
      fromTeam: "Eagles United",
      toTeam: "Thunder FC",
      requestDate: "Oct 18, 2024",
      status: "pending"
    }
  ];

  const activeTournaments = [
    {
      id: 1,
      name: "Cash Cup 5v5 Championship",
      startDate: "Nov 15, 2024",
      teams: 12,
      maxTeams: 16,
      status: "registration"
    },
    {
      id: 2,
      name: "Ramadan Cup 2024",
      startDate: "Oct 20, 2024",
      teams: 16,
      maxTeams: 16,
      status: "ongoing"
    }
  ];

  const recentActivity = [
    { action: "New player registered: Ahmed Al-Saud", time: "5 min ago" },
    { action: "Tournament payment received: Strike Force", time: "15 min ago" },
    { action: "Transfer request submitted", time: "1 hour ago" },
    { action: "New team created: Desert Warriors", time: "2 hours ago" },
    { action: "Match score updated: Strike Force vs Thunder FC", time: "3 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-2">
            ADMIN DASHBOARD
          </h1>
          <p className="font-helvetica text-xl text-gray-300">
            Platform management and control center
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Platform Stats */}
        <div className="mb-12">
          <h2 className="font-righteous text-2xl mb-6">
            PLATFORM <span className="text-primary">OVERVIEW</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Total Players" value={platformStats.totalPlayers} />
            <StatCard label="Total Teams" value={platformStats.totalTeams} />
            <StatCard label="Active Tournaments" value={platformStats.activeTournaments} />
            <StatCard label="Total Revenue" value={`${platformStats.totalRevenue} SAR`} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Transfers */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title font-righteous text-2xl text-white">
                    Pending <span className="text-primary">Transfers</span>
                  </h2>
                  <Link href="/admin/transfers" className="btn btn-ghost btn-sm text-primary">
                    View All
                  </Link>
                </div>

                <div className="space-y-3">
                  {pendingTransfers.map(transfer => (
                    <div key={transfer.id} className="p-4 bg-base-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-righteous text-lg">{transfer.player}</h3>
                          <p className="font-helvetica text-sm text-gray-400">
                            {transfer.fromTeam} → {transfer.toTeam}
                          </p>
                          <p className="font-helvetica text-xs text-gray-500">{transfer.requestDate}</p>
                        </div>
                        <span className="badge badge-warning">Pending</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-success btn-sm font-righteous">Approve</button>
                        <button className="btn btn-error btn-sm font-righteous">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Tournaments */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title font-righteous text-2xl text-white">
                    Active <span className="text-primary">Tournaments</span>
                  </h2>
                  <Link href="/admin/tournaments" className="btn btn-ghost btn-sm text-primary">
                    View All
                  </Link>
                </div>

                <div className="space-y-3">
                  {activeTournaments.map(tournament => (
                    <Link key={tournament.id} href={`/admin/tournaments/${tournament.id}`}>
                      <div className="p-4 bg-base-200 rounded-lg hover:bg-primary hover:text-black transition-all cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-righteous text-lg">{tournament.name}</h3>
                            <p className="font-helvetica text-sm opacity-80">
                              {tournament.startDate} • {tournament.teams}/{tournament.maxTeams} teams
                            </p>
                          </div>
                          <span className={`badge ${tournament.status === 'registration' ? 'badge-success' : 'badge-warning'}`}>
                            {tournament.status}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link href="/admin/tournaments/create" className="btn btn-primary btn-block mt-4 font-righteous">
                  Create New Tournament
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl mb-4">Recent Activity</h2>
                <div className="space-y-2">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-base-200 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1">
                        <p className="font-helvetica">{activity.action}</p>
                        <p className="font-helvetica text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/admin/audit" className="btn btn-ghost btn-sm text-primary mt-2">
                  View Audit Log
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card bg-black text-white shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/admin/tournaments/create" className="btn btn-outline btn-primary btn-block font-righteous">
                    Create Tournament
                  </Link>
                  <Link href="/admin/scores" className="btn btn-outline btn-primary btn-block font-righteous">
                    Update Scores
                  </Link>
                  <Link href="/admin/check-in" className="btn btn-outline btn-primary btn-block font-righteous">
                    Player Check-In
                  </Link>
                  <Link href="/admin/users" className="btn btn-outline btn-primary btn-block font-righteous">
                    Manage Users
                  </Link>
                  <Link href="/admin/payments" className="btn btn-outline btn-primary btn-block font-righteous">
                    Payment Management
                  </Link>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h3 className="font-righteous text-xl mb-4">System Status</h3>
                <div className="space-y-3 font-helvetica text-sm">
                  <div className="flex justify-between items-center">
                    <span>Platform</span>
                    <span className="badge badge-success">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payment Gateway</span>
                    <span className="badge badge-success">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Service</span>
                    <span className="badge badge-success">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database</span>
                    <span className="badge badge-success">Healthy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Requests */}
            <div className="card bg-primary shadow-xl">
              <div className="card-body">
                <h3 className="font-righteous text-xl text-black mb-4">Support Requests</h3>
                <div className="text-center">
                  <div className="font-righteous text-5xl text-black mb-2">5</div>
                  <p className="font-helvetica text-sm text-black/80">Pending tickets</p>
                </div>
                <Link href="/admin/support" className="btn bg-black text-primary hover:bg-black/90 border-none btn-sm mt-4 font-righteous">
                  View Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
