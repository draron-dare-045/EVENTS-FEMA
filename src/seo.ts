import { useEffect } from 'react';
import type { PageView } from './types';

interface SeoMeta {
  title: string;
  description: string;
}

/**
 * Title + meta description for every page/subpage (invisible to visitors).
 * Keys: view name, "eq:<equipment id>" and "oc:<occasion id>".
 */
const SEO_META: Record<string, SeoMeta> = {
  "home": {
    "title": "FEMA Events | AV, LED Screen & Sound Hire in Nairobi, Kenya",
    "description": "FEMA Events hires concert sound, LED screens, stage lighting, staging, pyrotechnics and backup generators for events across Nairobi and Kenya. Get a quote."
  },
  "equipment": {
    "title": "Event Equipment Hire in Kenya | LED, Sound, Lighting | FEMA",
    "description": "Browse FEMA Events' event equipment for hire in Kenya: LED video walls, concert line arrays, stage lighting, stages, special effects and power. Book today."
  },
  "occasions": {
    "title": "Event AV Solutions Kenya | Crusades, Summits, Launches",
    "description": "See how FEMA Events powers church crusades, conferences, brand launches, public rallies and memorial services across Kenya with sound, LED, lighting, staging."
  },
  "our-work": {
    "title": "Our Work | Event Production Case Studies in Kenya | FEMA",
    "description": "Explore FEMA Events case studies and photo gallery: corporate summits, multi-night crusades and brand launches powered with LED, sound and lighting in Kenya."
  },
  "about": {
    "title": "About FEMA Events | Certified AV Production Crew in Kenya",
    "description": "Meet the certified FEMA Events crew: in-house engineers, 100% power redundancy, 24/7 live monitoring and nationwide logistics for live events across Kenya."
  },
  "eq:led-screens": {
    "title": "LED Screen Hire Nairobi | P2.6 & P4.8 Video Walls | FEMA",
    "description": "Hire indoor & outdoor LED screens in Nairobi: P2.6 and P4.8 modular video walls, daylight-visible panels, stage backdrops and video switchers from FEMA Events."
  },
  "eq:lighting": {
    "title": "Stage Lighting Hire Nairobi | Moving Heads & Washes | FEMA",
    "description": "Hire stage & architectural lighting in Nairobi: intelligent moving heads, warm washes, profile spots and mood uplighting for any venue, from FEMA Events Kenya."
  },
  "eq:sound-audio": {
    "title": "Concert Sound System Hire Nairobi | Line Array | FEMA Events",
    "description": "Hire professional sound in Nairobi: concert line arrays, digital mixers and wireless microphone systems for crisp coverage at any Kenyan event. Get a quote."
  },
  "eq:stages": {
    "title": "Stage & Platform Hire Nairobi | Modular Staging | FEMA",
    "description": "Hire stages in Nairobi: modular risers, heavy-duty outdoor concert stages, podiums and safety guardrails, delivered and rigged by the FEMA Events crew in Kenya."
  },
  "eq:pyrotechnics": {
    "title": "Pyrotechnics & Special Effects Hire Kenya | FEMA Events",
    "description": "Hire special effects in Kenya: cold-spark fountains, CO2 cryo jets, low-lying fog machines and synchronized atmospheric effects, run by the FEMA Events crew."
  },
  "eq:generators": {
    "title": "Generator Hire Nairobi | Silent Event Power | FEMA Events",
    "description": "Hire super-silent backup generators in Nairobi with automatic transfer switches and heavy-duty event power distribution for reliable power at any Kenyan event."
  },
  "oc:churches": {
    "title": "Church Crusade Sound & LED Screen Hire Kenya | FEMA Events",
    "description": "Sound, daylight LED screens and stages for church crusades and multi-day gatherings in Kenya. Dynamic worship audio and clear voice coverage from FEMA Events."
  },
  "oc:conferences": {
    "title": "Conference & Summit AV Hire Nairobi | FEMA Events Kenya",
    "description": "Distraction-free AV for conferences, summits and AGMs in Nairobi: keynote sound, LED walls, hybrid streaming and panel setups delivered by FEMA Events Kenya."
  },
  "oc:launches": {
    "title": "Product & Brand Launch Production Kenya | FEMA Events",
    "description": "Launch your product with high-impact staging in Kenya: reveal lighting, LED walls and special effects synced into one production by the FEMA Events crew."
  },
  "oc:rallies": {
    "title": "Public Rally Stage & Sound Hire Kenya | FEMA Events",
    "description": "Hire long-throw line arrays, daylight-visible LED walls and stages for public rallies and open-air gatherings across Kenya with FEMA Events. Book your date."
  },
  "oc:funerals": {
    "title": "Memorial Service Sound & Screen Hire Kenya | FEMA Events",
    "description": "Reverent, evenly distributed sound and discreet tribute screens for funerals and memorial services in Kenya, so families can focus on the day. FEMA Events."
  }
};

const setContent = (selector: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
};

/** Keeps <title> and social/meta tags in sync with the page being viewed. */
export const useSeo = (
  view: PageView,
  equipmentId: string | null,
  occasionId: string | null
) => {
  useEffect(() => {
    const key =
      view === 'equipment' && equipmentId
        ? `eq:${equipmentId}`
        : view === 'occasions' && occasionId
        ? `oc:${occasionId}`
        : view;
    const meta = SEO_META[key] ?? SEO_META[view] ?? SEO_META.home;

    document.title = meta.title;
    setContent('meta[name="description"]', meta.description);
    setContent('meta[property="og:title"]', meta.title);
    setContent('meta[property="og:description"]', meta.description);
    setContent('meta[name="twitter:title"]', meta.title);
    setContent('meta[name="twitter:description"]', meta.description);
  }, [view, equipmentId, occasionId]);
};
