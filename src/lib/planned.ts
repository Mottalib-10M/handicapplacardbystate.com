/** Every page id the site is meant to have. Content tests accept links to these ids while pages are being written. */
import D from '../data/states.json';
export const PLANNED_GUIDES = [
  'how-to-get-a-handicap-placard', 'handicap-placard-renewal', 'temporary-handicap-placard',
  'who-can-sign-a-handicap-placard-form', 'handicap-placard-in-another-state', 'handicap-placard-cost',
];
export const PLANNED_IDS = new Set<string>([...PLANNED_GUIDES, ...(D as { states: Array<{ slug: string }> }).states.map((s) => s.slug)]);
