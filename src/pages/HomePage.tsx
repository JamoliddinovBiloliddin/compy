import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, MonitorUp, MemoryStick } from 'lucide-react';

const HomePage = () => {
  const { t } = useI18n();

  const { lang } = useI18n();

  const features = [
    { icon: Cpu, title: { uz: 'CPU tahlili', ru: 'Анализ CPU', en: 'CPU Analysis' }, desc: { uz: 'Intel va AMD protsessorlarni solishtiring', ru: 'Сравнивайте процессоры Intel и AMD', en: 'Compare Intel & AMD processors' } },
    { icon: MonitorUp, title: { uz: 'GPU katalog', ru: 'Каталог GPU', en: 'GPU Catalog' }, desc: { uz: 'NVIDIA va AMD videokartalarning to\'liq katalogi', ru: 'Полный каталог видеокарт NVIDIA и AMD', en: 'Full NVIDIA & AMD graphics card catalog' } },
    { icon: MemoryStick, title: { uz: 'RAM mosligi', ru: 'Совместимость RAM', en: 'RAM Compatibility' }, desc: { uz: 'DDR4 va DDR5 xotira modullari', ru: 'Модули памяти DDR4 и DDR5', en: 'DDR4 & DDR5 memory modules' } },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-bg min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                left: `${10 + i * 18}%`,
                top: `${15 + (i % 3) * 25}%`,
                background: `radial-gradient(circle, hsl(${210 + i * 30} 80% 60% / 0.06), transparent)`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-button font-semibold text-lg"
              >
                {t('hero.browse')}
              </Link>
            </div>
          </motion.div>

          {/* Glass feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {features.map((f, i) => (
                <div key={i} className="glass-panel glass-panel-hover rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{f.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc[lang]}</p>
                </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
