import { EquipmentItem, OccasionItem, CaseStudy, GalleryPhoto } from '../types';
import { PHOTOS } from './photos';

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'led-screens',
    number: '01',
    category: 'Visual Displays',
    title: 'LED Screens & Video Displays',
    shortDesc: 'High-definition indoor modular LED walls, daylight-visible outdoor panels, stage backdrops, and video switchers.',
    longDesc: 'Clear, ultra-bright visual screens sized for any room or outdoor venue — from an intimate corporate backdrop to a daylight-visible wall facing a crowd of thousands.',
    iconName: 'Monitor',
    image: PHOTOS.launch,
    showcaseImages: [
      {
        url: PHOTOS.launch,
        caption: 'Indoor Ultra-HD P2.6 Modular Main Stage Backdrop'
      },
      {
        url: PHOTOS.garden,
        caption: 'High-Nit Daylight Visible Outdoor Festival Delay Screen'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'Dual Confidence Monitors & FOH Video Switching Desk'
      }
    ],
    features: [
      'Indoor and outdoor high-resolution LED screens',
      'Seamless video switchers and multi-camera live feeds',
      'Custom curved stage backdrops and side delay screens',
      'Ultra-high refresh rates for flicker-free camera recording'
    ],
    specs: [
      {
        model: 'Indoor LED Wall P2.6',
        type: 'Indoor Modular',
        spec1Title: 'Pixel Pitch',
        spec1Value: 'P2.6mm',
        spec2Title: 'Panel Size',
        spec2Value: '500×500mm module',
        spec3Title: 'Brightness',
        spec3Value: '4,500 nits (High Refresh)',
        setup: 'Ground-stack or truss flown'
      },
      {
        model: 'Outdoor LED Wall P3.9 / P4.8',
        type: 'Outdoor Weatherproof',
        spec1Title: 'Pixel Pitch',
        spec1Value: 'P4.8mm',
        spec2Title: 'Panel Size',
        spec2Value: '500×1000mm module',
        spec3Title: 'Brightness',
        spec3Value: '6,500 nits (Sunlight Visible)',
        setup: 'Ground-stack or heavy truss flown'
      },
      {
        model: 'Curved Stage Backdrop P3.9',
        type: 'Stage Centerpiece',
        spec1Title: 'Pixel Pitch',
        spec1Value: 'P3.9mm',
        spec2Title: 'Panel Size',
        spec2Value: 'Modular concave/convex',
        spec3Title: 'Brightness',
        spec3Value: '5,000 nits',
        setup: 'Curved custom rigging frame'
      },
      {
        model: 'HD Video Switcher & Scaler',
        type: 'Control Desk',
        spec1Title: 'Inputs',
        spec1Value: '8-Channel SDI/HDMI',
        spec2Title: 'Output',
        spec2Value: '4K Scaled Ultra-Low Latency',
        spec3Title: 'Features',
        spec3Value: 'Picture-in-Picture & Live Switching',
        setup: 'Front-of-house tech desk'
      }
    ],
    idealFor: ['Conferences & Keynotes', 'Church Crusades', 'Product Reveals', 'Outdoor Festivals'],
    packages: [
      {
        name: 'Corporate Executive Screen Package',
        tier: 'Standard',
        idealFor: 'Hotel ballrooms, AGMs, boardroom keynotes (100–500 attendees)',
        includedItems: ['P2.6 4×2.5m Indoor LED Wall', '4K Video Scaler', 'Dual 55" Confidence Monitors', 'HDMI/SDI cabling']
      },
      {
        name: 'Curved Stage Reveal Package',
        tier: 'Pro Touring',
        idealFor: 'Product launches, gala dinners, annual summits (500–2,500 attendees)',
        includedItems: ['P3.9 8×3.5m Curved LED Screen', '8-Channel Seamless Video Switcher', 'Live IMAG Camera Feed', 'Video playback servers']
      },
      {
        name: 'Stadium / Outdoor Crusade Jumbotron',
        tier: 'Stadium / Enterprise',
        idealFor: 'Open-air crusades, political rallies, music festivals (5,000–50,000 attendees)',
        includedItems: ['Dual 6×4m Outdoor P3 High-Nit Screens', 'Heavy-duty Flown Truss Rigging', 'Multi-camera wireless link', 'Master video engineer on-site']
      }
    ]
  },
  {
    id: 'lighting',
    number: '02',
    category: 'Atmosphere & Drama',
    title: 'Stage & Architectural Lighting',
    shortDesc: 'Intelligent moving heads, warm stage washes, profile spots, and mood uplighting tailored for any venue.',
    longDesc: 'Atmospheric lighting programmed to match the exact emotional arc of your event, from subtle warm keynote illumination to high-energy moving-light shows.',
    iconName: 'Sparkles',
    image: PHOTOS.expo,
    showcaseImages: [
      {
        url: PHOTOS.expo,
        caption: 'Concert Moving Head Beams with Hazer Atmospheric Beams'
      },
      {
        url: PHOTOS.launch,
        caption: 'Architectural Perimeter Uplighting for Gala Reception'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'Warm Stage Wash & Profile Follow Spot for Keynotes'
      }
    ],
    features: [
      'Intelligent 230W moving beam lights and motorized follow spots',
      'Glare-free warm stage washes optimized for speaker photography',
      'Wireless battery-powered perimeter room uplighters',
      'Dedicated DMX lighting console programmer on-site'
    ],
    specs: [
      {
        model: 'Moving Head Beam 230W',
        type: 'Intelligent Beam',
        spec1Title: 'Output',
        spec1Value: '230W 7R discharge lamp',
        spec2Title: 'Beam Angle',
        spec2Value: '2°–16° motorized zoom',
        spec3Title: 'Control',
        spec3Value: 'DMX-512 with custom gobos',
        setup: 'Truss-mounted or stage riser'
      },
      {
        model: 'LED Par Wash RGBW 18×15W',
        type: 'Stage Wash',
        spec1Title: 'Output',
        spec1Value: '18×15W RGBW 4-in-1 LED',
        spec2Title: 'Beam Angle',
        spec2Value: '25° fixed spread',
        spec3Title: 'Control',
        spec3Value: 'DMX smooth color mixing',
        setup: 'Truss or floor ground uplight'
      },
      {
        model: 'Profile Follow Spot 750W',
        type: 'Spotlight',
        spec1Title: 'Output',
        spec1Value: '750W high-intensity halogen',
        spec2Title: 'Beam Angle',
        spec2Value: '6°–20° optical zoom',
        spec3Title: 'Control',
        spec3Value: 'Manual iris & color changer',
        setup: 'Elevated rear spot stand'
      },
      {
        model: 'Battery Wireless Uplighter',
        type: 'Architectural Uplight',
        spec1Title: 'Output',
        spec1Value: '6×18W RGBWA+UV',
        spec2Title: 'Battery Life',
        spec2Value: '16 hours continuous',
        spec3Title: 'Control',
        spec3Value: 'Wireless DMX / App sync',
        setup: 'Freestanding perimeter wall placement'
      }
    ],
    idealFor: ['Corporate Galas', 'Worship Nights', 'Award Ceremonies', 'Weddings'],
    packages: [
      {
        name: 'Keynote & Gala Ambient Rig',
        tier: 'Standard',
        idealFor: 'Corporate banquets, award ceremonies, conference stages',
        includedItems: ['8× LED Warm Stage Washes', '12× Wireless Perimeter Uplighters', '1× Follow Spot 750W', 'DMX Lighting Desk']
      },
      {
        name: 'Worship & Concert Dynamic Show',
        tier: 'Pro Touring',
        idealFor: 'Live worship recordings, church conferences, indoor concerts',
        includedItems: ['12× 230W Moving Beam Heads', '16× RGBW Stage Washes', '2× Touring Hazers', 'GrandMA-compatible DMX console']
      },
      {
        name: 'Arena & Festival Festival Rig',
        tier: 'Stadium / Enterprise',
        idealFor: 'Mega rallies, open-air stadiums, multi-act festivals',
        includedItems: ['24× Beam/Spot/Wash Hybrids', 'Truss roof goalpost grid', '4× Long-throw Follow Spots', 'Certified lighting designer on console']
      }
    ]
  },
  {
    id: 'sound-audio',
    number: '03',
    category: 'Audio Clarity',
    title: 'Professional Sound & Audio',
    shortDesc: 'Concert line arrays, digital mixers, and speech-optimized wireless microphone systems for crisp acoustic coverage.',
    longDesc: 'High-clarity acoustic engineering so every spoken syllable and musical nuance is delivered with pristine intelligibility from the VIP front row to the furthest tent perimeter.',
    iconName: 'Speaker',
    image: PHOTOS.launch,
    showcaseImages: [
      {
        url: PHOTOS.launch,
        caption: 'Digital Audio Console Front-of-House 32-Channel Desk'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'Flown Touring Line Array System & High-Excursion Subwoofers'
      },
      {
        url: PHOTOS.garden,
        caption: 'UHF Wireless Mic Antenna Distribution System'
      }
    ],
    features: [
      'Active touring line array sound systems with precision delay towers',
      'High-output 18-inch subwoofers with punchy cardioid coverage',
      '32/48-channel digital mixing consoles with iPad stage control',
      'Frequency-managed UHF wireless handheld, lapel, and headset mics'
    ],
    specs: [
      {
        model: 'Touring Line Array Element',
        type: 'High-Output Array',
        spec1Title: 'Power',
        spec1Value: '1,200W RMS per cabinet',
        spec2Title: 'Coverage',
        spec2Value: '120°H × 15°V dispersion',
        spec3Title: 'Frequency',
        spec3Value: '55Hz – 20kHz active bi-amp',
        setup: 'Flown array or ground-stacked'
      },
      {
        model: '18" High-Excursion Subwoofer',
        type: 'Sub-Bass System',
        spec1Title: 'Power',
        spec1Value: '2,000W RMS high output',
        spec2Title: 'Frequency',
        spec2Value: '30Hz – 120Hz deep response',
        spec3Title: 'Configuration',
        spec3Value: 'Cardioid directional array',
        setup: 'Ground-stacked under array'
      },
      {
        model: '32-Channel Digital Mixer',
        type: 'Mixing Console',
        spec1Title: 'Channels',
        spec1Value: '32 Mic Preamps / 16 Mix Outs',
        spec2Title: 'Processing',
        spec2Value: 'DSP Effects, Multitrack USB',
        spec3Title: 'Control',
        spec3Value: 'Motorized faders + iPad control',
        setup: 'Front-of-house desk'
      },
      {
        model: 'Dual UHF Wireless Mic Kit',
        type: 'Wireless Systems',
        spec1Title: 'Bandwidth',
        spec1Value: 'Digital predictive switching',
        spec2Title: 'Transducers',
        spec2Value: 'Handheld dynamic / Cardioid lapel',
        spec3Title: 'Range',
        spec3Value: '100m line of sight reliable',
        setup: 'FOH receiver rack with antenna distribution'
      }
    ],
    idealFor: ['Churches & Outdoor Crusades', 'AGMs & Summits', 'Live Music Concerts', 'VIP Funerals'],
    packages: [
      {
        name: 'Conference Clarity Speech Audio',
        tier: 'Standard',
        idealFor: 'Keynotes, executive AGMs, panel discussions (up to 800 delegates)',
        includedItems: ['Point-source column arrays', '16-Channel Digital Desk', '6× Wireless Mics (Lapels + Handhelds)', 'Feedback Suppressor DSP']
      },
      {
        name: 'Live Worship & Corporate Gala Array',
        tier: 'Pro Touring',
        idealFor: 'Church conferences, live bands, galas (1,000–5,000 attendees)',
        includedItems: ['8× Line Array Tops + 4× 18" Subs', '32-Channel Digital Console', '4× Stage Monitor Wedges', 'IEM in-ear monitoring transmitters']
      },
      {
        name: 'Crusade & Stadium Long-Throw System',
        tier: 'Stadium / Enterprise',
        idealFor: 'Multi-night open grounds crusades, political rallies (10,000–50,000+)',
        includedItems: ['16× Large Line Array Modules', '8× Dual 18" Subwoofers', 'Perimeter Delay Towers', 'FOH Master Sound Engineer + Stage Tech']
      }
    ]
  },
  {
    id: 'stages',
    number: '04',
    category: 'Structural Platforms',
    title: 'Stages & Modular Platforms',
    shortDesc: 'Customizable modular risers, heavy-duty outdoor concert stages, podiums, and safety guardrails.',
    longDesc: 'Engineered stage platforms built to fit any venue footprint — from clean indoor executive risers with custom skirting to heavy-duty outdoor concert decks rated for multi-performer bands.',
    iconName: 'Layers',
    image: PHOTOS.ballroom,
    showcaseImages: [
      {
        url: PHOTOS.ballroom,
        caption: 'Heavy-Duty Modular Stage Deck with Carpet Finish'
      },
      {
        url: PHOTOS.garden,
        caption: 'Outdoor Ground-Level Scaffold Concert Platform'
      },
      {
        url: PHOTOS.launch,
        caption: 'Executive Acrylic Speaker Podium with Microphone Mount'
      }
    ],
    features: [
      'Heavy-duty non-slip aluminum deck platforms (750kg/m² load rating)',
      'Adjustable leg heights from 0.4m to 2.0m with leveling footers',
      'Safety access stairs, guardrails, and black pleated stage skirting',
      'Acrylic or timber speaker podiums with integrated microphone mounts'
    ],
    specs: [
      {
        model: 'Modular Deck Platform (2×1m)',
        type: 'Modular Deck',
        spec1Title: 'Load Rating',
        spec1Value: '750kg/m² TÜV certified',
        spec2Title: 'Height Range',
        spec2Value: '0.4m to 2.0m telescoping',
        spec3Title: 'Surface',
        spec3Value: 'Anti-slip textured black ply',
        setup: 'Interlocking clamped aluminum'
      },
      {
        model: 'Outdoor Concert Heavy Stage',
        type: 'Large Format Stage',
        spec1Title: 'Load Rating',
        spec1Value: '1,000kg/m² heavy live load',
        spec2Title: 'Span',
        spec2Value: 'Up to 14m × 10m expansive build',
        spec3Title: 'Compatibility',
        spec3Value: 'Rigged for roof truss integration',
        setup: 'Leveling scaffold base'
      },
      {
        model: 'Executive Speaker Podium',
        type: 'Presentation Desk',
        spec1Title: 'Material',
        spec1Value: 'Frosted acrylic / Smoked wood',
        spec2Title: 'Connections',
        spec2Value: 'Dual shock-mount XLR ports',
        spec3Title: 'Extras',
        spec3Value: 'Internal confidence screen shelf',
        setup: 'Center-stage freestanding'
      },
      {
        model: 'Perimeter Safety Guardrail System',
        type: 'Safety Barrier',
        spec1Title: 'Height',
        spec1Value: '1.1m compliant barrier',
        spec2Title: 'Locking',
        spec2Value: 'Positive deck-lock bolt brackets',
        spec3Title: 'Finish',
        spec3Value: 'Matte black anti-reflective',
        setup: 'Rear and lateral perimeter snap'
      }
    ],
    idealFor: ['Political Rallies', 'Graduations', 'Conferences', 'Live Band Stages'],
    packages: [
      {
        name: 'Executive Presentation Riser',
        tier: 'Standard',
        idealFor: 'Indoor hotel conferences, panel setups, awards (6×4m at 0.6m height)',
        includedItems: ['Modular aluminum deck (6×4m)', 'Black pleated skirt & carpet', 'Access stairs with handrail', 'Acrylic keynote podium']
      },
      {
        name: 'Band & Choir Concert Platform',
        tier: 'Pro Touring',
        idealFor: 'Church crusades, live recordings, youth conferences (10×6m at 1.0m height)',
        includedItems: ['Heavy-duty deck (10×6m)', 'Dual tiered drum & choir risers', 'Perimeter safety guardrails', 'Reinforced truss grounding points']
      },
      {
        name: 'Stadium Mega Stage System',
        tier: 'Stadium / Enterprise',
        idealFor: 'Major open-air festivals, political rallies (14×10m heavy build)',
        includedItems: ['Large format scaffold deck', 'TÜV certified 1,000kg/m² load capacity', 'Left/Right PA fly towers', 'Certified structural rigging crew']
      }
    ]
  },
  {
    id: 'pyrotechnics',
    number: '05',
    category: 'Special Effects',
    title: 'Pyrotechnics & Special Effects',
    shortDesc: 'Cold-spark fountains, CO2 cryo jets, low-lying fog machines, and synchronized atmospheric special effects.',
    longDesc: 'Safe, dramatic stage effects choreographed with light and sound to create show-stopping reveal moments, grand ceremonial entrances, and triumphant finales.',
    iconName: 'Flame',
    image: PHOTOS.launch,
    showcaseImages: [
      {
        url: PHOTOS.launch,
        caption: 'Cold-Spark Fountains Indoor Stage Reveal Moment'
      },
      {
        url: PHOTOS.garden,
        caption: 'Low-Lying Dense Dry-Ice Fog for First Dance'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'High-Pressure CO2 Cryo Jet Blast on Stage Apron'
      }
    ],
    features: [
      'Indoor-safe cold spark fountains (no smoke, non-hazardous, cold to touch)',
      'High-pressure CO2 cryo jets with instantaneous dissipation',
      'Low-lying dry ice heavy cloud fog for dancing on clouds effect',
      'Electronic multi-shot confetti & streamer cannons'
    ],
    specs: [
      {
        model: 'Cold Spark Fountain Machine',
        type: 'Cold Pyrotechnic FX',
        spec1Title: 'Height Range',
        spec1Value: '2.0m – 5.5m adjustable',
        spec2Title: 'Safety',
        spec2Value: '100% Indoor safe, zero fire hazard',
        spec3Title: 'Control',
        spec3Value: 'DMX-512 wireless burst trigger',
        setup: 'Downstage deck or podium flanking'
      },
      {
        model: 'High-Velocity CO2 Cryo Jet',
        type: 'Cryogenic Blast',
        spec1Title: 'Plume Height',
        spec1Value: '8m – 10m vertical column',
        spec2Title: 'Dissipation',
        spec2Value: 'Instant clean vapor cloud',
        spec3Title: 'Pressure',
        spec3Value: 'High pressure quick-release tank',
        setup: 'Front apron truss / stage floor'
      },
      {
        model: 'Low-Lying Heavy Cloud Fogger',
        type: 'Atmospheric Fog',
        spec1Title: 'Output',
        spec1Value: '25,000 cu ft/min dense carpet',
        spec2Title: 'Fluid',
        spec2Value: 'Water-based odorless non-toxic',
        spec3Title: 'Coverage',
        spec3Value: 'Stays below knee level',
        setup: 'Stage side duct feed'
      },
      {
        model: 'Confetti & Streamer Stadium Cannon',
        type: 'Celebration FX',
        spec1Title: 'Launch Range',
        spec1Value: '12m – 15m aerial spread',
        spec2Title: 'Media',
        spec2Value: 'Metallic gold/silver or paper',
        spec3Title: 'Trigger',
        spec3Value: 'Electronic push-button cue',
        setup: 'Flanking stage positions'
      }
    ],
    idealFor: ['Product Launches', 'Wedding First Dances', 'New Year & Award Galas', 'Concert Climaxes'],
    packages: [
      {
        name: 'Wedding Cloud & Spark Romance Bundle',
        tier: 'Standard',
        idealFor: 'Wedding receptions, cake cutting, first dances',
        includedItems: ['4× Indoor Cold Spark Fountains', '1× Low-Lying Heavy Dry Ice Fogger', 'Wireless cue remote', 'Certified safety pyrotechnician']
      },
      {
        name: 'Corporate Brand Reveal Blast',
        tier: 'Pro Touring',
        idealFor: 'Vehicle unveils, technology launches, gala openings',
        includedItems: ['6× Cold Spark Fountains (4m bursts)', '2× CO2 Cryo Jet Cannons with gas tanks', '1× Stadium Gold Confetti Blaster', 'Choreographed DMX controller']
      },
      {
        name: 'Concert & Arena FX Extravaganza',
        tier: 'Stadium / Enterprise',
        idealFor: 'Music festival headliners, major sports awards, NYE countdowns',
        includedItems: ['8× High-Output Cold Spark Machines', '4× Synchronized CO2 Cryo Jets', 'Dual Heavy Cloud Foggers', 'Multiple electric streamer drops']
      }
    ]
  },
  {
    id: 'generators',
    number: '06',
    category: 'Power & Redundancy',
    title: 'Generator & Power Rentals',
    shortDesc: 'Super-silent backup generators, redundant automatic transfer switches, and heavy-duty event power distribution.',
    longDesc: 'Uncompromising power stability with 100% redundancy guarantees so that mains power fluctuations or blackouts never disrupt your high-stakes event.',
    iconName: 'Zap',
    image: PHOTOS.ballroom,
    showcaseImages: [
      {
        url: PHOTOS.ballroom,
        caption: 'Super-Silent Sound-Baffled 60kVA & 150kVA Diesel Generators'
      },
      {
        url: PHOTOS.launch,
        caption: '3-Phase Weatherproof Rubber Distribution Distro Board'
      },
      {
        url: PHOTOS.garden,
        caption: 'Zero-Downtime Automatic Transfer Switch (ATS) Station'
      }
    ],
    features: [
      'Super-silent diesel generators housed in acoustic sound-dampened canopies',
      'Dual-generator synchronized failover systems with Automatic Transfer Switches (ATS)',
      'Heavy-duty rubberized 3-phase power distribution boxes with RCD protection',
      'Certified master electricians on standby for the full duration of your event'
    ],
    specs: [
      {
        model: '60kVA Super-Silent Generator',
        type: 'Prime Diesel Unit',
        spec1Title: 'Capacity',
        spec1Value: '60kVA / 48kW 3-Phase 415V',
        spec2Title: 'Noise Level',
        spec2Value: '58 dBA @ 7m (Super Quiet)',
        spec3Title: 'Runtime',
        spec3Value: '14 hrs continuous on single tank',
        setup: 'Perimeter utility zone'
      },
      {
        model: '150kVA Heavy-Duty Generator',
        type: 'Concert Prime Unit',
        spec1Title: 'Capacity',
        spec1Value: '150kVA / 120kW 3-Phase',
        spec2Title: 'Noise Level',
        spec2Value: '64 dBA @ 7m sound baffled',
        spec3Title: 'Runtime',
        spec3Value: '12 hrs heavy continuous load',
        setup: 'Dedicated perimeter power pad'
      },
      {
        model: 'Automatic Transfer Switch (ATS)',
        type: 'Zero-Downtime Failover',
        spec1Title: 'Transfer Time',
        spec1Value: '< 0.5s instantaneous sync',
        spec2Title: 'Capacity',
        spec2Value: '400A 3-Phase rated',
        spec3Title: 'Monitoring',
        spec3Value: 'Digital voltage & phase sensing',
        setup: 'Between mains and backup genset'
      },
      {
        model: 'Stage Power Distribution Board',
        type: 'Power Distro',
        spec1Title: 'Inputs',
        spec1Value: '63A / 125A 5-Pin Ceeform',
        spec2Title: 'Outputs',
        spec2Value: '16A, 32A, 13A UK sockets with MCB/RCD',
        spec3Title: 'Protection',
        spec3Value: 'IP67 Weatherproof enclosure',
        setup: 'Stage rear / Tech FOH desk'
      }
    ],
    idealFor: ['Outdoor Crusades', 'Live Broadcasts', 'Remote Venues', 'High-Profile Summits'],
    packages: [
      {
        name: 'Single Unit Silent Backup (60kVA)',
        tier: 'Standard',
        idealFor: 'Hotel galas, weddings, indoor corporate events needing reliable backup',
        includedItems: ['60kVA Sound-Attenuated Diesel Generator', 'Main distribution cabling (50m 3-phase)', 'Fuel included for 10-hour runtime', 'On-site generator operator']
      },
      {
        name: 'Dual Sync Redundant Power (150kVA + ATS)',
        tier: 'Pro Touring',
        idealFor: 'Multi-day church crusades, live TV broadcasts, outdoor conferences',
        includedItems: ['150kVA Silent Generator', 'Automatic Transfer Switch (<0.5s failover)', 'Stage & LED screen distribution boards', 'Certified master electrical engineer']
      },
      {
        name: 'Mega Arena Synchronized Grid (2×150kVA)',
        tier: 'Stadium / Enterprise',
        idealFor: 'Stadium festivals, political campaigns, remote safari locations',
        includedItems: ['2× 150kVA Synchronized Twin-Pack Generators', 'Full redundant distribution ring', 'Continuous auxiliary fuel supply', 'Dual 24/7 dedicated electricians']
      }
    ]
  }
];

