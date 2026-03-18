import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n';
import { benchmarkTests, products } from '@/data/products';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';

const BenchmarksPage = () => {
  const { t } = useI18n();
  const [gameFilter, setGameFilter] = useState('');
  const [resFilter, setResFilter] = useState('');

  const games = useMemo(() => [...new Set(benchmarkTests.map(b => b.game))], []);
  const resolutions = ['', '1080p', '1440p', '4K'];

  const filtered = useMemo(() => {
    let list = benchmarkTests;
    if (gameFilter) list = list.filter(b => b.game === gameFilter);
    if (resFilter) list = list.filter(b => b.resolution === resFilter);
    return list;
  }, [gameFilter, resFilter]);

  const getName = (id: string) => {
    const p = products.find(pr => pr.id === id);
    return p ? `${p.brand} ${p.model}` : id;
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-8">{t('benchmarks.title')}</h1>
        </motion.div>

        {/* Filters */}
        <div className="glass-panel rounded-2xl p-4 mb-8 flex flex-wrap gap-3">
          <select
            value={gameFilter}
            onChange={e => setGameFilter(e.target.value)}
            className="px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none"
            aria-label={t('benchmarks.game')}
          >
            <option value="">{t('catalog.filter.all')} {t('benchmarks.game')}</option>
            {games.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <div className="flex gap-1">
            {resolutions.map(r => (
              <button
                key={r}
                onClick={() => setResFilter(r)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  resFilter === r ? 'bg-primary text-primary-foreground' : 'glass-button'
                }`}
              >
                {r || t('catalog.filter.all')}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map(bt => (
            <motion.div
              key={bt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel glass-panel-hover rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display font-bold text-lg">{bt.game}</h3>
                  <p className="text-sm text-muted-foreground">{bt.resolution} • {bt.settings}</p>
                </div>
                <div className="flex gap-2">
                  {bt.avg_fps >= 60 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold">
                      <Trophy className="w-3 h-3" /> {t('benchmarks.stable')}
                    </span>
                  )}
                  {bt.resolution === '4K' && bt.avg_fps >= 30 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" /> {t('benchmarks.playable')}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-3">
                <p>{t('common.cpu')}: {getName(bt.cpu_id)}</p>
                <p>{t('common.gpu')}: {getName(bt.gpu_id)}</p>
                <p>{t('common.ram')}: {getName(bt.ram_id)}</p>
              </div>

              {/* FPS Bar */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t('benchmarks.avg_fps')}</span>
                    <span className="font-bold text-foreground">{bt.avg_fps}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (bt.avg_fps / 200) * 100)}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{
                        background: bt.avg_fps >= 60 ? 'var(--gradient-bottleneck-gpu)' : 'var(--gradient-bottleneck-cpu)',
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{t('benchmarks.min_fps')}: {bt.min_fps}</span>
                  <span>{t('benchmarks.max_fps')}: {bt.max_fps}</span>
                </div>
              </div>

              {bt.tester_notes && (
                <p className="text-xs text-muted-foreground mt-3 italic">📝 {bt.tester_notes}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenchmarksPage;
