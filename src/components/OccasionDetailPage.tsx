import React from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  Check, 
  Building2, 
  Mic2, 
  Flame, 
  Megaphone, 
  HeartHandshake,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { OCCASIONS_DATA } from '../data/femaData';

interface OccasionDetailPageProps {
  occasionId: string;
  onBackToAllOccasions: () => void;
  onSelectOccasion: (id: string) => void;
  onOpenQuote: (occasionTitle: string) => void;
}

const OCCASION_ICONS: Record<string, React.ReactNode> = {
  churches: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
  conferences: <Mic2 className="w-4 h-4 sm:w-5 sm:h-5" />,
  launches: <Flame className="w-4 h-4 sm:w-5 sm:h-5" />,
  rallies: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
  funerals: <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
};

export const OccasionDetailPage: React.FC<OccasionDetailPageProps> = ({
  occasionId,
  onBackToAllOccasions,
  onSelectOccasion,
  onOpenQuote
}) => {
  const occasion = OCCASIONS_DATA.find((o) => o.id === occasionId) || OCCASIONS_DATA[0];

  const handleWhatsAppInquiry = () => {
    const text = `Hello FEMA Events Kenya, I am inquiring about production requirements for ${occasion.title}.`;
    window.open(`https://wa.me/254722541214?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation - Mobile Friendly */}
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-6 flex-wrap">
        <button
          onClick={onBackToAllOccasions}
          className="hover:text-[#b83a24] transition-colors flex items-center gap-1 cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Occasions</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="text-stone-900 font-bold truncate max-w-[200px]">{occasion.title}</span>
      </div>

      {/* Hero Banner Strip */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 lg:p-12 mb-10 border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black border-2 border-stone-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-200 mb-4 shadow-[2px_2px_0px_0px_#b83a24]">
            <span className="text-[#b83a24]">{OCCASION_ICONS[occasion.id]}</span>
            <span>{occasion.tag}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            {occasion.title}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
            {occasion.longDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onOpenQuote(occasion.title)}
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-4 px-6 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Quote for {occasion.tag}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-4 px-5 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Production Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Occasion Switcher - Horizontal Touch Swipe on Mobile */}
      <div className="mb-10 pb-4 border-b-2 border-stone-300">
        <span className="text-[11px] font-bold uppercase tracking-widest text-stone-700 mb-2.5 block">
          Switch Occasion Blueprint:
        </span>
        <div className="overflow-x-auto no-scrollbar flex gap-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {OCCASIONS_DATA.map((occ) => {
            const isCurrent = occ.id === occasion.id;
            return (
              <button
                key={occ.id}
                onClick={() => {
                  onSelectOccasion(occ.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border-2 ${
                  isCurrent
                    ? 'bg-[#b83a24] text-white border-black shadow-[3px_3px_0px_0px_#121212]'
                    : 'bg-white border-[#121212] text-stone-800 hover:bg-stone-100 shadow-[2px_2px_0px_0px_#121212]'
                }`}
              >
                <span>{OCCASION_ICONS[occ.id]}</span>
                <span className="whitespace-nowrap">{occ.tag}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Production Highlights & Recommended Kits */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
        {/* Production Highlights */}
        <div className="lg:col-span-7 bg-white rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1.5 block">
            Engineering Highlights
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] mb-4">
            Acoustic &amp; Visual Blueprint
          </h2>

          <div className="space-y-3">
            {occasion.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-none bg-stone-50 border-2 border-stone-200 text-xs sm:text-sm text-stone-900 font-medium">
                <div className="w-5 h-5 rounded-none bg-[#121212] flex items-center justify-center shrink-0 mt-0.5 border border-[#121212]">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Turnkey Event Services & Deliverables */}
        <div className="lg:col-span-5 bg-[#121212] text-white rounded-none p-6 sm:p-8 border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-[#b83a24]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24]">
                Turnkey Event Production
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">
              What We Deliver
            </h3>
            <div className="space-y-2.5 mb-6">
              {[
                'Full delivery, setup, and safe strike across Kenya',
                'Certified sound, lighting, and video operators on-site',
                'Continuous live technical supervision throughout the event',
                'Acoustic mapping tailored specifically to your venue',
                'Guaranteed generator power failover with zero downtime'
              ].map((deliverable, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200 bg-stone-900 p-3 rounded-none border border-stone-700 font-medium shadow-[1px_1px_0px_0px_#000000]">
                  <span className="w-2 h-2 bg-[#b83a24] mt-1.5 shrink-0"></span>
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenQuote(occasion.title)}
            className="w-full bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-none border-2 border-white transition-all text-center cursor-pointer shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Request Event Proposal &rarr;
          </button>
        </div>
      </div>

      {/* Custom Production Rigging & Direct Booking Consultation */}
      <div className="bg-[#FAF8F5] rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1.5 block">
              Event-Specific AV Engineering
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] mb-2">
              Custom Production Sizing for {occasion.tag}
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
              Every gathering has unique acoustic dynamics, sightlines, and power parameters. Call our technical production desk to discuss your event vision, schedule, and venue requirements.
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
              onClick={() => onOpenQuote(occasion.title)}
              className="bg-[#121212] hover:bg-black text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Field Challenges Solved */}
      {occasion.keyChallengesSolved && occasion.keyChallengesSolved.length > 0 && (
        <div className="bg-white rounded-none p-6 sm:p-8 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1.5 block">
            Field Reliability Guarantee
          </span>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212] mb-5">
            Production Challenges Engineered Away
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {occasion.keyChallengesSolved.map((chal, cIdx) => (
              <div key={cIdx} className="p-4 rounded-none bg-stone-50 border-2 border-stone-200">
                <div className="flex items-start gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#b83a24] shrink-0 mt-0.5" />
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Challenge {cIdx + 1}
                  </h4>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-normal">
                  {chal}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Venue Photos */}
      {occasion.gallery && occasion.gallery.length > 0 && (
        <div className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1 block">
              Execution Portfolio
            </span>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#121212]">
              {occasion.title} Live Deployments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {occasion.gallery.map((img, gIdx) => (
              <div
                key={gIdx}
                className="group relative rounded-none overflow-hidden h-60 sm:h-72 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] bg-stone-900"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20 inline-block mb-1">
                    Live Event {gIdx + 1}
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-bold leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-[#121212] text-white rounded-none p-6 sm:p-10 text-center border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="w-11 h-11 rounded-none bg-stone-900 border-2 border-white shadow-[2px_2px_0px_0px_#b83a24] text-[#b83a24] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold mb-2">
            Planning a {occasion.tag}?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-normal">
            Get an itemized quote with site acoustic mapping, CAD screen elevations, and dual generator power redundancy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuote(occasion.title)}
              className="w-full sm:w-auto bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-3.5 px-7 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBackToAllOccasions}
              className="w-full sm:w-auto bg-stone-900 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-3.5 px-6 rounded-none shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              All Occasion Blueprints
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

