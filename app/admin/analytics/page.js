"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";
import { useState } from "react";

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month");

  const platformStats = {
    totalUsers: 342,
    activeUsers: 287,
    totalTeams: 48,
    totalTournaments: 12,
    activeTournaments: 3,
    totalMatches: 156,
    totalRevenue: "125,500 SAR",
    avgTournamentSize: 14
  };

  const userGrowth = [
    { month: "Jun", users: 120 },
    { month: "Jul", users: 165 },
    { month: "Aug", users: 210 },
    { month: "Sep", users: 268 },
    { month: "Oct", users: 342 }
  ];

  const tournamentStats = [
    { name: "Cash Cup 5v5", participants: 16, revenue: "8,000 SAR", status: "upcoming" },
    { name: "Ramadan Cup", participants: 16, revenue: "12,000 SAR", status: "ongoing" },
    { name: "Summer League", participants: 12, revenue: "7,200 SAR", status: "completed" }
  ];

  const topTeams = [
    { rank: 1, team: "Strike Force", wins: 18, revenue: "12,500 SAR" },
    { rank: 2, team: "Thunder FC", wins: 15, revenue: "10,200 SAR" },
    { rank: 3, team: "Red Lions", wins: 14, revenue: "9,800 SAR" },
    { rank: 4, team: "Eagles United", wins: 12, revenue: "8,500 SAR" }
  ];

  const revenueBreakdown = [
    { source: "Tournament Entry Fees", amount: "85,000 SAR", percentage: 68 },
    { source: "Sponsorships", amount: "30,000 SAR", percentage: 24 },
    { source: "Merchandise", amount: "10,500 SAR", percentage: 8 }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4 font-body">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase font-bold mb-4">
            PLATFORM ANALYTICS
          </h1>
          <p className="font-body text-neutral/60">
            Comprehensive insights and performance metrics
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-8">
        {/* Time Range Selector */}
        <div className="flex justify-between items-center">
          <h2 className="font-heading text-2xl text-secondary uppercase font-bold">Overview</h2>
          <div className="tabs tabs-boxed bg-base-200">
            <button
              className={`tab font-heading uppercase ${timeRange === 'week' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button
              className={`tab font-heading uppercase ${timeRange === 'month' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button
              className={`tab font-heading uppercase ${timeRange === 'year' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Users" value={platformStats.totalUsers} />
          <StatCard label="Active Users" value={platformStats.activeUsers} />
          <StatCard label="Total Teams" value={platformStats.totalTeams} />
          <StatCard label="Tournaments" value={platformStats.totalTournaments} />
          <StatCard label="Active Tournaments" value={platformStats.activeTournaments} />
          <StatCard label="Total Matches" value={platformStats.totalMatches} />
          <StatCard label="Total Revenue" value={platformStats.totalRevenue} />
          <StatCard label="Avg Team Size" value={platformStats.avgTournamentSize} />
        </div>

        {/* User Growth & Revenue Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title font-heading text-2xl text-secondary uppercase font-bold mb-4">User Growth Trend</h3>
              <div className="space-y-3">
                {userGrowth.map((data, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-neutral/60 font-body w-12">{data.month}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <progress
                          className="progress progress-primary w-full"
                          value={data.users}
                          max={Math.max(...userGrowth.map(u => u.users))}
                        ></progress>
                        <span className="text-primary font-heading text-lg font-bold min-w-[60px] text-right">
                          {data.users}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title font-heading text-2xl text-secondary uppercase font-bold mb-4">Revenue Breakdown</h3>
              <div className="space-y-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-body">{item.source}</span>
                      <span className="text-primary font-heading font-bold">{item.amount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <progress
                        className="progress progress-primary flex-1"
                        value={item.percentage}
                        max={100}
                      ></progress>
                      <span className="text-neutral/60 font-body text-sm w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Performance & Top Teams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tournament Performance */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title font-heading text-2xl text-secondary uppercase font-bold mb-4">Tournament Performance</h3>
              <div className="space-y-3">
                {tournamentStats.map((tournament, index) => (
                  <div key={index} className="p-4 bg-base-200 rounded-lg border border-base-300 hover:border-primary transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-secondary font-body font-semibold">{tournament.name}</h4>
                      <span className={`badge ${
                        tournament.status === 'ongoing' ? 'badge-success' :
                        tournament.status === 'upcoming' ? 'badge-info' :
                        'badge-neutral'
                      }`}>
                        {tournament.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral/60 font-body">
                        {tournament.participants} teams
                      </span>
                      <span className="text-primary font-heading font-bold">
                        {tournament.revenue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Teams */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title font-heading text-2xl text-secondary uppercase font-bold mb-4">Top Performing Teams</h3>
              <div className="space-y-3">
                {topTeams.map((team) => (
                  <div key={team.rank} className="flex items-center gap-4 p-3 bg-base-200 rounded-lg border border-base-300">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-lg font-bold ${
                      team.rank === 1 ? 'bg-primary text-white' :
                      team.rank === 2 ? 'bg-gray-400 text-white' :
                      team.rank === 3 ? 'bg-warning text-white' :
                      'bg-base-300 text-secondary'
                    }`}>
                      {team.rank}
                    </div>
                    <div className="flex-1">
                      <p className="text-secondary font-body font-semibold">{team.team}</p>
                      <p className="text-neutral/60 text-sm font-body">{team.wins} wins</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-heading font-bold">{team.revenue}</p>
                      <p className="text-neutral/60 text-xs font-body">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <h3 className="card-title font-heading text-2xl text-secondary uppercase font-bold mb-4">System Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="radial-progress text-success" style={{"--value": 95, "--size": "6rem"}} role="progressbar">
                  95%
                </div>
                <p className="text-neutral/60 font-body mt-2">Server Uptime</p>
              </div>
              <div className="text-center">
                <div className="radial-progress text-primary" style={{"--value": 82, "--size": "6rem"}} role="progressbar">
                  82%
                </div>
                <p className="text-neutral/60 font-body mt-2">User Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="radial-progress text-info" style={{"--value": 78, "--size": "6rem"}} role="progressbar">
                  78%
                </div>
                <p className="text-neutral/60 font-body mt-2">API Performance</p>
              </div>
              <div className="text-center">
                <div className="radial-progress text-warning" style={{"--value": 68, "--size": "6rem"}} role="progressbar">
                  68%
                </div>
                <p className="text-neutral/60 font-body mt-2">Database Health</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn btn-primary font-heading uppercase">
            Export Full Report
          </button>
          <button className="btn btn-outline btn-primary font-heading uppercase">
            Download as PDF
          </button>
          <button className="btn btn-outline btn-primary font-heading uppercase">
            Schedule Report
          </button>
        </div>
      </div>
    </div>
  );
}
