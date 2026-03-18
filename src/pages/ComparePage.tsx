import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { cpus, gpus, rams, estimateFPS, Product } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowUpRight } from 'lucide-react';

const resolutions = ['1080p', '1440p', '4K'];
const settings = ['Low', 'Medium', 'High', 'Ultra', 'Ultra + RT'];
const dlssOptions = ['None', 'DLSS Quality', 'DLSS Balanced', 'DLSS Performance', 'FSR Quality', 'FSR Balanced'];

const ComparePage = () => {
  const { t, lang } = useI18n();
  const [params] = useSearchParams();

  const [cpuId, setCpuId] = useState(params.get('cpu') || '');
  const [gpuId, setGpuId] = useState(params.get('gpu') || '');
  const [ramId, setRamId] = useState(params.get('ram') || '');

  const cpu = cpus.find(c => c.id === cpuId);
  const gpu = gpus.find(g => g.id === gpuId);
  const ram = rams.find(r => r.id === ramId);

  const analysis = useMemo(() => {
    if (!cpu || !gpu) return null;
    const cpuScore = cpu.benchmark_score_cpu || 0;
    const gpuScore = gpu.benchmark_score_gpu || 0;

    return resolutions.map(res => ({
      resolution: res,
      results: settings.map(sett => {
        const dlssResults = dlssOptions.map(dlss => ({
          dlss,
          ...estimateFPS(cpuScore, gpuScore, res, sett, dlss),
        }));
        return { settings: sett, dlssResults };
      }),
    }));
  }, [cpu, gpu]);

  const mainBottleneck = useMemo(() => {
    if (!cpu || !gpu) return null;
    const cpuScore = cpu.benchmark_score_cpu || 0;
    const gpuScore = gpu.benchmark_score_gpu || 0;
    const r = estimateFPS(cpuScore, gpuScore, '1080p', 'High');
    return r;
  }, [cpu, gpu]);

  // Alternatives
  const alternatives = useMemo(() => {
    if (!mainBottleneck || !cpu || !gpu) return null;
    const side = mainBottleneck.bottleneckSide;
    if (side === 'cpu') {
      const sorted = cpus.filter(c => c.id !== cpu.id).sort((a, b) => (a.benchmark_score_cpu || 0) - (b.benchmark_score_cpu || 0));
      const budget = sorted.find(c => (c.benchmark_score_cpu || 0) > (cpu.benchmark_score_cpu || 0) * 1.1 && (c.msrp || 9999) < (cpu.msrp || 9999));
      const balanced = sorted.find(c => (c.benchmark_score_cpu || 0) > (cpu.benchmark_score_cpu || 0) * 1.3);
      const highend = sorted[sorted.length - 1];
      return { side, budget, balanced, highend };
    } else {
      const sorted = gpus.filter(g => g.id !== gpu.id).sort((a, b) => (a.benchmark_score_gpu || 0) - (b.benchmark_score_gpu || 0));
      const budget = sorted.find(g => (g.benchmark_score_gpu || 0) > (gpu.benchmark_score_gpu || 0) * 1.1 && (g.msrp || 9999) < (gpu.msrp || 9999));
      const balanced = sorted.find(g => (g.benchmark_score_gpu || 0) > (gpu.benchmark_score_gpu || 0) * 1.3);
      const highend = sorted[sorted.length - 1];
      return { side, budget, balanced, highend };
    }
  }, [mainBottleneck, cpu, gpu]);

  const ComponentSelect = ({ items, value, onChange, placeholder }: { items: Product[]; value: string; onChange: (v: string) => void; placeholder: string }) => (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={placeholder}
    >
      <option value="">{placeholder}</option>
      {items.map(i => (
        <option key={i.id} value={i.id}>{i.brand} {i.model}</option>
      ))}
    </select>
  );

  const ramWarning = useMemo(() => {
    if (!cpu || !gpu || !ram) return null;
    const minNeeded = Math.max(cpu.recommended_ram_min, gpu.recommended_ram_min);
    const recNeeded = Math.max(cpu.recommended_ram_recommended, gpu.recommended_ram_recommended);
    if ((ram.memory_size || 0) < minNeeded) return { level: 'error' as const, min: minNeeded, rec: recNeeded };
    if ((ram.memory_size || 0) < recNeeded) return { level: 'warn' as const, min: minNeeded, rec: recNeeded };
    return null;
  }, [cpu, gpu, ram]);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-8">{t('compare.title')}</h1>
        </motion.div>

        {/* Selectors */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="glass-panel rounded-2xl p-4">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t('compare.select_cpu')}</label>
            <ComponentSelect items={cpus} value={cpuId} onChange={setCpuId} placeholder={t('compare.select_cpu')} />
            {cpu && <p className="mt-2 text-xs text-muted-foreground">{cpu.cores}C/{cpu.threads}T • {cpu.turbo_clock}GHz • {cpu.tdp}W</p>}
          </div>
          <div className="glass-panel rounded-2xl p-4">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t('compare.select_gpu')}</label>
            <ComponentSelect items={gpus} value={gpuId} onChange={setGpuId} placeholder={t('compare.select_gpu')} />
            {gpu && <p className="mt-2 text-xs text-muted-foreground">{gpu.vram}GB {gpu.vram_type} • {gpu.tdp}W</p>}
          </div>
          <div className="glass-panel rounded-2xl p-4">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t('compare.select_ram')}</label>
            <ComponentSelect items={rams} value={ramId} onChange={setRamId} placeholder={t('compare.select_ram')} />
            {ram && <p className="mt-2 text-xs text-muted-foreground">{ram.memory_size}GB {ram.memory_type} {ram.memory_speed}MHz</p>}
          </div>
        </div>

        {/* RAM Warning */}
        <AnimatePresence>
          {ramWarning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`glass-panel rounded-xl p-4 mb-6 flex items-center gap-3 ${
                ramWarning.level === 'error' ? 'border-destructive/50' : 'border-yellow-500/50'
              }`}
            >
              <AlertTriangle className={`w-5 h-5 ${ramWarning.level === 'error' ? 'text-destructive' : 'text-yellow-500'}`} />
              <span className="text-sm">
                {t('compare.ram_rec')}: min {ramWarning.min}GB, rec {ramWarning.rec}GB
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottleneck Analysis */}
        <AnimatePresence>
          {mainBottleneck && cpu && gpu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              {/* Bottleneck Card */}
              <div className="glass-panel rounded-2xl p-6 mb-6">
                <h2 className="font-display text-xl font-bold mb-4">{t('compare.bottleneck')}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{t('common.cpu')}: {cpu.model}</span>
                      <span>{mainBottleneck.cpuFPS} {t('common.fps')}</span>
                    </div>
                    <div className="h-3 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (mainBottleneck.cpuFPS / Math.max(mainBottleneck.cpuFPS, mainBottleneck.gpuFPS)) * 100)}%`,
                          background: 'var(--gradient-bottleneck-cpu)',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{t('common.gpu')}: {gpu.model}</span>
                      <span>{mainBottleneck.gpuFPS} {t('common.fps')}</span>
                    </div>
                    <div className="h-3 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (mainBottleneck.gpuFPS / Math.max(mainBottleneck.cpuFPS, mainBottleneck.gpuFPS)) * 100)}%`,
                          background: 'var(--gradient-bottleneck-gpu)',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${
                  mainBottleneck.bottleneckPercent < 10
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : mainBottleneck.bottleneckSide === 'cpu'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                }`}>
                  {mainBottleneck.bottleneckPercent < 10 ? (
                    <><CheckCircle className="w-4 h-4" /> {t('compare.bottleneck.balanced')}</>
                  ) : (
                    <><AlertTriangle className="w-4 h-4" /> {mainBottleneck.bottleneckSide === 'cpu' ? t('compare.bottleneck.cpu') : t('compare.bottleneck.gpu')} — {mainBottleneck.bottleneckPercent}%</>
                  )}
                </div>
              </div>

              {/* FPS Table */}
              <div className="glass-panel rounded-2xl p-6 mb-6 overflow-x-auto">
                <h2 className="font-display text-xl font-bold mb-4">{t('compare.fps_estimate')}</h2>
                <table className="w-full text-sm" role="table">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 font-medium text-muted-foreground">{t('compare.resolution')}</th>
                      <th className="text-left py-2 px-3 font-medium text-muted-foreground">{t('compare.settings')}</th>
                      <th className="text-center py-2 px-3 font-medium text-muted-foreground">{t('common.fps')}</th>
                      <th className="text-center py-2 px-3 font-medium text-muted-foreground">{t('common.min')}</th>
                      <th className="text-center py-2 px-3 font-medium text-muted-foreground">{t('common.max')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysis?.map(resGroup =>
                      resGroup.results.slice(0, 4).map((sGroup, si) => {
                        const main = sGroup.dlssResults[0]; // None
                        return (
                          <tr key={`${resGroup.resolution}-${sGroup.settings}`} className="border-b border-border/50 hover:bg-secondary/30">
                            {si === 0 && (
                              <td rowSpan={4} className="py-2 px-3 font-semibold align-top">{resGroup.resolution}</td>
                            )}
                            <td className="py-2 px-3">{sGroup.settings}</td>
                            <td className="py-2 px-3 text-center font-semibold">
                              <span className={main.avg >= 60 ? 'text-green-500' : main.avg >= 30 ? 'text-yellow-500' : 'text-destructive'}>
                                {main.avg}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-center text-muted-foreground">{main.min}</td>
                            <td className="py-2 px-3 text-center text-muted-foreground">{main.max}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Alternatives */}
              {alternatives && alternatives.budget && (
                <div className="glass-panel rounded-2xl p-6">
                  <h2 className="font-display text-xl font-bold mb-4">{t('compare.alternatives')}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {alternatives.side === 'cpu'
                      ? (lang === 'uz' ? 'CPU cheklovchi. Kuchliroq CPU tavsiya etiladi:' : lang === 'ru' ? 'CPU ограничивает. Рекомендуется более мощный CPU:' : 'CPU is the bottleneck. Consider upgrading:')
                      : (lang === 'uz' ? 'GPU cheklovchi. Kuchliroq GPU tavsiya etiladi:' : lang === 'ru' ? 'GPU ограничивает. Рекомендуется более мощная GPU:' : 'GPU is the bottleneck. Consider upgrading:')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { label: t('compare.budget'), item: alternatives.budget },
                      { label: t('compare.balanced'), item: alternatives.balanced },
                      { label: t('compare.highend'), item: alternatives.highend },
                    ].map(({ label, item }) => item && (
                      <div key={item.id} className="glass-panel glass-panel-hover rounded-xl p-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{label}</span>
                        <h4 className="font-display font-bold mt-1">{item.brand} {item.model}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.short_description}</p>
                        {item.msrp && <p className="text-sm font-semibold mt-2">${item.msrp}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComparePage;
