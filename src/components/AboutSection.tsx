import React from 'react';
import { WORK } from '../data/photos';

const STATS = [
  { value: '10+', label: 'Years in live production' },
  { value: '100%', label: 'In-house crew' },
  { value: '24/7', label: 'Technicians on every show' }
];

const PILLARS = [
  {
    title: 'Our Own Crew',
    body: 'Sound engineers, lighting technicians and riggers who work for us. We never outsource.'
  },
  {
    title: 'Backup Power',
    body: 'Two silent generators on standby. If one fails, the other takes over automatically.'
  },
  {
    title: 'Technician On Site',
    body: 'A technician stays at the stage and the mixing desk from soundcheck until the event ends.'
  },
  {
    title: 'Delivery Across Kenya',
    body: 'Our own trucks deliver to Mombasa, Kisumu, Nakuru and everywhere in between.'
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
              About FEMA Events
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-[1.08]">
              Sound, screens and staging you can rely on.
            </h1>
          </div>
          <p className="lg:col-span-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            We are an event production company in Nairobi. We supply sound, LED screens, lighting, staging and backup power across Kenya, and our own crew sets up and runs every show.
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
              Based in Nairobi
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold max-w-2xl leading-tight mt-3">
              Trusted by churches, companies and institutions across Kenya.
            </h2>
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
              How we run every show.
            </h2>
            <p className="text-stone-700 leading-relaxed">
              The same team handles your event from first visit to pack-down.
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
