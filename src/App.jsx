import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeSnippet from './components/CodeSnippet';
import Trust from './components/Trust';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D12] font-inter text-white antialiased">
      <Hero />
      <Features />
      <CodeSnippet />
      <Trust />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer id="early" className="border-t border-white/10 bg-[#07090D] py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm text-white/60">Tagline</div>
            <div className="text-lg font-medium">Auth that disappears.</div>
          </div>
          <form
            className="flex w-full max-w-md items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const email = new FormData(e.currentTarget).get('email');
              alert(`Thanks! We'll be in touch at ${email}`);
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="work@email.com"
              className="w-full flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-blue-400"
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Request access
            </button>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} HoloPass, Inc.</span>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
