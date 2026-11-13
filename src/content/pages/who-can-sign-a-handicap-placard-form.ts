import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const ST = K.STATES;
const yes = (p: string) => ST.filter((s) => K.signer(s, p).v === 'yes' || K.signer(s, p).v === 'limited');
const named = (p: string) => yes(p).length;
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');
const generic = ST.filter((s) => s.cert.length === 1 && !/^physician|doctor/i.test(s.cert[0]));
const docOnly = ST.filter((s) => s.cert.length === 1 && /^(licensed )?(physician|doctor)/i.test(s.cert[0]));

export default definePage({
  id: 'who-can-sign-a-handicap-placard-form', group: 'guides', order: 104, slug: 'who-can-sign-a-handicap-placard-form',
  nav: 'Who can sign', card: 'Whether a nurse practitioner, physician assistant, chiropractor or therapist may certify the form in your state.',
  title: 'Handicap Placard Form Signers 2026: Who Can Certify It',
  description: 'Handicap placard form signers in 2026: whether a physician assistant, nurse practitioner, chiropractor, optometrist or therapist may certify, state by state.',
  h1: 'Handicap placard form signers: who may certify in your state',
  intro: `The handicap placard form signers allowed differ more than any other rule. Pick your state and the professional you see: the answer comes from the list printed on the official form.`,
  resume: `The federal model in 23 CFR 1235.4 speaks of a licensed physician, and every form we read accepts one, by name or under a broader term. The rest of the list varies widely. On the forms and pages we read on ${K.day(K.READ)}, physician assistants are named in ${named('pa')} jurisdictions, nurse practitioners or advanced practice nurses in ${named('np')}, chiropractors in ${named('ch')}, optometrists in ${named('opt')}, podiatrists in ${named('pod')} and physical therapists in ${named('pt')}. ${docOnly.length} jurisdictions name a physician alone: ${names(docOnly)}. ${generic.length} others use a broad term such as “health care provider” or “licensed medical professional” without a list. Some names come with a limit: optometrists for blindness only in Connecticut and Massachusetts, chiropractors and physical therapists for temporary placards only in Colorado.`,
  faqs: [
    { q: 'Can a nurse practitioner sign a handicap placard form?', a: `In ${named('np')} of the ${K.C.total} jurisdictions the form names nurse practitioners or advanced practice nurses. Where the form uses a broad term such as “health care provider”, the agency decides; the checker marks that case as “not named”. Ask the agency before the appointment.` },
    { q: 'Can a chiropractor sign for a disability placard?', a: `On ${named('ch')} forms, sometimes with a limit: in Colorado, only for a temporary placard. Elsewhere a chiropractor is either missing from a closed list or not named, and the agency decides. The checker gives the answer for your state from the list printed on its form.` },
    { q: 'Does the professional need a license in my state?', a: 'Usually a license in the state where they practice. Kansas accepts a healing arts licensee from any state, and Pennsylvania a provider licensed in Pennsylvania or a neighboring state. Elsewhere, ask the agency of your state before seeing a professional licensed in another state.' },
  ],
  body: (h) => `
<h2>How to read the handicap placard form signers list</h2>
<p>The checker gives four answers. “Yes” means the profession is printed on the form or official page. “Yes, with a limit” means it is printed with a restriction, such as temporary placards only or blindness only. “Not on the list” means the form gives a closed list that leaves the profession out. “Not named” means the source speaks of a provider in general: the profession may well qualify, but only the agency can confirm.</p>
${h.mini('signer', { t: 'Can this professional sign in your state?', p: ['st', 'pro'] })}
<h2>The broadest and the narrowest lists</h2>
<p>Alaska prints eight professions, including speech-language pathologists. Oregon names naturopaths, Tennessee Christian Science practitioners, and Wisconsin public health nurses. Maine and Massachusetts accept registered nurses, while Kansas expressly refuses them. At the other end, ${names(docOnly)} name a physician alone.</p>
<p>A few states accept specialists for one case: Connecticut lets a psychiatrist of the U.S. Department of Veterans Affairs certify for a veteran with post-traumatic stress disorder, and North Carolina accepts the Division of Services for the Blind for blindness.</p>
<h2>Before the appointment</h2>
<p>Bring the official form of your state; the page of your state links to it. A professional who is not on the list cannot fix the problem by writing a letter, except in Iowa, where a statement on the provider’s letterhead is the medical part. The steps that follow are on the ${h.a('how-to-get-a-handicap-placard', 'application guide')}.</p>
`,
  tool: 'signer',
  related: ['how-to-get-a-handicap-placard', 'handicap-placard-renewal', 'temporary-handicap-placard', 'handicap-placard-cost'],
  sources: ['cfr_1235', 'st_AK', 'st_CO', 'st_KS'],
});
