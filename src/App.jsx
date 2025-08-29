import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import CardGrid from './components/CardGrid.jsx';

const CARDS = [
  {
    id: '1',
    name: 'Pikachu V',
    type: 'Electric',
    rarity: 'Ultra Rare',
    set: 'Vivid Voltage',
    price: 24.5,
    image: 'https://placehold.co/400x560/png?text=Pikachu%20V',
  },
  {
    id: '2',
    name: 'Charizard GX',
    type: 'Fire',
    rarity: 'Secret Rare',
    set: 'Hidden Fates',
    price: 189.99,
    image: 'https://placehold.co/400x560/png?text=Charizard%20GX',
  },
  {
    id: '3',
    name: 'Blastoise EX',
    type: 'Water',
    rarity: 'Ultra Rare',
    set: 'XY Evolutions',
    price: 39.0,
    image: 'https://placehold.co/400x560/png?text=Blastoise%20EX',
  },
  {
    id: '4',
    name: 'Venusaur V',
    type: 'Grass',
    rarity: 'Ultra Rare',
    set: 'Sword & Shield',
    price: 21.75,
    image: 'https://placehold.co/400x560/png?text=Venusaur%20V',
  },
  {
    id: '5',
    name: 'Gengar',
    type: 'Psychic',
    rarity: 'Holo Rare',
    set: 'Fossil',
    price: 72.0,
    image: 'https://placehold.co/400x560/png?text=Gengar',
  },
  {
    id: '6',
    name: 'Dragonite V',
    type: 'Dragon',
    rarity: 'Ultra Rare',
    set: 'Evolving Skies',
    price: 28.5,
    image: 'https://placehold.co/400x560/png?text=Dragonite%20V',
  },
  {
    id: '7',
    name: 'Arcanine',
    type: 'Fire',
    rarity: 'Rare',
    set: 'Base Set',
    price: 14.99,
    image: 'https://placehold.co/400x560/png?text=Arcanine',
  },
  {
    id: '8',
    name: 'Lapras',
    type: 'Water',
    rarity: 'Holo Rare',
    set: 'Fossil',
    price: 55.0,
    image: 'https://placehold.co/400x560/png?text=Lapras',
  },
  {
    id: '9',
    name: 'Alakazam',
    type: 'Psychic',
    rarity: 'Holo Rare',
    set: 'Base Set 2',
    price: 48.25,
    image: 'https://placehold.co/400x560/png?text=Alakazam',
  },
  {
    id: '10',
    name: 'Raichu',
    type: 'Electric',
    rarity: 'Rare',
    set: 'Jungle',
    price: 19.99,
    image: 'https://placehold.co/400x560/png?text=Raichu',
  },
];

const CATEGORIES = ['All', 'Electric', 'Fire', 'Water', 'Grass', 'Psychic', 'Dragon'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    let list = [...CARDS];
    if (selectedCategory !== 'All') {
      list = list.filter((c) => c.type === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) => c.name.toLowerCase().includes(q) || c.set.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategory, search, sort]);

  const handleAddToCart = (card) => {
    setCart((prev) => [...prev, card.id]);
  };

  const handleTrade = (card) => {
    // In a real app, open a trade modal or route
    alert(`Start a trade for ${card.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header cartCount={cart.length} />
      <main>
        <Hero onShopClick={() => {
          const el = document.getElementById('browse');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />

        <section id="browse" className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <CategoryFilter
            categories={CATEGORIES}
            selected={selectedCategory}
            onChange={setSelectedCategory}
            searchQuery={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
          />

          <CardGrid items={filtered} onAddToCart={handleAddToCart} onTrade={handleTrade} />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} PokéMarket. Buy, sell, and trade your favorite cards.</p>
          <p className="opacity-80">Not affiliated with Nintendo/Creatures/Game Freak.</p>
        </div>
      </footer>
    </div>
  );
}
