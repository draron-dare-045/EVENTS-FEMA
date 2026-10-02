import React from 'react';
import { WORK } from '../data/photos';

const STATS = [
  { value: '10+', label: 'Years of Live Production Excellence' },
  { value: '100%', label: 'Power Redundancy' },
  { value: '24/7', label: 'Certified Crew' }
];

const PILLARS = [
  {
    title: 'Full In-House Crew',
    body: "Certified sound engineers, lighting designers, and riggers on our direct payroll."
  },
  {
    title: '100% Power Redundancy',
    body: "Synchronized dual silent generators with sub-second automatic transfer switches."
  },
  {
    title: '24/7 Live Monitoring',
    body: "Dedicated stage and FOH technicians present from soundcheck through final curtain."
  },
  {
    title: 'Nationwide Kenya Logistics',
    body: "Fully equipped heavy logistics fleet serving Mombasa, Kisumu, Nakuru, and all regions."
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#121212] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro: headline left, story right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-4 border-b-2 border-[#b83a24] pb-1">
              Why FEMA Events Kenya
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-[1.08]">
              Uncompromising Technical Rigor &amp; Acoustic Craft.
            </h1>
          </div>
          <p className="lg:col-span-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            FEMA Events is an elite event production house based in Nairobi, providing comprehensive Audio Visual, stage lighting, modular rigging, and backup power solutions for churches, corporates, and public institutions across Kenya. Every single rig is engineered and operated on-site by our own in-house crew — never outsourced or brokered out.
          </p>
        </div>

        {/* Image banner */}
        <div className="relative overflow-hidden border-2 border-[#121212] shadow-[8px_8px_0px_0px_#b83a24] bg-stone-900 mb-16 sm:mb-24">
          <img
            src={WORK.ledRigging}
            alt="FEMA Events technician rigging a modular LED screen wall on scaffold"
            decoding="async"
            className="w-full h-full object-cover object-[50%_35%] min-h-[280px] sm:min-h-[420px]"
          />
          <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2.5 py-1 border border-white/20">
              Engineered in Nairobi
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold max-w-2xl leading-tight mt-3">
              Over 10 Years of Live Production Excellence
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-200 font-medium max-w-2xl">
              Trusted by Kenya's foremost event producers, church ministries, and global organizations.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y-2 border-[#121212] mb-16 sm:mb-24">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 sm:py-10 text-center ${
                i > 0 ? 'border-t-2 sm:border-t-0 sm:border-l-2 border-[#121212]' : ''
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#b83a24]">{stat.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-stone-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* How we work: numbered rows instead of four boxed cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Flawless Execution Standards.
            </h2>
            <p className="text-stone-700 leading-relaxed">
              From the initial site survey and acoustic measurement to cable routing, live FOH mixing, and swift strike, our team maintains flawless execution standards.
            </p>
          </div>

          <ol className="lg:col-span-8 border-t-2 border-[#121212]">
            {PILLARS.map((pillar, i) => (
              <li
                key={pillar.title}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-7 border-b-2 border-[#121212]"
              >
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#b83a24]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-1.5">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{pillar.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
