import React from 'react';
import Spline from '@splinetool/react-spline';
import { Fingerprint, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0B0D12]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for contrast (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_30%,rgba(29,78,216,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0D12]/40 via-transparent to-[#0B0D12]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-between px-6 pt-8 pb-10 md:px-8">
        {/* Simple nav */}
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
              <Fingerprint className="h-5 w-5 text-blue-400" />
            </div>
            <span className="font-semibold tracking-tight">HoloPass</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a
              href="#early"
              className="rounded-md bg-white/10 px-3 py-1.5 text-white backdrop-blur transition hover:bg-white/20"
            >
              Get early access
            </a>
          </nav>
        </header>

        {/* Hero copy */}
        <div className="mt-16 max-w-2xl text-left text-white md:mt-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Private beta is live
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Passwordless authentication with native biometrics and WebAuthn. Built for developers. Add secure logins with a single line of code—no passwords, no friction.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#code"
              className="group inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              Start with one line
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              See how we secure you
            </a>
          </div>
        </div>

        {/* spacer */}
        <div />
      </div>
    </section>
  );
}
