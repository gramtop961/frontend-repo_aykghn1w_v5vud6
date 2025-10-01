import React from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeSnippet() {
  const [copied, setCopied] = React.useState(false);

  const snippet = `import { createClient } from '@holopass/js';

const holopass = createClient({ projectId: 'hp_live_xxx' });

// One line to render passwordless login button
holopass.mount('#login', { mode: 'biometric' });`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative w-full bg-[#07090D] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Add auth in one line</h2>
            <p className="mt-2 max-w-2xl text-white/70">Drop-in SDK for web and mobile. Uses platform biometrics with WebAuthn and passkeys. No passwords, no SMS.</p>
          </div>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0B0D12] shadow-2xl shadow-blue-500/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#0F1117] px-4 py-2 text-xs text-white/50">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="ml-3">example.js</span>
          </div>
          <pre className="relative max-h-[380px] overflow-auto p-5 text-sm leading-relaxed [tab-size:2]">
            <code>
{snippet}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
