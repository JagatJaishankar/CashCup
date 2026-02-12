"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, otp);
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl text-secondary mb-2">
            Cash <span className="text-primary">Cup</span>
          </h1>
          <h2 className="font-heading text-2xl text-secondary mb-4">Login</h2>
          <p className="font-body text-neutral/60">
            Enter your email to receive a one-time password
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-base-100 border border-base-300 p-6">
          {!otpSent ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label className="block font-body text-sm text-neutral/70 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-base-300 font-body text-sm focus:border-primary focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full font-heading text-sm">
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="bg-success/10 text-success p-4 font-body text-sm">
                OTP sent to {email}
              </div>

              <div>
                <label className="block font-body text-sm text-neutral/70 mb-2">Enter OTP</label>
                <input
                  type="text"
                  placeholder="123456"
                  className="w-full px-4 py-3 border border-base-300 font-heading text-xl text-center tracking-widest focus:border-primary focus:outline-none"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full font-heading text-sm">
                Verify & Login
              </button>

              <button
                type="button"
                className="w-full text-center font-body text-sm text-neutral/50 hover:text-primary"
                onClick={() => setOtpSent(false)}
              >
                Change Email
              </button>
            </form>
          )}

          <div className="border-t border-base-300 my-6"></div>

          <div className="text-center font-body text-sm">
            <p className="text-neutral/60">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Demo Access */}
        <div className="bg-base-200 border border-base-300 p-6 mt-6">
          <h3 className="font-heading text-sm text-secondary text-center mb-4">
            Demo Access
          </h3>
          <p className="text-center text-neutral/50 font-body text-xs mb-4">
            Quick access for testing
          </p>

          <div className="grid grid-cols-1 gap-3">
            <Link href="/dashboard" className="btn btn-outline btn-sm font-heading text-xs">
              Login as Player
            </Link>
            <Link href="/manager" className="btn btn-outline btn-sm font-heading text-xs">
              Login as Manager
            </Link>
            <Link href="/admin" className="btn btn-outline btn-sm font-heading text-xs">
              Login as Admin
            </Link>
            <Link href="/sitemap" className="text-center font-body text-xs text-neutral/50 hover:text-primary mt-2">
              View All Pages
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs text-neutral/40">
            By logging in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
