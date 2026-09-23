import React from 'react';
import { PhoneCall, Mail, MapPin, MessageSquare } from 'lucide-react';
import { PageView } from '../types';
import { FemaLogo } from './FemaLogo';

interface FooterProps {
  onNavigateView: (view: PageView, sectionId?: string) => void;
  onSelectEquipmentCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateView,
  onSelectEquipmentCategory
}) => {
  return (
    <footer className="bg-black text-stone-300 text-sm pt-14 pb-24 md:pb-10 border-t-2 border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
        {/* Col 1: About */}
        <div>
          <div className="mb-4">
            <FemaLogo id="footer-fema-logo" className="h-10 sm:h-11 w-auto" />
          </div>
          <p className="text-xs leading-relaxed text-stone-300 mb-4 font-normal">
            Full-spectrum Audio Visual production, concert audio, high-definition LED screens, stage lighting, and backup power rentals across Kenya.
          </p>
          <div className="text-xs text-stone-200 flex items-center gap-2 font-bold uppercase tracking-wider bg-stone-900 border border-stone-700 px-3 py-1.5 inline-flex">
            <span className="w-2 h-2 bg-emerald-500"></span>
            Certified Production Crew
          </div>
        </div>

        {/* Col 2: Sitemap */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-800 pb-1">
            Sitemap
          </h4>
          <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <li>
              <button
                id="footer-nav-home"
                onClick={() => onNavigateView('home')}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-equipment"
                onClick={() => onNavigateView('equipment', 'equipment-section')}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Equipment &amp; Inventory</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-occasions"
                onClick={() => onNavigateView('occasions', 'occasions-section')}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Occasions &amp; Bundles</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-our-work"
                onClick={() => onNavigateView('our-work', 'our-work-section')}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Our Work &amp; Case Studies</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-about"
                onClick={() => onNavigateView('about', 'about-section')}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">About Us</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-quote"
                onClick={() => onNavigateView('home', 'quote-section')}
                className="hover:text-white text-[#b83a24] transition-colors text-left flex items-center group cursor-pointer font-bold"
              >
                <span className="group-hover:translate-x-1 transition-transform">Request a Quote &rarr;</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-800 pb-1">
            Services &amp; Rigs
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('led-screens');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                LED Screens &amp; Displays
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('lighting');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                Stage &amp; Mood Lighting
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('sound-audio');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                Concert Sound &amp; Audio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('stages');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                Stages &amp; Platforms
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('pyrotechnics');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                Pyrotechnics &amp; SFX
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('generators');
                }}
                className="hover:text-[#b83a24] text-stone-300 transition-colors text-left cursor-pointer"
              >
                Generators &amp; Power
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-800 pb-1">
            Nairobi Headquarters
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#b83a24] shrink-0 mt-0.5" />
              <span>Mombasa Road AV Warehouse &amp; Hub, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#b83a24] shrink-0" />
              <a href="tel:+254722541214" className="hover:text-white transition-colors font-bold">
                0722 541 214
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <a 
                href="https://wa.me/254722541214?text=Hello%20FEMA%20Events" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors font-bold"
              >
                WhatsApp (0722 541 214)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#b83a24] shrink-0" />
              <a href="mailto:Info@femaevents.com" className="hover:text-white transition-colors">
                Info@femaevents.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t-2 border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3 font-medium">
        <p>&copy; {new Date().getFullYear()} FEMA Events Ltd. All rights reserved.</p>
        <p>Engineered for Live Performance &bull; Kenya &amp; East Africa</p>
      </div>
    </footer>
  );
};

