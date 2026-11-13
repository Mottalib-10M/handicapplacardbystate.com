/** Text of the home page (the pillar). Every figure comes from the kit (src/data/states.json, read on 2026-11-13). */
import { KIT as K } from '../lib/kit';
import type { FAQ, Helpers } from '../lib/page-types';

const ST = K.STATES;
const C = K.C;
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');
const never = ST.filter((s) => s.perm.kind === 'none' || s.perm.kind === 'life');
const permPaid = ST.filter((s) => (s.perm.fee ?? 0) > 0);
const noDoc = ST.filter((s) => s.renew_doctor === 'no');
const ex = K.S(K.EX.st);
const exEnd = K.expiry(ex, 'perm', K.EX.year, K.EX.month);
const MONTH = new Date(2026, K.EX.month - 1, 1).toLocaleString('en-US', { month: 'long' });
const sorted = [...ST].sort((a, b) => a.name.localeCompare(b.name));

/** The value sentence (RECETTE §2.4), shown on the home page, the About page and the method page. */
export const VALUE = `Search results for a handicap placard send you to fifty agency sites, each with its own form, fee and renewal rule, or to pages that sell a doctor’s visit. This site reads the official form or page of each of the 50 states and DC, puts the answers side by side, and computes the end date of your placard and whether your renewal needs a doctor. It sells nothing and files nothing for you.`;

