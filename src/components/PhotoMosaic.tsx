import React, { useState } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { FadeImage } from './FadeImage';
import { Lightbox } from './Lightbox';
import { WORK } from '../data/photos';

interface PhotoMosaicProps {
  onViewAll: () => void;
}

interface Tile {
  image: string;
  title: string;
  tag: string;
  span: string;
}

// Bento layout: 4 columns on desktop, 2 on mobile. `grid-flow-dense` keeps it gap-free.
const TILES: Tile[] = [
  { image: WORK.healthSummit, title: 'National summit arena, KICC Nairobi', tag: 'Conferences', span: 'col-span-2 row-span-2' },
  { image: WORK.galaTent, title: 'Gala marquee with mood uplighting', tag: 'Ambience', span: 'col-span-1 row-span-2' },
  { image: WORK.churchLed, title: 'Worship night LED backdrop', tag: 'Churches', span: 'col-span-1' },
  { image: WORK.outdoorTent, title: 'Open-air screen & PA stacks', tag: 'Outdoor', span: 'col-span-1' },
  { image: WORK.femaBranded, title: 'Branded LED wall, hotel conference room', tag: 'Launches', span: 'col-span-2' },
  { image: WORK.ledRigging, title: 'Rigging a modular LED wall', tag: 'Behind the scenes', span: 'col-span-1' },
  { image: WORK.churchStage, title: 'Sanctuary stage, monitors and pulpit', tag: 'Stages', span: 'col-span-1' }
];

export const PhotoMosaic: React.FC<PhotoMosaicProps> = ({ onViewAll }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-[#121212] border-y-2 border-black" aria-labelledby="mosaic-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#b83a24] text-xs font-bold uppercase tracking-widest mb-3 border border-stone-700 shadow-[2px_2px_0px_0px_#b83a24]">
              <Camera className="w-3.5 h-3.5" />
              <span>Seen On Site</span>
            </div>
            <h2 id="mosaic-heading" className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Real rigs. Real venues. Real events.
            </h2>
            <p className="text-stone-300 text-sm mt-2 max-w-xl">
              Straight from our crew&apos;s phones: summits, sanctuaries, gala marquees and open grounds across Kenya.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 self-start md:self-auto text-xs font-bold uppercase tracking-widest text-white bg-[#b83a24] hover:bg-[#9b2e1b] border-2 border-white px-4 py-2.5 shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer"
          >
            <span>See Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[140px] sm:auto-rows-[170px] md:auto-rows-[190px] gap-3 sm:gap-4">
          {TILES.map((t, i) => (
            <button
              key={t.image}
              type="button"
              aria-label={`Enlarge photo: ${t.title}`}
              onClick={() => setOpenIndex(i)}
              className={`${t.span} group relative overflow-hidden border-2 border-white shadow-[4px_4px_0px_0px_#b83a24] bg-stone-900 cursor-zoom-in text-left`}
            >
              <FadeImage
                src={t.image}
                alt={`${t.title} - FEMA Events`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
              />
              <span className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3 max-w-[calc(100%-1rem)] bg-[#121212] border-2 border-black px-2 py-1">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#b83a24]">{t.tag}</span>
                <span className="block font-serif text-[11px] sm:text-xs font-bold text-white leading-snug line-clamp-1">{t.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={TILES.map((t) => ({ image: t.image, title: t.title, category: t.tag }))}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </section>
  );
};
