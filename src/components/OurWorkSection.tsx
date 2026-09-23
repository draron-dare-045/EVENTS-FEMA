import React, { useState } from 'react';
import { 
  Building, 
  Clock, 
  Users2, 
  Quote, 
  Check, 
  ArrowRight, 
  Award
} from 'lucide-react';
import { CASE_STUDIES_DATA, GALLERY_PHOTOS, TRUST_CLIENTS, TESTIMONIALS } from '../data/femaData';

interface OurWorkSectionProps {
  onOpenQuote: () => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ onOpenQuote }) => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('tech-expo');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');

  const activeCaseStudy = CASE_STUDIES_DATA.find((c) => c.id === selectedCaseStudyId) || CASE_STUDIES_DATA[0];

  const filteredGallery = selectedGalleryCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((g) => g.category.toLowerCase().includes(selectedGalleryCategory.toLowerCase()));

  return (
    <section id="our-work-section" className="py-24 bg-[#FAF8F5] text-[#121212] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-[#121212] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-widest mb-2 border border-black shadow-[2px_2px_0px_0px_#b83a24]">
              Proven Production Track Record
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#121212]">
              Our Work &amp; Case Studies.
            </h1>
            <p className="text-stone-700 text-sm mt-3 max-w-2xl leading-relaxed font-normal">
              Explore high-stakes corporate summits, multi-night outdoor crusades, and brand reveals powered seamlessly by FEMA Events across Kenya.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenQuote}
              className="bg-[#121212] hover:bg-[#b83a24] text-white text-xs uppercase font-bold tracking-widest px-6 py-4 rounded-none border-2 border-[#121212] shadow-[4px_4px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book Your Production</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Case Study Switcher Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {CASE_STUDIES_DATA.map((cs) => {
            const isActive = cs.id === selectedCaseStudyId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseStudyId(cs.id)}
                className={`p-6 rounded-none border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#121212] shadow-[6px_6px_0px_0px_#b83a24]'
                    : 'bg-white border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:border-black'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b83a24] block mb-1">
                    {cs.tag}
                  </span>
                  <h2 className="font-serif font-bold text-lg text-[#121212] leading-snug">
                    {cs.title}
                  </h2>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-stone-200 flex items-center justify-between text-xs text-stone-600 font-bold">
                  <span>{cs.venue.split(',')[0]}</span>
                  <span className="text-black font-mono">{cs.highlightStat}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Featured Case Study Deep Dive Card */}
        <div className="bg-white rounded-none border-2 border-[#121212] shadow-[8px_8px_0px_0px_#121212] overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-none overflow-hidden h-80 sm:h-96 lg:h-[480px] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] bg-stone-900">
                <img
                  src={activeCaseStudy.image}
                  alt={`${activeCaseStudy.title} at ${activeCaseStudy.venue} - event production case study by FEMA Events`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#b83a24] text-white px-3 py-1 rounded-none border border-black inline-block mb-2 shadow-[2px_2px_0px_0px_#000000]">
                    {activeCaseStudy.highlightStat}
                  </span>
                  <p className="font-serif text-xl font-bold">{activeCaseStudy.title}</p>
                  <p className="text-xs text-stone-200 mt-0.5 font-medium">{activeCaseStudy.venue}</p>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-2">
                <Award className="w-4 h-4" />
                <span>{activeCaseStudy.tag}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121212] mb-6 leading-tight">
                {activeCaseStudy.title}
              </h2>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-stone-100 p-5 rounded-none border-2 border-[#121212]">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-600">Venue</span>
                    <span className="text-xs font-bold text-stone-900">{activeCaseStudy.venue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-600">Duration</span>
                    <span className="text-xs font-bold text-stone-900">{activeCaseStudy.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Users2 className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-600">Crowd Footfall</span>
                    <span className="text-xs font-bold text-stone-900">{activeCaseStudy.crowdSize}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-600">Execution Score</span>
                    <span className="text-xs font-bold text-stone-900">100% Zero Glitches</span>
                  </div>
                </div>
              </div>

              {/* Equipment Rigged */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-700 mb-3 font-sans">
                  Production Rig &amp; Technology Deployed:
                </h3>
                <ul className="space-y-2.5">
                  {activeCaseStudy.equipmentUsed.map((eq, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-900 font-bold">
                      <div className="w-4 h-4 rounded-none bg-[#121212] flex items-center justify-center shrink-0 mt-0.5 border border-[#121212]">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Quote */}
              <div className="p-5 rounded-none bg-[#121212] text-white border-2 border-black shadow-[4px_4px_0px_0px_#b83a24] relative">
                <Quote className="w-6 h-6 text-[#b83a24] mb-2" />
                <p className="text-xs sm:text-sm text-stone-200 italic leading-relaxed mb-3 font-normal">
                  "{activeCaseStudy.quote}"
                </p>
                <p className="text-[11px] font-bold text-[#b83a24] uppercase tracking-wider">
                  — {activeCaseStudy.author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Photo & Field Showcase */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-1 block">
                Visual Field Capture
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                Photo &amp; Rig Gallery
              </h2>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0 overflow-x-auto pb-1">
              {['all', 'Visual Displays', 'Sound & Audio', 'Lighting', 'Stages'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all border-2 ${
                    selectedGalleryCategory === cat
                      ? 'bg-[#b83a24] text-white border-[#121212] shadow-[3px_3px_0px_0px_#121212]'
                      : 'bg-white text-stone-900 border-[#121212] hover:bg-stone-100 shadow-[2px_2px_0px_0px_#121212]'
                  }`}
                >
                  {cat === 'all' ? 'All Photos' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-none overflow-hidden h-64 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] bg-stone-900"
              >
                <img
                  src={photo.image}
                  alt={`${photo.title} - ${photo.category} for events in Kenya by FEMA Events`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20 inline-block mb-1">
                    {photo.category}
                  </span>
                  <p className="font-serif text-base font-bold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Trust & Testimonial Row */}
        <div className="bg-stone-200 rounded-none p-8 sm:p-12 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212]">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-800 mb-8">
            Trusted by Leading Corporates, Planners &amp; Ministries Across Kenya
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-90 transition-all mb-12">
            {TRUST_CLIENTS.map((client, cIdx) => (
              <span key={cIdx} className="font-serif text-lg sm:text-xl font-bold tracking-widest text-stone-900 border-b-2 border-[#b83a24]">
                {client}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white rounded-none p-6 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-800 italic mb-4 leading-relaxed font-normal">
                  "{t.text}"
                </p>
                <div className="pt-3 border-t-2 border-stone-200">
                  <p className="text-xs font-bold text-stone-900">{t.client}</p>
                  <p className="text-[11px] text-stone-600 font-medium">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

