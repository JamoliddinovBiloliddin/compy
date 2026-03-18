import { Product } from '@/data/products';
import { useI18n } from '@/lib/i18n';
import { Cpu, Zap, MemoryStick, Calendar, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
}

export const ProductCard = ({ product, onCompare }: ProductCardProps) => {
  const { t } = useI18n();

  const brandColor = product.brand === 'NVIDIA' ? 'text-green-500' :
    product.brand === 'AMD' ? 'text-red-500' :
    product.brand === 'Intel' ? 'text-blue-500' : 'text-muted-foreground';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className={`text-xs font-semibold uppercase tracking-wider ${brandColor}`}>
            {product.brand}
          </span>
          <h3 className="font-display font-bold text-lg text-foreground mt-0.5">
            {product.model}
          </h3>
          <p className="text-sm text-muted-foreground">{product.family}</p>
        </div>
        <span className="glass-button px-2 py-1 rounded-md text-xs font-medium">
          {product.type.toUpperCase()}
        </span>
      </div>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        {product.type === 'cpu' && (
          <>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Cpu className="w-3.5 h-3.5" />
              <span>{product.cores}C / {product.threads}T</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap className="w-3.5 h-3.5" />
              <span>{product.turbo_clock} GHz</span>
            </div>
          </>
        )}
        {product.type === 'gpu' && (
          <>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MemoryStick className="w-3.5 h-3.5" />
              <span>{product.vram}GB {product.vram_type}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap className="w-3.5 h-3.5" />
              <span>{product.tdp}W</span>
            </div>
          </>
        )}
        {product.type === 'ram' && (
          <>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MemoryStick className="w-3.5 h-3.5" />
              <span>{product.memory_size}GB {product.memory_type}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap className="w-3.5 h-3.5" />
              <span>{product.memory_speed} MHz</span>
            </div>
          </>
        )}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          <span>{product.release_year}</span>
        </div>
        {product.msrp && (
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <DollarSign className="w-3.5 h-3.5" />
            <span>${product.msrp}</span>
          </div>
        )}
      </div>

      {/* RAM recommendation */}
      <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-1.5">
        {t('common.ram')}: {product.recommended_ram_min}GB min / {product.recommended_ram_recommended}GB rec
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2">{product.short_description}</p>

      {onCompare && (
        <button
          onClick={() => onCompare(product)}
          className="mt-auto glass-button px-4 py-2 rounded-xl text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
        >
          {t('catalog.add_compare')}
        </button>
      )}
    </motion.div>
  );
};
