import React from 'react';

// Set to false to hide the logo (navbar, mobile menu and footer)
export const SHOW_LOGO: boolean = true;

interface FemaLogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  theme?: 'dark' | 'light';
  id?: string;
}

/**
 * FEMA Events logo (transparent PNG in /public/fema-logo.png).
 * Size it with className, e.g. "h-9 sm:h-11 w-auto".
 */
export const FemaLogo: React.FC<FemaLogoProps> = ({
  className = 'h-10 w-auto',
  id = 'fema-logo'
}) => (
  <img
    id={id}
    src="/fema-logo.png"
    alt="FEMA Events"
    className={className}
    decoding="async"
  />
);