export const OCCASIONS_DATA: OccasionItem[] = [
  {
    id: 'churches',
    tag: 'Churches & Crusades',
    title: 'Churches & Multi-Day Crusades',
    shortDesc: 'Dynamic worship sound, powerful voice clarity, and daylight LED screens built for spiritual gatherings.',
    longDesc: 'Whether in an indoor sanctuary, an open sports ground, or a multi-day evangelistic crusade across Kenya, we engineer powerful long-throw sound systems, daylight-visible lyrics screens, and reliable generators that ensure uninterrupted ministry.',
    image: PHOTOS.garden,
    highlights: [
      'Concert-grade line array with speech intelligibility across all rows',
      'Dual high-brightness daylight LED screens for live IMAG & lyrics',
      'Modular choir, band, and pulpit stage risers with safety rails',
      'Dual-generator synchronized power running 24/7 with zero downtime'
    ],
    recommendedKit: [
      'Line Array PA + 18" Subwoofers',
      'Outdoor P4.8 Dual LED Screens (6x4m)',
      '32-Channel Digital Audio Console',
      '150kVA Silent Diesel Generator'
    ],
    crowdCapacity: 'Scalable to Any Crowd Size',
    venueTypes: ['Open Stadium Grounds', 'Church Auditoriums', 'Community Fields', 'Cathedrals'],
    keyChallengesSolved: [
      'Acoustic echo control in large uncarpeted halls and reverberant stadiums',
      'Extreme sunlight glare on lyrics screens during daytime afternoon services',
      'Grid power outages during high-stakes worship and altar call moments'
    ],
    packages: [
      {
        name: 'Sanctuary & Revival Package',
        tier: 'Compact / Intimate',
        idealFor: 'Indoor church halls, youth conferences, 500-1,500 worshippers',
        includedKit: ['Point Source PA + Dual 15" Subs', 'Indoor P2.6 LED Wall (4x2.5m)', '16-Ch Digital Mixer & 4 Wireless Mics', '60kVA Silent Generator']
      },
      {
        name: 'Regional Grounds Crusade Rig',
        tier: 'Standard Gathering',
        idealFor: 'Outdoor community grounds, 3-5 day crusades, 2,000-8,000 attendees',
        includedKit: ['Touring Line Array (8 tops + 4 subs)', 'Dual Outdoor P4.8 LED Screens (5x3m)', 'Modular Stage (10x8m) with Choir Risers', '150kVA Silent Generator + ATS']
      },
      {
        name: 'Mega Stadium Evangelistic Rig',
        tier: 'Major Arena / Field',
        idealFor: 'City-wide stadium crusades, national conventions, 10,000-30,000+ attendees',
        includedKit: ['Full Arena Line Array with Delay Towers', 'Triple Outdoor P4.8 Mega LED Walls', 'Heavy Touring Stage (16x12m)', 'Dual Synchronized 150kVA Gensets (300kVA)']
      }
    ],
    gallery: [
      {
        url: PHOTOS.garden,
        caption: 'Outdoor multi-day crusade with daylight dual LED walls'
      },
      {
        url: PHOTOS.launch,
        caption: 'Sanctuary worship stage lighting with warm wash and moving beams'
      },
      {
        url: PHOTOS.expo,
        caption: 'Line array rig flown on certified aluminum truss towers'
      }
    ]
  },
  {
    id: 'conferences',
    tag: 'Conferences & Summits',
    title: 'Conferences, Summits & AGMs',
    shortDesc: 'Distraction-free AV setups engineered for keynotes, panel discussions, hybrid streams, and Q&As.',
    longDesc: 'We provide executive-tier presentation environments with ultra-sharp presentation screens, confidence monitors for keynotes, seamless multi-feed video switching, and pristine podium microphone acoustic balance.',
    image: PHOTOS.launch,
    highlights: [
      'Multi-channel presentation switchers for live slides & hybrid zoom',
      'Ultra-sharp P2.6 indoor LED backdrops and timer confidence monitors',
      'Multi-microphone panel setups with automatic feedback suppression',
      'Glare-free warm stage washes tailored for crisp 4K video recording'
    ],
    recommendedKit: [
      'Indoor P2.6 Seamless LED Backdrop',
      'Multi-channel Video Scaler & Switcher',
      'Wireless Handheld + Lapel Mic Package',
      'Executive Acrylic Speaker Podium'
    ],
    crowdCapacity: 'Scalable to Any Delegation Size',
    venueTypes: ['Hotel Ballrooms', 'Convention Centers (KICC, Sarit)', 'Corporate Boardrooms', 'Auditoriums'],
    keyChallengesSolved: [
      'Speaker confidence monitor delay and slide sync glitching',
      'Audio feedback and room echo during open-floor Q&A sessions',
      'Lighting glare reflecting onto presenter glasses or projection surfaces'
    ],
    packages: [
      {
        name: 'Executive Board & AGM Setup',
        tier: 'Compact / Intimate',
        idealFor: 'Annual General Meetings, leadership symposiums, 100-300 delegates',
        includedKit: ['Seamless 85" 4K Presentation Displays', 'Digital Speech Podium & 4 Panel Mics', 'Broadcast-Quality Stage Lighting Wash', '60kVA Silent Backup Power']
      },
      {
        name: 'Plenary Summit Production Rig',
        tier: 'Standard Gathering',
        idealFor: 'Continental summits, 2-3 day corporate conferences, 500-2,000 delegates',
        includedKit: ['Custom P2.6 Curved LED Backdrop (12x3.5m)', 'Dual Confidence Monitors + Presenter Timers', '8-Channel Wireless Mic Rack with DSP', 'Hybrid Video Streaming Switcher']
      },
      {
        name: 'Multi-Hall Convention & Expo Rig',
        tier: 'Major Arena / Field',
        idealFor: 'International conventions with main plenary & breakout hall feeds, 2,500+ delegates',
        includedKit: ['Main Plenary 18x4m LED Wall + 4 Breakout Screen Rigs', 'Multi-zone Matrix Audio Routing', 'Full Camera Broadcast Package', '150kVA Dedicated Silent Genset']
      }
    ],
    gallery: [
      {
        url: PHOTOS.launch,
        caption: 'Plenary hall stage with ultra-fine pixel pitch LED presentation backdrop'
      },
      {
        url: PHOTOS.launch,
        caption: 'Executive panel seating with discreet wireless gooseneck and lapel microphones'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'Multi-camera hybrid live stream control desk with seamless video switching'
      }
    ]
  },
  {
    id: 'launches',
    tag: 'Product & Brand Launches',
    title: 'Product & Brand Launches',
    shortDesc: 'High-impact choreography where reveal lighting, special effects, and staging sync together.',
    longDesc: 'Transform brand launches into unforgettable sensory experiences. We combine cold-spark fountains, low-lying heavy fog, intelligent synchronized lighting sequences, and curved LED centerpieces that ignite excitement.',
    image: PHOTOS.launch,
    highlights: [
      'Choreographed reveal sequences with cold sparks & low-fog entrance',
      'Curved high-definition LED centerpiece with 3D graphics playback',
      'Intelligent moving head lighting programmed to precise music cues',
      'Immersive surround sound acoustics with punchy low-end impact'
    ],
    recommendedKit: [
      'Cold Spark Fountains (4–8 units)',
      'Curved P3.9 Stage Display Screen',
      'Moving Beam + Wash Intelligent Rig',
      'Low Fog Heavy Vapor Machine'
    ],
    crowdCapacity: 'Scalable to Any Attendance',
    venueTypes: ['Expo Centers', 'Five-Star Ballrooms', 'Automotive Showrooms', 'Open Warehouses'],
    keyChallengesSolved: [
      'Split-second synchronization between video cues, spark triggers, and music drops',
      'Indoor venue safety compliance with zero-smoke, non-hazardous cold sparks',
      'Custom stage layout engineering to support heavy vehicle or product displays'
    ],
    packages: [
      {
        name: 'Boutique Brand Showcase',
        tier: 'Compact / Intimate',
        idealFor: 'VIP product reveals, luxury fashion & tech press briefings, 100-300 guests',
        includedKit: ['Indoor P2.6 High-Def Screen (5x3m)', '2 Cold Spark Machines + Heavy Fogger', '8 Moving Head Lights & Uplighters', 'Punchy Sub+Top Audio Setup']
      },
      {
        name: 'Gala Reveal & Stage Spectacle',
        tier: 'Standard Gathering',
        idealFor: 'Automotive launches, FMCG brand unveilings, 500-1,200 guests',
        includedKit: ['Curved LED Wall with Reveal Gateway (10x3.5m)', '6 Timed Cold Spark Fountains + Low Fog', 'Full Truss Lighting Rig with Profile Gobos', 'Reinforced Vehicle Turntable/Stage Deck']
      },
      {
        name: 'Arena Mega Brand Experience',
        tier: 'Major Arena / Field',
        idealFor: 'Nationwide product launches, telecom festivals, 1,500-5,000 attendees',
        includedKit: ['Immersive 3-Sided 3D LED Environment', '12 Cold Spark Systems + Cryo CO2 Jets', 'Concert Touring PA with Deep Sub Arrays', 'Dual 150kVA Synchronized Generators']
      }
    ],
    gallery: [
      {
        url: PHOTOS.launch,
        caption: 'Split-second cold spark reveal at regional automotive unboxing'
      },
      {
        url: PHOTOS.launch,
        caption: 'Low fog dry-ice blanket during keynote product presentation'
      },
      {
        url: PHOTOS.expo,
        caption: 'Dynamic moving beam lighting synced to dramatic music soundtrack'
      }
    ]
  },
  {
    id: 'rallies',
    tag: 'Public Rallies & Gatherings',
    title: 'Public Rallies & Open-Air Gatherings',
    shortDesc: 'Long-throw line arrays and daylight-visible outdoor LED walls engineered for massive open-air crowds.',
    longDesc: 'Built for extreme crowd densities and outdoor field conditions. Our heavy-duty stage trucks, long-throw line array towers, and sunlight-fighting outdoor LED walls deliver crystal-clear messaging across vast open stadium fields.',
    image: PHOTOS.garden,
    highlights: [
      'High-power touring line arrays with perimeter delay towers',
      'Daylight-fighting 6,500-nit outdoor LED jumbo screens',
      'Heavy-duty reinforced modular stages with non-slip surfaces',
      'Mobile power generator vehicles on continuous standby'
    ],
    recommendedKit: [
      'Outdoor High-SPL Line Array Rig',
      'Dual 7x4m Outdoor Daylight LED Walls',
      '14x10m Heavy Concert Stage Platform',
      '150kVA Dual Genset System'
    ],
    crowdCapacity: 'Scalable to Any Field Capacity',
    venueTypes: ['Public Stadiums', 'County Showgrounds', 'Town Squares', 'Open Fields'],
    keyChallengesSolved: [
      'Sound dissipation across 300+ meters in open windy outdoor fields',
      'Direct intense equatorial midday sunlight washing out screen visuals',
      'Rapid crowd surge management with heavy barricaded stage boundaries'
    ],
    packages: [
      {
        name: 'Civic Town Hall & County Gathering',
        tier: 'Compact / Intimate',
        idealFor: 'Town square gatherings, county civic forums, 1,000-3,000 citizens',
        includedKit: ['High-Output Line Array (4 tops per side)', 'Outdoor P4.8 Daylight LED Screen (4x3m)', 'Heavy-duty 8x6m Covered Stage Deck', '60kVA Mobile Diesel Generator']
      },
      {
        name: 'Regional Open-Air Campaign Rig',
        tier: 'Standard Gathering',
        idealFor: 'Large constituency gatherings, sporting rallies, 5,000-15,000 attendees',
        includedKit: ['Touring Line Array (8 tops + 4 subs per side)', 'Dual 6x4m Outdoor Daylight LED Screens', 'Heavy 12x8m Stage with Safety Mojo Barriers', '150kVA Silent Generator with Auto-Switch']
      },
      {
        name: 'Mega Stadium National Assembly Rig',
        tier: 'Major Arena / Field',
        idealFor: 'National political rallies, stadium celebrations, 20,000-50,000+ citizens',
        includedKit: ['Mega Touring Array with 4 Perimeter Delay Towers', 'Triple 8x5m High-SPL LED Jumbo Walls', 'Concert Roof Rigged Heavy Stage (16x12m)', 'Dual Synchronized 150kVA Gensets (300kVA)']
      }
    ],
    gallery: [
      {
        url: PHOTOS.garden,
        caption: 'Open stadium gathering with perimeter delay audio coverage'
      },
      {
        url: PHOTOS.garden,
        caption: 'High-visibility daytime LED screen positioned above heavy modular stage'
      },
      {
        url: PHOTOS.expo,
        caption: 'Heavy ground support truss structure rated for high wind loads'
      }
    ]
  },
  {
    id: 'funerals',
    tag: 'Funerals & Memorial Services',
    title: 'Funerals & Memorial Services',
    shortDesc: 'Reverent, evenly distributed sound and discreet tribute screens so families can focus on the memorial.',
    longDesc: 'We handle memorial services with deep reverence, quiet dignity, and flawless reliability. Discreet audio distribution reaches every tent and overflow section clearly, accompanied by silent generators that make zero acoustic disturbance.',
    image: PHOTOS.ballroom,
    highlights: [
      'Acoustically balanced sound distributed across family and guest tents',
      'Overflow LED and TV monitors for tribute slideshows and recordings',
      'Super-silent 60kVA generator with remote exhaust placement',
      'Respectful, uniformed, and unobtrusive technical operators'
    ],
    recommendedKit: [
      'Multi-Tent Distributed Audio System',
      'LED Tribute Screens & Delay Monitors',
      'Wireless Lapel & Pulpit Mic Kit',
      'Super-Silent 60kVA Generator'
    ],
    crowdCapacity: 'Scalable to Any Gathering Size',
    venueTypes: ['Private Residences & Homesteads', 'Church Sanctuaries', 'School Grounds', 'Cemetery Pavilions'],
    keyChallengesSolved: [
      'Ensuring eulogies are heard in distant perimeter tents without deafening the family tent',
      'Zero engine noise interference during sensitive prayers and quiet moments',
      'Rapid dignified setup and non-intrusive cable runs under mats and carpet runners'
    ],
    packages: [
      {
        name: 'Dignified Family Homestead Setup',
        tier: 'Compact / Intimate',
        idealFor: 'Homestead memorials, private residences, 200-800 guests',
        includedKit: ['4-Tent Distributed Audio Column Speakers', '65" High-Brightness Tribute Display Screens', 'Wireless Lapel & Stand Microphones', 'Super-Silent 60kVA Backup Generator']
      },
      {
        name: 'Multi-Tent Memorial Service Rig',
        tier: 'Standard Gathering',
        idealFor: 'Large public funeral services, school grounds, 1,000-3,500 mourners',
        includedKit: ['8-Zone Distributed Audio Network', 'Dual Outdoor P4.8 Tribute Screens (4x2.5m)', 'Full Choir & Clergy Audio Package', '60kVA Super-Silent Generator (58 dBA)']
      },
      {
        name: 'State & High-Profile Memorial Rig',
        tier: 'Major Arena / Field',
        idealFor: 'State funerals, prominent national figures, 4,000-10,000+ attendees',
        includedKit: ['16-Zone Precision Time-Aligned Audio Matrix', 'Multiple Daylight LED Relay Screens', 'Live Broadcast Video Patching System', 'Dual Redundant Silent Diesel Generators']
      }
    ],
    gallery: [
      {
        url: PHOTOS.ballroom,
        caption: 'Distributed audio column setup with discreet non-intrusive rigging'
      },
      {
        url: PHOTOS.garden,
        caption: 'High-contrast tribute presentation screens under shaded tent canopy'
      },
      {
        url: PHOTOS.ballroom,
        caption: 'Super-silent sound-baffled diesel generator operating at low decibels'
      }
    ]
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'tech-expo',
    tag: 'Featured Corporate Summit',
    title: 'East Africa Tech Expo 2026',
    venue: 'Tsavo Ballroom, KICC Nairobi',
    eventType: 'Corporate Conference & Expo',
    duration: '3 Full Days',
    crowdSize: '2,500 Delegates',
    image: PHOTOS.expo,
    equipmentUsed: [
      'Custom curved 18×4m P2.6 LED video wall as main stage centerpiece',
      'Hybrid live-stream video switching across 3 breakout halls',
      'Concert-grade acoustic line array with 12 wireless panel microphones',
      'Redundant silent 150kVA generator backup with automatic transfer switch'
    ],
    quote: 'The FEMA crew ran three days of complex hybrid sessions and keynote addresses without a single dropped feed — exactly the standard a continental summit demands.',
    author: 'Event Organizing Committee, EA Tech Expo',
    highlightStat: '3 Days Zero Downtime'
  },
  {
    id: 'citam-crusade',
    tag: 'Featured Church Crusade',
    title: 'CITAM Grounds Easter Crusade',
    venue: 'CITAM Valley Road Open Grounds, Nairobi',
    eventType: 'Outdoor Church Crusade',
    duration: '4 Consecutive Nights',
    crowdSize: '6,000+ Attendees Per Night',
    image: PHOTOS.garden,
    equipmentUsed: [
      'Two 6×4m daylight-visible outdoor P4.8 LED screens for scripture and lyrics',
      'Long-throw touring line array system covering all perimeter seating zones',
      'Tiered choir and live worship band platform risers with guardrails',
      'Dual synchronized silent generators supplying 4 nights of uninterrupted power'
    ],
    quote: 'Every single corner of the expansive grounds could hear and see clearly, night after night. That acoustic excellence carried the atmosphere of worship.',
    author: 'Crusade Technical Director, CITAM',
    highlightStat: '24,000+ Total Footfall'
  },
  {
    id: 'brand-launch',
    tag: 'Featured Brand Launch',
    title: 'TotalEnergies Regional Product Launch',
    venue: 'Sarit Expo Centre, Westlands Nairobi',
    eventType: 'Product & Brand Reveal',
    duration: '1 Evening Gala',
    crowdSize: '400 VIP Guests & Executives',
    image: PHOTOS.ballroom,
    equipmentUsed: [
      'High-impact seamless LED video wall with synced 4K motion graphics',
      'Cold spark fountain machines timed precisely to the product unboxing',
      'Intelligent moving-head beam lighting programmed to music cues',
      'Low-lying dry ice fog blanket creating a dramatic stage floor reveal'
    ],
    quote: 'The reveal moment landed with electrifying precision. FEMA Events choreographed every lighting cue and spark burst down to the split second.',
    author: 'Brand & Communications Lead, TotalEnergies',
    highlightStat: '100% Cues Executed'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Outdoor Public Rally Stage',
    category: 'Stages & Audio',
    image: PHOTOS.garden
  },
  {
    id: 'gal-2',
    title: 'Modular Concert Deck Build',
    category: 'Stages',
    image: PHOTOS.ballroom
  },
  {
    id: 'gal-3',
    title: 'Silent Diesel Generator & Distro',
    category: 'Power & Backup',
    image: PHOTOS.ballroom
  },
  {
    id: 'gal-4',
    title: 'High-Definition LED Screen Wall',
    category: 'Visual Displays',
    image: PHOTOS.ballroom
  },
  {
    id: 'gal-5',
    title: 'Front-of-House Digital Audio Mixing',
    category: 'Sound & Audio',
    image: PHOTOS.launch
  },
  {
    id: 'gal-6',
    title: 'Moving Beam Stage Lighting Rig',
    category: 'Lighting',
    image: PHOTOS.expo
  }
];

export const TRUST_CLIENTS = [
  'SAFARICOM',
  'KCB GROUP',
  'CITAM',
  'TOTAL ENERGIES',
  'UN HABITAT',
  'EQUITY BANK'
];

export const TESTIMONIALS = [
  {
    text: 'Professional from setup to strike. Nothing felt rushed, and the sound quality carried the whole conference effortlessly.',
    client: 'Corporate Summit Producer',
    location: 'Nairobi, Kenya'
  },
  {
    text: 'Backup power never dropped once across four nights outdoors. That absolute reliability is why we keep coming back to FEMA.',
    client: 'Church Events Coordinator',
    location: 'CITAM Valley Road'
  },
  {
    text: 'The LED wall and lighting cues were perfectly timed to our brand reveal. Guests and regional executives were still talking about it days later.',
    client: 'Brand Marketing Lead',
    location: 'Westlands, Nairobi'
  }
];
