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

/** Answer of the official form when it prints nothing (testers 2026-11-14: never "Not stated" as the answer). */
export const NOT_PRINTED = 'Not printed on the form';
/** A fee as the reader reads it: "Free", "$5", "$26.50", or "Not printed on the form". */
export function feeText(x: number | null): string {
  if (x === null) return NOT_PRINTED;
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
    default: return NOT_PRINTED;
  }
}

/** Lowercase the first letter only (a following "June 30" keeps its capital). */
export const lcFirst = (x: string) => x.charAt(0).toLowerCase() + x.slice(1);

/** The form as a sentence names it: "Form 861", "form REG 195", "the Disabled Placard application". */
export function formRef(s: State): string {
  if (/^(State )?Form\b/.test(s.form)) return s.form;
  if (/^[A-Z]{1,6}[- ]?\d|^\d|^[A-Z]{2,}[- ]?[A-Z]?\d/.test(s.form)) return `form ${s.form}`;
  if (/^Medical statement/.test(s.form)) return `a ${lcFirst(s.form)}`;
  return `the ${s.form}`;
}

/** The permanent placard's fee and length in one plain sentence, without "not stated" in the middle of it. */
export function permSentence(s: State, subject: string): string {
  const fee = s.perm.fee, k = s.perm.kind;
  const length = k === 'none' ? 'never expires' : k === 'life' ? 'stays valid for life' : k === 'local' ? 'lasts as long as the local office that issues it decides'
    : k === 'provider' ? `lasts as long as your medical professional sets${s.perm.n ? `, up to ${s.perm.n} years` : ''}` : k === null ? null : `lasts ${lcFirst(lasts(s, 'perm'))}`;
  if (fee === null && length === null) return `The form for the ${subject} prints neither its fee nor how long it lasts: ask the office where you apply.`;
  if (fee === null) return `The ${subject} for a permanent disability ${length}; its form does not print the fee, so ask the office where you apply.`;
  const price = fee === 0 ? 'is free' : `costs ${feeText(fee)}`;
  if (length === null) return `The ${subject} for a permanent disability ${price}; its form does not print how long it lasts.`;
  return `The ${subject} for a permanent disability ${price} and ${length}.`;
}

/** The next June 30 of an odd-numbered year on or after the month of issue (California, REG 195 cycle). */
export function caEnd(year: number, month: number): number {
  let y = year % 2 === 1 ? year : year + 1;
  if (y === year && month > 6) y += 2;
  return y;
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
    // DMV: every permanent placard expires on June 30 of an odd-numbered year: the first one after the month of issue.
    case 'ca': { const y = caEnd(year, month); return { year: y, month: 6, text: `June 30, ${y}` }; }
    case 'none': return { year: null, month: null, text: 'Never: no expiration date' };
    case 'life': return { year: null, month: null, text: 'Never: valid for life' };
    case 'provider': return { year: null, month: null, text: 'The date your medical professional sets' };
    case 'local': return { year: null, month: null, text: 'The date your local issuing office prints' };
    default: return { year: null, month: null, text: 'Not printed on the form: look at the date on your placard' };
  }
}

/** Whether a renewal asks for a new medical certification, in words. */
export function renewWord(s: State): string {
  if (s.perm.kind === 'none' || s.perm.kind === 'life') return 'Nothing to renew, it does not expire';
  if (s.renew_doctor === 'partly') return `Depends on your case. ${s.renew_text}`;
  return { no: 'No new doctor’s form', yes: 'Yes, a new doctor’s form' }[s.renew_doctor ?? 'x'] ?? `${NOT_PRINTED}, so ask the office where you apply`;
}

/** What happens to a temporary placard when it ends, without the source's "not stated on the page we read". */
export const tempRenew = (s: State) => (/^Not stated/.test(s.temp.renew) ? `${NOT_PRINTED}, so ask the office where you apply` : s.temp.renew);

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
