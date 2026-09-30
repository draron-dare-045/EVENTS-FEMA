import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeImage } from './FadeImage';
import { GearLineupItem } from '../types';

interface GearLineupProps {
  /** Discipline title, passed to the quote form when a visitor asks for gear. */
  title: string;
  items?: GearLineupItem[];
  onOpenQuote: (serviceTitle: string) => void;
}

/**
 * Product catalogue strip: clean studio photos on white with the gear name,
 * type and a one-line description. Renders nothing when a discipline has no lineup.
 */
export const GearLineup: React.FC<GearLineupProps> = ({ title, items, onOpenQuote }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1 block">
            In-House Inventory
          </span>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212]">
            The Gear Lineup
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 font-normal max-w-md">
          Every unit below is owned, maintained and operated by our own crew. Tell us your venue and we will spec the right mix.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {items.map((gear, idx) => (
          <article
            key={gear.name}
            className="group bg-white rounded-none border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:shadow-[6px_6px_0px_0px_#b83a24] hover:border-[#b83a24] transition-[box-shadow,border-color] duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full bg-white border-b-2 border-[#121212] overflow-hidden">
              <FadeImage
                src={gear.image}
                alt={`${gear.name} - ${gear.type} for hire in Nairobi, Kenya by FEMA Events`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-none bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-white shadow-[2px_2px_0px_0px_#b83a24]">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b83a24] mb-1">
                {gear.type}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#121212] leading-snug mb-2">
                {gear.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mb-4">
                {gear.detail}
              </p>
              <button
                type="button"
                onClick={() => onOpenQuote(title)}
                className="mt-auto self-start inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#121212] hover:text-[#b83a24] transition-colors cursor-pointer"
              >
                <span>Request this gear</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
