import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  image: string;
  title: string;
  category?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onChange: (next: number) => void;
}

/** Full-screen photo viewer: click a tile to open, arrows / swipe-friendly buttons / Esc to navigate. */
export const Lightbox: React.FC<LightboxProps> = ({ items, index, onClose, onChange }) => {
  const open = index !== null && items[index] !== undefined;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go, onClose]);

  if (!open || index === null) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        aria-label="Close photo"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 bg-black text-white border-2 border-white shadow-[3px_3px_0px_0px_#b83a24] flex items-center justify-center cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        aria-label="Previous photo"
        onClick={(e) => { e.stopPropagation(); go(-1); }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-black text-white border-2 border-white shadow-[3px_3px_0px_0px_#b83a24] flex items-center justify-center cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Next photo"
        onClick={(e) => { e.stopPropagation(); go(1); }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-black text-white border-2 border-white shadow-[3px_3px_0px_0px_#b83a24] flex items-center justify-center cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          key={item.image}
          src={item.image}
          alt={item.title}
          className="w-full max-h-[75vh] object-contain border-2 border-white/20 bg-stone-900"
        />
        <figcaption className="mt-4 text-white flex items-center justify-between gap-4">
          <div>
            {item.category && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20 inline-block mb-1">
                {item.category}
              </span>
            )}
            <p className="font-serif text-lg sm:text-xl font-bold">{item.title}</p>
          </div>
          <span className="font-mono text-xs text-stone-400 shrink-0">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
};
