import { ShoppingCart, Search } from 'lucide-react';

export default function Header({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-yellow-400 to-rose-500 grid place-items-center font-black text-slate-900">P</div>
          <span className="font-semibold tracking-tight">PokéMarket</span>
        </div>

        <div className="hidden md:flex items-center gap-2 max-w-md w-full">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              aria-label="Global search"
              placeholder="Search cards, sets, rarities..."
              className="w-full pl-9 pr-3 py-2 rounded-md bg-slate-800/80 border border-white/10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <button className="relative inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-2 text-sm font-medium transition-colors">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-pink-500 text-[10px] font-bold grid place-items-center shadow">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
