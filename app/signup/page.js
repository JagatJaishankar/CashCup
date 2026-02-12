"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("player");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    position: "",
    teamName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", { role, ...formData });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl text-secondary mb-2">
            Cash <span className="text-primary">Cup</span>
          </h1>
          <h2 className="font-heading text-2xl text-secondary mb-4">Sign Up</h2>
          <p className="font-body text-neutral/60">
            Join the premier football tournament platform in Jeddah
          </p>
        </div>

        {/* Role Selection */}
        <div className="bg-base-100 border border-base-300 p-6 mb-6">
          <h3 className="font-heading text-sm text-secondary mb-4">I want to register as:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className={`p-6 text-center transition-all ${
                role === "player"
                  ? "bg-primary text-white"
                  : "bg-base-200 text-neutral/70 hover:border-primary border border-base-300"
              }`}
              onClick={() => setRole("player")}
            >
              <svg className="w-10 h-10 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <h4 className="font-heading text-lg">Player</h4>
              <p className="font-body text-sm mt-1 opacity-70">
                Compete in tournaments
              </p>
            </button>

            <button
              className={`p-6 text-center transition-all ${
                role === "manager"
                  ? "bg-primary text-white"
                  : "bg-base-200 text-neutral/70 hover:border-primary border border-base-300"
              }`}
              onClick={() => setRole("manager")}
            >
              <svg className="w-10 h-10 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <h4 className="font-heading text-lg">Manager</h4>
              <p className="font-body text-sm mt-1 opacity-70">
                Manage a team
              </p>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-base-100 border border-base-300 p-6">
          <h3 className="font-heading text-sm text-secondary mb-6">
            {role === "player" ? "Player" : "Manager"} Registration
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-sm text-neutral/70 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ahmed Al-Qahtani"
                  className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm text-neutral/70 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm text-neutral/70 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+966 XX XXX XXXX"
                className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {role === "player" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm text-neutral/70 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block font-body text-sm text-neutral/70 mb-2">Position *</label>
                  <select
                    name="position"
                    className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none bg-base-100"
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
            )}

            {role === "manager" && (
              <div>
                <label className="block font-body text-sm text-neutral/70 mb-2">Team Name *</label>
                <input
                  type="text"
                  name="teamName"
                  placeholder="Strike Force FC"
                  className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span className="font-body text-sm text-neutral/60">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-full font-heading text-sm">
              Create Account
            </button>
          </form>

          <div className="border-t border-base-300 my-6"></div>

          <div className="text-center font-body text-sm">
            <p className="text-neutral/60">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
