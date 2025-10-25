"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreateTournamentPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    maxTeams: "",
    entryFee: "",
    prizePool: "",
    format: "knockout",
    venue: "",
    rules: "",
    contactEmail: "",
    contactPhone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating tournament:", formData);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-4">
            CREATE TOURNAMENT
          </h1>
          <p className="font-helvetica text-white">
            Set up a new tournament event
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-8 md:py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Tournament Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Cash Cup 5v5 Championship"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Description *</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    className="textarea textarea-bordered bg-base-100 text-white h-24"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the tournament..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Format *</span>
                    </label>
                    <select
                      name="format"
                      required
                      className="select select-bordered bg-base-100 text-white"
                      value={formData.format}
                      onChange={handleChange}
                    >
                      <option value="knockout">Knockout</option>
                      <option value="league">League</option>
                      <option value="group_knockout">Group Stage + Knockout</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Venue *</span>
                    </label>
                    <input
                      type="text"
                      name="venue"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g., Al-Hamra Sports Complex"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dates and Registration */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Dates & Registration
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Start Date *</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">End Date *</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Registration Deadline *</span>
                  </label>
                  <input
                    type="date"
                    name="registrationDeadline"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.registrationDeadline}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Max Teams *</span>
                  </label>
                  <input
                    type="number"
                    name="maxTeams"
                    required
                    min="4"
                    max="64"
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.maxTeams}
                    onChange={handleChange}
                    placeholder="e.g., 16"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Financial Details */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Financial Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Entry Fee (SAR) *</span>
                  </label>
                  <input
                    type="number"
                    name="entryFee"
                    required
                    min="0"
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.entryFee}
                    onChange={handleChange}
                    placeholder="e.g., 500"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Prize Pool (SAR) *</span>
                  </label>
                  <input
                    type="number"
                    name="prizePool"
                    required
                    min="0"
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.prizePool}
                    onChange={handleChange}
                    placeholder="e.g., 10000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rules and Contact */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Rules & Contact Information
              </h2>

              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Tournament Rules</span>
                  </label>
                  <textarea
                    name="rules"
                    className="textarea textarea-bordered bg-base-100 text-white h-32"
                    value={formData.rules}
                    onChange={handleChange}
                    placeholder="Enter tournament rules and regulations..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Contact Email *</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder="contact@cashcup.com"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Contact Phone *</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-end">
            <Link href="/admin" className="btn btn-outline btn-primary font-righteous">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary font-righteous">
              Create Tournament
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
