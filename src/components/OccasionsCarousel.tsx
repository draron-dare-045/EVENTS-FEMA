import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Building2, 
  Mic2, 
  Flame, 
  Megaphone, 
  HeartHandshake
} from 'lucide-react';
import { OCCASIONS_DATA } from '../data/femaData';

interface OccasionsCarouselProps {
  onSelectOccasionQuote: (occasionTitle: string, eventTypeKey: string) => void;
  onExploreOccasionSpecs: (occasionId: string) => void;
}

const OCCASION_ICONS: Record<string, React.ReactNode> = {
  churches: <Building2 className="w-4 h-4" />,
  conferences: <Mic2 className="w-4 h-4" />,
  launches: <Flame className="w-4 h-4" />,
  rallies: <Megaphone className="w-4 h-4" />,
  funerals: <HeartHandshake className="w-4 h-4" />
};

export const OccasionsCarousel: React.FC<OccasionsCarouselProps> = ({
  onSelectOccasionQuote,
  onExploreOccasionSpecs
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activeOccasion = OCCASIONS_DATA[currentIndex];

  // Auto-advance carousel every 6.5 seconds unless user is hovering/interacting
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OCCASIONS_DATA.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? OCCASIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % OCCASIONS_DATA.length);
  };

  // Touch swipe handling for smooth mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      id="occasions-carousel-section"
      className="py-14 sm:py-20 bg-[#121212] text-white overflow-hidden relative border-y-2 border-stone-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigator Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 pb-5 border-b-2 border-stone-800 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-black border-2 border-stone-700 text-[#b83a24] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2.5 shadow-[2px_2px_0px_0px_#b83a24]">
              <span>Event Engineering Blueprints</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Solutions by Occasion
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1.5 max-w-xl font-normal leading-relaxed">
              Curated audio visual, lighting, staging, and generator setups tailored for specific crowd dynamics in Kenya.
            </p>
          </div>

          {/* Carousel Controls (Arrows + Index Counter) */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-stone-400 bg-stone-900 border border-stone-700 px-2 py-1">
              0{currentIndex + 1} <span className="text-stone-500">/ 0{OCCASIONS_DATA.length}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous occasion"
                className="w-10 h-10 rounded-none border-2 border-stone-600 bg-stone-900 hover:border-white hover:bg-black flex items-center justify-center text-white transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next occasion"
                className="w-10 h-10 rounded-none border-2 border-stone-600 bg-stone-900 hover:border-white hover:bg-black flex items-center justify-center text-white transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Horizontal Tab Bar */}
        <div className="overflow-x-auto no-scrollbar flex gap-2.5 pb-4 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {OCCASIONS_DATA.map((occ, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={occ.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border-2 ${
                  isCurrent
                    ? 'bg-[#b83a24] text-white border-white shadow-[3px_3px_0px_0px_#ffffff]'
                    : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-black border-stone-700'
                }`}
              >
                <span className={isCurrent ? 'text-white' : 'text-[#b83a24]'}>
                  {OCCASION_ICONS[occ.id]}
                </span>
                <span className="whitespace-nowrap">{occ.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Active Occasion Featured Card */}
        <div 
          className="relative bg-stone-900 border-2 border-stone-700 rounded-none overflow-hidden shadow-[8px_8px_0px_0px_#000000]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOccasion.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-8 lg:p-10 items-center"
            >
              {/* Left Column: text, highlights & recommended kit */}
              <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  {/* Category Pill */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white bg-[#b83a24] border border-black px-3 py-1 rounded-none shadow-[2px_2px_0px_0px_#000000]">
                      {activeOccasion.tag}
                    </span>
                  </div>

                  {/* Main Event Title */}
                  <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-snug sm:leading-tight">
                    {activeOccasion.title}
                  </h3>

                  {/* Minimized description */}
                  <p className="text-stone-300 text-xs sm:text-sm font-normal leading-relaxed mb-4 sm:mb-5">
                    {activeOccasion.shortDesc}
                  </p>

                  {/* Production Highlights */}
                  <div className="mb-6">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      Production Highlights:
                    </span>
                    <div className="space-y-1.5 sm:space-y-2">
                      {activeOccasion.highlights.slice(0, 4).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-200">
                          <Check className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                          <span className="leading-snug text-[11px] sm:text-xs font-normal">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => onSelectOccasionQuote(activeOccasion.title, activeOccasion.id)}
                    className="w-full bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-5 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onExploreOccasionSpecs(activeOccasion.id)}
                    className="w-full border-2 border-stone-600 bg-black hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-wider py-3.5 px-4 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center text-center"
                  >
                    <span>View Blueprint Specs</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live picture for the event */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-none overflow-hidden h-52 sm:h-72 lg:h-[380px] border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] group bg-black">
                  <img
                    src={activeOccasion.image}
                    alt={`${activeOccasion.title} - event sound, LED screens and staging in Kenya`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#121212] opacity-30"></div>
                  
                  {/* Image Overlay Caption */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/90 p-2.5 border border-stone-700">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#b83a24] block mb-0.5">
                      Live Kenyan Deployment
                    </span>
                    <p className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-1">
                      {activeOccasion.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2 pb-4 pt-1">
            {OCCASIONS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all cursor-pointer border border-black rounded-none ${
                  i === currentIndex ? 'w-8 bg-[#b83a24]' : 'w-3 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

