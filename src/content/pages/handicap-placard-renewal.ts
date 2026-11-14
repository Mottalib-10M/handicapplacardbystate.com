import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');
const never = ST.filter((s) => s.perm.kind === 'none' || s.perm.kind === 'life');
const noDoc = ST.filter((s) => s.renew_doctor === 'no');
const doc = ST.filter((s) => s.renew_doctor === 'yes');
const part = ST.filter((s) => s.renew_doctor === 'partly');
const unk = ST.filter((s) => s.renew_doctor === null);
const dated = ST.filter((s) => ['years', 'birthday', 'ca', 'provider', 'local'].includes(s.perm.kind ?? ''));
const month = new Date(2026, K.EX.month - 1, 1).toLocaleString('en-US', { month: 'long' });
const bday = ST.filter((s) => s.perm.kind === 'birthday');
const ex = K.expiry(K.S(K.EX.st), 'perm', K.EX.year, K.EX.month);

export default definePage({
  id: 'handicap-placard-renewal', group: 'guides', order: 102, slug: 'handicap-placard-renewal',
  nav: 'Renewal', card: 'When your permanent placard ends, and whether your state wants a new doctor’s signature to renew it.',
  title: 'Handicap Placard Renewal 2026: End Dates and Doctor Rules',
  description: 'Handicap placard renewal in 2026: when a permanent placard ends in each of the 50 states and DC, and where a new doctor’s signature is or is not required.',
  h1: 'Handicap placard renewal: the end date and the doctor rule of your state',
  intro: `Handicap placard renewal depends on two rules of your state: when the permanent placard ends, and whether a doctor must sign again. Enter the month it was issued to see both.`,
  resume: `A permanent placard is permanent in name only in most states: ${dated.length} of the ${K.C.total} jurisdictions print an end date, from ${K.C.minYears} to ${K.C.maxYears} years after issue. ${never.length} have none: ${names(never)}. Three tie the end to your birthday (${names(bday)}); California ends every placard on June 30 of an odd-numbered year. The second question is the doctor. In ${noDoc.length} jurisdictions the official text says a renewal needs no new medical certification; in ${doc.length} it does, and in ${part.length} only in some cases (age or type of condition). For the other ${unk.length}, the pages we read do not say. In ${K.S(K.EX.st).name}, a permanent placard issued in ${month} ${K.EX.year} ends in ${ex.text}, and the doctor does not need to sign again.`,
  faqs: [
    { q: 'What happens if my handicap placard expires?', a: 'A placard is valid until the date printed on it, and an expired one no longer gives access to reserved spaces. Renew before the date printed on it; several states mail a notice or the new placard ahead of that date.' },
    { q: 'Which states renew placards automatically?', a: 'Massachusetts mails the new permanent placard before the old one expires, and Virginia mails it about 60 days ahead. Illinois mails a renewal form about three months ahead, and Nevada, Tennessee and Washington send a notice. Elsewhere, keep an eye on the date yourself.' },
    { q: 'Can I renew a temporary placard?', a: 'Some states allow one renewal or more, others require a whole new application with a new certification, and a few forbid any extension. The temporary placard guide lists the rule of each state, and each state page gives its own.' },
  ],
  body: (h) => `
<h2>When a handicap placard renewal is due</h2>
<p>Read the date printed on your placard first: it governs, whatever a rule of thumb says. The calculator applies the state rule to the month of issue, which helps when the placard is not at hand or when you plan ahead. Four kinds of rules exist. A fixed number of years from issue is the most common. A birthday rule ends the placard in your birth month. California uses a statewide cycle. And ${never.length} jurisdictions issue permanent placards with no end date at all.</p>
${h.mini('renew', { t: 'When your placard ends', p: ['st', 'm', 'y'] })}
<h2>States where the doctor does not sign again</h2>
<p>${noDoc.length} jurisdictions say in their official text that a renewal needs no new medical certification: ${names(noDoc)}. Some of them have nothing to renew, because their permanent placard never expires; others renew by mail or at an office on a short form. Kansas asks you to self-certify on form TR-159a; Pennsylvania only asks for two sections of its form.</p>
<h2>States where a new certification is needed</h2>
<p>In ${names(doc)}, a renewal goes with a new medical certification, often dated within a set number of days before you file: 60 days in Hawaii, New Jersey and Oklahoma, 90 days in Mississippi. In ${names(part)}, it depends: North Carolina waives it at 80 or older, and Missouri at 75 or older and for disabled veterans. Colorado has each new three-year placard validated by a professional.</p>
<p>For ${unk.length} jurisdictions (${names(unk)}), the form or page we read does not say. Ask the office before the date on the placard, or bring a fresh certification to avoid a second trip.</p>
<h2>Temporary placards</h2>
<p>A temporary placard follows other rules: it ends after a few months and is often not renewable. See the ${h.a('temporary-handicap-placard', 'temporary placard guide')}, and the ${h.a('handicap-placard-cost', 'cost page')} for renewal fees where states charge them.</p>
`,
  tool: 'renew',
  related: ['temporary-handicap-placard', 'how-to-get-a-handicap-placard', 'handicap-placard-cost', 'who-can-sign-a-handicap-placard-form'],
  sources: ['cfr_1235_4', 'cfr_1235', 'st_CA', 'st_MA'],
});
