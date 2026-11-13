import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');
const by = (m: number | null) => ST.filter((s) => s.temp.months === m);
const paid = K.C.tempPaid;
const top = [...paid].sort((a, b) => (b.temp.fee ?? 0) - (a.temp.fee ?? 0))[0];

export default definePage({
  id: 'temporary-handicap-placard', group: 'guides', order: 103, slug: 'temporary-handicap-placard',
  nav: 'Temporary placard', card: 'How long a temporary placard lasts in your state, what it costs, and what happens when it ends.',
  title: 'Temporary Handicap Placard 2026: How Long and What It Costs',
  description: 'Temporary handicap placard in 2026: how long it lasts in each of the 50 states and DC, from 3 to 24 months, what it costs, and whether it can be renewed.',
  h1: 'Temporary handicap placard: how long it lasts and what it costs',
  intro: `A temporary handicap placard covers a condition expected to improve, for a few months. Pick your state to see its longest period, its fee and what happens when it ends.`,
  resume: `A temporary handicap placard lasts up to six months in ${by(6).length} of the ${K.C.total} jurisdictions, the period the federal model describes in 23 CFR 1235.5. Others depart from it: three months in ${names(by(3))}; up to a year in ${names(by(12))}; and from 2 to 24 months in Massachusetts. In ${names(by(null))}, the medical professional or the local office sets the length. ${K.C.tempFree} jurisdictions issue it free; ${paid.length} charge a fee, from ${K.fee(Math.min(...paid.map((s) => s.temp.fee ?? 0)))} to ${K.fee(top.temp.fee)} in ${top.name}, where a second temporary permit within a year of the first is free. Renewal rules range from none at all (Arkansas, North Dakota, Utah) to one renewal or more on a new certification.`,
  faqs: [
    { q: 'Who decides how long my temporary placard lasts?', a: 'The medical professional who signs states the expected length on the form, and the state applies its own ceiling: the placard ends at the earlier of the two. In Indiana, for example, it ends on the provider’s date or one year after issue, whichever comes first.' },
    { q: 'Can I switch from a temporary to a permanent placard?', a: 'Yes, by filing a new application on which the professional certifies a permanent condition. The permanent placard is free in most states even where the temporary one is not, so the switch can also save the temporary fee. The state page lists which professionals may certify a permanent placard.' },
    { q: 'Is a temporary placard a different color?', a: 'In some states, yes: Texas and Nevada call their temporary placards red on their official pages, and Texas calls the permanent one blue. Other states print their own colors; the placard you receive shows its type and end date, and the end date is what counts.' },
  ],
  body: (h) => `
<h2>How long a temporary handicap placard lasts</h2>
<p>The six-month ceiling of the federal model is the most common rule. It matches recovery periods after surgery or an injury, and many forms allow a shorter period when the professional expects less. The states that go further, to a year or two, mostly add a test: Montana allows up to two years when the condition should improve within that time, and South Carolina’s placard covers an impairment of four months to one year.</p>
${h.mini('temp', { t: 'Temporary against permanent in your state', p: ['st'] })}
<h2>What it costs</h2>
<p>While ${K.C.permFree} jurisdictions issue permanent placards free, more of them charge for the temporary one: ${paid.map((s) => `${s.name} ${K.fee(s.temp.fee)}`).join(', ')}. The fee is per placard. The ${h.a('handicap-placard-cost', 'cost calculator')} adds up one or two placards.</p>
<h2>When it ends</h2>
<p>Three outcomes exist. Some states renew it once or more on a new certification (Louisiana once, California up to six times in a row). Others ask for a new application from the start. A few forbid any extension: Arkansas, where an expired temporary placard cannot even be replaced, North Dakota, Pennsylvania, Utah, Vermont and Virginia. If the condition becomes lasting, the professional can certify a permanent placard instead; see the ${h.a('handicap-placard-renewal', 'renewal guide')}.</p>
`,
  tool: 'temp',
  related: ['handicap-placard-renewal', 'handicap-placard-cost', 'how-to-get-a-handicap-placard', 'who-can-sign-a-handicap-placard-form'],
  sources: ['cfr_1235_5', 'cfr_1235', 'st_MA', 'st_TX'],
});
