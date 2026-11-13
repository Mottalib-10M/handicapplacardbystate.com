/**
 * The calculators of the site, rendered by components/calc/SpecTool.tsx (full tool) and MiniSim.tsx (mini-simulator).
 * Every answer comes from the engine (lib/engine/placard.ts) and src/data/states.json: the rules of the 50 states and
 * DC as printed on their official forms and pages, read on November 13, 2026. `arg` overrides the default of any field.
 * This file ships to the browser.
 */
import type { ToolSpec, V, Input, ToolOut } from './tool-types';
import { STATES, STATE_OPTIONS, MONTHS, PROFESSIONS, byCode, feeText, lasts, expiry, renewWord, signer, cost, READ, type State } from './engine/placard';

const s = (v: V, k: string) => String(v[k]);
const n = (v: V, k: string) => Number(v[k]) || 0;
const MONTHS_LONG = MONTHS;
export const longDate = (iso: string) => `${MONTHS_LONG[Number(iso.slice(5, 7)) - 1]} ${Number(iso.slice(8, 10))}, ${iso.slice(0, 4)}`;

/** ONE example case for the whole site: a permanent placard issued in Texas in March 2026. */
export const EX = { st: 'TX', type: 'perm', month: 3, year: 2026, birth: 9 } as const;

const STATE = (def: string = EX.st, label = 'Your state'): Input => ({ kind: 'select', id: 'st', label, def, options: STATE_OPTIONS, help: 'Where the person with the disability lives' });
const TYPE: Input = { kind: 'choice', id: 'type', label: 'Placard type', def: EX.type, options: [{ value: 'perm', label: 'Permanent' }, { value: 'temp', label: 'Temporary' }] };
const MONTH: Input = { kind: 'select', id: 'm', label: 'Month it was issued', short: 'issued in', def: String(EX.month), options: MONTHS.map((x, i) => ({ value: String(i + 1), label: x })) };
const YEAR: Input = { id: 'y', label: 'Year it was issued', short: 'year', def: EX.year, max: 2040, help: 'A new placard: this year' };
const BIRTH: Input = { kind: 'select', id: 'b', label: 'Your birth month (Florida, Michigan, Nebraska)', short: 'birth month', def: String(EX.birth), adv: true, options: MONTHS.map((x, i) => ({ value: String(i + 1), label: x })), help: 'These three states end it on your birthday' };
const typeOf = (v: V) => (s(v, 'type') === 'temp' ? 'temp' : 'perm') as 'perm' | 'temp';
const typeWord = (t: 'perm' | 'temp') => (t === 'perm' ? 'permanent' : 'temporary');
const official = (st: State) => `Read on the ${st.via === 'direct' ? 'official form or page' : 'official page, through search excerpts (the site refuses automated readers)'} of ${st.agency} on ${longDate(st.read)}. The form and the date printed on your placard govern.`;
const signers = (st: State) => `${st.cert.join(', ')}${st.cert_full ? '' : ' (no full list on the page we read)'}`;

type Arg = Record<string, number | string>;
function spec(inputs: Input[], arg: Arg, run: (v: V) => ToolOut): ToolSpec {
  return {
    inputs: inputs.map((i) => (arg[i.id] === undefined ? i : { ...i, def: (i.kind === 'choice' || i.kind === 'select') ? String(arg[i.id]) : Number(arg[i.id]) } as Input)),
    run,
  };
}

/** The answer for one state and one placard type: form, cost, length, end date, who signs, renewal. */
function answer(v: V): ToolOut {
  const st = byCode(s(v, 'st')), t = typeOf(v);
  const fee = t === 'perm' ? st.perm.fee : st.temp.fee;
  const end = expiry(st, t, n(v, 'y'), n(v, 'm'), n(v, 'b'));
  return {
    label: `${st.name}, ${typeWord(t)} placard: cost`, value: feeText(fee),
    sub: `${lasts(st, t)} · form ${st.form}`,
    rows: [
      ['Form to fill in', st.form],
      ['How long it lasts', lasts(st, t)],
      ['Ends around', end.text],
      ['Who can sign the medical part', signers(st)],
      ['Renewal', t === 'perm' ? renewWord(st) : st.temp.renew],
      ['Where to apply', st.where],
    ],
    note: official(st),
    example: `Example: a ${typeWord(t)} placard issued in ${MONTHS[n(v, 'm') - 1]} ${n(v, 'y')} in ${st.name}`,
  };
}

