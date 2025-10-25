"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Send OTP logic here
    setOtpSent(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Verify OTP and login logic here
    console.log("Login with:", email, otp);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-righteous text-5xl mb-2">
            <span className="text-primary">CASH CUP</span>
          </h1>
          <h2 className="font-righteous text-3xl mb-4">LOGIN</h2>
          <p className="font-helvetica text-gray-600">
            Enter your email to receive a one-time password
          </p>
        </div>

        {/* Login Form */}
        <div className="card bg-base-100 shadow-2xl border-2 border-base-300">
          <div className="card-body">
            {!otpSent ? (
              <form onSubmit={handleSendOTP} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-helvetica font-semibold">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input input-bordered font-helvetica"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block font-righteous">
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="alert alert-success">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="font-helvetica">OTP sent to {email}</span>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-helvetica font-semibold">Enter OTP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="123456"
                    className="input input-bordered font-helvetica text-center text-2xl tracking-widest"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block font-righteous">
                  Verify & Login
                </button>

                <button
                  type="button"
                  className="btn btn-ghost btn-block btn-sm font-helvetica"
                  onClick={() => setOtpSent(false)}
                >
                  Change Email
                </button>
              </form>
            )}

            <div className="divider font-helvetica">OR</div>

            <div className="text-center font-helvetica">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Demo Access - For Testing/Presentation */}
        <div className="card bg-base-200 shadow-xl border-2 border-primary mt-6">
          <div className="card-body">
            <h3 className="card-title font-righteous text-primary text-center justify-center">
              DEMO ACCESS
            </h3>
            <p className="text-center text-gray-400 font-helvetica text-sm mb-4">
              Quick access for testing and presentation
            </p>

            <div className="grid grid-cols-1 gap-3">
              <Link
                href="/dashboard"
                className="btn btn-outline btn-primary font-righteous"
              >
                Login as Player
              </Link>
              <Link
                href="/manager"
                className="btn btn-outline btn-primary font-righteous"
              >
                Login as Manager
              </Link>
              <Link
                href="/admin"
                className="btn btn-outline btn-primary font-righteous"
              >
                Login as Admin
              </Link>
              <Link
                href="/sitemap"
                className="btn btn-ghost btn-sm font-helvetica"
              >
                View All Pages
              </Link>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="font-helvetica text-sm text-gray-400">
            By logging in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