export const HOME = {
  title: 'Handicap Placard by State 2026: Form, Cost and Renewal',
  description: 'Handicap placard by state in 2026: the official form, the cost, how long a placard lasts, who may sign and whether renewal needs a doctor, in 50 states and DC.',
  h1: 'Handicap placard by state: form, cost and renewal in all 50 states and DC',
  /** The answer in one sentence, one figure. */
  answer: `A handicap placard is free in ${C.permFree} of the ${C.total - 1} states and DC,; in ${noDoc.length}, renewal needs no new doctor’s signature.`,
  intro: 'Pick your state and the month your placard was issued. The example is a permanent placard issued in Texas in March 2026.',
  resume: `Each state issues its own disability parking placard, under the federal model of 23 CFR part 1235: a permanent placard for a lasting condition, renewed periodically, and a temporary one limited to six months by the model. Read state by state on ${K.day(K.READ)}, the rules differ widely. ${C.permFree} of the ${C.total} jurisdictions issue the permanent placard free; ${permPaid.length} charge for it, up to ${K.fee(Math.max(...permPaid.map((s) => s.perm.fee ?? 0)))} in Tennessee. A permanent placard lasts from ${C.minYears} to ${C.maxYears} years where it has an end date, and never ends in ${names(never)}. ${noDoc.length} jurisdictions renew without a new medical certification. In ${ex.name}, the example on this page, form ${ex.form} gives a free permanent placard that lasts ${K.lasts(ex, 'perm').toLowerCase()}: issued in ${MONTH} ${K.EX.year}, it ends in ${exEnd.text}. Every state recognizes the placards of the others (23 CFR 1235.8).`,
  faqs: [
    { q: 'How do I get a handicap placard in my state?', a: 'Get the official form of the state where you live, fill in your part, have the medical part signed by a professional the form names, and file it where your state says: a county office, a state office, by mail or online. The page of your state gives the form number and the office; New York is the exception, with permits issued by cities, towns and villages.' },
    { q: 'Is this an official government site?', a: 'No. Handicap Placard By State is an independent site published by Radif Partners. It is not a DMV and files no application. It reads the official forms and pages of the state agencies and links to each one, so you can check the source before you apply.' },
    { q: 'Why does the checker say “not stated”?', a: 'Because the official form or page we read does not print that fee or length. We do not fill gaps with guesses. The office of your state will tell you; the link to its page is under Sources. A missing fee is never shown as free, and a missing length never as permanent.' },
    { q: 'Do I need a new placard if I move to another state?', a: 'Yes, in the end: a placard belongs to the state where you live. On a visit, every state recognizes yours under 23 CFR 1235.8. After a move, apply on the form of your new state, which may name different signers, charge a different fee and set a different length. The page of your new state lists all three.' },
    { q: 'How current are these rules?', a: `Every form and page was read on ${K.day(K.READ)}. ${C.direct} were read directly on the agency site; the others refuse automated readers, and their facts come from search excerpts of the same official pages. Forms change: the current form of your state governs.` },
    { q: 'Does a handicap placard work with any car?', a: 'Yes: it is issued to the person, not to a vehicle, and is hung from the rearview mirror of the car the person drives or rides in, as 23 CFR 1235.4 describes. It may be used only when that person is in the car.' },
  ] as FAQ[],
  /** Right under the calculator: how to read the answer. */
  start: (h: Helpers) => `
<h2>Reading the answer for your state</h2>
<p>The large figure is the fee of the placard type you picked, for one placard. Under it, the form to fill in, how long the placard lasts, the month it should end, who may sign the medical part, the renewal rule and the office that issues it. The end month applies the rule of your state to the month of issue; the date printed on your placard always wins.</p>
<p>Three states end the permanent placard on your birthday rather than on the anniversary of issue: open “More options” to enter your birth month. California ends every placard on June 30 of an odd-numbered year, so the year printed on yours is the one to trust. The ${h.a('method', 'method page')} explains each rule.</p>
`,
  /** Open sections. */
  guide: (h: Helpers) => `
<h2>Handicap placard by state: the four rules that differ</h2>
<p><strong>The cost.</strong> Most states charge nothing for a permanent placard. The exceptions are small: ${permPaid.map((s) => `${s.name} ${K.fee(s.perm.fee)}`).join(', ')}. Temporary placards are more often paid. The ${h.a('handicap-placard-cost', 'cost guide')} lists every fee.</p>
<p><strong>How long it lasts.</strong> Fixed terms from ${C.minYears} to ${C.maxYears} years are the rule. Florida, Michigan and Nebraska end it on your birthday; Maine and Ohio let the professional set the length; and ${never.length} jurisdictions issue permanent placards that never expire.</p>
<p><strong>Who signs.</strong> The federal model speaks of a licensed physician (${h.src('cfr_1235_4', '23 CFR 1235.4')}), but most states add other professions: physician assistants, nurse practitioners, chiropractors, optometrists, podiatrists, therapists. The ${h.a('who-can-sign-a-handicap-placard-form', 'signer checker')} answers for one profession and one state.</p>
<p><strong>Renewal.</strong> ${noDoc.length} jurisdictions renew without a new medical certification; others want one each time, sometimes dated within 60 or 90 days. The ${h.a('handicap-placard-renewal', 'renewal guide')} sorts them.</p>
<h2>Temporary placards and trips</h2>
<p>A temporary placard covers a condition expected to improve. The federal model caps it at six months (${h.src('cfr_1235_5', '23 CFR 1235.5')}); a few states go to a year or two. See the ${h.a('temporary-handicap-placard', 'temporary placard guide')}. On a trip, your placard is recognized in every other state and by other countries (${h.src('cfr_1235_8', '23 CFR 1235.8')}); after a move, apply on the form of your new state, as the ${h.a('handicap-placard-in-another-state', 'travel guide')} explains.</p>
<h2>All 50 states and DC at a glance</h2>
${h.table(['State', 'Form', 'Permanent placard', 'Lasts', 'Temporary placard'], sorted.map((s) => [h.a(s.slug, s.name), s.form, K.fee(s.perm.fee), K.lasts(s, 'perm'), `${K.fee(s.temp.fee)}, ${K.lasts(s, 'temp').toLowerCase()}`]), `Disability parking placards of the 50 states and DC, read on ${K.day(K.READ)}`)}
`,
  /** Folded sections (<details>, content kept in the HTML). */
  folds: [
    { id: 'apply', title: 'How an application works, step by step', html: (h: Helpers) => `
<p>The form you need is the one of the state where you live, not where your doctor practices. Your part asks for your name, address and usually your driver’s license or state ID number. The medical part is certified by a professional the form names. Then the form goes where your state says: in many states a county office (a tax collector, a county clerk, a treasurer or a tag office), elsewhere a state motor vehicle office, by mail, or online where it is offered.</p>
<p>Some states run the whole process by mail, such as Oklahoma, Pennsylvania and Wyoming. Nebraska lets your medical professional apply online for you. In New York, the state DMV issues only plates: the parking permit comes from your city, town or village. In Hawaii, a state board publishes the form and the counties issue the placard. The ${h.a('how-to-get-a-handicap-placard', 'application guide')} walks through the four steps for your state.</p>
` },
    { id: 'federal', title: 'The federal model behind every state placard', html: (h: Helpers) => `
<p>The rules of all states follow a federal model, the Uniform System for Parking for Persons with Disabilities, in ${h.src('cfr_1235', '23 CFR part 1235')}. It asks each state to issue a removable windshield placard on the application of a person whose disability limits or impairs the ability to walk, certified by a licensed physician, and to renew it periodically. It asks for one additional placard on request to an applicant without special plates. The temporary placard is limited to six months by the physician’s certification. The placard hangs from the rearview mirror, or lies on the dashboard when there is no mirror.</p>
<p>States build on that model. Most have widened the list of signers, some have dropped the end date, and others set their own fees and renewal checks. That is why the answer depends on the state, and why each state page of this site cites its own official form.</p>
` },
    { id: 'gaps', title: 'What this site does not know', html: (h: Helpers) => `
<p>When an official form or page does not print a fee, a length or a renewal rule, the checker says “not stated” rather than guessing. That happens for the permanent fee in ${ST.filter((s) => s.perm.fee === null).length} jurisdictions and for the renewal rule in ${ST.filter((s) => s.renew_doctor === null).length}. ${C.total - C.direct} agency sites refuse automated readers; their facts come from search excerpts of their own official pages, and each state page says so. The site does not cover license plates for people with disabilities, organizational placards, or the rules of parking itself, which cities set. Read more on the ${h.a('method', 'method page')}.</p>
` },
  ],
  sources: ['cfr_1235', 'cfr_1235_4', 'cfr_1235_5', 'cfr_1235_8', 'st_CA', 'st_TX', 'st_FL', 'st_NY'],
};
