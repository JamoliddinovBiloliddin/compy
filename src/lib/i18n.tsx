import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'uz' | 'ru' | 'en';

const translations: Record<string, Record<Lang, string>> = {
  'site.title': { uz: 'TechSpec Hub', ru: 'TechSpec Hub', en: 'TechSpec Hub' },
  'site.description': { uz: 'Komponentlarni solishtiring va bottleneckni aniqlang', ru: 'Сравнивайте компоненты и определяйте узкие места', en: 'Compare components and identify bottlenecks' },
  'nav.home': { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
  'nav.catalog': { uz: 'Katalog', ru: 'Каталог', en: 'Catalog' },
  'nav.compare': { uz: 'Solishtirish', ru: 'Сравнение', en: 'Compare' },
  'nav.benchmarks': { uz: 'Benchmarklar', ru: 'Бенчмарки', en: 'Benchmarks' },
  'hero.title': { uz: 'Yig\'ing. Solishtiring. O\'ynang.', ru: 'Соберите. Сравните. Играйте.', en: 'Build. Compare. Play.' },
  'hero.subtitle': { uz: 'CPU, GPU va RAM komponentlarini solishtiring, bottleneck tahlili oling va o\'yinlardagi FPS natijalarini ko\'ring.', ru: 'Сравнивайте CPU, GPU и RAM, анализируйте узкие места и смотрите результаты FPS в играх.', en: 'Compare CPU, GPU & RAM components, get bottleneck analysis and see in-game FPS results.' },
  'hero.cta': { uz: 'Solishtirishni boshlash', ru: 'Начать сравнение', en: 'Start Comparing' },
  'hero.browse': { uz: 'Katalogni ko\'rish', ru: 'Смотреть каталог', en: 'Browse Catalog' },
  'catalog.title': { uz: 'Mahsulotlar katalogi', ru: 'Каталог продуктов', en: 'Product Catalog' },
  'catalog.filter.brand': { uz: 'Brend', ru: 'Бренд', en: 'Brand' },
  'catalog.filter.type': { uz: 'Turi', ru: 'Тип', en: 'Type' },
  'catalog.filter.all': { uz: 'Barchasi', ru: 'Все', en: 'All' },
  'catalog.sort.release': { uz: 'Chiqish yili', ru: 'Год выпуска', en: 'Release Year' },
  'catalog.sort.performance': { uz: 'Ishlash', ru: 'Производительность', en: 'Performance' },
  'catalog.add_compare': { uz: 'Solishtirishga qo\'shish', ru: 'Добавить к сравнению', en: 'Add to Compare' },
  'compare.title': { uz: 'Komponentlarni solishtirish', ru: 'Сравнение компонентов', en: 'Compare Components' },
  'compare.select_cpu': { uz: 'CPU tanlang', ru: 'Выберите CPU', en: 'Select CPU' },
  'compare.select_gpu': { uz: 'GPU tanlang', ru: 'Выберите GPU', en: 'Select GPU' },
  'compare.select_ram': { uz: 'RAM tanlang', ru: 'Выберите RAM', en: 'Select RAM' },
  'compare.bottleneck': { uz: 'Bottleneck tahlili', ru: 'Анализ узких мест', en: 'Bottleneck Analysis' },
  'compare.bottleneck.cpu': { uz: 'CPU cheklovchi', ru: 'CPU ограничивает', en: 'CPU Bottleneck' },
  'compare.bottleneck.gpu': { uz: 'GPU cheklovchi', ru: 'GPU ограничивает', en: 'GPU Bottleneck' },
  'compare.bottleneck.balanced': { uz: 'Muvozanatli', ru: 'Сбалансировано', en: 'Balanced' },
  'compare.fps_estimate': { uz: 'Taxminiy FPS', ru: 'Оценка FPS', en: 'Estimated FPS' },
  'compare.resolution': { uz: 'Rezolyutsiya', ru: 'Разрешение', en: 'Resolution' },
  'compare.settings': { uz: 'Sozlamalar', ru: 'Настройки', en: 'Settings' },
  'compare.alternatives': { uz: 'Tavsiya etilgan alternativalar', ru: 'Рекомендуемые альтернативы', en: 'Suggested Alternatives' },
  'compare.budget': { uz: 'Byudjet', ru: 'Бюджет', en: 'Budget' },
  'compare.balanced': { uz: 'Muvozanatli', ru: 'Баланс', en: 'Balanced' },
  'compare.highend': { uz: 'Yuqori daraja', ru: 'Высокий класс', en: 'High-End' },
  'compare.analyze': { uz: 'Tahlil qilish', ru: 'Анализировать', en: 'Analyze' },
  'compare.ram_rec': { uz: 'Tavsiya etilgan RAM', ru: 'Рекомендуемая RAM', en: 'Recommended RAM' },
  'benchmarks.title': { uz: 'Gaming testlar', ru: 'Игровые тесты', en: 'Gaming Benchmarks' },
  'benchmarks.game': { uz: 'O\'yin', ru: 'Игра', en: 'Game' },
  'benchmarks.avg_fps': { uz: 'O\'rtacha FPS', ru: 'Средний FPS', en: 'Avg FPS' },
  'benchmarks.min_fps': { uz: 'Min FPS', ru: 'Мин FPS', en: 'Min FPS' },
  'benchmarks.max_fps': { uz: 'Maks FPS', ru: 'Макс FPS', en: 'Max FPS' },
  'benchmarks.stable': { uz: 'Barqaror 60+ FPS', ru: 'Стабильные 60+ FPS', en: 'Stable 60+ FPS' },
  'benchmarks.playable': { uz: '4K o\'ynasa bo\'ladi', ru: '4K играбельно', en: '4K Playable' },
  'common.cores': { uz: 'Yadrolar', ru: 'Ядра', en: 'Cores' },
  'common.threads': { uz: 'Oqimlar', ru: 'Потоки', en: 'Threads' },
  'common.clock': { uz: 'Chastota', ru: 'Частота', en: 'Clock' },
  'common.tdp': { uz: 'TDP', ru: 'TDP', en: 'TDP' },
  'common.vram': { uz: 'Video xotira', ru: 'Видеопамять', en: 'VRAM' },
  'common.ram': { uz: 'Xotira', ru: 'Память', en: 'RAM' },
  'common.year': { uz: 'Yil', ru: 'Год', en: 'Year' },
  'common.search': { uz: 'Qidirish...', ru: 'Поиск...', en: 'Search...' },
  'theme.light': { uz: 'Yorug\'', ru: 'Светлая', en: 'Light' },
  'theme.dark': { uz: 'Qorong\'u', ru: 'Тёмная', en: 'Dark' },
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'uz',
  setLang: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang;
    return saved && ['uz', 'ru', 'en'].includes(saved) ? saved : 'uz';
  });

  const changeLang = useCallback((l: Lang) => {
    setLang(l);
    localStorage.setItem('lang', l);
  }, []);

  const t = useCallback((key: string) => {
    return translations[key]?.[lang] ?? translations[key]?.['uz'] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
