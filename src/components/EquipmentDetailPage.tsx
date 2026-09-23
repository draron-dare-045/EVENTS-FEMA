import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  Monitor, 
  Sparkles, 
  Speaker, 
  Flame, 
  Zap,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/femaData';

interface EquipmentDetailPageProps {
  equipmentId: string;
  onBackToAllEquipment: () => void;
  onSelectEquipment: (id: string) => void;
  onOpenQuote: (serviceTitle: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'led-screens': <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />,
  'lighting': <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
  'sound-audio': <Speaker className="w-5 h-5 sm:w-6 sm:h-6" />,
  'stages': <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
  'pyrotechnics': <Flame className="w-5 h-5 sm:w-6 sm:h-6" />,
  'generators': <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
};

export const EquipmentDetailPage: React.FC<EquipmentDetailPageProps> = ({
  equipmentId,
  onBackToAllEquipment,
  onSelectEquipment,
  onOpenQuote
}) => {
  const item = EQUIPMENT_DATA.find((e) => e.id === equipmentId) || EQUIPMENT_DATA[0];

  const handleWhatsAppInquiry = () => {
    const text = `Hello FEMA Events Kenya, I am interested in inquiring about ${item.title} for an upcoming event in Kenya.`;
    window.open(`https://wa.me/254722541214?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation - Mobile Friendly */}
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-6 flex-wrap">
        <button
          onClick={onBackToAllEquipment}
          className="hover:text-[#b83a24] transition-colors flex items-center gap-1 cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Equipment</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="text-stone-900 font-bold truncate max-w-[200px]">{item.title}</span>
      </div>

      {/* Header / Hero Strip */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 lg:p-12 mb-10 border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black border-2 border-stone-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-200 mb-4 shadow-[2px_2px_0px_0px_#b83a24]">
            <span className="text-[#b83a24]">{CATEGORY_ICONS[item.id]}</span>
            <span>Discipline {item.number} &bull; {item.category}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            {item.title}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
            {item.longDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onOpenQuote(item.title)}
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-4 px-6 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Quote for {item.category.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-4 px-5 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Tech Specs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Category Switcher - Mobile Horizontal Swipe */}
      <div className="mb-10 pb-4 border-b-2 border-stone-300">
        <span className="text-[11px] font-bold uppercase tracking-widest text-stone-700 mb-2.5 block">
          Switch Equipment Discipline:
        </span>
        <div className="overflow-x-auto no-scrollbar flex gap-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {EQUIPMENT_DATA.map((cat) => {
            const isCurrent = cat.id === item.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectEquipment(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border-2 ${
                  isCurrent
                    ? 'bg-[#b83a24] text-white border-black shadow-[3px_3px_0px_0px_#121212]'
                    : 'bg-white border-[#121212] text-stone-800 hover:bg-stone-100 shadow-[2px_2px_0px_0px_#121212]'
                }`}
              >
                <span>{CATEGORY_ICONS[cat.id]}</span>
                <span className="whitespace-nowrap">{cat.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Key Features & Engineering Highlights */}
      <div className="bg-white rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1.5 block">
          Key Capabilities
        </span>
        <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212] mb-5">
          Rig Features &amp; Performance Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {item.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-none bg-[#FAF8F5] border-2 border-stone-200">
              <div className="w-5 h-5 rounded-none bg-[#121212] flex items-center justify-center shrink-0 mt-0.5 border border-[#121212]">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications Section: Responsive Mobile Cards + Desktop Table */}
      <div className="bg-white rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 pb-3 border-b-2 border-stone-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] block mb-1">
              Technical Specifications
            </span>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212]">
              Calibrated Gear Breakdown
            </h2>
          </div>
          <span className="text-[11px] text-stone-700 font-mono font-bold mt-1 sm:mt-0 uppercase">
            TÜV Certified &bull; In-House Rigging
          </span>
        </div>

        {/* Mobile View: High-density Spec Cards */}
        <div className="md:hidden space-y-3">
          {item.specs.map((spec, sIdx) => (
            <div key={sIdx} className="p-4 rounded-none bg-stone-50 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-sm">{spec.model}</h3>
                  <span className="text-[11px] text-stone-600 font-medium">{spec.type}</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-white bg-[#b83a24] px-2 py-0.5 rounded-none border border-black">
                  {spec.setup}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-300">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">{item.specs[0]?.spec1Title}</span>
                  <span className="font-bold text-stone-900">{spec.spec1Value}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">{item.specs[0]?.spec2Title}</span>
                  <span className="font-bold text-stone-900">{spec.spec2Value}</span>
                </div>
                {item.specs[0]?.spec3Title && (
                  <div className="col-span-2">
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">{item.specs[0]?.spec3Title}</span>
                    <span className="font-bold text-stone-900">{spec.spec3Value}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Full Table */}
        <div className="hidden md:block overflow-x-auto rounded-none border-2 border-[#121212]">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#121212] text-white uppercase tracking-wider">
                <th className="px-4 py-3.5 font-bold border-r border-stone-700">Model / Unit</th>
                <th className="px-4 py-3.5 font-bold border-r border-stone-700">Type</th>
                <th className="px-4 py-3.5 font-bold border-r border-stone-700">{item.specs[0]?.spec1Title}</th>
                <th className="px-4 py-3.5 font-bold border-r border-stone-700">{item.specs[0]?.spec2Title}</th>
                <th className="px-4 py-3.5 font-bold border-r border-stone-700">{item.specs[0]?.spec3Title}</th>
                <th className="px-4 py-3.5 font-bold">Deployment Setup</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-stone-200 bg-white">
              {item.specs.map((spec, sIdx) => (
                <tr key={sIdx} className="hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-stone-900 border-r border-stone-200">{spec.model}</td>
                  <td className="px-4 py-3.5 text-stone-700 border-r border-stone-200">{spec.type}</td>
                  <td className="px-4 py-3.5 text-stone-900 font-medium border-r border-stone-200">{spec.spec1Value}</td>
                  <td className="px-4 py-3.5 text-stone-900 font-medium border-r border-stone-200">{spec.spec2Value}</td>
                  <td className="px-4 py-3.5 text-stone-900 font-medium border-r border-stone-200">{spec.spec3Value}</td>
                  <td className="px-4 py-3.5 text-[#b83a24] font-bold">{spec.setup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended For Badges */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 mr-1">
            Recommended For:
          </span>
          {item.idealFor.map((useCase, uIdx) => (
            <span
              key={uIdx}
              className="text-[11px] sm:text-xs px-3 py-1 rounded-none bg-stone-100 border border-[#121212] text-stone-900 font-bold shadow-[1px_1px_0px_0px_#121212]"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Custom Configuration & Direct Booking Consultation */}
      <div className="bg-[#FAF8F5] rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1.5 block">
              Custom Venue Calibration
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] mb-2">
              Tailored Rigging &amp; Specific Unit Counts
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
              We do not force rigid packages — every event is unique. Call our sound and visual engineering desk directly to specify your exact venue dimensions, screen aspect ratios, delay towers, and power load requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="tel:+254722541214"
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 0722 541 214</span>
            </a>

            <button
              onClick={() => onOpenQuote(item.title)}
              className="bg-[#121212] hover:bg-black text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Showcase (Field Execution Gallery) */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1 block">
            Field Execution Gallery
          </span>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212]">
            Visual Showcase &amp; Live Rigging
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {item.showcaseImages.map((img, sIdx) => (
            <div
              key={sIdx}
              className="group relative rounded-none overflow-hidden h-60 sm:h-72 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] bg-stone-900"
            >
              <img
                src={img.url}
                alt={`${img.caption} - ${item.title} hire in Kenya by FEMA Events`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20 inline-block mb-1">
                  Field Capture {sIdx + 1}
                </span>
                <p className="font-serif text-xs sm:text-sm font-bold leading-snug">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 text-center border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="w-11 h-11 rounded-none bg-stone-900 border-2 border-white shadow-[2px_2px_0px_0px_#b83a24] text-[#b83a24] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold mb-2">
            Ready to Deploy {item.title}?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-normal">
            Contact our engineering desk for custom dimension calculations, acoustic site surveys, and power load verification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuote(item.title)}
              className="w-full sm:w-auto bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-7 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBackToAllEquipment}
              className="w-full sm:w-auto bg-stone-900 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              Browse All Disciplines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

