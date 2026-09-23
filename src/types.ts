export type PageView = 'home' | 'equipment' | 'occasions' | 'our-work' | 'about';

export interface EquipmentSpec {
  model: string;
  type: string;
  spec1Title: string;
  spec1Value: string;
  spec2Title: string;
  spec2Value: string;
  spec3Title: string;
  spec3Value: string;
  setup: string;
}

export interface EquipmentPackage {
  name: string;
  tier: 'Standard' | 'Pro Touring' | 'Stadium / Enterprise';
  idealFor: string;
  includedItems: string[];
}

export interface EquipmentItem {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image: string;
  showcaseImages: {
    url: string;
    caption: string;
  }[];
  features: string[];
  specs: EquipmentSpec[];
  idealFor: string[];
  packages?: EquipmentPackage[];
}

export interface OccasionPackage {
  name: string;
  tier: 'Compact / Intimate' | 'Standard Gathering' | 'Major Arena / Field';
  idealFor: string;
  includedKit: string[];
}

export interface OccasionItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  highlights: string[];
  recommendedKit: string[];
  crowdCapacity?: string;
  venueTypes?: string[];
  keyChallengesSolved?: string[];
  packages?: OccasionPackage[];
  gallery?: {
    url: string;
    caption: string;
  }[];
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  venue: string;
  eventType: string;
  duration: string;
  crowdSize: string;
  image: string;
  equipmentUsed: string[];
  quote: string;
  author: string;
  highlightStat: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
}


