"use client";

import React, { useState } from "react";
import NexusSphere from "@/components/NexusSphere";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your operator email.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your access key.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
    }, 1100);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    setErrorMessage("");
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
    }, 900);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setDemoNotice("Recovery token dispatched to node operator security registry.");
    setTimeout(() => setDemoNotice(null), 4000);
  };

  return (
    <main className="min-h-screen w-full relative flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#0d0e13] text-[#e3e1e9] selection:bg-[#c3f400] selection:text-[#283500] font-sans antialiased overflow-x-hidden">
      <div className="flex flex-col w-full max-w-[1440px]">
        {/* Main Split-Screen Frame from Stitch Spec */}
        <div className="relative w-full min-h-[820px] mx-auto overflow-hidden bg-[#0d0e13] rounded-2xl border border-[#34343a]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row">
          
          {/* Ambient Void Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c3f400]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 right-1/4 w-[480px] h-[480px] bg-[#00eefc]/5 rounded-full blur-[160px] pointer-events-none" />

          {/* =================================================================
              LEFT PANEL: Visual Storytelling & Kinetic 3D Core (44% width)
              ================================================================= */}
          <section
            aria-label="NEXUS AI Visual Overview"
            className="relative w-full lg:w-[44%] min-h-[460px] lg:min-h-[840px] p-8 lg:p-12 flex flex-col justify-between overflow-hidden bg-[#1a1b21] border-b lg:border-b-0 lg:border-r border-[#34343a]/50"
          >
            {/* Subtle Tech Coordinate Matrix Underlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(195,244,0,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 pointer-events-none" />

            {/* Embedded Stitch Kinetic 3D Scene Animation */}
            <NexusSphere />

            {/* Top Header: Wordmark & Architecture Stage */}
            <header className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#292a2f] flex items-center justify-center shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#c3f400]/20 group-hover:bg-[#c3f400]/30 transition-colors" />
                  <svg className="w-4 h-4 text-[#c3f400] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-semibold tracking-wider text-white">NEXUS</span>
                  <span className="text-xs text-[#c3f400] font-mono uppercase tracking-widest font-semibold">AI</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#292a2f]/70 backdrop-blur-md px-2.5 py-1 rounded-full shadow-inner border border-white/5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c3f400] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c3f400]" />
                </span>
                <span className="text-xs text-[#c4c9ac] font-mono">v3.4-PROD</span>
              </div>
            </header>

            {/* Center Copy & Kinetic Hero Narrative */}
            <div className="relative z-10 my-auto py-8 sm:py-12 max-w-md">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#292a2f]/80 text-[#c3f400] mb-6 shadow-sm border border-[#c3f400]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c3f400] animate-pulse" />
                <span className="text-xs font-mono tracking-widest uppercase font-medium">The Next Interface</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight leading-tight mb-5 bg-gradient-to-br from-white via-[#e3e1e9] to-[#c4c9ac] bg-clip-text text-transparent">
                Intelligence, without boundaries.
              </h1>

              <p className="text-base text-[#c4c9ac] leading-relaxed max-w-sm">
                One connection away from a more powerful way to build, deploy, and think in hyper-parallel nodes.
              </p>
            </div>

            {/* Bottom Telemetry & Matrix Indicators */}
            <footer className="relative z-10 pt-6">
              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#292a2f]/80 backdrop-blur-md shadow-sm border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c3f400]" />
                  <span className="text-xs text-[#e3e1e9] font-mono tracking-wide">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#292a2f]/80 backdrop-blur-md shadow-sm border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c3f400]" />
                  <span className="text-xs text-[#e3e1e9] font-mono tracking-wide">SECURE ENCLAVE 256-BIT</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#292a2f]/80 backdrop-blur-md shadow-sm border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c3f400]" />
                  <span className="text-xs text-[#e3e1e9] font-mono tracking-wide">AI CORE READY</span>
                </div>
              </div>
            </footer>
          </section>

          {/* =================================================================
              RIGHT PANEL: Precision Authentication (56% width)
              ================================================================= */}
          <section
            aria-label="User Authentication"
            className="relative w-full lg:w-[56%] flex flex-col justify-between p-8 lg:p-14 bg-[#0d0e13]"
          >
            {/* Top Subtle Status Beacon */}
            <div className="w-full flex justify-end items-center gap-3">
              <span className="text-xs text-[#8e9379] font-mono">LATENCY: 14MS</span>
              <div className="w-2 h-2 rounded-full bg-[#c3f400]/80 shadow-[0_0_8px_#c3f400]" />
            </div>

            {/* Main Form Anchor Container (Exact 400px Balanced Rhythm) */}
            <div className="w-full max-w-[400px] mx-auto my-auto py-8">
              {/* Brand Prism Icon Badge */}
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#1e1f25] border border-white/10 flex items-center justify-center relative shadow-lg overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#c3f400]/30 to-[#00eefc]/20 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#c3f400]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                      <circle cx="12" cy="12" r="2.5" fill="#c3f400" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight mt-6">
                  Welcome back.
                </h2>
                <p className="text-sm text-[#c4c9ac] mt-1.5">
                  Sign in to continue to your quantum workspace.
                </p>
              </div>

              {/* Demo Notice Toast */}
              {demoNotice && (
                <div className="mb-5 p-3 rounded-lg bg-[#1e1f25] border border-[#c3f400]/40 text-xs text-[#c3f400] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{demoNotice}</span>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-5 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {authSuccess ? (
                /* Authenticated Confirmation Screen */
                <div className="p-6 rounded-xl bg-[#1e1f25] border border-[#c3f400]/40 text-center shadow-[0_0_30px_rgba(195,244,0,0.15)]">
                  <div className="w-12 h-12 rounded-full bg-[#c3f400]/20 text-[#c3f400] flex items-center justify-center mx-auto mb-4 border border-[#c3f400]/40">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quantum Session Authenticated</h3>
                  <p className="text-xs text-[#c4c9ac] mt-1.5 mb-6">
                    Enclave session activated for operator <strong className="text-[#c3f400]">{email || "operator@nexus.ai"}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthSuccess(false);
                      setEmail("");
                      setPassword("");
                    }}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#0d0e13] hover:bg-[#292a2f] border border-white/10 text-xs font-mono text-white/90 hover:text-white transition-colors"
                  >
                    DISCONNECT & RESET DEMO
                  </button>
                </div>
              ) : (
                <>
                  {/* Google Single Sign-On Button */}
                  <button
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-lg bg-[#1e1f25] hover:bg-[#292a2f] border border-white/5 transition-all duration-200 flex items-center justify-center gap-3 group shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#c3f400]/50 disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-[#e3e1e9] group-hover:text-white transition-colors">
                      Continue with Google
                    </span>
                  </button>

                  {/* Technical Hairline Divider */}
                  <div className="relative my-7 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-[1px] bg-[#34343a]" />
                    </div>
                    <span className="relative px-3 bg-[#0d0e13] text-xs font-mono uppercase text-[#8e9379] tracking-widest">
                      or continue with email
                    </span>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input Group */}
                    <div className="space-y-1.5">
                      <label
                        className="block text-xs font-mono text-[#c4c9ac] uppercase tracking-wider"
                        htmlFor="email"
                      >
                        EMAIL ADDRESS
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 text-[#8e9379] w-[18px] h-[18px] pointer-events-none" />
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="developer@nexus.ai"
                          autoComplete="email"
                          required
                          className="w-full bg-[#1e1f25] border border-white/5 focus:border-[#c3f400]/50 text-[#e3e1e9] text-sm pl-11 pr-4 py-3 rounded-lg focus:outline-none focus:bg-[#292a2f] transition-all shadow-inner placeholder:text-[#8e9379]/70"
                        />
                      </div>
                    </div>

                    {/* Password Input Group */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          className="block text-xs font-mono text-[#c4c9ac] uppercase tracking-wider"
                          htmlFor="password"
                        >
                          PASSWORD
                        </label>
                        <button
                          type="button"
                          onClick={handleForgotPassword}
                          className="text-xs font-mono text-[#c4c9ac] hover:text-[#c3f400] transition-colors focus:outline-none"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative flex items-center">
                        <Lock className="absolute left-3.5 text-[#8e9379] w-[18px] h-[18px] pointer-events-none" />
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          autoComplete="current-password"
                          required
                          className="w-full bg-[#1e1f25] border border-white/5 focus:border-[#c3f400]/50 text-[#e3e1e9] font-mono text-sm pl-11 pr-11 py-3 rounded-lg focus:outline-none focus:bg-[#292a2f] transition-all shadow-inner placeholder:text-[#8e9379]/70"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-3.5 p-1 text-[#8e9379] hover:text-[#c3f400] transition-colors rounded focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="w-[18px] h-[18px]" />
                          ) : (
                            <Eye className="w-[18px] h-[18px]" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Checkbox Options */}
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2.5 cursor-pointer group select-none">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 rounded bg-[#1e1f25] peer-checked:bg-[#c3f400] flex items-center justify-center transition-all shadow-sm border border-white/10 peer-checked:border-[#c3f400]">
                          {rememberMe && <Check className="w-3 h-3 text-[#283500] stroke-[3]" />}
                        </div>
                        <span className="text-xs text-[#c4c9ac] group-hover:text-white transition-colors">
                          Remember this session
                        </span>
                      </label>
                      <span className="text-xs text-[#8e9379] font-mono">EXPIRES 30D</span>
                    </div>

                    {/* Primary CTA Button (Electric Lime Accent) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 rounded-lg bg-[#c3f400] hover:bg-[#abd600] active:bg-[#9ec500] text-[#283500] font-semibold text-base tracking-wide transition-all duration-200 shadow-[0_0_24px_rgba(195,244,0,0.25)] hover:shadow-[0_0_32px_rgba(195,244,0,0.4)] flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-[#283500] border-t-transparent rounded-full animate-spin" />
                            <span>Authenticating...</span>
                          </div>
                        ) : (
                          <>
                            <span>Sign in to NEXUS</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}

              {/* New Account Prompt */}
              <div className="text-center mt-7">
                <p className="text-sm text-[#c4c9ac]">
                  New to NEXUS?{" "}
                  <a
                    href="#create-account"
                    onClick={(e) => {
                      e.preventDefault();
                      setDemoNotice("Cluster allocation link queued.");
                      setTimeout(() => setDemoNotice(null), 3000);
                    }}
                    className="text-white hover:text-[#c3f400] underline underline-offset-4 transition-colors font-medium ml-1"
                  >
                    Create an account
                  </a>
                </p>
              </div>
            </div>

            {/* Bottom Compliance & Legal */}
            <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#34343a]/40">
              <span className="text-xs text-[#8e9379] font-mono">
                NEXUS OPERATING SYSTEM © 2026
              </span>
              <div className="flex items-center gap-5">
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    setDemoNotice("Privacy policy: Zero telemetry logging on enclave nodes.");
                    setTimeout(() => setDemoNotice(null), 3000);
                  }}
                  className="text-xs text-[#8e9379] hover:text-[#e3e1e9] transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="w-1 h-1 rounded-full bg-[#34343a]" />
                <a
                  href="#terms"
                  onClick={(e) => {
                    e.preventDefault();
                    setDemoNotice("Terms: Standard quantum node allocation protocol.");
                    setTimeout(() => setDemoNotice(null), 3000);
                  }}
                  className="text-xs text-[#8e9379] hover:text-[#e3e1e9] transition-colors"
                >
                  Terms of Service
                </a>
                <span className="w-1 h-1 rounded-full bg-[#34343a]" />
                <a
                  href="#audit"
                  onClick={(e) => {
                    e.preventDefault();
                    setDemoNotice("Audit: SOC2 Type II Certified Enclave.");
                    setTimeout(() => setDemoNotice(null), 3000);
                  }}
                  className="text-xs text-[#8e9379] hover:text-[#e3e1e9] transition-colors"
                >
                  Security Audit
                </a>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
