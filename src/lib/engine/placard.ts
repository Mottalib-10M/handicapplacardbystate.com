/**
 * Disability parking placard rules of the 50 states and DC (src/data/states.json, built by data-src/states.py from the
 * official forms and pages read on 2026-11-13). Pure functions: no figure is typed here, every one comes from the data.
 */
import D from '../../data/states.json';

export type PermKind = 'years' | 'none' | 'ca' | 'birthday' | 'provider' | 'local' | 'life' | null;
export interface State {
  code: string; name: string; slug: string; agency: string; where: string; page: string;
  form: string; form_title: string; form_url: string | null; via: 'direct' | 'index'; read: string;
  perm: { kind: PermKind; n: number | null; fee: number | null; text: string };
  temp: { months: number | null; fee: number | null; renew: string };
  cert: string[]; cert_full: boolean;
  renew_doctor: 'no' | 'yes' | 'partly' | null; renew_text: string;
}
export const STATES = (D as unknown as { states: State[] }).states;
export const READ: string = (D as unknown as { read: string }).read;
export const byCode = (code: string): State => {
  const s = STATES.find((x) => x.code === code);
  if (!s) throw new Error(`Unknown state ${code}`);
  return s;
};
export const STATE_OPTIONS = [...STATES].sort((a, b) => a.name.localeCompare(b.name)).map((s) => ({ value: s.code, label: s.name }));

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** A fee as the reader reads it: "Free", "$5", "$26.50", or "Not stated". */
export function feeText(x: number | null): string {
  if (x === null) return 'Not stated on the form';
  if (x === 0) return 'Free';
  return Number.isInteger(x) ? `$${x}` : `$${x.toFixed(2)}`;
}

/** How long a placard of this type lasts, in words. */
export function lasts(s: State, type: 'perm' | 'temp'): string {
  if (type === 'temp') return s.temp.months === null ? 'Set by your medical professional' : `Up to ${s.temp.months} month${s.temp.months === 1 ? '' : 's'}`;
  switch (s.perm.kind) {
    case 'years': return `${s.perm.n} years`;
    case 'birthday': return `${s.perm.n} years, ending on your birthday`;
    case 'ca': return '2 years, to June 30 of an odd-numbered year';
    case 'none': return 'No expiration date';
    case 'life': return 'For life';
    case 'provider': return s.perm.n ? `Set by your medical professional, up to ${s.perm.n} years` : 'Set by your medical professional';
    case 'local': return 'Set by the local office that issues it';
    default: return 'Not stated on the form';
  }
}

export interface Expiry { year: number | null; month: number | null; text: string }
/**
 * When a placard issued in `month` (1-12) of `year` ends, by the state's rule. `birthMonth` (1-12) serves the states
 * whose permanent placard ends on the holder's birthday. The date printed on the placard always governs.
 */
export function expiry(s: State, type: 'perm' | 'temp', year: number, month: number, birthMonth = month): Expiry {
  const at = (y: number, m: number) => ({ year: y, month: m, text: `${MONTHS[m - 1]} ${y}` });
  const add = (months: number) => { const t = year * 12 + (month - 1) + months; return at(Math.floor(t / 12), (t % 12) + 1); };
  if (type === 'temp') return s.temp.months === null ? { year: null, month: null, text: 'The date your medical professional writes' } : add(s.temp.months);
  switch (s.perm.kind) {
    case 'years': return add(s.perm.n! * 12);
    case 'birthday': return at(year + s.perm.n!, birthMonth);
    // DMV gives the cycle (June 30 of odd-numbered years), not which cycle a new placard starts in: no year is guessed.
    case 'ca': return { year: null, month: 6, text: 'June 30 of an odd-numbered year: the year printed on your placard' };
    case 'none': return { year: null, month: null, text: 'Never: no expiration date' };
    case 'life': return { year: null, month: null, text: 'Never: valid for life' };
    case 'provider': return { year: null, month: null, text: 'The date your medical professional sets' };
    case 'local': return { year: null, month: null, text: 'The date your local issuing office prints' };
    default: return { year: null, month: null, text: 'Not stated: check the date printed on the placard' };
  }
}

