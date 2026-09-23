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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (view: PageView, sectionId?: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        onNavigateToSection(sectionId);
      }, 50);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#121212] border-b-2 ${
          scrolled ? 'border-[#b83a24] shadow-[0px_4px_0px_0px_#121212]' : 'border-stone-800'
        } text-white`}
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
                  : 'text-stone-300 hover:text-[#b83a24]'
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
                  : 'text-stone-300 hover:text-[#b83a24]'
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
                  : 'text-stone-300 hover:text-[#b83a24]'
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
                  : 'text-stone-300 hover:text-[#b83a24]'
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
                  : 'text-stone-300 hover:text-[#b83a24]'
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
              className="flex items-center text-sm font-bold uppercase tracking-wider text-stone-200 hover:text-[#b83a24] transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#b83a24]" />
              0722 541 214
            </a>
            <button
              id="nav-quote-btn" aria-label="Book Equipment - request an AV hire quote from FEMA Events"
              onClick={() => onOpenQuote()}
              className="bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              Book Equipment
            </button>
          </div>

          {/* Mobile Right Controls: Fast Call Button + Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+254722541214"
              aria-label="Call FEMA Events"
              className="w-10 h-10 rounded-none bg-stone-900 border-2 border-stone-700 hover:border-[#b83a24] text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_#b83a24] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              id="nav-menu-toggle-btn"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-none bg-[#b83a24] border-2 border-white text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_#ffffff] focus:outline-none cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#121212] border-b-4 border-[#b83a24] flex flex-col justify-between pt-20 pb-8 px-5 overflow-y-auto">
          <div>
            {/* Quick Header in Sheet */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-stone-800 mb-5">
              {SHOW_LOGO && <FemaLogo id="mobile-menu-logo" className="h-8 w-auto" />}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="ml-auto text-stone-300 hover:text-white p-1 border-2 border-stone-700 rounded-none bg-stone-900"
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
                      ? 'bg-[#b83a24] text-white border-white shadow-[3px_3px_0px_0px_#ffffff]'
                      : 'bg-stone-900 border-stone-800 text-stone-200 hover:border-[#b83a24] shadow-[2px_2px_0px_0px_#000000]'
                  }`}
                >
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider block">{link.label}</span>
                    <span className="text-[11px] font-normal text-stone-400">{link.desc}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 shrink-0 text-stone-400" />
                </button>
              ))}
            </div>

            {/* Quick Equipment Shortcuts */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block mb-2.5">
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
                    className="bg-stone-900 hover:bg-stone-800 border-2 border-stone-800 hover:border-[#b83a24] rounded-none p-2.5 text-left flex items-center gap-2 text-xs font-bold text-stone-200 cursor-pointer shadow-[2px_2px_0px_0px_#000000]"
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs at bottom of Mobile Drawer */}
          <div className="pt-4 border-t-2 border-stone-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-none border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Gear / Inquire</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20am%20inquiring%20via%20the%20mobile%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-none border-2 border-black shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+254722541214"
                className="bg-stone-900 border-2 border-stone-700 hover:border-white text-stone-200 hover:text-white text-xs font-bold uppercase tracking-wider py-3 rounded-none shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2 text-center"
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

