import React from 'react';

interface FemaLogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  theme?: 'dark' | 'light';
  id?: string;
}

/**
 * High-performance, transparent, scalable vector SVG logo for FEMA Events.
 * Features a custom audio-visual geometric production emblem paired with
 * precision-engineered typography and broadcast acoustic wave elements.
 */
export const FemaLogo: React.FC<FemaLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'full',
  theme = 'dark',
  id = 'fema-logo'
}) => {
  const primaryText = theme === 'dark' ? '#ffffff' : '#121212';
  const subtextColor = theme === 'dark' ? '#a8a29e' : '#57534e';
  const accentRed = '#b83a24';
  const secondaryAccent = '#d9482f';

  // Mark-only version for icons, avatars, and compact spaces (aspect 1:1)
  if (variant === 'mark') {
    return (
      <svg
        id={id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 54"
        fill="none"
        className={className}
        role="img"
        aria-label="FEMA Events Emblem"
      >
        <defs>
          <linearGradient id={`${id}-red-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={secondaryAccent} />
            <stop offset="100%" stopColor="#9b2e1b" />
          </linearGradient>
          <linearGradient id={`${id}-light-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryText} />
            <stop offset="100%" stopColor={theme === 'dark' ? '#d4d4d4' : '#292524'} />
          </linearGradient>
        </defs>

        {/* Dynamic AV Hexagonal Badge Outline */}
        <path
          d="M27 3 L48 15 V39 L27 51 L6 39 V15 Z"
          fill="none"
          stroke={accentRed}
          strokeWidth="1.75"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Inner Stylized Architectural F */}
        <g transform="translate(4, 3)">
          {/* Main Vertical Trunk */}
          <path
            d="M13 11 H20 V37 H13 Z"
            fill={`url(#${id}-light-grad)`}
          />
          {/* Top Projector / Screen Beam */}
          <path
            d="M20 11 H37 L33 18 H20 Z"
            fill={`url(#${id}-light-grad)`}
          />
          {/* Middle Sound Wave Beam */}
          <path
            d="M20 22 H32 L28 28 H20 Z"
            fill={`url(#${id}-red-grad)`}
          />
          {/* Audio Wave Arcs */}
          <path
            d="M34 20 C37 22.5 37 27.5 34 30"
            stroke={accentRed}
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <path
            d="M39 16 C43.5 21 43.5 29 39 34"
            stroke={primaryText}
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>
    );
  }

  // Full Horizontal Brand Lockup (Transparent Scalable SVG)
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258 52"
      fill="none"
      className={className}
      role="img"
      aria-label="FEMA Events Audio Visual Production"
    >
      <defs>
        <linearGradient id={`${id}-full-red`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={secondaryAccent} />
          <stop offset="100%" stopColor="#9b2e1b" />
        </linearGradient>
        <linearGradient id={`${id}-full-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryText} />
          <stop offset="100%" stopColor={theme === 'dark' ? '#d4d4d4' : '#292524'} />
        </linearGradient>
      </defs>

      {/* Group: Brand Emblem (48x48 bounds) */}
      <g id={`${id}-emblem`} transform="translate(1, 2)">
        {/* Modern Geometric Stage Shield */}
        <path
          d="M24 3 L44 14.5 V35.5 L24 47 L4 35.5 V14.5 Z"
          fill="none"
          stroke={accentRed}
          strokeWidth="1.75"
          strokeLinejoin="round"
          opacity="0.8"
        />

        {/* Micro Corner Accents */}
        <circle cx="24" cy="3" r="1.5" fill={accentRed} />
        <circle cx="44" cy="14.5" r="1.5" fill={accentRed} />
        <circle cx="44" cy="35.5" r="1.5" fill={accentRed} />
        <circle cx="24" cy="47" r="1.5" fill={accentRed} />
        <circle cx="4" cy="35.5" r="1.5" fill={accentRed} />
        <circle cx="4" cy="14.5" r="1.5" fill={accentRed} />

        {/* Monogram 'F' Structure */}
        {/* Vertical Trunk */}
        <path
          d="M12 11 H18 V37 H12 Z"
          fill={`url(#${id}-full-primary)`}
        />
        {/* Top Horizontal Wing */}
        <path
          d="M18 11 H33 L29.5 17.5 H18 Z"
          fill={`url(#${id}-full-primary)`}
        />
        {/* Middle Horizontal Wing */}
        <path
          d="M18 21 H29 L25.5 27 H18 Z"
          fill={`url(#${id}-full-red)`}
        />

        {/* Acoustic & Light Waves */}
        <path
          d="M31 19.5 C33.8 22 33.8 26.5 31 29"
          stroke={accentRed}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35.5 16 C39.5 20.5 39.5 27.5 35.5 32"
          stroke={`url(#${id}-full-primary)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>

      {/* Group: Vector Wordmark "FEMA" in Crisp Pure Paths */}
      <g id={`${id}-wordmark-fema`} fill={`url(#${id}-full-primary)`} transform="translate(54, 4)">
        {/* Letter F */}
        <path d="M0 6 H14 V10.5 H5 V14 H12 V18 H5 V26 H0 Z" />
        
        {/* Letter E */}
        <path d="M17 6 H31 V10.5 H22 V13.8 H29 V17.8 H22 V21.5 H31 V26 H17 Z" />
        
        {/* Letter M */}
        <path d="M34 6 H39 L43 16.5 L47 6 H52 V26 H47.5 V13.5 L44 22 H42 L38.5 13.5 V26 H34 Z" />
        
        {/* Letter A */}
        <path d="M55 26 L61.5 6 H66 L72.5 26 H67.5 L66.2 21.5 H61.3 L60 26 H55 Z M62.2 18 H65.3 L63.8 12.2 Z" />
      </g>

      {/* Group: Vector Wordmark "EVENTS" in Signature Red */}
      <g id={`${id}-wordmark-events`} fill={`url(#${id}-full-red)`} transform="translate(132, 4)">
        {/* Letter E */}
        <path d="M0 6 H13 V10.5 H5 V13.8 H11.5 V17.8 H5 V21.5 H13 V26 H0 Z" />
        
        {/* Letter V */}
        <path d="M15 6 H20 L23.5 19.5 L27 6 H32 L26.5 26 H20.5 Z" />
        
        {/* Letter E */}
        <path d="M34 6 H47 V10.5 H39 V13.8 H45.5 V17.8 H39 V21.5 H47 V26 H34 Z" />
        
        {/* Letter N */}
        <path d="M49 6 H54 L60 18 V6 H64.5 V26 H59.5 L53.5 14 V26 H49 Z" />
        
        {/* Letter T */}
        <path d="M66 6 H79 V10.5 H74.5 V26 H70 V10.5 H66 Z" />
        
        {/* Letter S */}
        <path d="M81 21.5 L85.5 21.8 C85.8 22.8 86.8 23.5 88.2 23.5 C89.7 23.5 90.7 22.8 90.7 21.8 C90.7 20.8 89.5 20.2 87 19.4 C83.5 18.2 81.8 16.6 81.8 13.6 C81.8 9.8 84.8 7.2 88.6 7.2 C92.4 7.2 95.2 9.8 95.3 13.5 L90.8 13.5 C90.7 11.8 89.5 10.7 88.3 10.7 C86.9 10.7 85.9 11.4 85.9 12.4 C85.9 13.4 86.9 13.9 89.3 14.7 C93.2 15.9 95.4 17.6 95.4 20.8 C95.4 24.6 92.2 27 88.2 27 C84.2 27 81.4 24.8 81 21.5 Z" />
      </g>

      {/* Sub-Brand Tagline */}
      <g id={`${id}-tagline`} transform="translate(55, 36)">
        <text
          x="0"
          y="6.5"
          fill={subtextColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontSize="7"
          fontWeight="700"
          letterSpacing="2.8"
        >
          AUDIO VISUAL &bull; NAIROBI
        </text>

        {/* Live Audio Graphic Indicator Dots */}
        <circle cx="178" cy="4" r="1.5" fill="#22c55e" />
        <circle cx="184" cy="4" r="1.5" fill={accentRed} />
        <circle cx="190" cy="4" r="1.5" fill={accentRed} />
      </g>
    </svg>
  );
};

export default FemaLogo;
