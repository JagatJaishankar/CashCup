"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("player"); // player or manager
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // Player specific
    dateOfBirth: "",
    position: "",
    // Manager specific
    teamName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", { role, ...formData });
    // Registration logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-righteous text-5xl mb-2">
            <span className="text-primary">CASH CUP</span>
          </h1>
          <h2 className="font-righteous text-3xl mb-4">SIGN UP</h2>
          <p className="font-helvetica text-gray-600">
            Join the premier football tournament platform in Jeddah
          </p>
        </div>

        {/* Role Selection */}
        <div className="card bg-base-100 shadow-2xl border-2 border-base-300 mb-6">
          <div className="card-body">
            <h3 className="font-righteous text-xl mb-4">I want to register as:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className={`card ${role === "player" ? "bg-primary text-black" : "bg-base-200"} shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                onClick={() => setRole("player")}
              >
                <div className="card-body items-center text-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  <h4 className="font-righteous text-2xl">PLAYER</h4>
                  <p className="font-helvetica text-sm">
                    Compete in tournaments and showcase your skills
                  </p>
                </div>
              </button>

              <button
                className={`card ${role === "manager" ? "bg-primary text-black" : "bg-base-200"} shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                onClick={() => setRole("manager")}
              >
                <div className="card-body items-center text-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <h4 className="font-righteous text-2xl">MANAGER</h4>
                  <p className="font-helvetica text-sm">
                    Manage a team and register for tournaments
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="card bg-base-100 shadow-2xl border-2 border-base-300">
          <div className="card-body">
            <h3 className="font-righteous text-xl mb-4">
              {role === "player" ? "Player" : "Manager"} Registration
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-helvetica font-semibold">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ahmed Al-Qahtani"
                    className="input input-bordered font-helvetica"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-helvetica font-semibold">Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="input input-bordered font-helvetica"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-helvetica font-semibold">Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+966 XX XXX XXXX"
                  className="input input-bordered font-helvetica"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Player Specific Fields */}
              {role === "player" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-helvetica font-semibold">Date of Birth *</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        className="input input-bordered font-helvetica"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-helvetica font-semibold">Position *</span>
                      </label>
                      <select
                        name="position"
                        className="select select-bordered font-helvetica"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Position</option>
                        <option value="GK">Goalkeeper (GK)</option>
                        <option value="DEF">Defender (DEF)</option>
                        <option value="MID">Midfielder (MID)</option>
                        <option value="FWD">Forward (FWD)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Manager Specific Fields */}
              {role === "manager" && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-helvetica font-semibold">Team Name *</span>
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    placeholder="Strike Force FC"
                    className="input input-bordered font-helvetica"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" className="checkbox checkbox-primary" required />
                  <span className="label-text font-helvetica">
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block font-righteous">
                Create Account
              </button>
            </form>

            <div className="divider font-helvetica">OR</div>

            <div className="text-center font-helvetica">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
