import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { EquipmentSection } from './components/EquipmentSection';
import { EquipmentDetailPage } from './components/EquipmentDetailPage';
import { OccasionsCarousel } from './components/OccasionsCarousel';
import { OccasionsSection } from './components/OccasionsSection';
import { OccasionDetailPage } from './components/OccasionDetailPage';
import { OurWorkSection } from './components/OurWorkSection';
import { QuoteSection } from './components/QuoteSection';
import { AboutSection } from './components/AboutSection';
import { PageView } from './types';
import { 
  MessageCircle, 
  ArrowUp, 
  ArrowRight, 
  Monitor, 
  Sparkles, 
  Speaker, 
  Layers, 
  Flame, 
  Zap,
  CheckCircle2,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { EQUIPMENT_DATA } from './data/femaData';
import { useSeo } from './seo';

/**
 * Discipline Icon Map for Core Disciplines Teaser Cards
 */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'led-screens': <Monitor className="w-5 h-5 text-[#b83a24]" />,
  'lighting': <Sparkles className="w-5 h-5 text-[#b83a24]" />,
  'sound-audio': <Speaker className="w-5 h-5 text-[#b83a24]" />,
  'stages': <Layers className="w-5 h-5 text-[#b83a24]" />,
  'pyrotechnics': <Flame className="w-5 h-5 text-[#b83a24]" />,
  'generators': <Zap className="w-5 h-5 text-[#b83a24]" />
};

