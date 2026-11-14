/**
 * One page per state and DC. The facts (form, cost, length, signers, renewal) come from src/data/states.json; the prose
 * is written by hand for each state in src/content/states/*.ts (what is particular there), so no two pages read alike.
 */
import type { FAQ, PageDef } from './page-types';
import { STATES, feeText, lasts, renewWord, tempRenew, formRef, permSentence, lcFirst, type State } from './engine/placard';
import { NOTES_1 } from '../content/states/notes-1';
import { NOTES_2 } from '../content/states/notes-2';
import { NOTES_3 } from '../content/states/notes-3';
import { NOTES_4 } from '../content/states/notes-4';
import { EXTRA } from '../content/states/extra';
import { FAQS_1 } from '../content/states/faqs-1';
import { FAQS_2 } from '../content/states/faqs-2';
import { FAQS_3 } from '../content/states/faqs-3';
import { FAQS_4 } from '../content/states/faqs-4';
const FAQS: Record<string, FAQ[]> = { ...FAQS_1, ...FAQS_2, ...FAQS_3, ...FAQS_4 };

export interface StateNote {
  /** ONE paragraph, the cited answer for that state (what is particular there). */
  resume: string;
  /** How to apply there, in plain words (2 to 4 sentences). */
  how: string;
  /** Renewal or the second placard there (1 to 3 sentences). */
  renew: string;
}
export const NOTES: Record<string, StateNote> = { ...NOTES_1, ...NOTES_2, ...NOTES_3, ...NOTES_4 };

/** First candidate whose length falls in [min, max] (RECETTE §11: titles 50-60, descriptions 150-160 characters). */
export function fit(cands: string[], min: number, max: number, what: string): string {
  const ok = cands.find((c) => c.length >= min && c.length <= max);
  if (!ok) throw new Error(`${what}: no candidate in [${min},${max}] (${cands.map((c) => c.length).join(', ')})`);
  return ok;
}

const short = (st: State) => (st.perm.kind === 'years' || st.perm.kind === 'birthday' ? `${st.perm.n} years` : st.perm.kind === 'ca' ? '2 years' : st.perm.kind === 'none' || st.perm.kind === 'life' ? 'no end date' : 'a set term');
const feeWord = (x: number | null) => (x === null ? 'a fee' : x === 0 ? 'free' : feeText(x));

export function titleOf(st: State): string {
  const N = st.name, F = st.form.replace(/^(Form|State Form) /, '');
  return fit([
    `${N} Handicap Placard 2026: Form ${F}, Cost, Renewal`,
    `${N} Handicap Placard 2026: ${F}, Cost and Renewal`,
    `${N} Handicap Placard 2026: Form, Cost and Renewal Rules`,
    `${N} Handicap Placard 2026: Form, Cost, Renewal`,
    `${N} Handicap Placard 2026: Form, Fee, How Long It Lasts`,
    `${N} Handicap Placard 2026: Form and Renewal`,
    `${N} Handicap Placard 2026: Form, Cost`,
    `${N} Handicap Placard: Form and Fees`,
  ], 50, 60, `title ${st.code}`);
}

export function descriptionOf(st: State): string {
  const N = st.name;
  const perm = st.perm.fee === null ? `the permanent placard (${short(st)})` : `a ${feeWord(st.perm.fee)} permanent placard (${short(st)})`;
  const temp = st.temp.fee === null ? 'the temporary one' : `a ${feeWord(st.temp.fee)} temporary one`;
  const heads = [`${N} handicap placard in 2026: form ${st.form}`, `${N} handicap placard 2026: ${st.form}`, `${N} handicap placard 2026`];
  const tails = [', who can sign it and whether renewal needs a doctor.', ', who signs and whether renewal needs a doctor.', ', who signs it and the renewal rule.', ', who signs and the renewal rule.', ' and who signs.', '.'];
  const mids = [`, ${perm}, ${temp}`, `, ${perm}`, `: ${perm}, ${temp}`, `: ${perm}`, ''];
  const cands: string[] = [];
  for (const h of heads) for (const m of mids) for (const t of tails) cands.push(`${h}${m}${t}`);
  return fit(cands, 150, 160, `description ${st.code}`);
}

export function statePages(): PageDef[] {
  return STATES.map((st, i): PageDef => {
    const note = NOTES[st.code];
    if (!note) throw new Error(`No note for ${st.code}`);
    const kw = `${st.name} handicap placard`;
    const tempFee = feeText(st.temp.fee), permFee = feeText(st.perm.fee);
    return {
      id: st.slug, group: 'states', order: 200 + i, slug: st.slug,
      nav: st.name,
      card: `${st.form}: permanent ${lcFirst(permFee)}, ${lcFirst(lasts(st, 'perm'))}; temporary ${lcFirst(tempFee)}.`,
      title: titleOf(st), description: descriptionOf(st),
      h1: `${kw}: ${formRef(st)}, cost and how long it lasts`,
      intro: permSentence(st, kw),
      resume: `${note.resume} ${EXTRA[st.code] ?? ''} Source: ${st.agency}, ${st.form} (“${st.form_title}”), read on November 13, 2026.`.replace(/\s+/g, ' '),
      faqs: FAQS[st.code] ?? [],
      body: (h) => `
<h2>How to apply for the ${kw}</h2>
<p>${note.how}</p>
<p><strong>${h.src(st.form_url ? `form_${st.code}` : `st_${st.code}`, st.form_url ? `Open ${formRef(st)} on the ${st.agency} site` : `Open the ${st.agency} page`)}</strong></p>
${h.mini('signer', { t: `Can your health professional sign the ${st.name} form?`, p: ['pro'], d: { st: st.code } })}
${h.table(['', 'Permanent placard', 'Temporary placard'], [
  ['Cost', permFee, tempFee],
  ['Lasts', lasts(st, 'perm'), lasts(st, 'temp')],
  ['Renewal', renewWord(st), tempRenew(st)],
], `${st.name}: the two placards on ${formRef(st)}`)}
<h2>Renewing the ${kw}</h2>
<p>${note.renew}</p>
`,
      tool: 'state', toolArg: { st: st.code },
      related: ['handicap-placard-renewal', 'who-can-sign-a-handicap-placard-form', 'handicap-placard-in-another-state', 'temporary-handicap-placard'],
      sources: [`st_${st.code}`, ...(st.form_url && st.form_url !== st.page ? [`form_${st.code}`] : []), 'cfr_1235'],
    };
  });
}
