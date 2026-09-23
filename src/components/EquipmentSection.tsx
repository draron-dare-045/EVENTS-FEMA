import React from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Sparkles, 
  Speaker, 
  Layers, 
  Flame, 
  Zap, 
  ArrowRight, 
  Check, 
  PhoneCall,
  MessageSquare,
  Package,
  Wrench
} from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/femaData';

interface EquipmentSectionProps {
  onEnquireItem: (itemTitle: string) => void;
  onSelectSubpage?: (subpageId: string) => void;
  selectedCategoryFilter?: string;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'led-screens': <Monitor className="w-5 h-5 text-[#b83a24]" />,
  'lighting': <Sparkles className="w-5 h-5 text-[#b83a24]" />,
  'sound-audio': <Speaker className="w-5 h-5 text-[#b83a24]" />,
  'stages': <Layers className="w-5 h-5 text-[#b83a24]" />,
  'pyrotechnics': <Flame className="w-5 h-5 text-[#b83a24]" />,
  'generators': <Zap className="w-5 h-5 text-[#b83a24]" />
};

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  onSelectSubpage
}) => {
  return (
    <section id="equipment-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      
      {/* Header Banner - Distinct Visual Identity for Equipment Catalog */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 lg:p-12 mb-10 border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black border-2 border-stone-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-4 shadow-[2px_2px_0px_0px_#b83a24]">
            <Package className="w-3.5 h-3.5" />
            <span>Master Hardware Inventory &bull; Nairobi Warehouse</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Comprehensive Event Technology &amp; Rigs
          </h1>

          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-normal mb-6">
            All equipment is 100% in-house owned, TÜV load-certified, and maintained to international touring standards. Click any discipline card below to explore calibrated gear models, technical specs, and deployment parameters.
          </p>

          {/* Quick Direct Booking Assistance Strip */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t-2 border-stone-800 text-xs font-bold uppercase tracking-wider">
            <a
              href="tel:+254722541214"
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white py-3.5 px-6 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Production Desk: 0722 541 214</span>
            </a>

            <a
              href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20AV%20equipment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white py-3.5 px-6 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Booking Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Booking Process Clarification Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-none p-5 border-2 border-[#121212] flex items-start gap-3.5 shadow-[4px_4px_0px_0px_#121212]">
          <div className="w-9 h-9 rounded-none bg-[#121212] border-2 border-[#121212] flex items-center justify-center text-white shrink-0 font-bold font-mono text-xs shadow-[2px_2px_0px_0px_#b83a24]">
            01
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#121212] mb-1 uppercase tracking-wide">Select Your Gear</h3>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Tap any equipment discipline to check model outputs, dimensions, and rig capabilities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-none p-5 border-2 border-[#121212] flex items-start gap-3.5 shadow-[4px_4px_0px_0px_#121212]">
          <div className="w-9 h-9 rounded-none bg-[#121212] border-2 border-[#121212] flex items-center justify-center text-white shrink-0 font-bold font-mono text-xs shadow-[2px_2px_0px_0px_#b83a24]">
            02
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#121212] mb-1 uppercase tracking-wide">Call or WhatsApp to Book</h3>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Tell our engineers your venue, dates, and audience size to reserve certified hardware.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-none p-5 border-2 border-[#121212] flex items-start gap-3.5 shadow-[4px_4px_0px_0px_#121212]">
          <div className="w-9 h-9 rounded-none bg-[#121212] border-2 border-[#121212] flex items-center justify-center text-white shrink-0 font-bold font-mono text-xs shadow-[2px_2px_0px_0px_#b83a24]">
            03
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#121212] mb-1 uppercase tracking-wide">Certified On-Site Delivery</h3>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Our in-house sound and video crew handles acoustic tuning, rigging, and live show operation.
            </p>
          </div>
        </div>
      </div>

      {/* Master 6-Discipline Catalog Layout - Distinct Neobrutalist Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {EQUIPMENT_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            id={`card-${item.id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05 
            }}
            onClick={() => onSelectSubpage?.(item.id)}
            className="bg-white rounded-none border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:shadow-[6px_6px_0px_0px_#b83a24] hover:border-[#b83a24] transition-all overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            {/* Top Gear Image Banner */}
            <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-stone-900 border-b-2 border-[#121212]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#121212] opacity-40"></div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-black text-white text-[11px] font-mono font-bold uppercase tracking-wider border-2 border-white shadow-[2px_2px_0px_0px_#b83a24]">
                  <span>Discipline {item.number}</span>
                </span>
                <span className="px-3 py-1 rounded-none bg-[#b83a24] text-white text-[10px] uppercase font-bold tracking-wider border-2 border-white shadow-[2px_2px_0px_0px_#000000]">
                  {item.category}
                </span>
              </div>

              {/* Title on Image bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-none bg-[#121212] border-2 border-white shadow-[2px_2px_0px_0px_#b83a24]">
                    {CATEGORY_ICONS[item.id]}
                  </div>
                  <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {item.shortDesc}
                </p>

                {/* Key Gear Highlights */}
                <div className="space-y-2 mb-5">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-none bg-[#121212] flex items-center justify-center shrink-0 mt-0.5 border border-[#121212]">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs text-stone-900 font-bold">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Available Calibrated Models Peek */}
                <div className="p-3.5 rounded-none bg-[#FAF8F5] border-2 border-stone-300 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    Available Warehouse Units &amp; Models:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((sp, spIdx) => (
                      <span 
                        key={spIdx}
                        className="text-[11px] font-bold bg-white px-2.5 py-1 rounded-none border border-[#121212] text-stone-900 shadow-[1px_1px_0px_0px_#121212]"
                      >
                        {sp.model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="pt-4 border-t-2 border-stone-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                  <span>Explore Full Specifications &amp; Rigging</span>
                  <ArrowRight className="w-4 h-4" />
                </span>

                <span className="text-[11px] text-stone-500 font-mono font-bold uppercase hidden sm:inline">
                  Click box to open &rarr;
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Direct Booking Consultation Bar */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-none bg-stone-900 border-2 border-white shadow-[3px_3px_0px_0px_#b83a24] text-[#b83a24] flex items-center justify-center mx-auto mb-3">
            <Wrench className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold mb-2">
            Need Custom Rigging or Specific Gear Counts?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-normal leading-relaxed">
            Every event setup is customized for venue dimensions and acoustic dynamics. Call our production line to reserve the exact gear you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+254722541214"
              className="w-full sm:w-auto bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-7 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 0722 541 214</span>
            </a>

            <a
              href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20AV%20equipment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-stone-900 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Production Desk</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

