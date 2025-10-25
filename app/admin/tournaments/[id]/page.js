"use client";

import Link from "next/link";
import { useState, use } from "react";

export default function EditTournamentPage({ params }) {
  const { id: tournamentId } = use(params);

  // Mock data - would come from API
  const [formData, setFormData] = useState({
    name: "Cash Cup 5v5 Championship",
    description: "Elite 5v5 tournament for the best teams in Jeddah",
    startDate: "2024-11-15",
    endDate: "2024-11-20",
    registrationDeadline: "2024-11-10",
    maxTeams: "16",
    entryFee: "500",
    prizePool: "10000",
    format: "knockout",
    venue: "Al-Hamra Sports Complex",
    status: "upcoming",
    rules: "Standard FIFA rules apply. All players must present valid ID.",
    contactEmail: "contact@cashcup.com",
    contactPhone: "+966 50 123 4567"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating tournament:", formData);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this tournament? This action cannot be undone.")) {
      console.log("Deleting tournament:", tournamentId);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="btn btn-ghost btn-sm text-primary mb-4">
            ← Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-righteous text-4xl md:text-5xl text-primary mb-2">
                EDIT TOURNAMENT
              </h1>
              <p className="font-helvetica text-white">
                Tournament ID: #{tournamentId}
              </p>
            </div>
            <div className="flex gap-2">
              <span className={`badge ${
                formData.status === 'upcoming' ? 'badge-info' :
                formData.status === 'ongoing' ? 'badge-success' :
                formData.status === 'completed' ? 'badge-neutral' :
                'badge-warning'
              } badge-lg`}>
                {formData.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-8 md:py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Update */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Tournament Status
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-helvetica font-semibold">Status</span>
                </label>
                <select
                  name="status"
                  className="select select-bordered bg-base-100 text-white"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="registration">Registration Open</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Tournament Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Description</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    className="textarea textarea-bordered bg-base-100 text-white h-24"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Format</span>
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
                      <span className="label-text text-white font-helvetica font-semibold">Venue</span>
                    </label>
                    <input
                      type="text"
                      name="venue"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.venue}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Dates & Registration
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Start Date</span>
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
                    <span className="label-text text-white font-helvetica font-semibold">End Date</span>
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
                    <span className="label-text text-white font-helvetica font-semibold">Registration Deadline</span>
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
                    <span className="label-text text-white font-helvetica font-semibold">Max Teams</span>
                  </label>
                  <input
                    type="number"
                    name="maxTeams"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.maxTeams}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Financial */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Financial Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Entry Fee (SAR)</span>
                  </label>
                  <input
                    type="number"
                    name="entryFee"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.entryFee}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-helvetica font-semibold">Prize Pool (SAR)</span>
                  </label>
                  <input
                    type="number"
                    name="prizePool"
                    required
                    className="input input-bordered bg-base-100 text-white"
                    value={formData.prizePool}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rules and Contact */}
          <div className="card bg-base-200 shadow-xl border-2 border-base-300">
            <div className="card-body">
              <h2 className="card-title font-righteous text-2xl text-white mb-4">
                Rules & Contact
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
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Contact Email</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.contactEmail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-helvetica font-semibold">Contact Phone</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      required
                      className="input input-bordered bg-base-100 text-white"
                      value={formData.contactPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-outline text-error hover:bg-error hover:text-white hover:border-error font-righteous"
            >
              Delete Tournament
            </button>
            <div className="flex gap-4">
              <Link href="/admin" className="btn btn-outline btn-primary font-righteous">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary font-righteous">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
