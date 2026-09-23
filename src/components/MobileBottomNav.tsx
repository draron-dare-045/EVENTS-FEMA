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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121212] border-t-2 border-[#b83a24] safe-area-bottom shadow-[0_-4px_0px_0px_#121212] transition-all duration-200"
    >
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {/* 1. Home Tab */}
        <button
          id="mobile-dock-home" aria-label="Home - FEMA Events Kenya" aria-current={activeView === 'home' ? 'page' : undefined}
          onClick={() => onSelectView('home')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 transition-colors cursor-pointer rounded-none ${
            activeView === 'home' ? 'text-[#b83a24]' : 'text-stone-400 hover:text-stone-200'
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
            activeView === 'equipment' ? 'text-[#b83a24]' : 'text-stone-400 hover:text-stone-200'
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
            className="w-12 h-12 -mt-5 rounded-none bg-[#b83a24] hover:bg-[#9b2e1b] text-white flex flex-col items-center justify-center border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
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
            activeView === 'occasions' ? 'text-[#b83a24]' : 'text-stone-400 hover:text-stone-200'
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
            activeView === 'our-work' ? 'text-[#b83a24]' : 'text-stone-400 hover:text-stone-200'
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