const SPECS: Record<string, (arg?: Arg) => ToolSpec> = {
  /** Home and state pages: everything about one state's placard. */
  all: (arg = {}) => spec([STATE(), TYPE, MONTH, YEAR, BIRTH], arg, answer),
  state: (arg = {}) => spec([STATE(), TYPE, MONTH, YEAR, BIRTH], arg, answer),

  /** Renewal: when it ends, and whether the doctor must sign again. */
  renew: (arg = {}) => spec([STATE(), TYPE, MONTH, YEAR, BIRTH], arg, (v) => {
    const st = byCode(s(v, 'st')), t = typeOf(v);
    const end = expiry(st, t, n(v, 'y'), n(v, 'm'), n(v, 'b'));
    const doctor = t === 'temp' ? 'A new application with a new certification' : renewWord(st);
    return {
      label: `${st.name}: your ${typeWord(t)} placard ends`, value: end.year ? end.text : end.text.split(':')[0],
      sub: t === 'perm' ? `Doctor again at renewal: ${doctor}` : `Temporary placards: ${st.temp.renew}`,
      rows: [
        ['Ends', end.text],
        ['New medical certification', doctor],
        ['What the state says', t === 'perm' ? st.renew_text : st.temp.renew],
        ['Renewal fee', t === 'perm' ? feeText(st.perm.fee) : feeText(st.temp.fee)],
        ['Form', st.form],
      ],
      note: official(st),
      example: `Example: a ${typeWord(t)} placard issued in ${MONTHS[n(v, 'm') - 1]} ${n(v, 'y')} in ${st.name}`,
    };
  }),

  /** Temporary against permanent, side by side, for one state. */
  temp: (arg = {}) => spec([STATE()], arg, (v) => {
    const st = byCode(s(v, 'st'));
    return {
      label: `${st.name}: longest temporary placard`, value: st.temp.months === null ? 'Not stated' : `${st.temp.months} months`,
      sub: `Temporary: ${feeText(st.temp.fee)} · permanent: ${feeText(st.perm.fee)}`,
      rows: [['Temporary placard lasts', lasts(st, 'temp')], ['Temporary placard costs', feeText(st.temp.fee)], ['After it ends', st.temp.renew], ['Permanent placard lasts', lasts(st, 'perm')]],
      table: { caption: `${st.name}: the two placards side by side`, headers: ['', 'Temporary', 'Permanent'], rows: [['Lasts', lasts(st, 'temp'), lasts(st, 'perm')], ['Costs', feeText(st.temp.fee), feeText(st.perm.fee)], ['Renewal', st.temp.renew, renewWord(st)]], align: ['l', 'l', 'l'] },
      note: official(st),
      example: `Example: ${st.name}`,
    };
  }),

  /** Can my doctor, PA, nurse practitioner, chiropractor… sign the form? */
  signer: (arg = {}) => spec([STATE(), { kind: 'select', id: 'pro', label: 'Who would sign', def: 'np', options: PROFESSIONS.map((p) => ({ value: p.value, label: p.label })) }], arg, (v) => {
    const st = byCode(s(v, 'st')), p = PROFESSIONS.find((x) => x.value === s(v, 'pro'))!;
    const r = signer(st, p.value);
    const word = { yes: 'Yes', limited: 'Yes, with a limit', no: 'Not on the list', unclear: 'Not named' }[r.v];
    return {
      label: `${st.name}: can a ${p.label.replace(/ \(.*\)/, '').toLowerCase()} sign?`, value: word,
      sub: r.v === 'yes' ? `Named on ${st.form}` : r.v === 'limited' ? `Named with a limit: ${r.line}` : r.v === 'no' ? `${st.form} gives a closed list without this profession` : 'The official text names no list of professions: ask the agency',
      rows: [['Professions named', signers(st)], ['Form', st.form], ['Where to apply', st.where]],
      note: official(st),
      example: `Example: a ${p.label.toLowerCase()} in ${st.name}`,
    };
  }),

  /** Driving to another state with your placard. */
  travel: (arg = {}) => spec([STATE(EX.st, 'State that issued your placard'), { kind: 'select', id: 'to', label: 'State you are visiting', def: 'CA', options: STATE_OPTIONS }], arg, (v) => {
    const from = byCode(s(v, 'st')), to = byCode(s(v, 'to'));
    const same = from.code === to.code;
    return {
      label: same ? `${from.name} placard at home` : `${from.name} placard in ${to.name}`, value: same ? 'Valid' : 'Recognized',
      sub: same ? 'Pick another state to see the rule for a trip' : 'Federal rule 23 CFR 1235.8: every state recognizes the placards of other states',
      rows: [
        ['Your placard lasts', lasts(from, 'perm')],
        ['Recognized in other states', 'Yes, by the federal reciprocity rule'],
        ['Rules that apply while parked', same ? `${from.name} rules` : `${to.name} rules (meters, time limits, local permits)`],
        [`Moving to ${to.name}`, `Apply there with form ${to.form}`],
      ],
      note: `Reciprocity: 23 CFR 1235.8, read on eCFR on ${longDate(READ)}. ${official(to)}`,
      example: `Example: a ${from.name} placard used in ${to.name}`,
    };
  }),

  /** What the placards cost, one or two. */
  cost: (arg = {}) => spec([STATE(), TYPE, { id: 'q', label: 'Number of placards', def: 1, max: 2, help: 'A second one on request (23 CFR 1235.4)' }], arg, (v) => {
    const st = byCode(s(v, 'st')), t = typeOf(v), q = Math.max(1, Math.min(2, Math.round(n(v, 'q')) || 1));
    const c = cost(st, t, q);
    return {
      label: `${st.name}: ${q} ${typeWord(t)} placard${q > 1 ? 's' : ''}`, value: c === null ? 'Not stated' : c === 0 ? 'Free' : feeText(c),
      sub: `${feeText(t === 'perm' ? st.perm.fee : st.temp.fee)} each · ${lasts(st, t)}`,
      rows: [['Each placard', feeText(t === 'perm' ? st.perm.fee : st.temp.fee)], ['Placards', String(q)], ['Total', c === null ? 'Not stated on the form' : feeText(c)], ['Other placard type', `${typeWord(t === 'perm' ? 'temp' : 'perm')}: ${feeText(t === 'perm' ? st.temp.fee : st.perm.fee)}`]],
      note: `${official(st)} Office service fees and license plates are not included.`,
      example: `Example: ${q} ${typeWord(t)} placard in ${st.name}`,
    };
  }),

  /** How to get one: the steps for a state. */
  steps: (arg = {}) => spec([STATE(), TYPE], arg, (v) => {
    const st = byCode(s(v, 'st')), t = typeOf(v);
    return {
      label: `${st.name}: the form to start with`, value: st.form,
      sub: `${feeText(t === 'perm' ? st.perm.fee : st.temp.fee)} · ${lasts(st, t)}`,
      rows: [['Cost', feeText(t === 'perm' ? st.perm.fee : st.temp.fee)], ['Lasts', lasts(st, t)]],
      table: { caption: `Getting a ${typeWord(t)} placard in ${st.name}, step by step`, headers: ['Step', 'What to do'], rows: [
        ['1', `Get ${st.form} (${st.form_title}) from ${st.agency}.`],
        ['2', 'Fill in your part: name, address, driver’s license or ID number.'],
        ['3', `Have the medical part signed by one of: ${signers(st)}.`],
        ['4', `Hand it in at ${st.where}${(t === 'perm' ? st.perm.fee : st.temp.fee) ? `, with ${feeText(t === 'perm' ? st.perm.fee : st.temp.fee)} per placard` : ''}.`],
      ], align: ['l', 'l'] },
      note: official(st),
      example: `Example: a ${typeWord(t)} placard in ${st.name}`,
    };
  }),
};

export function getTool(kind: string, arg?: Arg): ToolSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown tool ${kind}`);
  return f(arg);
}
export const TOOL_KINDS = Object.keys(SPECS);
export { STATES };
