import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const permPaid = ST.filter((s) => (s.perm.fee ?? 0) > 0).sort((a, b) => (b.perm.fee ?? 0) - (a.perm.fee ?? 0));
const permNone = ST.filter((s) => s.perm.fee === null);
const tempPaid = K.C.tempPaid;
const list = (a: typeof ST, t: 'perm' | 'temp') => a.map((s) => `${s.name} (${K.fee(t === 'perm' ? s.perm.fee : s.temp.fee)})`).join(', ');

export default definePage({
  id: 'handicap-placard-cost', group: 'guides', order: 106, slug: 'handicap-placard-cost',
  nav: 'Cost', card: 'Free in most states; the fees of the others for a permanent or a temporary placard, one or two.',
  title: 'Handicap Placard Cost 2026: Fees in All 50 States and DC',
  description: 'Handicap placard cost in 2026: free for a permanent placard in most states, the fees charged in the others, and the price of a temporary placard in each state.',
  h1: 'Handicap placard cost: what each state charges',
  intro: `The handicap placard cost is zero for a permanent placard in most states. Pick your state, the type and the number of placards: the total comes from the official form.`,
  resume: `On the forms and pages we read on ${K.day(K.READ)}, ${K.C.permFree} of the ${K.C.total} jurisdictions issue the permanent placard free. ${permPaid.length} charge for it: ${list(permPaid, 'perm')}. Tennessee then charges $3 to renew, or nothing if the vehicle is registered in your name, and Ohio’s $8 standard placard is the cheaper option beside its $15 permanent one. Temporary placards are more often paid: ${tempPaid.length} jurisdictions charge, from $2 in Missouri to $15 in Florida. For ${permNone.length} jurisdictions (${permNone.map((s) => s.name).join(', ')}), the form we read prints no fee for the permanent placard; that does not mean it is free.`,
  faqs: [
    { q: 'Is a handicap placard free?', a: `The permanent placard is free in ${K.C.permFree} of the ${K.C.total} jurisdictions we read. A temporary one is free in ${K.C.tempFree}. Office service fees, where they exist, are not included. For the other jurisdictions, the form we read either prints a fee or prints none; a missing fee is marked “not stated”, never assumed to be zero.` },
    { q: 'Does a second placard cost more?', a: 'Where the form charges, it charges per placard: two placards cost twice the fee. North Carolina caps the number at two, at $5 each. The calculator multiplies the fee by the number you choose. Where the placard is free, a second one is free too.' },
    { q: 'How many placards can one person get?', a: 'The federal model, 23 CFR 1235.4, asks states to issue one additional placard on request to an applicant who has no special license plates, so two in general. The same rule applies to temporary placards under 1235.5. Some states print their own limit, such as North Carolina, which caps the number at two.' },
  ],
  body: (h) => `
<h2>Handicap placard cost for a permanent placard</h2>
<p>The federal model in 23 CFR part 1235 does not set a fee, and most states charge nothing. The exceptions are small sums: ${list(permPaid, 'perm')}. Idaho’s $25 is listed as an extra initial fee on form ITD 3392.</p>
${h.mini('cost', { t: 'What your placards cost', p: ['st', 'type', 'q'] })}
<h2>Temporary placards</h2>
<p>${tempPaid.length} jurisdictions charge for a temporary placard: ${list(tempPaid, 'temp')}. Florida’s second temporary permit within a year of the first is free, and Hawaii charges $12 again for each renewal.</p>
<h2>Replacements</h2>
<p>A lost or damaged placard costs $10 to replace in Kentucky and $5 in West Virginia, without a new certification. Other states print their own replacement fee on their form. See your state page, and the ${h.a('handicap-placard-renewal', 'renewal guide')} for renewal fees.</p>
`,
  tool: 'cost',
  related: ['temporary-handicap-placard', 'handicap-placard-renewal', 'how-to-get-a-handicap-placard', 'handicap-placard-in-another-state'],
  sources: ['cfr_1235', 'st_TN', 'st_OH', 'st_ID'],
});
