import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const byMail = ST.filter((s) => /mail/i.test(s.where) && !/office|branch|center|clerk|treasurer|registrar|collector|agency|county/i.test(s.where));
const online = ST.filter((s) => /online|portal|ServiceArizona|e-mail/i.test(s.where));
const county = ST.filter((s) => /county|clerk|treasurer|tax collector|tag office|assessor/i.test(s.where));
const tx = K.S('TX');
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');

export default definePage({
  id: 'how-to-get-a-handicap-placard', group: 'guides', order: 101, slug: 'how-to-get-a-handicap-placard',
  nav: 'How to get a placard', card: 'The form of your state, who signs the medical part, and where to hand it in, in four steps.',
  title: 'Handicap Placard Application 2026: Form and Steps by State',
  description: 'Handicap placard application in 2026: the official form of each of the 50 states and DC, who may sign the medical part, where to apply and what it costs.',
  h1: 'Handicap placard application: the form and the four steps in your state',
  intro: `A handicap placard application takes one official form, one signature from a medical professional and one office. Pick your state: its form, cost and the four steps appear below.`,
  resume: `Every state and the District of Columbia issues disability parking placards under the same federal framework, 23 CFR part 1235, but each prints its own application and decides who may sign it, where it is filed and what it costs. The process always has four steps: get the form of the state where you live, fill in your own part, have the medical part certified by a professional the form names, and hand it in. ${K.C.permFree} of the ${K.C.total} jurisdictions charge nothing for a permanent placard. ${county.length} hand the work to county offices, ${online.length} accept an application online or by e-mail, and ${byMail.length} take it by mail only. In ${tx.name}, for example, form ${tx.form} goes to ${tx.where}. New York is the exception: its permits are issued by cities, towns and villages.`,
  faqs: [
    { q: 'Do I need to see a doctor to get a handicap placard?', a: 'In every state a licensed professional must certify the medical part of the first application. Who counts varies: some forms name only physicians, others add physician assistants, nurse practitioners, chiropractors, podiatrists, optometrists or therapists. The page of your state lists the professions printed on its form.' },
    { q: 'Is the placard issued to the car or to the person?', a: 'To the person with the disability. The federal model in 23 CFR part 1235 describes a removable windshield placard for persons with disabilities, so it moves with that person from car to car, and is displayed only when that person is driving or being driven.' },
    { q: 'Can I apply for a handicap placard online?', a: `In a handful of places: ${names(online)}. Elsewhere the form goes to an office or by mail. Each state page shows where its application is filed. Nebraska also lets your medical professional submit the application online on your behalf.` },
  ],
  body: (h) => `
<h2>The four steps of a handicap placard application</h2>
<p>The first step is finding the right form, and the right form is the one of the state where you live, not where your doctor practices. Each state page of this site gives its number and title, as printed on the official document read on ${K.day(K.READ)}. The second step is your part: name, address, and usually your driver’s license or state ID number. The third is the certification by a medical professional. The fourth is filing: at a county office, a state office, by mail, or online where it is offered.</p>
${h.mini('steps', { t: 'The four steps in your state', p: ['st', 'type'] })}
<h2>Where applications go</h2>
<p>States split into a few models. In ${county.length} of them the county does the work: a tax collector, a county clerk, a treasurer or a tag office. Others keep it at a state motor vehicle office. A few run by mail only: ${names(byMail)}. Applying online or by e-mail is possible in ${names(online)}. Nebraska also lets your medical professional submit the application for you.</p>
<p>New York differs from all the others: its DMV issues the plates, but the parking permits come from your city, town or village, under form MV-664.1. Hawaii runs placards through a state board, but the counties issue them.</p>
<h2>Permanent or temporary</h2>
<p>The professional who certifies chooses between a permanent placard, for a condition that will last, and a temporary one, for a period they set. The ${h.a('temporary-handicap-placard', 'temporary placard')} usually lasts up to six months and some states charge for it while the permanent one is free. The ${h.a('handicap-placard-cost', 'cost page')} compares the two in every state.</p>
<p>The rules after that differ widely. Some permanent placards never expire, others last two to ten years; some renewals need a new medical signature, others do not. The ${h.a('handicap-placard-renewal', 'renewal guide')} sets them side by side.</p>
<h2>Who signs, and what the placard allows</h2>
<p>The list of professionals who may certify is the most variable part of the form. The ${h.a('who-can-sign-a-handicap-placard-form', 'signer checker')} tells you, for one profession and one state, whether it appears on the official form. Once issued, the placard is recognized in every other state under the federal reciprocity rule (${h.src('cfr_1235_8', '23 CFR 1235.8')}); the ${h.a('handicap-placard-in-another-state', 'travel page')} explains what changes when you drive or move to another state.</p>
`,
  tool: 'steps',
  related: ['who-can-sign-a-handicap-placard-form', 'handicap-placard-cost', 'temporary-handicap-placard', 'handicap-placard-renewal'],
  sources: ['cfr_1235', 'cfr_1235_8', 'cfr_1235_4'],
});
