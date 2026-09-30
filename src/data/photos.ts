/**
 * Photo library (files live in /public/images/work).
 *
 * PHOTOS  -> the four original photos. They are used ONLY by the Hero
 *            carousel at the top of the home page, nowhere else.
 * WORK    -> the newer field photos. They power every card, showcase strip,
 *            case study, gallery tile and the About banner.
 *
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

export const WORK = {
  // Church sanctuary: full-width LED backdrop, floor monitors, mic stands
  churchLed: '/images/work/church-jesus-led.jpg',
  // Church auditorium stage: starfield wall, pulpit, wedges, keyboards
  churchStage: '/images/work/church-stage-wide.jpg',
  // Rear of a modular LED wall on scaffold, technician at work
  ledRigging: '/images/work/led-wall-scaffold.jpg',
  // Draped gala marquee with uplighting and an LED feature screen
  galaTent: '/images/work/gala-tent-led.jpg',
  // Kenya Health Summit 2026 arena at KICC: LED wall + round stage
  healthSummit: '/images/work/kenya-health-summit.jpg',
  // Open-air marquee: LED screen on the grounds with PA stacks
  outdoorTent: '/images/work/outdoor-tent-led.jpg',
  // FEMA-branded LED backdrop in a hotel conference room
  femaBranded: '/images/work/fema-branded-led.jpg'
} as const;
