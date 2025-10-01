import React from 'react';
import { Shield, Fingerprint, Cpu, Code2 } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Native biometrics',
    desc: 'Touch ID, Face ID, Windows Hello and more. Secure and familiar for users.'
  },
  {
    icon: Shield,
    title: 'Passkeys & WebAuthn',
    desc: 'Latest standards with phishing-resistant credentials and device-bound keys.'
  },
  {
    icon: Cpu,
    title: 'Edge-first infra',
    desc: 'Global at the edge with sub-100ms auth handshakes and zero cold starts.'
  },
  {
    icon: Code2,
    title: 'Dev-first SDKs',
    desc: 'JS, React, Next.js, and mobile. Start in minutes with simple APIs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#0B0D12] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need for passwordless</h2>
        <p className="mt-2 max-w-2xl text-white/70">We designed HoloPass to vanish from the user experience while giving you battle-tested security from day one.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <f.icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-3 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
