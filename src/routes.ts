import type { PageView } from './types';
import { EQUIPMENT_DATA, OCCASIONS_DATA } from './data/femaData';

export interface RouteState {
  view: PageView;
  equipmentId: string | null;
  occasionId: string | null;
}

const TOP_LEVEL: PageView[] = ['equipment', 'occasions', 'our-work', 'about'];

const safeDecode = (s: string) => {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
};

/** Normalises a pathname: no trailing slash, "" becomes "/". */
export const normalizePath = (pathname: string): string => {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

/**
 * URL -> app state.
 *   /                    home
 *   /equipment           equipment catalog
 *   /equipment/:id       equipment detail (e.g. /equipment/led-screens)
 *   /occasions           occasions catalog
 *   /occasions/:id       occasion detail  (e.g. /occasions/churches)
 *   /our-work, /about
 * Anything unknown falls back to home (the app then rewrites the URL to "/").
 */
export const parsePath = (pathname: string): RouteState => {
  const [first, second] = normalizePath(pathname)
    .split('/')
    .filter(Boolean)
    .map(safeDecode);

  const home: RouteState = { view: 'home', equipmentId: null, occasionId: null };
  if (!first || !TOP_LEVEL.includes(first as PageView)) return home;

  const view = first as PageView;
  if (view === 'equipment') {
    const ok = second && EQUIPMENT_DATA.some((e) => e.id === second);
    return { view, equipmentId: ok ? second : null, occasionId: null };
  }
  if (view === 'occasions') {
    const ok = second && OCCASIONS_DATA.some((o) => o.id === second);
    return { view, equipmentId: null, occasionId: ok ? second : null };
  }
  return { view, equipmentId: null, occasionId: null };
};

/** App state -> URL path. */
export const buildPath = (
  view: PageView,
  equipmentId: string | null,
  occasionId: string | null
): string => {
  if (view === 'home') return '/';
  if (view === 'equipment' && equipmentId) return `/equipment/${equipmentId}`;
  if (view === 'occasions' && occasionId) return `/occasions/${occasionId}`;
  return `/${view}`;
};
