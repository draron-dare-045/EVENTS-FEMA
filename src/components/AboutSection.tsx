import React from 'react';
import { BadgeCheck, BatteryCharging, Clock, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#121212] text-white border-t-2 border-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black border-2 border-stone-700 text-[#b83a24] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_#b83a24]">
              Why FEMA Events Kenya
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-6">
              Uncompromising Technical Rigor &amp; Acoustic Craft.
            </h1>
            <p className="text-stone-300 text-sm leading-relaxed mb-6 font-normal">
              FEMA Events is an elite event production house based in Nairobi, providing comprehensive Audio Visual, stage lighting, modular rigging, and backup power solutions for churches, corporates, and public institutions across Kenya. Every single rig is engineered and operated on-site by our own in-house crew — never outsourced or brokered out.
            </p>
            <p className="text-stone-300 text-sm leading-relaxed mb-8 font-normal">
              From the initial site survey and acoustic measurement to cable routing, live FOH mixing, and swift strike, our team maintains flawless execution standards.
            </p>

            {/* Core 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-stone-900 p-5 rounded-none border-2 border-stone-700 shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 rounded-none bg-black border border-stone-700 flex items-center justify-center mb-3">
                  <BadgeCheck className="w-5 h-5 text-[#b83a24]" />
                </div>
                <h2 className="font-serif font-bold text-sm text-white mb-1">Full In-House Crew</h2>
                <p className="text-xs text-stone-300 leading-snug font-normal">
                  Certified sound engineers, lighting designers, and riggers on our direct payroll.
                </p>
              </div>

              <div className="bg-stone-900 p-5 rounded-none border-2 border-stone-700 shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 rounded-none bg-black border border-stone-700 flex items-center justify-center mb-3">
                  <BatteryCharging className="w-5 h-5 text-[#b83a24]" />
                </div>
                <h2 className="font-serif font-bold text-sm text-white mb-1">100% Power Redundancy</h2>
                <p className="text-xs text-stone-300 leading-snug font-normal">
                  Synchronized dual silent generators with sub-second automatic transfer switches.
                </p>
              </div>

              <div className="bg-stone-900 p-5 rounded-none border-2 border-stone-700 shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 rounded-none bg-black border border-stone-700 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-[#b83a24]" />
                </div>
                <h2 className="font-serif font-bold text-sm text-white mb-1">24/7 Live Monitoring</h2>
                <p className="text-xs text-stone-300 leading-snug font-normal">
                  Dedicated stage and FOH technicians present from soundcheck through final curtain.
                </p>
              </div>

              <div className="bg-stone-900 p-5 rounded-none border-2 border-stone-700 shadow-[4px_4px_0px_0px_#000000]">
                <div className="w-10 h-10 rounded-none bg-black border border-stone-700 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#b83a24]" />
                </div>
                <h2 className="font-serif font-bold text-sm text-white mb-1">Nationwide Kenya Logistics</h2>
                <p className="text-xs text-stone-300 leading-snug font-normal">
                  Fully equipped heavy logistics fleet serving Mombasa, Kisumu, Nakuru, and all regions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-none overflow-hidden border-2 border-white shadow-[6px_6px_0px_0px_#b83a24] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80"
                alt="FEMA Events certified production crew rigging LED screens, sound and lighting for an event in Kenya"
                decoding="async"
                className="w-full h-full object-cover min-h-[420px]"
              />
              <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 bg-[#b83a24]"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2 py-0.5 border border-white/20">
                    Engineered in Nairobi
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  Over 10 Years of Live Production Excellence
                </h3>
                <p className="text-xs text-stone-200 mt-1 font-medium">
                  Trusted by Kenya's foremost event producers, church ministries, and global organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

