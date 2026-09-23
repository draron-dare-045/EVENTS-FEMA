import React from 'react';

// Set to false to hide the logo (navbar, mobile menu and footer)
export const SHOW_LOGO: boolean = true;

// Colour of the word EVENTS - change here if you want a different red
const EVENTS_RED = '#e11d2a';

const FONT = "'Montserrat', 'Plus Jakarta Sans', sans-serif";

interface FemaLogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  theme?: 'dark' | 'light';
  id?: string;
}

/**
 * FEMA Events logo: the emblem (cropped from /public/fema-logo.png)
 * followed by the name on ONE line - FEMA in white, EVENTS in red.
 * Lettering is Montserrat, the same font as the original logo.
 * Size it with className, e.g. "h-9 sm:h-11 w-auto".
 */
export const FemaLogo: React.FC<FemaLogoProps> = ({
  className = 'h-10 w-auto',
  id = 'fema-logo'
}) => (
  <svg
    id={id}
    viewBox="0 0 1145 230"
    role="img"
    aria-label="FEMA Events"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Emblem: left part of the logo image */}
    <svg x="0" y="0" width="230" height="230" viewBox="6 6 230 230">
      <image href="/fema-logo.png" x="0" y="0" width="683" height="241" />
    </svg>

    {/* Horizontal text */}
    <text
      x="270"
      y="154"
      fill="#ffffff"
      fontSize="112"
      fontWeight="800"
      textLength="342"
      lengthAdjust="spacing"
      style={{ fontFamily: FONT }}
    >
      FEMA
    </text>
    <text
      x="646"
      y="154"
      fill={EVENTS_RED}
      fontSize="112"
      fontWeight="600"
      textLength="495"
      lengthAdjust="spacing"
      style={{ fontFamily: FONT }}
    >
      EVENTS
    </text>
  </svg>
);
