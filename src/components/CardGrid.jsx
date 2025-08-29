import { BadgeDollarSign, Replace } from 'lucide-react';

export default function CardGrid({ items, onAddToCart, onTrade }) {
  if (!items.length) {
    return (
      <div className="h-40 grid place-items-center text-slate-400 border border-dashed border-white/10 rounded-lg">
        No cards match your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {items.map((card) => (
        <article key={card.id} className="group rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={card.image}
              alt={`${card.name} card image`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 inline-flex items-center gap-2 text-[11px] font-medium">
              <span className="px-2 py-0.5 rounded-full bg-black/60 text-white border border-white/10">{card.type}</span>
              <span className="px-2 py-0.5 rounded-full bg-black/60 text-white border border-white/10">{card.rarity}</span>
            </div>
          </div>
          <div className="p-3 sm:p-4 space-y-2">
            <h3 className="font-semibold leading-tight">{card.name}</h3>
            <p className="text-xs text-slate-400">{card.set}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="text-lg font-bold">${card.price.toFixed(2)}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onTrade(card)}
                  className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/15 border border-white/10"
                >
                  <Replace className="h-3.5 w-3.5" /> Trade
                </button>
                <button
                  onClick={() => onAddToCart(card)}
                  className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white"
                >
                  <BadgeDollarSign className="h-3.5 w-3.5" /> Buy
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
