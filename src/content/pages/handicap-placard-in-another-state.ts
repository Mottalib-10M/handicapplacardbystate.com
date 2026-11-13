import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const mv = (code: string) => K.S(code);

export default definePage({
  id: 'handicap-placard-in-another-state', group: 'guides', order: 105, slug: 'handicap-placard-in-another-state',
  nav: 'Other states', card: 'Your placard is recognized in every state on a trip; when you move, you apply on the form of your new state.',
  title: 'Handicap Placard in Another State 2026: Travel and Moving',
  description: 'Handicap placard in another state in 2026: the federal rule that makes every state honor yours on a trip, and the form to file when you move to a new state.',
  h1: 'Handicap placard in another state: on a trip, and after a move',
  intro: `A handicap placard in another state keeps its value on a trip under a federal rule. Pick the state that issued yours and the one you visit or move to.`,
  resume: `Federal regulation 23 CFR 1235.8 asks every state to recognize the removable windshield placards, the special license plates and the temporary placards issued by other states, and by other countries, for parking. Visiting another state, you therefore park with your own placard; what changes is the local rule while you are parked: meters, time limits and permits set by the city. Moving is different: a placard belongs to the state where you live, and a new resident applies on the form of the new state, for example ${mv('CA').form} in California or ${mv('FL').form} in Florida. Recognition covers the reserved spaces themselves, not every local privilege: free time at meters, for instance, is the host city’s choice. ${ST.length} jurisdictions, ${ST.length} forms: this site lists each one, read on ${K.day(K.READ)}.`,
  faqs: [
    { q: 'Is my handicap placard valid in every state?', a: 'Yes for parking in spaces reserved for people with disabilities: 23 CFR 1235.8 sets the reciprocity rule all states follow. Local rules such as meters or time limits still apply where you park. Hang the placard as you do at home, from the rearview mirror, and keep any identification card that came with it.' },
    { q: 'How soon must I get a new placard after moving?', a: 'Your old placard is recognized as a visitor’s placard, but a resident is expected to apply in the new state. Apply when you change your driver’s license, since several states tie the placard to it (Connecticut and New Hampshire, for example).' },
    { q: 'Is a foreign placard valid in the United States?', a: 'The federal rule extends recognition to placards issued by other countries. Carry the placard and its card if you have one, and follow the local parking rules. Section 1235.8 speaks of placards and plates issued by the issuing authorities of other countries, for the reserved spaces themselves.' },
  ],
  body: (h) => `
<h2>Using your handicap placard in another state on a trip</h2>
<p>The reciprocity rule is short: states recognize each other’s placards and plates for people with disabilities. You do not apply for anything before a trip. Hang your placard as at home and park in the reserved spaces. The calculator shows, for two states, how long your placard lasts at home and what you would file if you moved.</p>
${h.mini('travel', { t: 'Your placard in another state', p: ['st', 'to'] })}
<h2>What the host state still decides</h2>
<p>Recognition does not export the rules of your state. Free parking at meters, time limits in reserved spaces, or city permits are set where you park. Read the signs and the city rules, especially in large cities.</p>
<h2>Moving to a new state</h2>
<p>A move changes everything: the form, the signer list, the cost and the renewal rule. In ${mv('NY').name}, the permit comes from your city, town or village. In ${mv('TX').name}, the county tax assessor-collector issues it. Your new state page lists the professionals who may sign, so you can check before seeing a new doctor. The ${h.a('how-to-get-a-handicap-placard', 'application guide')} sets out the steps.</p>
`,
  tool: 'travel',
  related: ['how-to-get-a-handicap-placard', 'handicap-placard-renewal', 'who-can-sign-a-handicap-placard-form', 'handicap-placard-cost'],
  sources: ['cfr_1235_8', 'cfr_1235', 'cfr_1235_4'],
});
