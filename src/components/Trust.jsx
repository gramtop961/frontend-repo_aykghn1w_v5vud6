import React from 'react';
import { Lock, ShieldCheck, Server, Bug } from 'lucide-react';

export default function Trust() {
  return (
    <section id="trust" className="w-full bg-[#07090D] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Security you can verify</h2>
            <p className="mt-3 text-white/70">Security is our product. We ship clear guarantees and third‑party audits so you don’t have to trust blindly.</p>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-400" /><span>Independent audits (SOC 2 Type II in progress). Public security page with reports.</span></li>
              <li className="flex items-start gap-3"><Lock className="mt-0.5 h-5 w-5 text-blue-400" /><span>End-to-end, phishing-resistant passkeys. Hardware-backed keys when available.</span></li>
              <li className="flex items-start gap-3"><Server className="mt-0.5 h-5 w-5 text-violet-400" /><span>Zero-knowledge design: we never store passwords. Encrypted device attestation.</span></li>
              <li className="flex items-start gap-3"><Bug className="mt-0.5 h-5 w-5 text-amber-400" /><span>Generous bug bounty and coordinated disclosure. Security.txt honored.</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 bg-[#0B0D12] p-4">
                <div className="text-white/60">Uptime (90d)</div>
                <div className="mt-1 text-2xl font-semibold text-emerald-400">99.99%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0B0D12] p-4">
                <div className="text-white/60">Median auth time</div>
                <div className="mt-1 text-2xl font-semibold text-blue-400">78ms</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0B0D12] p-4">
                <div className="text-white/60">SDKs</div>
                <div className="mt-1 text-2xl font-semibold">JS • React • Next</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0B0D12] p-4">
                <div className="text-white/60">Audit status</div>
                <div className="mt-1 text-2xl font-semibold text-amber-300">In progress</div>
              </div>
            </div>
            <a href="#early" className="mt-6 inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400">View security page</a>
          </div>
        </div>
      </div>
    </section>
  );
}
