/**
 * Real FEMA Events photos (files live in /public/images/work).
 * Swap a photo everywhere by changing its path here, or point one slot at a
 * different key in src/data/femaData.ts.
 */
export const PHOTOS = {
  // Two LED screens + stage set at a product launch (Sarit Centre)
  launch: '/images/work/launch-ballroom-led.jpg',
  // Garden marquee with twin LED screens flanking the stage
  garden: '/images/work/graduation-garden-led.jpg',
  // Ballroom LED wall + modular stage decks, crew installing
  ballroom: '/images/work/ballroom-led-install.jpg',
  // Expo stand: truss, moving-head lights and LED pillars
  expo: '/images/work/expo-led-pillars.jpg'
} as const;
