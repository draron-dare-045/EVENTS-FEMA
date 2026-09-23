import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MessageSquare, PhoneCall, Layers, Calendar } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigateView: (view: PageView, sectionId?: string, equipmentSubpage?: string) => void;
  onOpenQuote: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80'
];

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigateView, onOpenQuote }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] bg-[#121212] text-white flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden border-b-2 border-stone-800">
      {/* Automated Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`hero-slide ${idx === slideIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Mobile High-Contrast Solid Overlay for crystal clear readability */}
        <div className="absolute inset-0 bg-[#121212] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Headline - Tailored for mobile screens */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.18] sm:leading-[1.12] max-w-5xl tracking-tight mb-4 sm:mb-6">
          Elevating Live Experiences Through{' '}
          <span className="italic font-bold text-[#b83a24]">Seamless</span> Event Technology.
        </h1>

        {/* Sub-headline */}
        <p className="text-stone-300 text-sm sm:text-lg md:text-xl font-normal max-w-3xl mb-8 sm:mb-10 leading-relaxed px-2">
          Concert sound line arrays, ultra-bright P2.6 &amp; P4.8 LED screens, intelligent stage lighting, modular staging, and synchronized backup generators across Kenya.
        </p>

        {/* Action Buttons - Stacked on Mobile with 48px touch targets */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button
            id="hero-request-quote-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-none border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book AV Equipment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              id="hero-explore-equipment-btn"
              onClick={() => onNavigateView('equipment')}
              className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-700 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 sm:py-4 px-4 sm:px-6 rounded-none shadow-[3px_3px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-[#b83a24]" />
              <span>Equipment</span>
            </button>

            <button
              id="hero-explore-occasions-btn"
              onClick={() => onNavigateView('occasions', 'occasions-section')}
              className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-700 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 sm:py-4 px-4 sm:px-6 rounded-none shadow-[3px_3px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#b83a24]" />
              <span>Occasions</span>
            </button>
          </div>
        </div>

        {/* Animated Verified Numbers & Stats Section - 2x2 Grid optimized for mobile view */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-10 border-t-2 border-stone-800 w-full max-w-4xl text-left">
          <div className="bg-stone-900 p-4 sm:p-5 rounded-none border-2 border-stone-800 shadow-[3px_3px_0px_0px_#121212]">
            <div className="font-serif text-2xl sm:text-4xl font-black text-[#b83a24] flex items-baseline">
              <StatCounter target={500} suffix="+" />
            </div>
            <div className="text-stone-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold mt-1">Events Powered</div>
            <div className="text-stone-400 text-[10px] sm:text-[11px] mt-0.5">Nationwide Kenya</div>
          </div>

          <div className="bg-stone-900 p-4 sm:p-5 rounded-none border-2 border-stone-800 shadow-[3px_3px_0px_0px_#121212]">
            <div className="font-serif text-2xl sm:text-4xl font-black text-white flex items-baseline">
              <StatCounter target={4} suffix="k" />
            </div>
            <div className="text-stone-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold mt-1">4k Custom LEDs</div>
            <div className="text-stone-400 text-[10px] sm:text-[11px] mt-0.5">P2.6 &amp; P4.8 panels</div>
          </div>

          <div className="bg-stone-900 p-4 sm:p-5 rounded-none border-2 border-stone-800 shadow-[3px_3px_0px_0px_#121212]">
            <div className="font-serif text-2xl sm:text-4xl font-black text-[#b83a24] flex items-baseline">
              <StatCounter target={100} suffix="%" />
            </div>
            <div className="text-stone-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold mt-1">Power Redundancy</div>
            <div className="text-stone-400 text-[10px] sm:text-[11px] mt-0.5">Dual ATS generator sync</div>
          </div>

          <div className="bg-stone-900 p-4 sm:p-5 rounded-none border-2 border-stone-800 shadow-[3px_3px_0px_0px_#121212]">
            <div className="font-serif text-2xl sm:text-4xl font-black text-white flex items-baseline">
              <span>24/7</span>
            </div>
            <div className="text-stone-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold mt-1">Certified Crew</div>
            <div className="text-stone-400 text-[10px] sm:text-[11px] mt-0.5">In-house technicians</div>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex gap-2 mt-6 sm:mt-8">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`h-2 rounded-none border border-stone-600 transition-all cursor-pointer ${
                i === slideIndex ? 'w-8 bg-[#b83a24] border-white' : 'w-3 bg-stone-800 hover:bg-stone-700'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

