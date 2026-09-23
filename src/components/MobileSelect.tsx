import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, X } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface MobileSelectProps {
  id: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

const fieldClass =
  'w-full appearance-none bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium cursor-pointer';

/**
 * Desktop (md and up): normal dropdown.
 * Mobile (below md): tap the field and options open in a popup sheet.
 */
export const MobileSelect: React.FC<MobileSelectProps> = ({
  id,
  title,
  value,
  onChange,
  options,
  placeholder
}) => {
  const [open, setOpen] = useState(false);
  const selectedRef = useRef<HTMLButtonElement | null>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onResize = () => {
      if (mq.matches) setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    selectedRef.current?.scrollIntoView({ block: 'center' });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      {/* Desktop: native dropdown */}
      <div className="relative hidden md:block">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className={fieldClass}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900" />
      </div>

      {/* Mobile: field that opens a popup */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={title}
        className={`${fieldClass} relative flex items-center text-left md:hidden`}
      >
        <span className={selected ? '' : 'text-stone-500'}>
          {selected ? selected.label : placeholder || 'Select'}
        </span>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900" />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] md:hidden flex items-end"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <div className="relative w-full max-h-[80vh] flex flex-col bg-white border-t-4 border-[#b83a24] shadow-[0_-6px_0px_0px_#121212]">
              <div className="flex items-center justify-between px-5 py-4 bg-[#121212] text-white shrink-0">
                <h3 className="text-xs font-bold uppercase tracking-widest">{title}</h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div
                className="overflow-y-auto overscroll-contain"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
              >
                {options.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      ref={isSelected ? selectedRef : undefined}
                      onClick={() => {
                        onChange(opt.value);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-5 py-4 text-left text-sm font-bold uppercase tracking-wider border-b border-stone-200 cursor-pointer ${
                        isSelected ? 'bg-[#121212] text-white' : 'bg-white text-stone-900 active:bg-stone-100'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#b83a24]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
