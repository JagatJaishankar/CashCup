"use client";

import Link from "next/link";
import StatCard from "../../components/ui/StatCard";
import { useState } from "react";

export default function ManagerAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("season");

  const teamStats = {
    matchesPlayed: 24,
    wins: 15,
    draws: 5,
    losses: 4,
    goalsFor: 48,
    goalsAgainst: 22,
    cleanSheets: 10,
    avgPossession: 58
  };

  const topPerformers = [
    { name: "Ahmed Al-Qahtani", position: "FWD", goals: 15, assists: 8, rating: 8.5 },
    { name: "Khalid Al-Zahrani", position: "MID", goals: 7, assists: 12, rating: 8.2 },
    { name: "Omar Al-Ghamdi", position: "DEF", goals: 2, assists: 3, rating: 7.9 },
    { name: "Fahad Al-Mutairi", position: "GK", goals: 0, assists: 0, rating: 7.8 }
  ];

  const recentForm = [
    { match: "vs Thunder FC", result: "W", score: "3-1" },
    { match: "vs Red Lions", result: "D", score: "1-1" },
    { match: "vs Eagles United", result: "W", score: "2-0" },
    { match: "vs Desert Warriors", result: "L", score: "0-2" },
    { match: "vs Golden Stars", result: "W", score: "4-1" }
  ];

  const injuryReport = [
    { player: "Abdullah Al-Harbi", injury: "Hamstring Strain", status: "2 weeks", severity: "moderate" },
    { player: "Majed Al-Ruwaili", injury: "Ankle Sprain", status: "1 week", severity: "minor" }
  ];

  const disciplineRecord = {
    yellowCards: 18,
    redCards: 2,
    suspensions: 1
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/manager" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            TEAM ANALYTICS
          </h1>
          <p className="font-helvetica text-white">
            Comprehensive performance analysis and insights
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 md:py-12 space-y-8">
        {/* Time Range Selector */}
        <div className="flex justify-between items-center">
          <h2 className="font-righteous text-2xl text-white">Performance Overview</h2>
          <div className="tabs tabs-boxed bg-base-200">
            <button
              className={`tab font-righteous ${timeRange === 'season' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('season')}
            >
              Season
            </button>
            <button
              className={`tab font-righteous ${timeRange === 'month' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              This Month
            </button>
            <button
              className={`tab font-righteous ${timeRange === 'week' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              This Week
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Matches" value={teamStats.matchesPlayed} />
          <StatCard label="Wins" value={teamStats.wins} />
          <StatCard label="Draws" value={teamStats.draws} />
          <StatCard label="Losses" value={teamStats.losses} />
          <StatCard label="Goals For" value={teamStats.goalsFor} />
          <StatCard label="Goals Against" value={teamStats.goalsAgainst} />
          <StatCard label="Clean Sheets" value={teamStats.cleanSheets} />
          <StatCard label="Avg Possession" value={`${teamStats.avgPossession}%`} />
        </div>

        {/* Recent Form & Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Form */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="card-title font-righteous text-2xl text-white mb-4">Recent Form</h3>
              <div className="space-y-3">
                {recentForm.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-righteous text-lg ${
                        match.result === 'W' ? 'bg-success text-white' :
                        match.result === 'D' ? 'bg-warning text-black' :
                        'bg-error text-white'
                      }`}>
                        {match.result}
                      </div>
                      <p className="text-white font-helvetica">{match.match}</p>
                    </div>
                    <p className="text-primary font-righteous">{match.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="card-title font-righteous text-2xl text-white mb-4">Top Performers</h3>
              <div className="space-y-3">
                {topPerformers.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
                    <div className="flex-1">
                      <p className="text-white font-helvetica font-semibold">{player.name}</p>
                      <div className="flex gap-2 text-sm text-gray-400 font-helvetica mt-1">
                        <span>{player.position}</span>
                        <span>•</span>
                        <span>{player.goals}G</span>
                        <span>•</span>
                        <span>{player.assists}A</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-righteous text-xl">{player.rating}</p>
                      <p className="text-gray-400 text-xs font-helvetica">Rating</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Injury Report & Discipline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Injury Report */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="card-title font-righteous text-2xl text-white mb-4">Injury Report</h3>
              {injuryReport.length > 0 ? (
                <div className="space-y-3">
                  {injuryReport.map((injury, index) => (
                    <div key={index} className="p-4 bg-base-100 rounded-lg border-l-4 border-warning">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-white font-helvetica font-semibold">{injury.player}</p>
                        <span className={`badge ${
                          injury.severity === 'severe' ? 'badge-error' :
                          injury.severity === 'moderate' ? 'badge-warning' :
                          'badge-info'
                        }`}>
                          {injury.severity}
                        </span>
                      </div>
                      <p className="text-gray-400 font-helvetica text-sm">{injury.injury}</p>
                      <p className="text-primary font-righteous text-sm mt-1">Return: {injury.status}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto text-success mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <p className="text-success font-righteous">No Current Injuries</p>
                  <p className="text-gray-400 font-helvetica text-sm">All players fit and available</p>
                </div>
              )}
            </div>
          </div>

          {/* Discipline Record */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h3 className="card-title font-righteous text-2xl text-white mb-4">Discipline Record</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="12" height="16" rx="2"/>
                      </svg>
                    </div>
                    <span className="text-white font-helvetica">Yellow Cards</span>
                  </div>
                  <span className="text-warning font-righteous text-2xl">{disciplineRecord.yellowCards}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-error rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="12" height="16" rx="2"/>
                      </svg>
                    </div>
                    <span className="text-white font-helvetica">Red Cards</span>
                  </div>
                  <span className="text-error font-righteous text-2xl">{disciplineRecord.redCards}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-base-300 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                    </div>
                    <span className="text-white font-helvetica">Active Suspensions</span>
                  </div>
                  <span className="text-gray-400 font-righteous text-2xl">{disciplineRecord.suspensions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn btn-primary font-righteous">
            Export Full Report
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            Compare with League Average
          </button>
          <button className="btn btn-outline btn-primary font-righteous">
            View Detailed Statistics
          </button>
        </div>
      </div>
    </div>
  );
}
