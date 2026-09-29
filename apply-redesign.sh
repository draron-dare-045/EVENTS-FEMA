#!/usr/bin/env bash
set -e

# Run this from inside your EVENTS-FEMA project root.
# It rewrites 5 files: Navbar, Footer, MobileBottomNav, AboutSection, OurWorkSection.

echo "Writing src/components/Navbar.tsx ..."
cat > src/components/Navbar.tsx << 'EOF_NAVBAR_TSX'
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight, 
  MessageSquare, 
  ShieldCheck, 
  Monitor, 
  Sparkles, 
  Speaker, 
  Layers, 
  Flame, 
  Zap,
  Calculator
} from 'lucide-react';
import { PageView } from '../types';
import { FemaLogo, SHOW_LOGO } from './FemaLogo';

interface NavbarProps {
  activeView: PageView;
  setActiveView: (view: PageView) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenQuote: (initialService?: string) => void;
  onSelectEquipmentCategory?: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onNavigateToSection,
  onOpenQuote,
  onSelectEquipmentCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (view: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    setActiveView(view);
    if (sectionId) {
      setTimeout(() => onNavigateToSection(sectionId), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDisciplineClick = (catId: string) => {
    setMobileMenuOpen(false);
    if (onSelectEquipmentCategory) {
      onSelectEquipmentCategory(catId);
    } else {
      setActiveView('equipment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b-2 ${
          scrolled ? 'border-[#b83a24] shadow-[0px_4px_0px_0px_#121212]' : 'border-stone-200'
        } text-[#121212]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo - Scalable Transparent SVG */}
          {SHOW_LOGO && (
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer py-1"
            aria-label="FEMA Events Home"
          >
            <FemaLogo className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-[1.02]" />
          </button>
          )}

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-7 text-sm font-bold tracking-wide uppercase">
            <button
              id="nav-link-home" aria-label="Home - FEMA Events audio visual hire in Kenya" aria-current={activeView === 'home' ? 'page' : undefined}
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer py-1 ${
                activeView === 'home'
                  ? 'text-[#b83a24] border-b-2 border-[#b83a24]'
                  : 'text-stone-600 hover:text-[#b83a24]'
              }`}
            >
              Home
            </button>
            
            <button
              id="nav-link-equipment" aria-label="Equipment - LED screens, sound, lighting and staging for hire" aria-current={activeView === 'equipment' ? 'page' : undefined}
              onClick={() => handleNavClick('equipment', 'equipment-section')}
              className={`transition-colors cursor-pointer py-1 ${
                activeView === 'equipment'
                  ? 'text-[#b83a24] border-b-2 border-[#b83a24]'
                  : 'text-stone-600 hover:text-[#b83a24]'
              }`}
            >
              Equipment
            </button>
            
            <button
              id="nav-link-occasions" aria-label="Occasions - AV solutions for crusades, summits and launches" aria-current={activeView === 'occasions' ? 'page' : undefined}
              onClick={() => handleNavClick('occasions', 'occasions-section')}
              className={`transition-colors cursor-pointer py-1 ${
                activeView === 'occasions'
                  ? 'text-[#b83a24] border-b-2 border-[#b83a24]'
                  : 'text-stone-600 hover:text-[#b83a24]'
              }`}
            >
              Occasions
            </button>
            
            <button
              id="nav-link-our-work" aria-label="Our Work - event production case studies in Kenya" aria-current={activeView === 'our-work' ? 'page' : undefined}
              onClick={() => handleNavClick('our-work', 'our-work-section')}
              className={`transition-colors cursor-pointer py-1 ${
                activeView === 'our-work'
                  ? 'text-[#b83a24] border-b-2 border-[#b83a24]'
                  : 'text-stone-600 hover:text-[#b83a24]'
              }`}
            >
              Our Work
            </button>
            
            <button
              id="nav-link-about" aria-label="About - the certified FEMA Events production crew" aria-current={activeView === 'about' ? 'page' : undefined}
              onClick={() => handleNavClick('about', 'about-section')}
              className={`transition-colors cursor-pointer py-1 ${
                activeView === 'about'
                  ? 'text-[#b83a24] border-b-2 border-[#b83a24]'
                  : 'text-stone-600 hover:text-[#b83a24]'
              }`}
            >
              About
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              id="nav-phone-link" aria-label="0722 541 214 - chat with FEMA Events on WhatsApp"
              href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20AV%20equipment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-bold uppercase tracking-wider text-stone-700 hover:text-[#b83a24] transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#b83a24]" />
              0722 541 214
            </a>
            <button
              id="nav-quote-btn" aria-label="Book Equipment - request an AV hire quote from FEMA Events"
              onClick={() => onOpenQuote()}
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-none border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              Book Equipment
            </button>
          </div>

          {/* Mobile Right Controls: Fast Call Button + Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+254722541214"
              aria-label="Call FEMA Events"
              className="w-10 h-10 rounded-none bg-white border-2 border-stone-300 hover:border-[#b83a24] text-[#121212] flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_#b83a24] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
            </a>

            <button
              id="nav-menu-toggle-btn"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-none bg-[#b83a24] border-2 border-[#121212] text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_#121212] focus:outline-none cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white border-b-4 border-[#b83a24] flex flex-col justify-between pt-20 pb-8 px-5 overflow-y-auto">
          <div>
            {/* Quick Header in Sheet */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-stone-200 mb-5">
              {SHOW_LOGO && <FemaLogo id="mobile-menu-logo" className="h-8 w-auto" />}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="ml-auto text-stone-600 hover:text-[#121212] p-1 border-2 border-stone-300 rounded-none bg-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Primary Page Navigation */}
            <div className="space-y-2.5 mb-6">
              {[
                { id: 'home', label: 'Home Page', desc: 'Main showcase & fast booking' },
                { id: 'equipment', label: 'Equipment & Inventory', desc: 'LEDs, Sound, Lighting, Stages, Gensets' },
                { id: 'occasions', label: 'Occasions & Solutions', desc: 'Crusades, Summits, Launches, Rallies' },
                { id: 'our-work', label: 'Our Work & Case Studies', desc: 'Live event proof & photo galleries' },
                { id: 'about', label: 'About FEMA Events', desc: 'Certified crew, lab & 4 pillars' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id as PageView)}
                  className={`w-full text-left p-3.5 rounded-none border-2 transition-all flex items-center justify-between cursor-pointer ${
                    activeView === link.id
                      ? 'bg-[#b83a24] text-white border-[#121212] shadow-[3px_3px_0px_0px_#121212]'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-[#b83a24] shadow-[2px_2px_0px_0px_#121212]'
                  }`}
                >
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider block">{link.label}</span>
                    <span className="text-[11px] font-normal text-stone-500">{link.desc}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 shrink-0 text-stone-400" />
                </button>
              ))}
            </div>

            {/* Quick Equipment Shortcuts */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500 block mb-2.5">
                Quick Rig Disciplines:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'led-screens', label: 'LED Screens', icon: <Monitor className="w-3.5 h-3.5 text-[#b83a24]" /> },
                  { id: 'sound-audio', label: 'Sound Audio', icon: <Speaker className="w-3.5 h-3.5 text-[#b83a24]" /> },
                  { id: 'lighting', label: 'Lighting Rigs', icon: <Sparkles className="w-3.5 h-3.5 text-[#b83a24]" /> },
                  { id: 'stages', label: 'Stage Decks', icon: <Layers className="w-3.5 h-3.5 text-[#b83a24]" /> },
                  { id: 'pyrotechnics', label: 'Pyrotechnics', icon: <Flame className="w-3.5 h-3.5 text-[#b83a24]" /> },
                  { id: 'generators', label: 'Genset Power', icon: <Zap className="w-3.5 h-3.5 text-[#b83a24]" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleDisciplineClick(item.id)}
                    className="bg-white hover:bg-stone-100 border-2 border-stone-200 hover:border-[#b83a24] rounded-none p-2.5 text-left flex items-center gap-2 text-xs font-bold text-stone-700 cursor-pointer shadow-[2px_2px_0px_0px_#121212]"
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs at bottom of Mobile Drawer */}
          <div className="pt-4 border-t-2 border-stone-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-none border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Gear / Inquire</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20am%20inquiring%20via%20the%20mobile%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-none border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+254722541214"
                className="bg-white border-2 border-stone-300 hover:border-[#121212] text-stone-700 hover:text-[#121212] text-xs font-bold uppercase tracking-wider py-3 rounded-none shadow-[2px_2px_0px_0px_#121212] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2 text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#b83a24]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
EOF_NAVBAR_TSX

echo "Writing src/components/Footer.tsx ..."
cat > src/components/Footer.tsx << 'EOF_FOOTER_TSX'
import React from 'react';
import { PhoneCall, Mail, MapPin, MessageSquare } from 'lucide-react';
import { PageView } from '../types';
import { FemaLogo, SHOW_LOGO } from './FemaLogo';

interface FooterProps {
  onNavigateView: (view: PageView, sectionId?: string) => void;
  onSelectEquipmentCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateView,
  onSelectEquipmentCategory
}) => {
  return (
    <footer className="bg-white text-stone-600 text-sm pt-14 pb-24 md:pb-10 border-t-4 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
        {/* Col 1: About */}
        <div>
          {SHOW_LOGO && (
          <div className="mb-4">
            <FemaLogo id="footer-fema-logo" className="h-10 sm:h-11 w-auto" />
          </div>
          )}
          <p className="text-xs leading-relaxed text-stone-600 mb-4 font-normal">
            Full-spectrum Audio Visual production, concert audio, high-definition LED screens, stage lighting, and backup power rentals across Kenya.
          </p>
          <div className="text-xs text-stone-700 flex items-center gap-2 font-bold uppercase tracking-wider bg-stone-100 border border-stone-300 px-3 py-1.5 inline-flex">
            <span className="w-2 h-2 bg-emerald-600"></span>
            Certified Production Crew
          </div>
        </div>

        {/* Col 2: Sitemap */}
        <div>
          <h2 className="text-[#121212] text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-200 pb-1 font-sans">
            Sitemap
          </h2>
          <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <li>
              <button
                id="footer-nav-home" aria-label="Home - FEMA Events audio visual hire"
                onClick={() => onNavigateView('home')}
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-equipment" aria-label="Equipment & Inventory - AV equipment hire catalogue"
                onClick={() => onNavigateView('equipment', 'equipment-section')}
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Equipment &amp; Inventory</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-occasions" aria-label="Occasions & Bundles - event AV packages for Kenya"
                onClick={() => onNavigateView('occasions', 'occasions-section')}
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Occasions &amp; Bundles</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-our-work" aria-label="Our Work & Case Studies - FEMA Events portfolio"
                onClick={() => onNavigateView('our-work', 'our-work-section')}
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">Our Work &amp; Case Studies</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-about" aria-label="About Us - the FEMA Events crew and warehouse"
                onClick={() => onNavigateView('about', 'about-section')}
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left flex items-center group cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">About Us</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-quote" aria-label="Request a Quote - get an AV hire quote"
                onClick={() => onNavigateView('home', 'quote-section')}
                className="hover:text-[#121212] text-[#b83a24] transition-colors text-left flex items-center group cursor-pointer font-bold"
              >
                <span className="group-hover:translate-x-1 transition-transform">Request a Quote &rarr;</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h2 className="text-[#121212] text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-200 pb-1 font-sans">
            Services &amp; Rigs
          </h2>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <button
                onClick={() => {
                  onNavigateView('equipment', 'equipment-section');
                  onSelectEquipmentCategory?.('led-screens');
                }}
                aria-label="LED Screens & Displays - LED screen hire in Nairobi"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
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
                aria-label="Stage & Mood Lighting - stage lighting hire in Nairobi"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
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
                aria-label="Concert Sound & Audio - sound system hire in Nairobi"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
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
                aria-label="Stages & Platforms - modular stage hire in Nairobi"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
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
                aria-label="Pyrotechnics & SFX - special effects hire in Kenya"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
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
                aria-label="Generators & Power - event generator hire in Nairobi"
                className="hover:text-[#b83a24] text-stone-600 transition-colors text-left cursor-pointer"
              >
                Generators &amp; Power
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div>
          <h2 className="text-[#121212] text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-stone-200 pb-1 font-sans">
            Nairobi Headquarters
          </h2>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#b83a24] shrink-0 mt-0.5" />
              <span>Mombasa Road AV Warehouse &amp; Hub, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#b83a24] shrink-0" />
              <a href="tel:+254722541214" aria-label="0722 541 214 - call FEMA Events" className="hover:text-[#121212] transition-colors font-bold">
                0722 541 214
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <a 
                href="https://wa.me/254722541214?text=Hello%20FEMA%20Events" aria-label="WhatsApp (0722 541 214) - message FEMA Events" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-600 transition-colors font-bold"
              >
                WhatsApp (0722 541 214)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#b83a24] shrink-0" />
              <a href="mailto:Info@femaevents.com" aria-label="Info@femaevents.com - email FEMA Events" className="hover:text-[#121212] transition-colors">
                Info@femaevents.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 font-medium">
        <p>&copy; {new Date().getFullYear()} FEMA Events Ltd. All rights reserved.</p>
        <p>Engineered for Live Performance &bull; Kenya &amp; East Africa</p>
      </div>
    </footer>
  );
};
EOF_FOOTER_TSX

echo "Writing src/components/MobileBottomNav.tsx ..."
cat > src/components/MobileBottomNav.tsx << 'EOF_MOBILEBOTTOMNAV_TSX'
import React from 'react';
import { Home, Layers, Calendar, Award, PhoneCall } from 'lucide-react';
import { PageView } from '../types';

/**
 * MobileBottomNav Component (Neobrutalism)
 * 
 * Purpose:
 * Provides a mobile-first, thumb-accessible sticky bottom navigation bar (Dock)
 * on smartphones and small tablets (hidden on desktop screens).
 * Features sharp geometric corners, high contrast borders, and hard offset shadows.
 */

interface MobileBottomNavProps {
  activeView: PageView;
  onSelectView: (view: PageView) => void;
  onOpenQuote: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeView,
  onSelectView,
  onOpenQuote
}) => {
  return (
    <nav 
      id="mobile-sticky-dock"
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#b83a24] safe-area-bottom shadow-[0_-4px_0px_0px_#121212] transition-all duration-200"
    >
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {/* 1. Home Tab */}
        <button
          id="mobile-dock-home" aria-label="Home - FEMA Events Kenya" aria-current={activeView === 'home' ? 'page' : undefined}
          onClick={() => onSelectView('home')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 transition-colors cursor-pointer rounded-none ${
            activeView === 'home' ? 'text-[#b83a24]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Home</span>
          {activeView === 'home' && (
            <span className="w-4 h-1 bg-[#b83a24] rounded-none mt-0.5" />
          )}
        </button>

        {/* 2. Equipment Tab */}
        <button
          id="mobile-dock-equipment" aria-label="Gear - AV equipment for hire" aria-current={activeView === 'equipment' ? 'page' : undefined}
          onClick={() => onSelectView('equipment')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 transition-colors cursor-pointer rounded-none ${
            activeView === 'equipment' ? 'text-[#b83a24]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Gear</span>
          {activeView === 'equipment' && (
            <span className="w-4 h-1 bg-[#b83a24] rounded-none mt-0.5" />
          )}
        </button>

        {/* 3. Center Action: Fast Booking Action Button */}
        <div className="flex items-center justify-center h-full">
          <button
            id="mobile-dock-quote"
            onClick={onOpenQuote}
            className="w-12 h-12 -mt-5 rounded-none bg-[#b83a24] hover:bg-[#9b2e1b] text-white flex flex-col items-center justify-center border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            aria-label="Book AV Equipment"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="text-[9px] font-black uppercase mt-0.5 font-mono">Book</span>
          </button>
        </div>

        {/* 4. Occasions Tab */}
        <button
          id="mobile-dock-occasions" aria-label="Events - occasions we power across Kenya" aria-current={activeView === 'occasions' ? 'page' : undefined}
          onClick={() => onSelectView('occasions')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 transition-colors cursor-pointer rounded-none ${
            activeView === 'occasions' ? 'text-[#b83a24]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Events</span>
          {activeView === 'occasions' && (
            <span className="w-4 h-1 bg-[#b83a24] rounded-none mt-0.5" />
          )}
        </button>

        {/* 5. Our Work Tab */}
        <button
          id="mobile-dock-our-work" aria-label="Work - event production case studies" aria-current={activeView === 'our-work' ? 'page' : undefined}
          onClick={() => onSelectView('our-work')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 transition-colors cursor-pointer rounded-none ${
            activeView === 'our-work' ? 'text-[#b83a24]' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Award className="w-5 h-5 mb-0.5 shrink-0" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Work</span>
          {activeView === 'our-work' && (
            <span className="w-4 h-1 bg-[#b83a24] rounded-none mt-0.5" />
          )}
        </button>
      </div>
    </nav>
  );
};
EOF_MOBILEBOTTOMNAV_TSX

echo "Writing src/components/AboutSection.tsx ..."
cat > src/components/AboutSection.tsx << 'EOF_ABOUTSECTION_TSX'
import React from 'react';
import { PHOTOS } from '../data/photos';
import { BadgeCheck, BatteryCharging, Clock, MapPin } from 'lucide-react';

const PILLARS = [
  {
    icon: BadgeCheck,
    title: 'Full In-House Crew',
    body: 'Certified sound engineers, lighting designers, and riggers on our direct payroll — never outsourced or brokered out.'
  },
  {
    icon: BatteryCharging,
    title: '100% Power Redundancy',
    body: 'Synchronized dual silent generators with sub-second automatic transfer switches, so a production never loses power.'
  },
  {
    icon: Clock,
    title: '24/7 Live Monitoring',
    body: 'Dedicated stage and FOH technicians present from soundcheck through final curtain, on every single show.'
  },
  {
    icon: MapPin,
    title: 'Nationwide Kenya Logistics',
    body: 'Fully equipped heavy logistics fleet serving Mombasa, Kisumu, Nakuru, and all regions across the country.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#121212] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#121212] border-2 border-[#121212] text-[#b83a24] text-xs sm:text-sm font-bold uppercase tracking-widest mb-5 shadow-[3px_3px_0px_0px_#b83a24]">
            Why FEMA Events Kenya
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-[1.1] mb-6">
            Uncompromising Technical Rigor &amp; Acoustic Craft.
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            FEMA Events is an elite event production house based in Nairobi, providing comprehensive Audio
            Visual, stage lighting, modular rigging, and backup power solutions for churches, corporates,
            and public institutions across Kenya. Every single rig is engineered and operated on-site by
            our own in-house crew.
          </p>
        </div>

        {/* Image Showcase Banner */}
        <div className="relative rounded-none overflow-hidden border-2 border-[#121212] shadow-[8px_8px_0px_0px_#b83a24] bg-stone-900 mb-16 sm:mb-24">
          <img
            src={PHOTOS.ballroom}
            alt="FEMA Events crew installing an LED screen wall and stage decks in a hotel ballroom"
            decoding="async"
            className="w-full h-full object-cover min-h-[320px] sm:min-h-[440px]"
          />
          <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#b83a24]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b83a24] bg-black px-2.5 py-1 border border-white/20">
                Engineered in Nairobi
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold max-w-2xl leading-tight">
              Over 10 Years of Live Production Excellence
            </h2>
            <p className="text-sm sm:text-base text-stone-200 mt-2 max-w-xl font-medium">
              Trusted by Kenya's foremost event producers, church ministries, and global organizations.
            </p>
          </div>
        </div>

        {/* What sets us apart - lead-in */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            What Sets Our Crew Apart.
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            From the initial site survey and acoustic measurement to cable routing, live FOH mixing, and
            swift strike, our team maintains flawless execution standards on every single production.
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-6 sm:p-7 rounded-none border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:shadow-[6px_6px_0px_0px_#b83a24] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-none bg-[#121212] border border-[#121212] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#b83a24]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#121212] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed font-normal">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
EOF_ABOUTSECTION_TSX

echo "Writing src/components/OurWorkSection.tsx ..."
cat > src/components/OurWorkSection.tsx << 'EOF_OURWORKSECTION_TSX'
import React, { useState } from 'react';
import { FadeImage } from './FadeImage';
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
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');

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

        {/* Case Studies - every event listed, image and details alternating sides */}
        <div className="space-y-12 sm:space-y-16 mb-20">
          {CASE_STUDIES_DATA.map((cs, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={cs.id}
                className="bg-white rounded-none border-2 border-[#121212] shadow-[8px_8px_0px_0px_#121212] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 items-center">
                  {/* Image */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-none overflow-hidden h-80 sm:h-96 lg:h-[480px] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] bg-stone-900">
                      <FadeImage
                        src={cs.image}
                        alt={`${cs.title} at ${cs.venue} - event production case study by FEMA Events`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#121212] opacity-40"></div>
                      <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center bg-[#b83a24] border-2 border-black text-white font-serif font-bold text-sm shadow-[2px_2px_0px_0px_#000000]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-[#b83a24] text-white px-3 py-1 rounded-none border border-black inline-block mb-2 shadow-[2px_2px_0px_0px_#000000]">
                          {cs.highlightStat}
                        </span>
                        <p className="font-serif text-xl font-bold">{cs.title}</p>
                        <p className="text-xs text-stone-200 mt-0.5 font-medium">{cs.venue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-2">
                      <Award className="w-4 h-4" />
                      <span>{cs.tag}</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121212] mb-6 leading-tight">
                      {cs.title}
                    </h2>

                    {/* Event Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 bg-stone-100 p-5 rounded-none border-2 border-[#121212]">
                      <div className="flex items-start gap-2.5">
                        <Building className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-stone-600">Venue</span>
                          <span className="text-xs font-bold text-stone-900">{cs.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-stone-600">Duration</span>
                          <span className="text-xs font-bold text-stone-900">{cs.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Users2 className="w-4 h-4 text-[#b83a24] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-stone-600">Crowd Footfall</span>
                          <span className="text-xs font-bold text-stone-900">{cs.crowdSize}</span>
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
                        {cs.equipmentUsed.map((eq, eIdx) => (
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
                        "{cs.quote}"
                      </p>
                      <p className="text-[11px] font-bold text-[#b83a24] uppercase tracking-wider">
                        — {cs.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                <FadeImage
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
EOF_OURWORKSECTION_TSX

echo "Done. All 5 files updated. Now run: npm run dev"
