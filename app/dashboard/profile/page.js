"use client";

import Link from "next/link";
import { useState } from "react";

export default function PlayerProfilePage() {
  const [formData, setFormData] = useState({
    name: "Ahmed Al-Qahtani",
    email: "ahmed@example.com",
    phone: "+966 50 123 4567",
    dateOfBirth: "1998-01-15",
    height: "178",
    weight: "72",
    position: "FWD",
    preferredFoot: "right",
    jerseyNumber: "10"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <section className="bg-base-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/dashboard" className="btn btn-ghost btn-sm text-primary mb-4 font-body">
            ← Back to Dashboard
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase">
            EDIT PROFILE
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-base-100 border border-base-300 p-6">
            <h2 className="font-heading text-2xl text-secondary uppercase mb-4">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Date of Birth</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Physical Attributes */}
          <div className="bg-base-100 border border-base-300 p-6">
            <h2 className="font-heading text-2xl text-secondary uppercase mb-4">
              Physical Attributes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Height (cm)</span>
                </label>
                <input
                  type="number"
                  name="height"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Weight (kg)</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Jersey Number</span>
                </label>
                <input
                  type="number"
                  name="jerseyNumber"
                  className="input input-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.jerseyNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Playing Position */}
          <div className="bg-base-100 border border-base-300 p-6">
            <h2 className="font-heading text-2xl text-secondary uppercase mb-4">
              Playing Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Position</span>
                </label>
                <select
                  name="position"
                  className="select select-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="GK">Goalkeeper</option>
                  <option value="DEF">Defender</option>
                  <option value="MID">Midfielder</option>
                  <option value="FWD">Forward</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary font-body font-semibold">Preferred Foot</span>
                </label>
                <select
                  name="preferredFoot"
                  className="select select-bordered bg-base-100 text-secondary border-base-300"
                  value={formData.preferredFoot}
                  onChange={handleChange}
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-end">
            <Link href="/dashboard" className="btn btn-outline btn-primary font-heading uppercase">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary font-heading uppercase">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
