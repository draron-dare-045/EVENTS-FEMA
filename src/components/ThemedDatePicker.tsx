import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface ThemedDatePickerProps {
  id: string;
  value: string; // "YYYY-MM-DD" or ""
  onChange: (value: string) => void;
  placeholder?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const pad = (n: number) => String(n).padStart(2, '0');
const toISO = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;
const parseISO = (v: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  return match ? { y: +match[1], m: +match[2] - 1, d: +match[3] } : null;
};
const formatDisplay = (v: string) => {
  const p = parseISO(v);
  return p ? `${p.d} ${MONTHS[p.m].slice(0, 3)} ${p.y}` : '';
};

const useIsDesktop = () => {
  const query = '(min-width: 768px)';
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isDesktop;
};

const fieldClass =
  'w-full appearance-none bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium cursor-pointer relative flex items-center text-left';

/** The calendar itself: black panel with a red lining. */
const CalendarPanel: React.FC<{
  value: string;
  onSelect: (value: string) => void;
  className?: string;
}> = ({ value, onSelect, className = '' }) => {
  const selected = parseISO(value);
  const now = new Date();
  const today = { y: now.getFullYear(), m: now.getMonth(), d: now.getDate() };
  const [view, setView] = useState({ y: (selected ?? today).y, m: (selected ?? today).m });

  const shift = (delta: number) =>
    setView((v) => {
      const t = v.m + delta;
      return { y: v.y + Math.floor(t / 12), m: ((t % 12) + 12) % 12 };
    });

  const leading = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array<null>(leading).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];

  const navBtn =
    'p-1.5 border border-stone-700 text-white hover:border-[#b83a24] hover:text-[#b83a24] transition-colors cursor-pointer';

  return (
    <div
      role="dialog"
      aria-label="Choose event date"
      className={`bg-[#121212] border-2 border-[#b83a24] text-white ${className}`}
    >
      <div className="flex items-center justify-between px-3 py-3 border-b-2 border-[#b83a24]">
        <button type="button" onClick={() => shift(-1)} aria-label="Previous month" className={navBtn}>
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-xs font-bold uppercase tracking-widest" aria-live="polite">
          {MONTHS[view.m]} {view.y}
        </div>
        <button type="button" onClick={() => shift(1)} aria-label="Next month" className={navBtn}>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-7 mb-1">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center text-[10px] font-bold uppercase tracking-wider text-[#b83a24] py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (day === null) return <div key={`blank-${i}`} />;
            const isSelected = !!selected && selected.y === view.y && selected.m === view.m && selected.d === day;
            const isToday = today.y === view.y && today.m === view.m && today.d === day;
            return (
              <button
                type="button"
                key={day}
                onClick={() => onSelect(toISO(view.y, view.m, day))}
                aria-label={`${day} ${MONTHS[view.m]} ${view.y}`}
                aria-pressed={isSelected}
                className={`h-9 text-xs font-bold border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#b83a24] border-white text-white'
                    : isToday
                    ? 'border-[#b83a24] text-[#b83a24] hover:bg-[#b83a24] hover:text-white'
                    : 'border-transparent text-stone-200 hover:border-[#b83a24] hover:bg-stone-900'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2.5 border-t-2 border-[#b83a24] text-[11px] font-bold uppercase tracking-widest">
        <button type="button" onClick={() => onSelect('')} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
          Clear
        </button>
        <button
          type="button"
          onClick={() => onSelect(toISO(today.y, today.m, today.d))}
          className="text-[#b83a24] hover:text-white transition-colors cursor-pointer"
        >
          Today
        </button>
      </div>
    </div>
  );
};

/**
 * Date field with a themed calendar.
 * Desktop: popover under the field. Mobile: bottom sheet.
 * Keeps the same "YYYY-MM-DD" value the native date input used.
 */
export const ThemedDatePicker: React.FC<ThemedDatePickerProps> = ({
  id,
  value,
  onChange,
  placeholder = 'Select a date'
}) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (isDesktop && wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);

    const previousOverflow = document.body.style.overflow;
    if (!isDesktop) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, isDesktop]);

  const handleSelect = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`${fieldClass} ${open ? 'border-[#b83a24]' : ''}`}
      >
        <span className={value ? '' : 'text-stone-500'}>{value ? formatDisplay(value) : placeholder}</span>
        <Calendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b83a24]" />
      </button>

      {/* keeps the browser's "required" check working */}
      <input
        tabIndex={-1}
        aria-hidden="true"
        required
        value={value}
        onChange={() => {}}
        onInvalid={() => setOpen(true)}
        className="absolute left-0 bottom-0 h-px w-full opacity-0 pointer-events-none"
      />

      {open && isDesktop && (
        <div className="absolute left-0 top-full mt-2 z-50">
          <CalendarPanel value={value} onSelect={handleSelect} className="w-[20rem] shadow-[6px_6px_0px_0px_#b83a24]" />
        </div>
      )}

      {open &&
        !isDesktop &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-end">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <div className="relative w-full" style={{ paddingBottom: 'env(safe-area-inset-bottom)', background: '#121212' }}>
              <CalendarPanel value={value} onSelect={handleSelect} className="w-full border-x-0 border-b-0" />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