export default function App() {
  // Page view routing state: 'home' | 'equipment' | 'occasions' | 'our-work' | 'about'
  const [activeView, setActiveView] = useState<PageView>('home');
  
  // Dedicated subpage drilldown states
  const [selectedEquipmentSubpage, setSelectedEquipmentSubpage] = useState<string | null>(null);
  const [selectedOccasionSubpage, setSelectedOccasionSubpage] = useState<string | null>(null);
  
  // Form pre-fill state for custom quotes
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [selectedOccasionForQuote, setSelectedOccasionForQuote] = useState<string>('');
  const [selectedEquipmentFilter, setSelectedEquipmentFilter] = useState<string>('all');
  
  // Back to top floating button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO: keep <title> and meta description in sync with the visible page (no visual change)
  useSeo(activeView, selectedEquipmentSubpage, selectedOccasionSubpage);

  // Monitor scroll distance for back-to-top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Helper: Smooth scroll to any section ID on page
   */
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Helper: Open quote form with optional pre-selected service
   */
  const handleOpenQuote = (initialService?: string) => {
    if (initialService) {
      setSelectedServiceForQuote(initialService);
    }
    // Navigate to quote view or scroll to quote section on current view
    const quoteElement = document.getElementById('quote-section');
    if (quoteElement) {
      handleNavigateToSection('quote-section');
    } else {
      setActiveView('equipment');
      setSelectedEquipmentSubpage(null);
      setTimeout(() => {
        handleNavigateToSection('quote-section');
      }, 50);
    }
  };

  /**
   * Helper: Pre-fill quote with equipment and navigate to quote
   */
  const handleEnquireEquipment = (itemTitle: string) => {
    setSelectedServiceForQuote(itemTitle);
    const quoteElement = document.getElementById('quote-section');
    if (quoteElement) {
      handleNavigateToSection('quote-section');
    } else {
      setActiveView('equipment');
      setTimeout(() => {
        handleNavigateToSection('quote-section');
      }, 50);
    }
  };

  /**
   * Helper: Pre-fill quote with occasion and navigate to quote
   */
  const handleSelectOccasionQuote = (occasionTitle: string, occasionKey: string) => {
    setSelectedOccasionForQuote(occasionKey);
    setSelectedServiceForQuote(occasionTitle);
    setActiveView('occasions');
    setSelectedOccasionSubpage(null);
    setTimeout(() => {
      handleNavigateToSection('quote-section');
    }, 50);
  };

  /**
   * Helper: Navigate to dedicated equipment detail subpage
   */
  const handleSelectEquipmentCategory = (categoryId: string) => {
    setSelectedEquipmentSubpage(categoryId);
    setActiveView('equipment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Helper: Navigate to dedicated occasion detail subpage
   */
  const handleSelectOccasionSubpage = (occasionId: string) => {
    setSelectedOccasionSubpage(occasionId);
    setActiveView('occasions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
      {/* Fixed Navigation Header */}
      <Navbar
        activeView={activeView}
        setActiveView={(view) => {
          setActiveView(view);
          setSelectedEquipmentSubpage(null);
          setSelectedOccasionSubpage(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToSection={handleNavigateToSection}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        
        {/* =========================================================================
            1. HOME PAGE VIEW
            Streamlined layout: Hero -> Core Disciplines Teaser -> Occasions Carousel -> Fast CTA Strip
            (Note: Our Work & Photo Gallery live on dedicated subpages as requested)
           ========================================================================= */}
        {activeView === 'home' && (
          <>
            {/* Hero Section with Automated Background Image Transitions */}
            <Hero
              onNavigateView={(view, sectionId, equipmentSubpage) => {
                if (equipmentSubpage) {
                  setSelectedEquipmentSubpage(equipmentSubpage);
                  setActiveView('equipment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (view === 'occasions') {
                  setActiveView('occasions');
                  setSelectedOccasionSubpage(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setActiveView(view);
                  setSelectedEquipmentSubpage(null);
                  setSelectedOccasionSubpage(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              onOpenQuote={handleOpenQuote}
            />

            {/* Core Disciplines Teaser: 6 animated cards with scroll-triggered entrance linking directly to Equipment subpages */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-stone-300 pb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black text-[#b83a24] text-xs font-bold uppercase tracking-widest mb-3 border border-black shadow-[2px_2px_0px_0px_#b83a24]">
                    Core Disciplines
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#121212]">
                    Comprehensive Production Technology
                  </h2>
                  <p className="text-stone-700 text-sm mt-2 max-w-xl font-normal">
                    Six specialized disciplines maintained in Nairobi and deployed nationwide by our certified in-house crew.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => {
                      setActiveView('equipment');
                      setSelectedEquipmentSubpage(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b83a24] hover:text-[#121212] transition-colors cursor-pointer bg-stone-100 hover:bg-stone-200 border-2 border-stone-800 px-4 py-2 shadow-[2px_2px_0px_0px_#121212] active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    <span>View All Equipment Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 6 Core Discipline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {EQUIPMENT_DATA.map((eq, index) => (
                  <motion.div
                    key={eq.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ 
                      duration: 0.55, 
                      delay: index * 0.08, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => handleSelectEquipmentCategory(eq.id)}
                    className="bg-white rounded-none p-7 border-2 border-[#121212] shadow-[6px_6px_0px_0px_#121212] hover:shadow-[8px_8px_0px_0px_#b83a24] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-none bg-stone-100 border-2 border-[#121212] flex items-center justify-center mb-5 group-hover:bg-[#121212] transition-colors shadow-[2px_2px_0px_0px_#b83a24]">
                        {CATEGORY_ICONS[eq.id]}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 block mb-1">
                        Discipline {eq.number}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#121212] mb-2 group-hover:text-[#b83a24] transition-colors">
                        {eq.title}
                      </h3>
                      <p className="text-stone-700 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                        {eq.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t-2 border-stone-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#b83a24]">
                      <span>Explore Specs &amp; Packages</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Occasions Interactive Carousel: Mobile-friendly card with production highlights, recommended rig bundle, and image on right */}
            <OccasionsCarousel
              onSelectOccasionQuote={handleSelectOccasionQuote}
              onExploreOccasionSpecs={handleSelectOccasionSubpage}
            />

            {/* Fast Quote & Reliability Guarantee Banner on Home */}
            <section className="py-20 bg-[#FAF8F5] border-t-2 border-stone-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#121212] text-white rounded-none p-8 sm:p-14 border-2 border-black shadow-[8px_8px_0px_0px_#b83a24] relative overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black text-xs font-bold uppercase tracking-widest text-[#b83a24] mb-3 border border-stone-700 shadow-[2px_2px_0px_0px_#b83a24]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>FEMA Production Standard</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-3">
                        Zero Downtime. 100% In-House Hardware. Certified Crew.
                      </h2>
                      <p className="text-stone-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
                        Every FEMA Events booking includes pre-show acoustic mapping, structural load validation, and dual-synchronized power redundancy.
                      </p>

                      <div className="flex flex-wrap gap-4 mt-6 text-xs text-stone-300 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 bg-stone-900 border border-stone-700 px-2.5 py-1">
                          <CheckCircle2 className="w-4 h-4 text-[#b83a24]" />
                          <span>P4.8 &amp; P2.6 LED Displays</span>
                        </span>
                        <span className="flex items-center gap-1.5 bg-stone-900 border border-stone-700 px-2.5 py-1">
                          <CheckCircle2 className="w-4 h-4 text-[#b83a24]" />
                          <span>Touring Sound Line Arrays</span>
                        </span>
                        <span className="flex items-center gap-1.5 bg-stone-900 border border-stone-700 px-2.5 py-1">
                          <CheckCircle2 className="w-4 h-4 text-[#b83a24]" />
                          <span>Silent ATS Genset Redundancy</span>
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                      <button
                        onClick={() => handleOpenQuote()}
                        className="w-full bg-[#b83a24] hover:bg-[#9b2e1b] text-white text-xs uppercase font-bold tracking-widest py-4 px-6 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Request Custom Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20AV%20equipment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-stone-900 border-2 border-stone-600 hover:border-white text-stone-200 hover:text-white text-xs uppercase font-bold tracking-widest py-4 px-6 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
                      >
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================================
            2. DEDICATED EQUIPMENT SUBPAGE VIEW
            Overview catalog OR detailed equipment drilldown (specs, packages, photo showcase)
           ========================================================================= */}
        {activeView === 'equipment' && (
          <div className="pt-20">
            {selectedEquipmentSubpage ? (
              <EquipmentDetailPage
                equipmentId={selectedEquipmentSubpage}
                onBackToAllEquipment={() => setSelectedEquipmentSubpage(null)}
                onSelectEquipment={(id) => setSelectedEquipmentSubpage(id)}
                onOpenQuote={handleOpenQuote}
              />
            ) : (
              <EquipmentSection
                onEnquireItem={handleEnquireEquipment}
                onSelectSubpage={(subId) => {
                  setSelectedEquipmentSubpage(subId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                selectedCategoryFilter={selectedEquipmentFilter}
              />
            )}

            {/* Custom Quote Calculator at bottom of Equipment subpage */}
            <QuoteSection
              initialService={selectedServiceForQuote}
              initialOccasion={selectedOccasionForQuote}
            />
          </div>
        )}

        {/* =========================================================================
            3. DEDICATED OCCASIONS SUBPAGE VIEW
            Overview catalog OR detailed occasion drilldown (blueprints, 3-tier packages, challenges solved)
           ========================================================================= */}
        {activeView === 'occasions' && (
          <div className="pt-20">
            {selectedOccasionSubpage ? (
              <OccasionDetailPage
                occasionId={selectedOccasionSubpage}
                onBackToAllOccasions={() => setSelectedOccasionSubpage(null)}
                onSelectOccasion={(id) => setSelectedOccasionSubpage(id)}
                onOpenQuote={handleOpenQuote}
              />
            ) : (
              <OccasionsSection
                onSelectOccasionQuote={handleSelectOccasionQuote}
                onNavigateToOccasionDetail={handleSelectOccasionSubpage}
              />
            )}

            {/* Custom Quote Calculator at bottom of Occasions subpage */}
            <QuoteSection
              initialService={selectedServiceForQuote}
              initialOccasion={selectedOccasionForQuote}
            />
          </div>
        )}

        {/* =========================================================================
            4. DEDICATED OUR WORK SUBPAGE VIEW
            High-stakes Case Studies + Client Trust Partners + Testimonials + Full Photo Gallery
           ========================================================================= */}
        {activeView === 'our-work' && (
          <div className="pt-20">
            <OurWorkSection
              onOpenQuote={handleOpenQuote}
            />
            <QuoteSection
              initialService={selectedServiceForQuote}
              initialOccasion={selectedOccasionForQuote}
            />
          </div>
        )}

        {/* =========================================================================
            5. DEDICATED ABOUT SUBPAGE VIEW
            Company history, 4 engineering pillars, warehouse & lab facility, certified crew
           ========================================================================= */}
        {activeView === 'about' && (
          <div className="pt-20">
            <AboutSection />
            <QuoteSection
              initialService={selectedServiceForQuote}
              initialOccasion={selectedOccasionForQuote}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateView={(view, sectionId) => {
          setActiveView(view);
          setSelectedEquipmentSubpage(null);
          setSelectedOccasionSubpage(null);
          if (sectionId) {
            setTimeout(() => {
              handleNavigateToSection(sectionId);
            }, 50);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onSelectEquipmentCategory={handleSelectEquipmentCategory}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/254722541214?text=Hello%20FEMA%20Events,%20I%20would%20like%20to%20request%20an%20AV%20equipment%20quote"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold uppercase tracking-wider">
          WhatsApp Support
        </span>
      </a>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-40 bg-black hover:bg-[#b83a24] text-white p-3 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
