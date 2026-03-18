export type ComponentType = 'cpu' | 'gpu' | 'ram';

export interface Product {
  id: string;
  type: ComponentType;
  brand: string;
  family: string;
  model: string;
  cores?: number;
  threads?: number;
  base_clock?: number;
  turbo_clock?: number;
  lithography?: string;
  tdp: number;
  vram?: number;
  vram_type?: string;
  memory_type?: string;
  memory_size?: number;
  memory_speed?: number;
  interface_type?: string;
  release_year: number;
  msrp?: number;
  image_url?: string;
  short_description: string;
  benchmark_score_cpu?: number;
  benchmark_score_gpu?: number;
  recommended_ram_min: number;
  recommended_ram_recommended: number;
}

export const products: Product[] = [

  // ╔══════════════════════════════════════════════════════╗
  // ║                   INTEL CPUs                        ║
  // ╚══════════════════════════════════════════════════════╝

  // --- 2010: 1st Gen (Westmere / Clarkdale / Gulftown) ---
  { id: 'cpu-i7-980x', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-980X', cores: 6, threads: 12, base_clock: 3.33, turbo_clock: 3.6, lithography: '32nm', tdp: 130, release_year: 2010, msrp: 999, short_description: 'First 6-core desktop CPU', benchmark_score_cpu: 6500, recommended_ram_min: 4, recommended_ram_recommended: 6 },
  { id: 'cpu-i7-870', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-870', cores: 4, threads: 8, base_clock: 2.93, turbo_clock: 3.6, lithography: '45nm', tdp: 95, release_year: 2010, msrp: 562, short_description: 'Lynnfield quad-core', benchmark_score_cpu: 4800, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'cpu-i5-760', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-760', cores: 4, threads: 4, base_clock: 2.8, turbo_clock: 3.33, lithography: '45nm', tdp: 95, release_year: 2010, msrp: 205, short_description: 'Affordable Lynnfield quad', benchmark_score_cpu: 3800, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'cpu-i3-540', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-540', cores: 2, threads: 4, base_clock: 3.07, turbo_clock: 3.07, lithography: '32nm', tdp: 73, release_year: 2010, msrp: 133, short_description: 'Clarkdale dual-core', benchmark_score_cpu: 2400, recommended_ram_min: 2, recommended_ram_recommended: 4 },

  // --- 2011: 2nd Gen Sandy Bridge ---
  { id: 'cpu-i7-2600k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-2600K', cores: 4, threads: 8, base_clock: 3.4, turbo_clock: 3.8, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 317, short_description: 'Legendary Sandy Bridge flagship', benchmark_score_cpu: 7200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i7-2700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-2700K', cores: 4, threads: 8, base_clock: 3.5, turbo_clock: 3.9, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 332, short_description: 'Sandy Bridge refresh', benchmark_score_cpu: 7400, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-2500k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-2500K', cores: 4, threads: 4, base_clock: 3.3, turbo_clock: 3.7, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 216, short_description: 'OC legend quad-core', benchmark_score_cpu: 5800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-2400', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-2400', cores: 4, threads: 4, base_clock: 3.1, turbo_clock: 3.4, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 184, short_description: 'Budget Sandy Bridge quad', benchmark_score_cpu: 5200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i3-2120', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-2120', cores: 2, threads: 4, base_clock: 3.3, turbo_clock: 3.3, lithography: '32nm', tdp: 65, release_year: 2011, msrp: 117, short_description: 'Entry Sandy Bridge', benchmark_score_cpu: 3400, recommended_ram_min: 2, recommended_ram_recommended: 4 },
  { id: 'cpu-i7-3960x', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-3960X', cores: 6, threads: 12, base_clock: 3.3, turbo_clock: 3.9, lithography: '32nm', tdp: 130, release_year: 2011, msrp: 990, short_description: 'Sandy Bridge-E HEDT flagship', benchmark_score_cpu: 9500, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2012: 3rd Gen Ivy Bridge ---
  { id: 'cpu-i7-3770k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-3770K', cores: 4, threads: 8, base_clock: 3.5, turbo_clock: 3.9, lithography: '22nm', tdp: 77, release_year: 2012, msrp: 332, short_description: 'Ivy Bridge flagship', benchmark_score_cpu: 8200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-3570k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-3570K', cores: 4, threads: 4, base_clock: 3.4, turbo_clock: 3.8, lithography: '22nm', tdp: 77, release_year: 2012, msrp: 225, short_description: 'Popular Ivy Bridge OC chip', benchmark_score_cpu: 6600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-3470', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-3470', cores: 4, threads: 4, base_clock: 3.2, turbo_clock: 3.6, lithography: '22nm', tdp: 77, release_year: 2012, msrp: 184, short_description: 'Budget Ivy Bridge quad', benchmark_score_cpu: 6000, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i3-3220', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-3220', cores: 2, threads: 4, base_clock: 3.3, turbo_clock: 3.3, lithography: '22nm', tdp: 55, release_year: 2012, msrp: 117, short_description: 'Entry Ivy Bridge', benchmark_score_cpu: 3800, recommended_ram_min: 2, recommended_ram_recommended: 4 },

  // --- 2013: 4th Gen Haswell ---
  { id: 'cpu-i7-4770k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-4770K', cores: 4, threads: 8, base_clock: 3.5, turbo_clock: 3.9, lithography: '22nm', tdp: 84, release_year: 2013, msrp: 339, short_description: 'Haswell flagship', benchmark_score_cpu: 9000, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-4670k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-4670K', cores: 4, threads: 4, base_clock: 3.4, turbo_clock: 3.8, lithography: '22nm', tdp: 84, release_year: 2013, msrp: 242, short_description: 'Haswell mid-range OC', benchmark_score_cpu: 7200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-4570', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-4570', cores: 4, threads: 4, base_clock: 3.2, turbo_clock: 3.6, lithography: '22nm', tdp: 84, release_year: 2013, msrp: 196, short_description: 'Budget Haswell quad', benchmark_score_cpu: 6800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i3-4130', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-4130', cores: 2, threads: 4, base_clock: 3.4, turbo_clock: 3.4, lithography: '22nm', tdp: 54, release_year: 2013, msrp: 117, short_description: 'Entry Haswell dual-core', benchmark_score_cpu: 4200, recommended_ram_min: 2, recommended_ram_recommended: 4 },
  { id: 'cpu-i7-4960x', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-4960X', cores: 6, threads: 12, base_clock: 3.6, turbo_clock: 4.0, lithography: '22nm', tdp: 130, release_year: 2013, msrp: 990, short_description: 'Ivy Bridge-E HEDT', benchmark_score_cpu: 10500, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2014: Haswell Refresh / Devil's Canyon ---
  { id: 'cpu-i7-4790k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-4790K', cores: 4, threads: 8, base_clock: 4.0, turbo_clock: 4.4, lithography: '22nm', tdp: 88, release_year: 2014, msrp: 339, short_description: "Devil's Canyon flagship", benchmark_score_cpu: 9600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-4690k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-4690K', cores: 4, threads: 4, base_clock: 3.5, turbo_clock: 3.9, lithography: '22nm', tdp: 88, release_year: 2014, msrp: 242, short_description: "Devil's Canyon mid-range", benchmark_score_cpu: 7600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i7-5960x', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-5960X', cores: 8, threads: 16, base_clock: 3.0, turbo_clock: 3.5, lithography: '22nm', tdp: 140, release_year: 2014, msrp: 999, short_description: 'First consumer 8-core Haswell-E', benchmark_score_cpu: 12500, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2015: 5th Gen Broadwell / Skylake ---
  { id: 'cpu-i7-5775c', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-5775C', cores: 4, threads: 8, base_clock: 3.3, turbo_clock: 3.7, lithography: '14nm', tdp: 65, release_year: 2015, msrp: 366, short_description: 'Broadwell with eDRAM', benchmark_score_cpu: 9200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i7-6700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-6700K', cores: 4, threads: 8, base_clock: 4.0, turbo_clock: 4.2, lithography: '14nm', tdp: 91, release_year: 2015, msrp: 339, short_description: 'Skylake flagship', benchmark_score_cpu: 10000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-6600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-6600K', cores: 4, threads: 4, base_clock: 3.5, turbo_clock: 3.9, lithography: '14nm', tdp: 91, release_year: 2015, msrp: 242, short_description: 'Skylake mid-range OC', benchmark_score_cpu: 8000, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i5-6500', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-6500', cores: 4, threads: 4, base_clock: 3.2, turbo_clock: 3.6, lithography: '14nm', tdp: 65, release_year: 2015, msrp: 192, short_description: 'Budget Skylake quad', benchmark_score_cpu: 7500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i3-6100', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-6100', cores: 2, threads: 4, base_clock: 3.7, turbo_clock: 3.7, lithography: '14nm', tdp: 51, release_year: 2015, msrp: 117, short_description: 'Entry Skylake', benchmark_score_cpu: 5000, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2016: Broadwell-E ---
  { id: 'cpu-i7-6950x', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-6950X', cores: 10, threads: 20, base_clock: 3.0, turbo_clock: 3.5, lithography: '14nm', tdp: 140, release_year: 2016, msrp: 1723, short_description: 'First consumer 10-core', benchmark_score_cpu: 16000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-6900k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-6900K', cores: 8, threads: 16, base_clock: 3.2, turbo_clock: 3.7, lithography: '14nm', tdp: 140, release_year: 2016, msrp: 1089, short_description: 'Broadwell-E 8-core HEDT', benchmark_score_cpu: 14000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-6800k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-6800K', cores: 6, threads: 12, base_clock: 3.4, turbo_clock: 3.6, lithography: '14nm', tdp: 140, release_year: 2016, msrp: 434, short_description: 'Broadwell-E 6-core', benchmark_score_cpu: 11500, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2017: 7th Gen Kaby Lake / Skylake-X ---
  { id: 'cpu-i7-7700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-7700K', cores: 4, threads: 8, base_clock: 4.2, turbo_clock: 4.5, lithography: '14nm', tdp: 91, release_year: 2017, msrp: 339, short_description: 'Kaby Lake flagship', benchmark_score_cpu: 11000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-7600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-7600K', cores: 4, threads: 4, base_clock: 3.8, turbo_clock: 4.2, lithography: '14nm', tdp: 91, release_year: 2017, msrp: 242, short_description: 'Kaby Lake OC quad', benchmark_score_cpu: 8500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i3-7100', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-7100', cores: 2, threads: 4, base_clock: 3.9, turbo_clock: 3.9, lithography: '14nm', tdp: 51, release_year: 2017, msrp: 117, short_description: 'Entry Kaby Lake', benchmark_score_cpu: 5200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-i9-7980xe', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-7980XE', cores: 18, threads: 36, base_clock: 2.6, turbo_clock: 4.2, lithography: '14nm', tdp: 165, release_year: 2017, msrp: 1999, short_description: 'Skylake-X 18-core monster', benchmark_score_cpu: 22000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i9-7900x', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-7900X', cores: 10, threads: 20, base_clock: 3.3, turbo_clock: 4.3, lithography: '14nm', tdp: 140, release_year: 2017, msrp: 999, short_description: 'Skylake-X 10-core', benchmark_score_cpu: 17000, recommended_ram_min: 16, recommended_ram_recommended: 32 },

  // --- 2017-2018: 8th Gen Coffee Lake ---
  { id: 'cpu-i7-8700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-8700K', cores: 6, threads: 12, base_clock: 3.7, turbo_clock: 4.7, lithography: '14nm', tdp: 95, release_year: 2017, msrp: 359, short_description: 'First mainstream 6-core i7', benchmark_score_cpu: 14500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-8600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-8600K', cores: 6, threads: 6, base_clock: 3.6, turbo_clock: 4.3, lithography: '14nm', tdp: 95, release_year: 2017, msrp: 257, short_description: 'Coffee Lake 6-core i5', benchmark_score_cpu: 11000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-8400', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-8400', cores: 6, threads: 6, base_clock: 2.8, turbo_clock: 4.0, lithography: '14nm', tdp: 65, release_year: 2018, msrp: 182, short_description: 'Budget Coffee Lake 6-core', benchmark_score_cpu: 9800, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i3-8100', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-8100', cores: 4, threads: 4, base_clock: 3.6, turbo_clock: 3.6, lithography: '14nm', tdp: 65, release_year: 2018, msrp: 117, short_description: 'First quad-core i3', benchmark_score_cpu: 6500, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2018-2019: 9th Gen Coffee Lake Refresh ---
  { id: 'cpu-i9-9900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-9900K', cores: 8, threads: 16, base_clock: 3.6, turbo_clock: 5.0, lithography: '14nm', tdp: 95, release_year: 2018, msrp: 488, short_description: 'First mainstream 8-core i9', benchmark_score_cpu: 19500, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-i9-9900ks', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-9900KS', cores: 8, threads: 16, base_clock: 4.0, turbo_clock: 5.0, lithography: '14nm', tdp: 127, release_year: 2019, msrp: 513, short_description: 'All-core 5GHz special edition', benchmark_score_cpu: 20000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-i7-9700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-9700K', cores: 8, threads: 8, base_clock: 3.6, turbo_clock: 4.9, lithography: '14nm', tdp: 95, release_year: 2018, msrp: 374, short_description: 'Classic 8-core gaming CPU', benchmark_score_cpu: 18000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-9600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-9600K', cores: 6, threads: 6, base_clock: 3.7, turbo_clock: 4.6, lithography: '14nm', tdp: 95, release_year: 2018, msrp: 262, short_description: '9th gen 6-core gamer', benchmark_score_cpu: 12000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-9400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-9400F', cores: 6, threads: 6, base_clock: 2.9, turbo_clock: 4.1, lithography: '14nm', tdp: 65, release_year: 2019, msrp: 157, short_description: 'Budget 9th gen (no iGPU)', benchmark_score_cpu: 10500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i3-9100f', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-9100F', cores: 4, threads: 4, base_clock: 3.6, turbo_clock: 4.2, lithography: '14nm', tdp: 65, release_year: 2019, msrp: 79, short_description: 'Ultra-budget quad-core', benchmark_score_cpu: 6800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2020: 10th Gen Comet Lake ---
  { id: 'cpu-i9-10900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-10900K', cores: 10, threads: 20, base_clock: 3.7, turbo_clock: 5.3, lithography: '14nm', tdp: 125, release_year: 2020, msrp: 488, short_description: '10-core Comet Lake flagship', benchmark_score_cpu: 23000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-10700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-10700K', cores: 8, threads: 16, base_clock: 3.8, turbo_clock: 5.1, lithography: '14nm', tdp: 125, release_year: 2020, msrp: 374, short_description: 'Comet Lake 8-core', benchmark_score_cpu: 20000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-10600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-10600K', cores: 6, threads: 12, base_clock: 4.1, turbo_clock: 4.8, lithography: '14nm', tdp: 125, release_year: 2020, msrp: 262, short_description: 'First HT-enabled i5', benchmark_score_cpu: 15000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-10400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-10400F', cores: 6, threads: 12, base_clock: 2.9, turbo_clock: 4.3, lithography: '14nm', tdp: 65, release_year: 2020, msrp: 157, short_description: 'Budget 6c/12t wonder', benchmark_score_cpu: 13000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i3-10100', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-10100', cores: 4, threads: 8, base_clock: 3.6, turbo_clock: 4.3, lithography: '14nm', tdp: 65, release_year: 2020, msrp: 122, short_description: '4c/8t entry gaming', benchmark_score_cpu: 8500, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  // --- 2021: 11th Gen Rocket Lake / 12th Gen Alder Lake ---
  { id: 'cpu-i9-11900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-11900K', cores: 8, threads: 16, base_clock: 3.5, turbo_clock: 5.3, lithography: '14nm', tdp: 125, release_year: 2021, msrp: 539, short_description: 'Rocket Lake flagship 8-core', benchmark_score_cpu: 22000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-11700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-11700K', cores: 8, threads: 16, base_clock: 3.6, turbo_clock: 5.0, lithography: '14nm', tdp: 125, release_year: 2021, msrp: 399, short_description: 'Rocket Lake 8-core', benchmark_score_cpu: 20000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-11600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-11600K', cores: 6, threads: 12, base_clock: 3.9, turbo_clock: 4.9, lithography: '14nm', tdp: 125, release_year: 2021, msrp: 262, short_description: 'Rocket Lake mid-range', benchmark_score_cpu: 16000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-11400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-11400F', cores: 6, threads: 12, base_clock: 2.6, turbo_clock: 4.4, lithography: '14nm', tdp: 65, release_year: 2021, msrp: 157, short_description: 'Budget Rocket Lake', benchmark_score_cpu: 14000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  { id: 'cpu-i9-12900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-12900K', cores: 16, threads: 24, base_clock: 3.2, turbo_clock: 5.2, lithography: 'Intel 7', tdp: 241, release_year: 2021, msrp: 589, short_description: 'Hybrid Alder Lake flagship', benchmark_score_cpu: 38000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-12700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-12700K', cores: 12, threads: 20, base_clock: 3.6, turbo_clock: 5.0, lithography: 'Intel 7', tdp: 190, release_year: 2021, msrp: 409, short_description: 'Alder Lake 12-core', benchmark_score_cpu: 33000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i5-12600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-12600K', cores: 10, threads: 16, base_clock: 3.7, turbo_clock: 4.9, lithography: 'Intel 7', tdp: 150, release_year: 2021, msrp: 289, short_description: 'Alder Lake 10-core gamer', benchmark_score_cpu: 27000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2022: 12th Gen Alder Lake (non-K) + 13th Gen Raptor Lake ---
  { id: 'cpu-i5-12400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-12400F', cores: 6, threads: 12, base_clock: 2.5, turbo_clock: 4.4, lithography: 'Intel 7', tdp: 65, release_year: 2022, msrp: 179, short_description: 'Budget king for gaming', benchmark_score_cpu: 27000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i3-12100f', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-12100F', cores: 4, threads: 8, base_clock: 3.3, turbo_clock: 4.3, lithography: 'Intel 7', tdp: 58, release_year: 2022, msrp: 97, short_description: 'Ultra-budget Alder Lake', benchmark_score_cpu: 16000, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  { id: 'cpu-i9-13900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-13900K', cores: 24, threads: 32, base_clock: 3.0, turbo_clock: 5.8, lithography: 'Intel 7', tdp: 253, release_year: 2022, msrp: 589, short_description: 'Raptor Lake 24-core flagship', benchmark_score_cpu: 55000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-13700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-13700K', cores: 16, threads: 24, base_clock: 3.4, turbo_clock: 5.4, lithography: 'Intel 7', tdp: 253, release_year: 2022, msrp: 409, short_description: '13th Gen powerhouse', benchmark_score_cpu: 48000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i5-13600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-13600K', cores: 14, threads: 20, base_clock: 3.5, turbo_clock: 5.1, lithography: 'Intel 7', tdp: 181, release_year: 2022, msrp: 319, short_description: 'Raptor Lake best value', benchmark_score_cpu: 36000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2023: 13th Gen non-K + 14th Gen Raptor Lake Refresh ---
  { id: 'cpu-i5-13400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-13400F', cores: 10, threads: 16, base_clock: 2.5, turbo_clock: 4.6, lithography: 'Intel 7', tdp: 65, release_year: 2023, msrp: 196, short_description: 'Budget Raptor Lake 10-core', benchmark_score_cpu: 28000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-i3-13100f', type: 'cpu', brand: 'Intel', family: 'Core i3', model: 'i3-13100F', cores: 4, threads: 8, base_clock: 3.4, turbo_clock: 4.5, lithography: 'Intel 7', tdp: 58, release_year: 2023, msrp: 99, short_description: 'Entry Raptor Lake', benchmark_score_cpu: 17000, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  { id: 'cpu-i9-14900k', type: 'cpu', brand: 'Intel', family: 'Core i9', model: 'i9-14900K', cores: 24, threads: 32, base_clock: 3.2, turbo_clock: 6.0, lithography: 'Intel 7', tdp: 253, release_year: 2023, msrp: 589, short_description: 'Flagship 14th Gen with 24 cores', benchmark_score_cpu: 59000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i7-14700k', type: 'cpu', brand: 'Intel', family: 'Core i7', model: 'i7-14700K', cores: 20, threads: 28, base_clock: 3.4, turbo_clock: 5.6, lithography: 'Intel 7', tdp: 253, release_year: 2023, msrp: 409, short_description: '20-core powerhouse', benchmark_score_cpu: 52000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-i5-14600k', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-14600K', cores: 14, threads: 20, base_clock: 3.5, turbo_clock: 5.3, lithography: 'Intel 7', tdp: 181, release_year: 2023, msrp: 319, short_description: 'Best mid-range gaming CPU', benchmark_score_cpu: 38000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-i5-14400f', type: 'cpu', brand: 'Intel', family: 'Core i5', model: 'i5-14400F', cores: 10, threads: 16, base_clock: 2.5, turbo_clock: 4.7, lithography: 'Intel 7', tdp: 65, release_year: 2023, msrp: 196, short_description: 'Budget 14th Gen 10-core', benchmark_score_cpu: 29000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2024: Intel Core Ultra (Arrow Lake) ---
  { id: 'cpu-ultra9-285k', type: 'cpu', brand: 'Intel', family: 'Core Ultra 9', model: 'Core Ultra 9 285K', cores: 24, threads: 24, base_clock: 3.7, turbo_clock: 5.7, lithography: 'Intel 20A', tdp: 125, release_year: 2024, msrp: 589, short_description: 'Arrow Lake flagship with NPU', benchmark_score_cpu: 56000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-ultra7-265k', type: 'cpu', brand: 'Intel', family: 'Core Ultra 7', model: 'Core Ultra 7 265K', cores: 20, threads: 20, base_clock: 3.9, turbo_clock: 5.5, lithography: 'Intel 20A', tdp: 125, release_year: 2024, msrp: 394, short_description: 'Arrow Lake 20-core', benchmark_score_cpu: 48000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-ultra5-245k', type: 'cpu', brand: 'Intel', family: 'Core Ultra 5', model: 'Core Ultra 5 245K', cores: 14, threads: 14, base_clock: 4.2, turbo_clock: 5.2, lithography: 'Intel 20A', tdp: 125, release_year: 2024, msrp: 309, short_description: 'Arrow Lake mid-range', benchmark_score_cpu: 35000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2025: Intel Arrow Lake Refresh ---
  { id: 'cpu-ultra9-285kf', type: 'cpu', brand: 'Intel', family: 'Core Ultra 9', model: 'Core Ultra 9 285KF', cores: 24, threads: 24, base_clock: 3.8, turbo_clock: 5.8, lithography: 'Intel 20A', tdp: 125, release_year: 2025, msrp: 569, short_description: 'Arrow Lake refresh (no iGPU)', benchmark_score_cpu: 58000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-ultra7-265kf', type: 'cpu', brand: 'Intel', family: 'Core Ultra 7', model: 'Core Ultra 7 265KF', cores: 20, threads: 20, base_clock: 4.0, turbo_clock: 5.6, lithography: 'Intel 20A', tdp: 125, release_year: 2025, msrp: 379, short_description: 'Arrow Lake refresh 20-core', benchmark_score_cpu: 50000, recommended_ram_min: 16, recommended_ram_recommended: 32 },

  // ╔══════════════════════════════════════════════════════╗
  // ║                   AMD CPUs                          ║
  // ╚══════════════════════════════════════════════════════╝

  // --- 2010-2012: Phenom II / FX (Bulldozer/Piledriver) ---
  { id: 'cpu-phenom-1100t', type: 'cpu', brand: 'AMD', family: 'Phenom II', model: 'Phenom II X6 1100T', cores: 6, threads: 6, base_clock: 3.3, turbo_clock: 3.7, lithography: '45nm', tdp: 125, release_year: 2010, msrp: 245, short_description: 'Top Phenom II 6-core', benchmark_score_cpu: 4500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-phenom-x4-965', type: 'cpu', brand: 'AMD', family: 'Phenom II', model: 'Phenom II X4 965 BE', cores: 4, threads: 4, base_clock: 3.4, turbo_clock: 3.4, lithography: '45nm', tdp: 125, release_year: 2010, msrp: 185, short_description: 'Popular Phenom II quad', benchmark_score_cpu: 3400, recommended_ram_min: 4, recommended_ram_recommended: 4 },

  { id: 'cpu-fx-8150', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-8150', cores: 8, threads: 8, base_clock: 3.6, turbo_clock: 4.2, lithography: '32nm', tdp: 125, release_year: 2011, msrp: 245, short_description: 'First Bulldozer 8-core', benchmark_score_cpu: 4800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-fx-6100', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-6100', cores: 6, threads: 6, base_clock: 3.3, turbo_clock: 3.9, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 165, short_description: 'Bulldozer 6-core', benchmark_score_cpu: 3600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-fx-4100', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-4100', cores: 4, threads: 4, base_clock: 3.6, turbo_clock: 3.8, lithography: '32nm', tdp: 95, release_year: 2011, msrp: 115, short_description: 'Bulldozer quad-core', benchmark_score_cpu: 2800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  { id: 'cpu-fx-8350', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-8350', cores: 8, threads: 8, base_clock: 4.0, turbo_clock: 4.2, lithography: '32nm', tdp: 125, release_year: 2012, msrp: 195, short_description: 'Piledriver flagship', benchmark_score_cpu: 5500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-fx-6300', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-6300', cores: 6, threads: 6, base_clock: 3.5, turbo_clock: 4.1, lithography: '32nm', tdp: 95, release_year: 2012, msrp: 132, short_description: 'Budget Piledriver 6-core', benchmark_score_cpu: 4200, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2013-2014: FX refresh (Vishera) ---
  { id: 'cpu-fx-9590', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-9590', cores: 8, threads: 8, base_clock: 4.7, turbo_clock: 5.0, lithography: '32nm', tdp: 220, release_year: 2013, msrp: 920, short_description: 'First 5GHz CPU', benchmark_score_cpu: 6000, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'cpu-fx-8370', type: 'cpu', brand: 'AMD', family: 'FX', model: 'FX-8370', cores: 8, threads: 8, base_clock: 4.0, turbo_clock: 4.3, lithography: '32nm', tdp: 125, release_year: 2014, msrp: 196, short_description: 'Vishera refresh 8-core', benchmark_score_cpu: 5800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2015-2016: APU era (no major new CPUs until Ryzen) ---
  { id: 'cpu-a10-7890k', type: 'cpu', brand: 'AMD', family: 'A-Series', model: 'A10-7890K', cores: 4, threads: 4, base_clock: 4.1, turbo_clock: 4.3, lithography: '28nm', tdp: 95, release_year: 2016, msrp: 145, short_description: 'Kaveri APU with Radeon R7', benchmark_score_cpu: 3800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2017: Ryzen 1000 (Zen 1) ---
  { id: 'cpu-r7-1800x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 1800X', cores: 8, threads: 16, base_clock: 3.6, turbo_clock: 4.0, lithography: '14nm', tdp: 95, release_year: 2017, msrp: 499, short_description: 'First Ryzen flagship', benchmark_score_cpu: 13500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r7-1700', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 1700', cores: 8, threads: 16, base_clock: 3.0, turbo_clock: 3.7, lithography: '14nm', tdp: 65, release_year: 2017, msrp: 329, short_description: 'Efficient 8-core Zen', benchmark_score_cpu: 12000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-1600', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 1600', cores: 6, threads: 12, base_clock: 3.2, turbo_clock: 3.6, lithography: '14nm', tdp: 65, release_year: 2017, msrp: 219, short_description: 'The 6-core value king', benchmark_score_cpu: 9500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-1400', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 1400', cores: 4, threads: 8, base_clock: 3.2, turbo_clock: 3.4, lithography: '14nm', tdp: 65, release_year: 2017, msrp: 169, short_description: 'Entry Ryzen quad', benchmark_score_cpu: 7500, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'cpu-r3-1200', type: 'cpu', brand: 'AMD', family: 'Ryzen 3', model: 'Ryzen 3 1200', cores: 4, threads: 4, base_clock: 3.1, turbo_clock: 3.4, lithography: '14nm', tdp: 65, release_year: 2017, msrp: 109, short_description: 'Budget Zen quad', benchmark_score_cpu: 6000, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-tr-1950x', type: 'cpu', brand: 'AMD', family: 'Threadripper', model: 'Threadripper 1950X', cores: 16, threads: 32, base_clock: 3.4, turbo_clock: 4.0, lithography: '14nm', tdp: 180, release_year: 2017, msrp: 999, short_description: 'First Threadripper 16-core', benchmark_score_cpu: 20000, recommended_ram_min: 16, recommended_ram_recommended: 32 },

  // --- 2018: Ryzen 2000 (Zen+) ---
  { id: 'cpu-r7-2700x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 2700X', cores: 8, threads: 16, base_clock: 3.7, turbo_clock: 4.3, lithography: '12nm', tdp: 105, release_year: 2018, msrp: 329, short_description: 'Zen+ flagship with Wraith Prism', benchmark_score_cpu: 15500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r7-2700', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 2700', cores: 8, threads: 16, base_clock: 3.2, turbo_clock: 4.1, lithography: '12nm', tdp: 65, release_year: 2018, msrp: 299, short_description: 'Efficient Zen+ 8-core', benchmark_score_cpu: 14500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-2600x', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 2600X', cores: 6, threads: 12, base_clock: 3.6, turbo_clock: 4.2, lithography: '12nm', tdp: 95, release_year: 2018, msrp: 209, short_description: 'Zen+ mid-range', benchmark_score_cpu: 12500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-2600', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 2600', cores: 6, threads: 12, base_clock: 3.4, turbo_clock: 3.9, lithography: '12nm', tdp: 65, release_year: 2018, msrp: 199, short_description: 'Budget Zen+ 6-core', benchmark_score_cpu: 11500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r3-2200g', type: 'cpu', brand: 'AMD', family: 'Ryzen 3', model: 'Ryzen 3 2200G', cores: 4, threads: 4, base_clock: 3.5, turbo_clock: 3.7, lithography: '14nm', tdp: 65, release_year: 2018, msrp: 99, short_description: 'APU with Vega 8 graphics', benchmark_score_cpu: 6500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'cpu-tr-2990wx', type: 'cpu', brand: 'AMD', family: 'Threadripper', model: 'Threadripper 2990WX', cores: 32, threads: 64, base_clock: 3.0, turbo_clock: 4.2, lithography: '12nm', tdp: 250, release_year: 2018, msrp: 1799, short_description: '32-core workstation monster', benchmark_score_cpu: 30000, recommended_ram_min: 32, recommended_ram_recommended: 64 },

  // --- 2019: Ryzen 3000 (Zen 2) ---
  { id: 'cpu-r9-3950x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 3950X', cores: 16, threads: 32, base_clock: 3.5, turbo_clock: 4.7, lithography: '7nm', tdp: 105, release_year: 2019, msrp: 749, short_description: 'First mainstream 16-core', benchmark_score_cpu: 30000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r9-3900x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 3900X', cores: 12, threads: 24, base_clock: 3.8, turbo_clock: 4.6, lithography: '7nm', tdp: 105, release_year: 2019, msrp: 499, short_description: 'Zen 2 12-core flagship', benchmark_score_cpu: 27000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-3700x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 3700X', cores: 8, threads: 16, base_clock: 3.6, turbo_clock: 4.4, lithography: '7nm', tdp: 65, release_year: 2019, msrp: 329, short_description: 'Efficient 8-core Zen 2', benchmark_score_cpu: 21000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-3600', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 3600', cores: 6, threads: 12, base_clock: 3.6, turbo_clock: 4.2, lithography: '7nm', tdp: 65, release_year: 2019, msrp: 199, short_description: 'Best-seller Zen 2 6-core', benchmark_score_cpu: 18000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-3600x', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 3600X', cores: 6, threads: 12, base_clock: 3.8, turbo_clock: 4.4, lithography: '7nm', tdp: 95, release_year: 2019, msrp: 249, short_description: 'Higher-clocked Zen 2', benchmark_score_cpu: 19000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r3-3300x', type: 'cpu', brand: 'AMD', family: 'Ryzen 3', model: 'Ryzen 3 3300X', cores: 4, threads: 8, base_clock: 3.8, turbo_clock: 4.3, lithography: '7nm', tdp: 65, release_year: 2019, msrp: 120, short_description: 'Budget Zen 2 gaming star', benchmark_score_cpu: 13000, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'cpu-tr-3970x', type: 'cpu', brand: 'AMD', family: 'Threadripper', model: 'Threadripper 3970X', cores: 32, threads: 64, base_clock: 3.7, turbo_clock: 4.5, lithography: '7nm', tdp: 280, release_year: 2019, msrp: 1999, short_description: 'Zen 2 Threadripper 32-core', benchmark_score_cpu: 42000, recommended_ram_min: 32, recommended_ram_recommended: 64 },
  { id: 'cpu-tr-3990x', type: 'cpu', brand: 'AMD', family: 'Threadripper', model: 'Threadripper 3990X', cores: 64, threads: 128, base_clock: 2.9, turbo_clock: 4.3, lithography: '7nm', tdp: 280, release_year: 2019, msrp: 3990, short_description: '64-core HEDT beast', benchmark_score_cpu: 55000, recommended_ram_min: 64, recommended_ram_recommended: 128 },

  // --- 2020: Ryzen 5000 (Zen 3) ---
  { id: 'cpu-r9-5950x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 5950X', cores: 16, threads: 32, base_clock: 3.4, turbo_clock: 4.9, lithography: '7nm', tdp: 105, release_year: 2020, msrp: 799, short_description: 'Zen 3 16-core flagship', benchmark_score_cpu: 38000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r9-5900x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 5900X', cores: 12, threads: 24, base_clock: 3.7, turbo_clock: 4.8, lithography: '7nm', tdp: 105, release_year: 2020, msrp: 549, short_description: 'Zen 3 12-core', benchmark_score_cpu: 33000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-5800x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 5800X', cores: 8, threads: 16, base_clock: 3.8, turbo_clock: 4.7, lithography: '7nm', tdp: 105, release_year: 2020, msrp: 449, short_description: 'Zen 3 8-core gaming', benchmark_score_cpu: 27000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-5600x', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 5600X', cores: 6, threads: 12, base_clock: 3.7, turbo_clock: 4.6, lithography: '7nm', tdp: 65, release_year: 2020, msrp: 299, short_description: 'Legendary AM4 gaming CPU', benchmark_score_cpu: 25000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2021-2022: Ryzen 5000 additions ---
  { id: 'cpu-r7-5800x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 5800X3D', cores: 8, threads: 16, base_clock: 3.4, turbo_clock: 4.5, lithography: '7nm', tdp: 105, release_year: 2022, msrp: 449, short_description: 'First 3D V-Cache gaming CPU', benchmark_score_cpu: 30000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-5600', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 5600', cores: 6, threads: 12, base_clock: 3.5, turbo_clock: 4.4, lithography: '7nm', tdp: 65, release_year: 2022, msrp: 199, short_description: 'Budget Zen 3 refresh', benchmark_score_cpu: 24000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-5500', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 5500', cores: 6, threads: 12, base_clock: 3.6, turbo_clock: 4.2, lithography: '7nm', tdp: 65, release_year: 2022, msrp: 159, short_description: 'Ultra-budget AM4 6-core', benchmark_score_cpu: 20000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2022: Ryzen 7000 (Zen 4) ---
  { id: 'cpu-r9-7950x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 7950X', cores: 16, threads: 32, base_clock: 4.5, turbo_clock: 5.7, lithography: '5nm', tdp: 170, release_year: 2022, msrp: 699, short_description: 'AMD flagship 16-core Zen 4', benchmark_score_cpu: 62000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r9-7900x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 7900X', cores: 12, threads: 24, base_clock: 4.7, turbo_clock: 5.6, lithography: '5nm', tdp: 170, release_year: 2022, msrp: 549, short_description: 'Zen 4 12-core', benchmark_score_cpu: 52000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-7700x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 7700X', cores: 8, threads: 16, base_clock: 4.5, turbo_clock: 5.4, lithography: '5nm', tdp: 105, release_year: 2022, msrp: 399, short_description: 'Zen 4 8-core', benchmark_score_cpu: 38000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-7600x', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 7600X', cores: 6, threads: 12, base_clock: 4.7, turbo_clock: 5.3, lithography: '5nm', tdp: 105, release_year: 2022, msrp: 299, short_description: 'Efficient mid-range Zen 4', benchmark_score_cpu: 34000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2023: Ryzen 7000 X3D ---
  { id: 'cpu-r9-7950x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 7950X3D', cores: 16, threads: 32, base_clock: 4.2, turbo_clock: 5.7, lithography: '5nm', tdp: 120, release_year: 2023, msrp: 699, short_description: 'V-Cache 16-core hybrid', benchmark_score_cpu: 60000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-7800x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 7800X3D', cores: 8, threads: 16, base_clock: 4.2, turbo_clock: 5.0, lithography: '5nm', tdp: 120, release_year: 2023, msrp: 449, short_description: 'Best gaming CPU with 3D V-Cache', benchmark_score_cpu: 45000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r5-7600', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 7600', cores: 6, threads: 12, base_clock: 3.8, turbo_clock: 5.1, lithography: '5nm', tdp: 65, release_year: 2023, msrp: 229, short_description: 'Budget Zen 4 6-core', benchmark_score_cpu: 32000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2024: Ryzen 9000 (Zen 5) ---
  { id: 'cpu-r9-9950x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 9950X', cores: 16, threads: 32, base_clock: 4.3, turbo_clock: 5.7, lithography: '4nm', tdp: 170, release_year: 2024, msrp: 649, short_description: 'Zen 5 flagship processor', benchmark_score_cpu: 65000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r9-9900x', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 9900X', cores: 12, threads: 24, base_clock: 4.4, turbo_clock: 5.6, lithography: '4nm', tdp: 120, release_year: 2024, msrp: 499, short_description: 'Zen 5 12-core', benchmark_score_cpu: 55000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-9700x', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 9700X', cores: 8, threads: 16, base_clock: 3.8, turbo_clock: 5.5, lithography: '4nm', tdp: 65, release_year: 2024, msrp: 359, short_description: 'Zen 5 8-core efficient', benchmark_score_cpu: 42000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'cpu-r5-9600x', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 9600X', cores: 6, threads: 12, base_clock: 3.9, turbo_clock: 5.4, lithography: '4nm', tdp: 65, release_year: 2024, msrp: 279, short_description: 'Zen 5 mid-range', benchmark_score_cpu: 37000, recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // --- 2025: Ryzen 9000 X3D ---
  { id: 'cpu-r9-9950x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 9', model: 'Ryzen 9 9950X3D', cores: 16, threads: 32, base_clock: 4.3, turbo_clock: 5.7, lithography: '4nm', tdp: 170, release_year: 2025, msrp: 699, short_description: 'Zen 5 V-Cache 16-core', benchmark_score_cpu: 68000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r7-9800x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 7', model: 'Ryzen 7 9800X3D', cores: 8, threads: 16, base_clock: 4.7, turbo_clock: 5.2, lithography: '4nm', tdp: 120, release_year: 2025, msrp: 479, short_description: 'Best Zen 5 gaming CPU', benchmark_score_cpu: 50000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'cpu-r5-9600x3d', type: 'cpu', brand: 'AMD', family: 'Ryzen 5', model: 'Ryzen 5 9600X3D', cores: 6, threads: 12, base_clock: 4.0, turbo_clock: 5.2, lithography: '4nm', tdp: 65, release_year: 2025, msrp: 279, short_description: 'Budget V-Cache gaming', benchmark_score_cpu: 40000, recommended_ram_min: 16, recommended_ram_recommended: 16 },


  // ╔══════════════════════════════════════════════════════╗
  // ║                  NVIDIA GPUs                        ║
  // ╚══════════════════════════════════════════════════════╝

  // --- 2010: GeForce 400 Series (Fermi) ---
  { id: 'gpu-gtx-480', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 400', model: 'GTX 480', vram: 1.5, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 250, release_year: 2010, msrp: 499, short_description: 'First Fermi flagship', benchmark_score_gpu: 2200, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-470', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 400', model: 'GTX 470', vram: 1.25, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 215, release_year: 2010, msrp: 349, short_description: 'Fermi high-end', benchmark_score_gpu: 1900, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-460', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 400', model: 'GTX 460', vram: 1, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 160, release_year: 2010, msrp: 229, short_description: 'Fermi sweet spot', benchmark_score_gpu: 1500, recommended_ram_min: 2, recommended_ram_recommended: 4 },

  // --- 2011: GeForce 500 Series (Fermi refresh) ---
  { id: 'gpu-gtx-580', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 500', model: 'GTX 580', vram: 1.5, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 244, release_year: 2011, msrp: 499, short_description: 'Fermi refresh flagship', benchmark_score_gpu: 2600, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-570', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 500', model: 'GTX 570', vram: 1.25, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 219, release_year: 2011, msrp: 349, short_description: 'Fermi refresh high-end', benchmark_score_gpu: 2300, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-560ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 500', model: 'GTX 560 Ti', vram: 1, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 170, release_year: 2011, msrp: 249, short_description: 'Popular mid-range Fermi', benchmark_score_gpu: 1800, recommended_ram_min: 2, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-550ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 500', model: 'GTX 550 Ti', vram: 1, vram_type: 'GDDR5', interface_type: 'PCIe 2.0', tdp: 116, release_year: 2011, msrp: 149, short_description: 'Budget Fermi', benchmark_score_gpu: 1200, recommended_ram_min: 2, recommended_ram_recommended: 4 },

  // --- 2012: GeForce 600 Series (Kepler) ---
  { id: 'gpu-gtx-690', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 690', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 300, release_year: 2012, msrp: 999, short_description: 'Dual-GPU Kepler flagship', benchmark_score_gpu: 4500, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-680', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 680', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 195, release_year: 2012, msrp: 499, short_description: 'Kepler flagship', benchmark_score_gpu: 3400, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-670', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 670', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 170, release_year: 2012, msrp: 399, short_description: 'Kepler high-end value', benchmark_score_gpu: 3100, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-660ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 660 Ti', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 150, release_year: 2012, msrp: 299, short_description: 'Kepler upper mid-range', benchmark_score_gpu: 2700, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-660', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 660', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 140, release_year: 2012, msrp: 229, short_description: 'Kepler mid-range', benchmark_score_gpu: 2400, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-gtx-650ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 600', model: 'GTX 650 Ti', vram: 1, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 110, release_year: 2012, msrp: 149, short_description: 'Budget Kepler', benchmark_score_gpu: 1800, recommended_ram_min: 2, recommended_ram_recommended: 4 },

  // --- 2013: GeForce 700 Series (Kepler refresh) ---
  { id: 'gpu-gtx-780ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 700', model: 'GTX 780 Ti', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2013, msrp: 699, short_description: 'Full GK110 flagship', benchmark_score_gpu: 4800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-780', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 700', model: 'GTX 780', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2013, msrp: 649, short_description: 'Kepler GK110 flagship', benchmark_score_gpu: 4200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-770', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 700', model: 'GTX 770', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 230, release_year: 2013, msrp: 399, short_description: 'Rebadged GTX 680', benchmark_score_gpu: 3500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-760', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 700', model: 'GTX 760', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 170, release_year: 2013, msrp: 249, short_description: 'Kepler mid-range refresh', benchmark_score_gpu: 2800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-750ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 700', model: 'GTX 750 Ti', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 60, release_year: 2014, msrp: 149, short_description: 'First Maxwell — no power connector', benchmark_score_gpu: 2200, recommended_ram_min: 4, recommended_ram_recommended: 4 },

  // --- 2014: GeForce 900 Series (Maxwell) ---
  { id: 'gpu-gtx-980ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 900', model: 'GTX 980 Ti', vram: 6, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2015, msrp: 649, short_description: 'Maxwell titan-killer', benchmark_score_gpu: 6200, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-980', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 900', model: 'GTX 980', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 165, release_year: 2014, msrp: 549, short_description: 'Maxwell flagship', benchmark_score_gpu: 5200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-970', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 900', model: 'GTX 970', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 145, release_year: 2014, msrp: 329, short_description: 'Maxwell best-seller (3.5GB controversy)', benchmark_score_gpu: 4600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-960', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 900', model: 'GTX 960', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2015, msrp: 199, short_description: 'Maxwell mid-range', benchmark_score_gpu: 3400, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-950', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 900', model: 'GTX 950', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 90, release_year: 2015, msrp: 159, short_description: 'Budget Maxwell', benchmark_score_gpu: 2800, recommended_ram_min: 4, recommended_ram_recommended: 4 },

  // --- 2016: GeForce 10 Series (Pascal) ---
  { id: 'gpu-gtx-1080ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1080 Ti', vram: 11, vram_type: 'GDDR5X', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2017, msrp: 699, short_description: 'Pascal legendary flagship', benchmark_score_gpu: 10500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1080', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1080', vram: 8, vram_type: 'GDDR5X', interface_type: 'PCIe 3.0', tdp: 180, release_year: 2016, msrp: 599, short_description: 'Pascal flagship', benchmark_score_gpu: 8800, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1070ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1070 Ti', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 180, release_year: 2017, msrp: 449, short_description: 'Near-1080 performance', benchmark_score_gpu: 8200, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1070', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1070', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 150, release_year: 2016, msrp: 379, short_description: 'Pascal 1440p champion', benchmark_score_gpu: 7200, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1060-6gb', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1060 6GB', vram: 6, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2016, msrp: 249, short_description: 'Pascal best-seller 1080p', benchmark_score_gpu: 5500, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-1060-3gb', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1060 3GB', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2016, msrp: 199, short_description: 'Budget Pascal', benchmark_score_gpu: 4800, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-1050ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1050 Ti', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 75, release_year: 2016, msrp: 139, short_description: 'No power connector budget card', benchmark_score_gpu: 3500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-1050', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 10', model: 'GTX 1050', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 75, release_year: 2016, msrp: 109, short_description: 'Ultra-budget Pascal', benchmark_score_gpu: 2800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2018-2019: GeForce 16 Series (Turing without RT) ---
  { id: 'gpu-gtx-1660ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 16', model: 'GTX 1660 Ti', vram: 6, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2019, msrp: 279, short_description: 'Turing without RTX', benchmark_score_gpu: 8000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1660s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 16', model: 'GTX 1660 Super', vram: 6, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 125, release_year: 2019, msrp: 229, short_description: 'Budget classic without RTX', benchmark_score_gpu: 8500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-gtx-1660', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 16', model: 'GTX 1660', vram: 6, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2019, msrp: 219, short_description: 'Budget Turing', benchmark_score_gpu: 7200, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-1650s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 16', model: 'GTX 1650 Super', vram: 4, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 100, release_year: 2019, msrp: 159, short_description: 'Entry GDDR6 card', benchmark_score_gpu: 6000, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-gtx-1650', type: 'gpu', brand: 'NVIDIA', family: 'GeForce GTX 16', model: 'GTX 1650', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 75, release_year: 2019, msrp: 149, short_description: 'Ultra budget no power needed', benchmark_score_gpu: 4800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2018-2019: GeForce RTX 20 Series (Turing) ---
  { id: 'gpu-rtx-2080ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2080 Ti', vram: 11, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2018, msrp: 1199, short_description: 'First RTX flagship', benchmark_score_gpu: 14000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2080s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2080 Super', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2019, msrp: 699, short_description: 'Refreshed RTX 2080', benchmark_score_gpu: 12500, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2080', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2080', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 215, release_year: 2018, msrp: 699, short_description: 'First-gen RTX high-end', benchmark_score_gpu: 11500, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2070s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2070 Super', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 215, release_year: 2019, msrp: 499, short_description: 'Refreshed RTX 2070', benchmark_score_gpu: 11000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2070', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2070', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 175, release_year: 2018, msrp: 499, short_description: 'First-gen RTX mid-high', benchmark_score_gpu: 10000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2060s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2060 Super', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 175, release_year: 2019, msrp: 399, short_description: 'Refreshed RTX 2060', benchmark_score_gpu: 9500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-2060', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 20', model: 'RTX 2060', vram: 6, vram_type: 'GDDR6', interface_type: 'PCIe 3.0', tdp: 160, release_year: 2019, msrp: 349, short_description: 'Entry-level RTX', benchmark_score_gpu: 8500, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2020-2021: GeForce RTX 30 Series (Ampere) ---
  { id: 'gpu-rtx-3090ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3090 Ti', vram: 24, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 450, release_year: 2022, msrp: 1999, short_description: 'Ultimate Ampere flagship', benchmark_score_gpu: 27000, recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-3090', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3090', vram: 24, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 350, release_year: 2020, msrp: 1499, short_description: 'Ampere flagship with 24GB', benchmark_score_gpu: 25000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-3080ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3080 Ti', vram: 12, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 350, release_year: 2021, msrp: 1199, short_description: 'Near-3090 for less', benchmark_score_gpu: 24000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-3080-12gb', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3080 12GB', vram: 12, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 350, release_year: 2022, msrp: 799, short_description: 'Refreshed Ampere flagship', benchmark_score_gpu: 23000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3080', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3080', vram: 10, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 320, release_year: 2020, msrp: 699, short_description: 'Legendary 4K gaming GPU', benchmark_score_gpu: 22000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3070ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3070 Ti', vram: 8, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 290, release_year: 2021, msrp: 599, short_description: 'Ampere upper mid-range', benchmark_score_gpu: 19000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3070', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3070', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 220, release_year: 2020, msrp: 499, short_description: '1440p sweet spot', benchmark_score_gpu: 18000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3060ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3060 Ti', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 200, release_year: 2020, msrp: 399, short_description: 'Best value Ampere', benchmark_score_gpu: 16000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3060', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3060', vram: 12, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 170, release_year: 2021, msrp: 329, short_description: 'Popular budget 1080p card', benchmark_score_gpu: 12000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-3050', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 30', model: 'RTX 3050', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 130, release_year: 2022, msrp: 249, short_description: 'Entry RTX with DLSS', benchmark_score_gpu: 8000, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  // --- 2022-2024: GeForce RTX 40 Series (Ada Lovelace) ---
  { id: 'gpu-rtx-4090', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4090', vram: 24, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 450, release_year: 2022, msrp: 1599, short_description: 'Ada Lovelace flagship', benchmark_score_gpu: 40000, recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-4080s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4080 Super', vram: 16, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 320, release_year: 2024, msrp: 999, short_description: 'Refreshed high-end Ada GPU', benchmark_score_gpu: 33000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-4080', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4080', vram: 16, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 320, release_year: 2022, msrp: 1199, short_description: 'Ada high-end', benchmark_score_gpu: 31000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-4070tis', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4070 Ti Super', vram: 16, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 285, release_year: 2024, msrp: 799, short_description: 'Refreshed upper mid-range Ada', benchmark_score_gpu: 28000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-4070ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4070 Ti', vram: 12, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 285, release_year: 2023, msrp: 799, short_description: 'Ada upper mid-range', benchmark_score_gpu: 26000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-4070s', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4070 Super', vram: 12, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 220, release_year: 2024, msrp: 599, short_description: '1440p champion', benchmark_score_gpu: 24000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-4070', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4070', vram: 12, vram_type: 'GDDR6X', interface_type: 'PCIe 4.0', tdp: 200, release_year: 2023, msrp: 599, short_description: 'Ada mid-range', benchmark_score_gpu: 21000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-4060ti-16gb', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4060 Ti 16GB', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 165, release_year: 2023, msrp: 499, short_description: '16GB variant for future-proofing', benchmark_score_gpu: 18500, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-4060ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4060 Ti', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 160, release_year: 2023, msrp: 399, short_description: 'Solid 1080p GPU', benchmark_score_gpu: 18000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-4060', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 40', model: 'RTX 4060', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 115, release_year: 2023, msrp: 299, short_description: 'Budget-friendly 1080p card', benchmark_score_gpu: 14000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2025: GeForce RTX 50 Series (Blackwell) ---
  { id: 'gpu-rtx-5090', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5090', vram: 32, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 575, release_year: 2025, msrp: 1999, short_description: 'Ultimate Blackwell flagship', benchmark_score_gpu: 48000, recommended_ram_min: 32, recommended_ram_recommended: 64 },
  { id: 'gpu-rtx-5080', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5080', vram: 16, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 360, release_year: 2025, msrp: 999, short_description: 'High-end Blackwell GPU', benchmark_score_gpu: 38000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-5070ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5070 Ti', vram: 16, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 300, release_year: 2025, msrp: 749, short_description: 'Upper mid-range Blackwell', benchmark_score_gpu: 32000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rtx-5070', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5070', vram: 12, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 250, release_year: 2025, msrp: 549, short_description: 'Sweet spot Blackwell', benchmark_score_gpu: 28000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-5060ti', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5060 Ti', vram: 16, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 180, release_year: 2025, msrp: 449, short_description: 'Mid-range Blackwell', benchmark_score_gpu: 23000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rtx-5060', type: 'gpu', brand: 'NVIDIA', family: 'GeForce RTX 50', model: 'RTX 5060', vram: 8, vram_type: 'GDDR7', interface_type: 'PCIe 5.0', tdp: 150, release_year: 2025, msrp: 299, short_description: 'Budget Blackwell', benchmark_score_gpu: 17000, recommended_ram_min: 8, recommended_ram_recommended: 16 },


  // ╔══════════════════════════════════════════════════════╗
  // ║                   AMD GPUs                          ║
  // ╚══════════════════════════════════════════════════════╝

  // --- 2010: Radeon HD 6000 Series (Northern Islands) ---
  { id: 'gpu-hd-6970', type: 'gpu', brand: 'AMD', family: 'Radeon HD 6000', model: 'HD 6970', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 2.1', tdp: 250, release_year: 2010, msrp: 369, short_description: 'Cayman flagship', benchmark_score_gpu: 2200, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-hd-6950', type: 'gpu', brand: 'AMD', family: 'Radeon HD 6000', model: 'HD 6950', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 2.1', tdp: 200, release_year: 2010, msrp: 299, short_description: 'Cayman high-end value', benchmark_score_gpu: 1900, recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'gpu-hd-6870', type: 'gpu', brand: 'AMD', family: 'Radeon HD 6000', model: 'HD 6870', vram: 1, vram_type: 'GDDR5', interface_type: 'PCIe 2.1', tdp: 151, release_year: 2010, msrp: 239, short_description: 'Barts XT mid-range', benchmark_score_gpu: 1600, recommended_ram_min: 4, recommended_ram_recommended: 4 },

  // --- 2012: Radeon HD 7000 Series (Southern Islands / GCN 1.0) ---
  { id: 'gpu-hd-7970', type: 'gpu', brand: 'AMD', family: 'Radeon HD 7000', model: 'HD 7970 GHz Edition', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2012, msrp: 499, short_description: 'First 28nm GPU flagship', benchmark_score_gpu: 3600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-hd-7950', type: 'gpu', brand: 'AMD', family: 'Radeon HD 7000', model: 'HD 7950', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 200, release_year: 2012, msrp: 349, short_description: 'Tahiti Pro GCN', benchmark_score_gpu: 3100, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-hd-7870', type: 'gpu', brand: 'AMD', family: 'Radeon HD 7000', model: 'HD 7870', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 175, release_year: 2012, msrp: 349, short_description: 'Pitcairn mid-range', benchmark_score_gpu: 2600, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-hd-7850', type: 'gpu', brand: 'AMD', family: 'Radeon HD 7000', model: 'HD 7850', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 130, release_year: 2012, msrp: 249, short_description: 'Budget GCN', benchmark_score_gpu: 2200, recommended_ram_min: 4, recommended_ram_recommended: 4 },

  // --- 2013-2014: Radeon R9/R7 200 Series ---
  { id: 'gpu-r9-290x', type: 'gpu', brand: 'AMD', family: 'Radeon R9 200', model: 'R9 290X', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 290, release_year: 2013, msrp: 549, short_description: 'Hawaii flagship', benchmark_score_gpu: 4200, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-290', type: 'gpu', brand: 'AMD', family: 'Radeon R9 200', model: 'R9 290', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 275, release_year: 2013, msrp: 399, short_description: 'Hawaii Pro value king', benchmark_score_gpu: 3800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-280x', type: 'gpu', brand: 'AMD', family: 'Radeon R9 200', model: 'R9 280X', vram: 3, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 250, release_year: 2013, msrp: 299, short_description: 'Rebadged HD 7970', benchmark_score_gpu: 3500, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-270x', type: 'gpu', brand: 'AMD', family: 'Radeon R9 200', model: 'R9 270X', vram: 2, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 180, release_year: 2013, msrp: 199, short_description: 'Mid-range GCN value', benchmark_score_gpu: 2700, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2015: Radeon R9 300 Series + Fury ---
  { id: 'gpu-r9-fury-x', type: 'gpu', brand: 'AMD', family: 'Radeon R9 Fury', model: 'R9 Fury X', vram: 4, vram_type: 'HBM', interface_type: 'PCIe 3.0', tdp: 275, release_year: 2015, msrp: 649, short_description: 'First HBM GPU', benchmark_score_gpu: 5500, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-390x', type: 'gpu', brand: 'AMD', family: 'Radeon R9 300', model: 'R9 390X', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 275, release_year: 2015, msrp: 429, short_description: 'Hawaii refresh with 8GB', benchmark_score_gpu: 4600, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-390', type: 'gpu', brand: 'AMD', family: 'Radeon R9 300', model: 'R9 390', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 275, release_year: 2015, msrp: 329, short_description: 'R9 290 refresh with 8GB', benchmark_score_gpu: 4200, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-r9-380', type: 'gpu', brand: 'AMD', family: 'Radeon R9 300', model: 'R9 380', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 190, release_year: 2015, msrp: 199, short_description: 'Tonga mid-range', benchmark_score_gpu: 3200, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2016-2017: Radeon RX 400/500 (Polaris) ---
  { id: 'gpu-rx-480', type: 'gpu', brand: 'AMD', family: 'Radeon RX 400', model: 'RX 480', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 150, release_year: 2016, msrp: 239, short_description: 'Polaris flagship 1080p king', benchmark_score_gpu: 5200, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-rx-470', type: 'gpu', brand: 'AMD', family: 'Radeon RX 400', model: 'RX 470', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 120, release_year: 2016, msrp: 179, short_description: 'Budget Polaris', benchmark_score_gpu: 4400, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-rx-460', type: 'gpu', brand: 'AMD', family: 'Radeon RX 400', model: 'RX 460', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 75, release_year: 2016, msrp: 109, short_description: 'Entry Polaris', benchmark_score_gpu: 2800, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  { id: 'gpu-rx-580', type: 'gpu', brand: 'AMD', family: 'Radeon RX 500', model: 'RX 580', vram: 8, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 185, release_year: 2017, msrp: 229, short_description: 'Polaris refresh best-seller', benchmark_score_gpu: 5800, recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'gpu-rx-570', type: 'gpu', brand: 'AMD', family: 'Radeon RX 500', model: 'RX 570', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 150, release_year: 2017, msrp: 169, short_description: 'Budget Polaris refresh', benchmark_score_gpu: 4800, recommended_ram_min: 4, recommended_ram_recommended: 8 },
  { id: 'gpu-rx-560', type: 'gpu', brand: 'AMD', family: 'Radeon RX 500', model: 'RX 560', vram: 4, vram_type: 'GDDR5', interface_type: 'PCIe 3.0', tdp: 80, release_year: 2017, msrp: 99, short_description: 'Entry Polaris refresh', benchmark_score_gpu: 2600, recommended_ram_min: 4, recommended_ram_recommended: 8 },

  // --- 2017: Radeon Vega ---
  { id: 'gpu-vega-64', type: 'gpu', brand: 'AMD', family: 'Radeon RX Vega', model: 'RX Vega 64', vram: 8, vram_type: 'HBM2', interface_type: 'PCIe 3.0', tdp: 295, release_year: 2017, msrp: 499, short_description: 'Vega flagship with HBM2', benchmark_score_gpu: 7800, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-vega-56', type: 'gpu', brand: 'AMD', family: 'Radeon RX Vega', model: 'RX Vega 56', vram: 8, vram_type: 'HBM2', interface_type: 'PCIe 3.0', tdp: 210, release_year: 2017, msrp: 399, short_description: 'Vega value option', benchmark_score_gpu: 6800, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2019: Radeon RX 5000 Series (RDNA 1) ---
  { id: 'gpu-rx-5700xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 5000', model: 'RX 5700 XT', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 225, release_year: 2019, msrp: 399, short_description: 'First RDNA flagship', benchmark_score_gpu: 10500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-5700', type: 'gpu', brand: 'AMD', family: 'Radeon RX 5000', model: 'RX 5700', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 180, release_year: 2019, msrp: 349, short_description: 'RDNA 1 high-end', benchmark_score_gpu: 9200, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-5600xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 5000', model: 'RX 5600 XT', vram: 6, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 150, release_year: 2020, msrp: 279, short_description: 'RDNA 1 mid-range', benchmark_score_gpu: 8200, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-5500xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 5000', model: 'RX 5500 XT', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 130, release_year: 2019, msrp: 199, short_description: 'Entry RDNA 1', benchmark_score_gpu: 5500, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  // --- 2020-2021: Radeon RX 6000 Series (RDNA 2) ---
  { id: 'gpu-rx-6950xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6950 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 335, release_year: 2022, msrp: 1099, short_description: 'RDNA 2 ultimate flagship', benchmark_score_gpu: 24000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rx-6900xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6900 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 300, release_year: 2020, msrp: 999, short_description: 'RDNA 2 flagship', benchmark_score_gpu: 22000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rx-6800xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6800 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 300, release_year: 2020, msrp: 649, short_description: 'RDNA 2 high-end', benchmark_score_gpu: 20000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6800', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6800', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 250, release_year: 2020, msrp: 579, short_description: 'RDNA 2 16GB 1440p', benchmark_score_gpu: 17500, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6750xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6750 XT', vram: 12, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 250, release_year: 2022, msrp: 549, short_description: 'RDNA 2 refresh upper mid', benchmark_score_gpu: 16000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6700xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6700 XT', vram: 12, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 230, release_year: 2021, msrp: 479, short_description: 'RDNA 2 1440p', benchmark_score_gpu: 14000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6650xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6650 XT', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 180, release_year: 2022, msrp: 399, short_description: 'RDNA 2 refresh mid-range', benchmark_score_gpu: 12000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6600xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6600 XT', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 160, release_year: 2021, msrp: 379, short_description: 'RDNA 2 1080p champion', benchmark_score_gpu: 11000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6600', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6600', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 132, release_year: 2021, msrp: 329, short_description: 'Budget RDNA 2', benchmark_score_gpu: 9500, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-6500xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 6000', model: 'RX 6500 XT', vram: 4, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 107, release_year: 2022, msrp: 199, short_description: 'Entry RDNA 2 (PCIe x4)', benchmark_score_gpu: 5500, recommended_ram_min: 8, recommended_ram_recommended: 8 },

  // --- 2022-2023: Radeon RX 7000 Series (RDNA 3) ---
  { id: 'gpu-rx-7900xtx', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7900 XTX', vram: 24, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 355, release_year: 2022, msrp: 999, short_description: 'AMD flagship RDNA 3', benchmark_score_gpu: 30000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rx-7900xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7900 XT', vram: 20, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 315, release_year: 2022, msrp: 899, short_description: 'RDNA 3 high-end', benchmark_score_gpu: 26000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rx-7900gre', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7900 GRE', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 260, release_year: 2023, msrp: 549, short_description: 'RDNA 3 value flagship', benchmark_score_gpu: 22000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-7800xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7800 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 263, release_year: 2023, msrp: 499, short_description: 'Great 1440p AMD GPU', benchmark_score_gpu: 21000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-7700xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7700 XT', vram: 12, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 245, release_year: 2023, msrp: 449, short_description: 'RDNA 3 upper mid-range', benchmark_score_gpu: 18000, recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-7600xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7600 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 150, release_year: 2024, msrp: 329, short_description: 'RDNA 3 16GB mid-range', benchmark_score_gpu: 14000, recommended_ram_min: 8, recommended_ram_recommended: 16 },
  { id: 'gpu-rx-7600', type: 'gpu', brand: 'AMD', family: 'Radeon RX 7000', model: 'RX 7600', vram: 8, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 165, release_year: 2023, msrp: 269, short_description: 'Budget 1080p AMD GPU', benchmark_score_gpu: 12000, recommended_ram_min: 8, recommended_ram_recommended: 16 },

  // --- 2025: Radeon RX 9000 Series (RDNA 4) ---
  { id: 'gpu-rx-9070xt', type: 'gpu', brand: 'AMD', family: 'Radeon RX 9000', model: 'RX 9070 XT', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 300, release_year: 2025, msrp: 549, short_description: 'RDNA 4 flagship', benchmark_score_gpu: 28000, recommended_ram_min: 16, recommended_ram_recommended: 32 },
  { id: 'gpu-rx-9070', type: 'gpu', brand: 'AMD', family: 'Radeon RX 9000', model: 'RX 9070', vram: 16, vram_type: 'GDDR6', interface_type: 'PCIe 4.0', tdp: 250, release_year: 2025, msrp: 449, short_description: 'RDNA 4 upper mid-range', benchmark_score_gpu: 23000, recommended_ram_min: 16, recommended_ram_recommended: 16 },


  // ╔══════════════════════════════════════════════════════╗
  // ║                      RAM                            ║
  // ╚══════════════════════════════════════════════════════╝

  // DDR3
  { id: 'ram-ddr3-4-1600', type: 'ram', brand: 'Generic', family: 'DDR3', model: 'DDR3 4GB 1600MHz', memory_type: 'DDR3', memory_size: 4, memory_speed: 1600, tdp: 3, release_year: 2010, msrp: 30, short_description: '4GB DDR3 1600MHz', recommended_ram_min: 4, recommended_ram_recommended: 4 },
  { id: 'ram-ddr3-8-1600', type: 'ram', brand: 'Generic', family: 'DDR3', model: 'DDR3 8GB 1600MHz', memory_type: 'DDR3', memory_size: 8, memory_speed: 1600, tdp: 3, release_year: 2011, msrp: 45, short_description: '8GB DDR3 1600MHz kit', recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'ram-ddr3-8-1866', type: 'ram', brand: 'Generic', family: 'DDR3', model: 'DDR3 8GB 1866MHz', memory_type: 'DDR3', memory_size: 8, memory_speed: 1866, tdp: 3, release_year: 2012, msrp: 55, short_description: '8GB DDR3 1866MHz kit', recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'ram-ddr3-16-1600', type: 'ram', brand: 'Generic', family: 'DDR3', model: 'DDR3 16GB 1600MHz', memory_type: 'DDR3', memory_size: 16, memory_speed: 1600, tdp: 4, release_year: 2012, msrp: 75, short_description: '16GB DDR3 1600MHz kit', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr3-16-2133', type: 'ram', brand: 'Generic', family: 'DDR3', model: 'DDR3 16GB 2133MHz', memory_type: 'DDR3', memory_size: 16, memory_speed: 2133, tdp: 4, release_year: 2014, msrp: 95, short_description: '16GB DDR3 2133MHz OC kit', recommended_ram_min: 16, recommended_ram_recommended: 16 },

  // DDR4
  { id: 'ram-ddr4-8-2400', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 8GB 2400MHz', memory_type: 'DDR4', memory_size: 8, memory_speed: 2400, tdp: 4, release_year: 2015, msrp: 35, short_description: '8GB DDR4 2400MHz kit', recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'ram-ddr4-8-3000', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 8GB 3000MHz', memory_type: 'DDR4', memory_size: 8, memory_speed: 3000, tdp: 4, release_year: 2017, msrp: 40, short_description: '8GB DDR4 3000MHz kit', recommended_ram_min: 8, recommended_ram_recommended: 8 },
  { id: 'ram-ddr4-16-2666', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 16GB 2666MHz', memory_type: 'DDR4', memory_size: 16, memory_speed: 2666, tdp: 5, release_year: 2017, msrp: 60, short_description: '16GB DDR4 2666MHz kit', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr4-16-3200', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 16GB 3200MHz', memory_type: 'DDR4', memory_size: 16, memory_speed: 3200, tdp: 5, release_year: 2020, msrp: 55, short_description: '16GB DDR4 3200MHz kit', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr4-16-3600', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 16GB 3600MHz', memory_type: 'DDR4', memory_size: 16, memory_speed: 3600, tdp: 5, release_year: 2020, msrp: 65, short_description: '16GB DDR4 3600MHz sweet spot', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr4-32-3200', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 32GB 3200MHz', memory_type: 'DDR4', memory_size: 32, memory_speed: 3200, tdp: 5, release_year: 2020, msrp: 85, short_description: '32GB DDR4 3200MHz kit', recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'ram-ddr4-32-3600', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 32GB 3600MHz', memory_type: 'DDR4', memory_size: 32, memory_speed: 3600, tdp: 5, release_year: 2021, msrp: 95, short_description: '32GB DDR4 3600MHz kit', recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'ram-ddr4-64-3200', type: 'ram', brand: 'Generic', family: 'DDR4', model: 'DDR4 64GB 3200MHz', memory_type: 'DDR4', memory_size: 64, memory_speed: 3200, tdp: 6, release_year: 2021, msrp: 180, short_description: '64GB DDR4 3200MHz workstation kit', recommended_ram_min: 64, recommended_ram_recommended: 64 },

  // DDR5
  { id: 'ram-ddr5-16-4800', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 16GB 4800MHz', memory_type: 'DDR5', memory_size: 16, memory_speed: 4800, tdp: 5, release_year: 2021, msrp: 80, short_description: '16GB DDR5 4800MHz JEDEC', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr5-16-5600', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 16GB 5600MHz', memory_type: 'DDR5', memory_size: 16, memory_speed: 5600, tdp: 5, release_year: 2022, msrp: 65, short_description: '16GB DDR5 5600MHz kit', recommended_ram_min: 16, recommended_ram_recommended: 16 },
  { id: 'ram-ddr5-32-5600', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 32GB 5600MHz', memory_type: 'DDR5', memory_size: 32, memory_speed: 5600, tdp: 5, release_year: 2022, msrp: 95, short_description: '32GB DDR5 5600MHz kit', recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'ram-ddr5-32-6000', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 32GB 6000MHz', memory_type: 'DDR5', memory_size: 32, memory_speed: 6000, tdp: 5, release_year: 2023, msrp: 110, short_description: '32GB DDR5 6000MHz kit', recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'ram-ddr5-32-6400', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 32GB 6400MHz', memory_type: 'DDR5', memory_size: 32, memory_speed: 6400, tdp: 5, release_year: 2023, msrp: 130, short_description: '32GB DDR5 6400MHz high-speed', recommended_ram_min: 32, recommended_ram_recommended: 32 },
  { id: 'ram-ddr5-64-6000', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 64GB 6000MHz', memory_type: 'DDR5', memory_size: 64, memory_speed: 6000, tdp: 7, release_year: 2023, msrp: 200, short_description: '64GB DDR5 6000MHz workstation', recommended_ram_min: 64, recommended_ram_recommended: 64 },
  { id: 'ram-ddr5-64-6400', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 64GB 6400MHz', memory_type: 'DDR5', memory_size: 64, memory_speed: 6400, tdp: 8, release_year: 2024, msrp: 220, short_description: '64GB DDR5 6400MHz for enthusiasts', recommended_ram_min: 64, recommended_ram_recommended: 64 },
  { id: 'ram-ddr5-96-6400', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 96GB 6400MHz', memory_type: 'DDR5', memory_size: 96, memory_speed: 6400, tdp: 10, release_year: 2024, msrp: 350, short_description: '96GB DDR5 for content creators', recommended_ram_min: 96, recommended_ram_recommended: 96 },
  { id: 'ram-ddr5-128-6000', type: 'ram', brand: 'Generic', family: 'DDR5', model: 'DDR5 128GB 6000MHz', memory_type: 'DDR5', memory_size: 128, memory_speed: 6000, tdp: 12, release_year: 2024, msrp: 450, short_description: '128GB DDR5 workstation kit', recommended_ram_min: 128, recommended_ram_recommended: 128 },
];

export const cpus = products.filter(p => p.type === 'cpu');
export const gpus = products.filter(p => p.type === 'gpu');
export const rams = products.filter(p => p.type === 'ram');

// Benchmark test data
export interface BenchmarkTest {
  id: string;
  cpu_id: string;
  gpu_id: string;
  ram_id: string;
  game: string;
  resolution: string;
  settings: string;
  avg_fps: number;
  min_fps: number;
  max_fps: number;
  test_date: string;
  tester_notes?: string;
}

export const benchmarkTests: BenchmarkTest[] = [
  { id: 'bt-1', cpu_id: 'cpu-r7-7800x3d', gpu_id: 'gpu-rtx-4090', ram_id: 'ram-ddr5-32-6000', game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra + RT', avg_fps: 78, min_fps: 55, max_fps: 105, test_date: '2024-06-15', tester_notes: 'DLSS Quality ON' },
  { id: 'bt-2', cpu_id: 'cpu-r7-7800x3d', gpu_id: 'gpu-rtx-4090', ram_id: 'ram-ddr5-32-6000', game: 'Cyberpunk 2077', resolution: '1440p', settings: 'Ultra + RT', avg_fps: 125, min_fps: 95, max_fps: 160, test_date: '2024-06-15', tester_notes: 'DLSS Quality ON' },
  { id: 'bt-3', cpu_id: 'cpu-i7-9700k', gpu_id: 'gpu-rtx-5080', ram_id: 'ram-ddr4-16-3200', game: 'Cyberpunk 2077', resolution: '1080p', settings: 'High', avg_fps: 95, min_fps: 68, max_fps: 120, test_date: '2024-07-01', tester_notes: 'CPU bottleneck visible' },
  { id: 'bt-4', cpu_id: 'cpu-i5-14600k', gpu_id: 'gpu-rtx-4070s', ram_id: 'ram-ddr5-16-5600', game: 'Counter-Strike 2', resolution: '1080p', settings: 'High', avg_fps: 380, min_fps: 240, max_fps: 520, test_date: '2024-05-20' },
  { id: 'bt-5', cpu_id: 'cpu-r5-7600x', gpu_id: 'gpu-rtx-4060ti', ram_id: 'ram-ddr5-16-5600', game: 'Red Dead Redemption 2', resolution: '1440p', settings: 'Ultra', avg_fps: 65, min_fps: 48, max_fps: 82, test_date: '2024-04-10' },
  { id: 'bt-6', cpu_id: 'cpu-i9-14900k', gpu_id: 'gpu-rtx-5090', ram_id: 'ram-ddr5-64-6400', game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra + RT + Path Tracing', avg_fps: 110, min_fps: 82, max_fps: 140, test_date: '2025-02-01', tester_notes: 'DLSS Frame Gen ON' },
  { id: 'bt-7', cpu_id: 'cpu-r9-7950x', gpu_id: 'gpu-rtx-4080s', ram_id: 'ram-ddr5-32-6000', game: 'Hogwarts Legacy', resolution: '1440p', settings: 'Ultra + RT', avg_fps: 88, min_fps: 62, max_fps: 115, test_date: '2024-03-15' },
  { id: 'bt-8', cpu_id: 'cpu-i5-12400f', gpu_id: 'gpu-rtx-3060', ram_id: 'ram-ddr4-16-3200', game: 'Fortnite', resolution: '1080p', settings: 'High', avg_fps: 144, min_fps: 110, max_fps: 200, test_date: '2024-01-10' },
  { id: 'bt-9', cpu_id: 'cpu-r5-5600x', gpu_id: 'gpu-rx-6700xt', ram_id: 'ram-ddr4-16-3600', game: 'Valorant', resolution: '1080p', settings: 'High', avg_fps: 420, min_fps: 300, max_fps: 550, test_date: '2024-02-20' },
  { id: 'bt-10', cpu_id: 'cpu-i7-14700k', gpu_id: 'gpu-rtx-4070ti', ram_id: 'ram-ddr5-32-6000', game: 'Starfield', resolution: '1440p', settings: 'Ultra', avg_fps: 72, min_fps: 50, max_fps: 95, test_date: '2024-04-05' },
  { id: 'bt-11', cpu_id: 'cpu-r7-9800x3d', gpu_id: 'gpu-rtx-5090', ram_id: 'ram-ddr5-32-6400', game: 'Cyberpunk 2077', resolution: '4K', settings: 'Ultra + RT + Path Tracing', avg_fps: 125, min_fps: 90, max_fps: 155, test_date: '2025-03-10', tester_notes: 'DLSS Frame Gen + Quality' },
  { id: 'bt-12', cpu_id: 'cpu-r9-9950x', gpu_id: 'gpu-rx-9070xt', ram_id: 'ram-ddr5-32-6000', game: 'Baldur\'s Gate 3', resolution: '1440p', settings: 'Ultra', avg_fps: 95, min_fps: 70, max_fps: 125, test_date: '2025-02-15' },
];

// FPS estimation engine
const resolutionScalers: Record<string, { gpu: number; cpu: number }> = {
  '1080p': { gpu: 1.0, cpu: 1.0 },
  '1440p': { gpu: 0.7, cpu: 0.95 },
  '4K': { gpu: 0.42, cpu: 0.9 },
};

const settingsFactors: Record<string, number> = {
  'Low': 1.6,
  'Medium': 1.25,
  'High': 1.0,
  'Ultra': 0.8,
  'Ultra + RT': 0.55,
  'Ultra + RT + Path Tracing': 0.35,
};

const dlssFactors: Record<string, number> = {
  'None': 1.0,
  'DLSS Quality': 1.45,
  'DLSS Balanced': 1.7,
  'DLSS Performance': 2.1,
  'FSR Quality': 1.35,
  'FSR Balanced': 1.55,
  'FSR Performance': 1.9,
};

export function estimateFPS(cpuScore: number, gpuScore: number, resolution: string, settings: string, dlss: string = 'None') {
  const res = resolutionScalers[resolution] || resolutionScalers['1080p'];
  const settFactor = settingsFactors[settings] || 1.0;
  const dlssFactor = dlssFactors[dlss] || 1.0;

  const gpuFPS = (gpuScore / 200) * res.gpu * settFactor * dlssFactor;
  const cpuFPS = (cpuScore / 150) * res.cpu;

  const estFPS = Math.min(gpuFPS, cpuFPS);
  const bottleneckSide = gpuFPS < cpuFPS ? 'gpu' : 'cpu';
  const bottleneckPercent = Math.round(100 * (1 - Math.min(gpuFPS, cpuFPS) / Math.max(gpuFPS, cpuFPS)));

  return {
    avg: Math.round(estFPS),
    min: Math.round(estFPS * 0.72),
    max: Math.round(estFPS * 1.28),
    bottleneckSide,
    bottleneckPercent,
    gpuFPS: Math.round(gpuFPS),
    cpuFPS: Math.round(cpuFPS),
  };
}
