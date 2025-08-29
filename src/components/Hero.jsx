import { Flame, Sparkles } from 'lucide-react';

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              New arrivals from Evolving Skies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Buy and Trade Pokémon Cards with Confidence
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl">
              Discover rare pulls and build your dream deck. Transparent pricing, secure trades, and a thriving community marketplace.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={onShopClick} className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 text-sm font-medium transition-colors">
                <Flame className="h-4 w-4" />
                Shop Cards
              </button>
              <a href="#browse" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm font-medium transition-colors">
                Start Trading
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div>
                Secure payments
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-500" />
              <div>
                Verified sellers
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-500" />
              <div>
                Community trades
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_40%)]" />
              <img src="https://placehold.co/600x840/png?text=Featured%20Card" alt="Featured Pokémon card" className="relative z-10 h-full w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
