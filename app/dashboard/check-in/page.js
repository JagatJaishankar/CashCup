"use client";

import Link from "next/link";
import { useState } from "react";

export default function CheckInPage() {
  const [qrCode, setQrCode] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: "Cash Cup 5v5 Championship",
      date: "Nov 15, 2024",
      time: "18:00",
      venue: "Al-Hamra Sports Complex",
      checkInOpen: true,
      checkedIn: false
    }
  ];

  const generateQR = (tournamentId) => {
    // In real app, this would generate actual QR code
    setQrCode(tournamentId);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/dashboard" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            TOURNAMENT CHECK-IN
          </h1>
          <p className="font-helvetica text-white">
            Check in for your upcoming matches
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-8 md:py-12">
        <div className="space-y-6">
          {tournaments.map(tournament => (
            <div key={tournament.id} className="card bg-base-200 shadow-xl border-2 border-base-300">
              <div className="card-body">
                <h2 className="card-title font-righteous text-2xl text-white">
                  {tournament.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-helvetica mt-4">
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="text-white">{tournament.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Time</p>
                    <p className="text-white">{tournament.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Venue</p>
                    <p className="text-white">{tournament.venue}</p>
                  </div>
                </div>

                {qrCode === tournament.id ? (
                  <div className="mt-6 p-8 bg-white rounded-lg text-center">
                    <div className="w-64 h-64 mx-auto bg-base-200 flex items-center justify-center border-4 border-primary">
                      <div className="text-center">
                        <div className="font-righteous text-6xl text-black mb-2">QR</div>
                        <div className="font-helvetica text-sm text-gray-600">
                          #{tournament.id}PLAYER001
                        </div>
                      </div>
                    </div>
                    <p className="font-helvetica text-sm text-gray-600 mt-4">
                      Show this QR code at the venue for check-in
                    </p>
                  </div>
                ) : (
                  <div className="mt-6">
                    {tournament.checkInOpen ? (
                      <button
                        onClick={() => generateQR(tournament.id)}
                        className="btn btn-primary btn-block font-righteous"
                      >
                        Generate Check-In QR Code
                      </button>
                    ) : (
                      <div className="alert alert-warning">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        <span className="font-helvetica">Check-in opens 2 hours before match time</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {tournaments.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h3 className="font-righteous text-2xl text-white mb-2">No Upcoming Matches</h3>
              <p className="font-helvetica text-gray-400">You don't have any matches requiring check-in</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
