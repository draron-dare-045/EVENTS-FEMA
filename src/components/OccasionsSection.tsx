import React, { useState } from 'react';
import { 
  Building2, 
  Mic2, 
  Flame, 
  Megaphone, 
  HeartHandshake,
  ArrowRight, 
  Check
} from 'lucide-react';
import { OCCASIONS_DATA } from '../data/femaData';

interface OccasionsSectionProps {
  onSelectOccasionQuote: (occasionTitle: string, eventTypeKey: string) => void;
  onNavigateToOccasionDetail?: (occasionId: string) => void;
}

const OCCASION_ICONS: Record<string, React.ReactNode> = {
  churches: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
  conferences: <Mic2 className="w-4 h-4 sm:w-5 sm:h-5" />,
  launches: <Flame className="w-4 h-4 sm:w-5 sm:h-5" />,
  rallies: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
  funerals: <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
};

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({
  onSelectOccasionQuote,
  onNavigateToOccasionDetail
}) => {
  const [activeOccasionId, setActiveOccasionId] = useState<string>('churches');

  const selectedOccasion = OCCASIONS_DATA.find((o) => o.id === activeOccasionId) || OCCASIONS_DATA[0];

  return (
    <section id="occasions-section" className="py-12 sm:py-20 bg-[#121212] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b-2 border-stone-800 pb-6 sm:pb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black border-2 border-stone-700 text-[#b83a24] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_#b83a24]">
              <span>Event Engineering Blueprints</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Solutions by Occasion
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed font-normal">
              Every gathering has distinct acoustic, visual, and power demands. Explore our curated event solutions designed for seamless execution across Kenya.
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Swipeable Tabs */}
        <div className="overflow-x-auto no-scrollbar flex gap-2 pb-3 mb-6 sm:hidden -mx-4 px-4">
          {OCCASIONS_DATA.map((occ) => {
            const isSelected = occ.id === activeOccasionId;
            return (
              <button
                key={occ.id}
                onClick={() => setActiveOccasionId(occ.id)}
                className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-[#b83a24] border-white text-white shadow-[3px_3px_0px_0px_#ffffff]'
                    : 'bg-stone-900 border-stone-700 text-stone-300 hover:border-stone-500'
                }`}
              >
                <span>{OCCASION_ICONS[occ.id]}</span>
                <span className="whitespace-nowrap">{occ.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop/Tablet Grid Tabs */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {OCCASIONS_DATA.map((occ) => {
            const isSelected = occ.id === activeOccasionId;
            return (
              <button
                key={occ.id}
                onClick={() => setActiveOccasionId(occ.id)}
                className={`p-4 rounded-none border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#b83a24] border-white text-white shadow-[4px_4px_0px_0px_#ffffff]'
                    : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-600 shadow-[3px_3px_0px_0px_#000000]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-none border ${isSelected ? 'bg-black border-white text-white' : 'bg-black border-stone-700 text-[#b83a24]'}`}>
                    {OCCASION_ICONS[occ.id]}
                  </div>
                  {isSelected && (
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-black border border-white text-white px-2 py-0.5 rounded-none">
                      Selected
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm leading-snug">{occ.tag}</h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Active Occasion Card */}
        <div className="bg-stone-900 border-2 border-white rounded-none shadow-[6px_6px_0px_0px_#b83a24] mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-8 lg:p-12">
            {/* Left Description */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black border-2 border-stone-700 text-[#b83a24] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_#b83a24]">
                <span>{selectedOccasion.tag}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {selectedOccasion.title}
              </h2>

              <p className="text-stone-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-5 font-normal">
                {selectedOccasion.longDesc}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#b83a24] mb-2.5">
                  Production Engineering Highlights
                </h4>
                <div className="space-y-2">
                  {selectedOccasion.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-none bg-black flex items-center justify-center shrink-0 mt-0.5 border border-stone-700">
                        <Check className="w-2.5 h-2.5 text-[#b83a24]" />
                      </div>
                      <span className="text-xs sm:text-sm text-stone-200 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onSelectOccasionQuote(selectedOccasion.title, selectedOccasion.id)}
                  className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onNavigateToOccasionDetail && (
                  <button
                    onClick={() => onNavigateToOccasionDetail(selectedOccasion.id)}
                    className="bg-black hover:bg-stone-900 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-wider py-3.5 px-5 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                  >
                    <span>View Blueprint Specs &rarr;</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-none overflow-hidden h-56 sm:h-72 lg:h-[380px] border-2 border-white shadow-[4px_4px_0px_0px_#121212] group bg-stone-900">
                <img
                  src={selectedOccasion.image}
                  alt={selectedOccasion.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20 inline-block mb-1">
                    Live Production Setup
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {selectedOccasion.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

