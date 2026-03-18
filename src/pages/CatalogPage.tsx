import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n';
import { products, Product, ComponentType } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CatalogPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<ComponentType | 'all'>('all');
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'release' | 'performance'>('release');

  const brands = useMemo(() => {
    const b = new Set(products.map(p => p.brand));
    return ['all', ...Array.from(b)];
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (typeFilter !== 'all') list = list.filter(p => p.type === typeFilter);
    if (brandFilter !== 'all') list = list.filter(p => p.brand === brandFilter);
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(p => p.model.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s) || p.family.toLowerCase().includes(s));
    }
    list = [...list].sort((a, b) => {
      if (sortBy === 'release') return b.release_year - a.release_year;
      const sa = (a.benchmark_score_cpu || 0) + (a.benchmark_score_gpu || 0);
      const sb = (b.benchmark_score_cpu || 0) + (b.benchmark_score_gpu || 0);
      return sb - sa;
    });
    return list;
  }, [typeFilter, brandFilter, search, sortBy]);

  const handleCompare = (product: Product) => {
    const param = product.type === 'cpu' ? 'cpu' : product.type === 'gpu' ? 'gpu' : 'ram';
    navigate(`/compare?${param}=${product.id}`);
  };

  const types: { value: ComponentType | 'all'; label: string }[] = [
    { value: 'all', label: t('catalog.filter.all') },
    { value: 'cpu', label: 'CPU' },
    { value: 'gpu', label: 'GPU' },
    { value: 'ram', label: 'RAM' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-8">{t('catalog.title')}</h1>
        </motion.div>

        {/* Filters */}
        <div className="glass-panel rounded-2xl p-4 mb-8 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('common.search')}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search products"
            />
          </div>
          <div className="flex gap-1">
            {types.map(tp => (
              <button
                key={tp.value}
                onClick={() => setTypeFilter(tp.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  typeFilter === tp.value ? 'bg-primary text-primary-foreground' : 'glass-button'
                }`}
              >
                {tp.label}
              </button>
            ))}
          </div>
          <select
            value={brandFilter}
            onChange={e => setBrandFilter(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm bg-secondary/50 border border-border focus:outline-none"
            aria-label={t('catalog.filter.brand')}
          >
            {brands.map(b => (
              <option key={b} value={b}>{b === 'all' ? t('catalog.filter.all') : b}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'release' | 'performance')}
            className="px-3 py-2 rounded-lg text-sm bg-secondary/50 border border-border focus:outline-none"
            aria-label="Sort by"
          >
            <option value="release">{t('catalog.sort.release')}</option>
            <option value="performance">{t('catalog.sort.performance')}</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onCompare={handleCompare} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