/** Whether a renewal asks for a new medical certification, in words. */
export function renewWord(s: State): string {
  return { no: 'No new doctor’s form', yes: 'New medical certification', partly: 'Sometimes (see below)' }[s.renew_doctor ?? 'x'] ?? 'Not stated';
}

/** Professions a reader may ask about, and the words that identify them on a form. */
export const PROFESSIONS = [
  { value: 'md', label: 'Physician (MD or DO)', re: /physician|doctor|medical doctor|osteopath|healing arts|medical provider|health care provider|health professional|medical professional|medical practitioner|health care practitioner|medical authority|medical certification|surgeon/i, strict: /physician|doctor|osteopath|surgeon|healing arts/i },
  { value: 'pa', label: 'Physician assistant (PA)', re: /physician['’]?s? assistant|physician associate|\bPA\b/i },
  { value: 'np', label: 'Nurse practitioner (NP or APRN)', re: /nurse practitioner|advanced practice|advanced registered nurse|APRN|advance practice|advanced-practice/i },
  { value: 'ch', label: 'Chiropractor', re: /chiropract/i },
  { value: 'pod', label: 'Podiatrist', re: /podiatr/i },
  { value: 'opt', label: 'Optometrist', re: /optometr/i },
  { value: 'pt', label: 'Physical therapist', re: /physical therapist/i },
  { value: 'ot', label: 'Occupational therapist', re: /occupational therapist/i },
  { value: 'rn', label: 'Registered nurse (RN)', re: /registered nurse(?! practitioner)|public health nurse/i },
] as const;
export type Signer = 'yes' | 'limited' | 'no' | 'unclear';
/**
 * Can this profession sign the medical part of the application? 'yes' when the form or page names it; 'limited' when it
 * is named with a limit (temporary placards only, blindness only); 'no' when the official list is complete and leaves it
 * out; 'unclear' when the source only says "medical provider" or similar.
 */
export function signer(s: State, prof: string): { v: Signer; line: string | null } {
  const p = PROFESSIONS.find((x) => x.value === prof);
  if (!p) throw new Error(`Unknown profession ${prof}`);
  if (prof === 'rn' && s.cert.some((c) => /not a registered nurse/i.test(c))) return { v: 'no', line: s.cert.find((c) => /registered nurse/i.test(c))! };
  const hit = s.cert.find((c) => (prof === 'md' ? (p as { strict: RegExp }).strict : p.re).test(c) && !(prof === 'rn' && /practitioner/i.test(c)));
  if (hit) return { v: /only|blindness|protocol|vision/i.test(hit) ? 'limited' : 'yes', line: hit };
  if (prof === 'md' && s.cert.some((c) => p.re.test(c))) return { v: 'unclear', line: s.cert[0] };
  return { v: s.cert_full ? 'no' : 'unclear', line: null };
}

/** Cost of `count` placards of one type (the forms charge per placard where they charge). */
export function cost(s: State, type: 'perm' | 'temp', count: number): number | null {
  const f = type === 'perm' ? s.perm.fee : s.temp.fee;
  return f === null ? null : Math.round(f * count * 100) / 100;
}

/** Placard durations, for the national figures written on the guides. */
export function counts() {
  const kinds = STATES.reduce<Record<string, number>>((o, s) => { const k = s.perm.kind ?? 'unstated'; o[k] = (o[k] ?? 0) + 1; return o; }, {});
  const permFree = STATES.filter((s) => s.perm.fee === 0).length;
  const tempFree = STATES.filter((s) => s.temp.fee === 0).length;
  const tempPaid = STATES.filter((s) => (s.temp.fee ?? 0) > 0);
  const noDoctor = STATES.filter((s) => s.renew_doctor === 'no').length;
  const doctor = STATES.filter((s) => s.renew_doctor === 'yes').length;
  const direct = STATES.filter((s) => s.via === 'direct').length;
  const years = STATES.filter((s) => s.perm.kind === 'years' || s.perm.kind === 'birthday' || s.perm.kind === 'ca').map((s) => s.perm.n!);
  return { kinds, permFree, tempFree, tempPaid, noDoctor, doctor, direct, total: STATES.length, minYears: Math.min(...years), maxYears: Math.max(...years) };
}
