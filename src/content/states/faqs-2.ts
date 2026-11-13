/** Three questions per state, Illinois to Missouri (40 to 90 words each). Facts from src/data/states.json, read 2026-11-13. */
import type { FAQ } from '../../lib/page-types';

export const FAQS_2: Record<string, FAQ[]> = {
  IL: [
    { q: `Does Illinois mail a renewal form for disability placards?`, a: `Yes. About three months before the placard expires, the Illinois Secretary of State mails a renewal certification form. A licensed physician must sign it again before you send it back. The permanent placard lasts four years and costs nothing, so the mailed form is the only step to watch.` },
    { q: `When does an Illinois temporary placard start counting?`, a: `From the physician’s signature, for up to six months, not from the day you pick it up. Apply soon after the visit to get the full period. Temporary placards are free, and a Secretary of State facility can issue one, while permanent placards go by mail.` },
    { q: `Which Illinois form do I need for a placard?`, a: `VSD 62, the Persons with Disabilities Certification for Parking Placard or License Plates. A licensed physician completes the certification. The Illinois site refuses automated readers, so these facts come from search excerpts of the Secretary of State’s official pages, read on November 13, 2026.` },
  ],
  IN: [
    { q: `Do Indiana permanent placards expire?`, a: `No, unless your health care provider certifies a limited period on State Form 42070. Most Indiana holders therefore keep their permanent placard with nothing to renew, and only replace it if it is lost or damaged. The form does not print a fee in what we read.` },
    { q: `How long can an Indiana temporary placard last?`, a: `Until the date your provider writes, and never more than one year after it is issued, whichever comes first. A one-year ceiling is twice the six months of the federal model. When it ends, a new application with a new certification is needed at the BMV.` },
    { q: `Who can sign Indiana State Form 42070?`, a: `The form asks for a health care provider’s certification without listing professions. The Bureau of Motor Vehicles therefore decides whether a given professional qualifies. File the signed form at any BMV branch or by mail; there is no county route in Indiana for placards.` },
  ],
  IA: [
    { q: `Does Iowa accept a doctor’s letter instead of a form?`, a: `Yes. Iowa DOT accepts a medical statement on the provider’s own letterhead with the parking permit application, instead of a state medical form. Ask your physician, nurse practitioner or physical therapist to write it, then send it online, by mail, or bring it to an office.` },
    { q: `Can a physical therapist certify an Iowa parking permit?`, a: `Yes. Physical therapists are named with physicians and nurse practitioners in what we read of the Iowa Department of Transportation pages. The permit is free and lasts five years for a permanent condition, or up to six months for a temporary one.` },
    { q: `Where can I apply for an Iowa permit?`, a: `Online, by mail, or at a driver’s license or county treasurer office. Iowa is one of the few states with an online route for permanent permits. The Iowa DOT site refuses automated readers, so these facts come from search excerpts of its official pages.` },
  ],
  KS: [
    { q: `Can I renew a Kansas placard without a doctor?`, a: `Yes. Form TR-159a lets you self-certify that you remain eligible, without a doctor’s statement. That means a Kansas holder sees a professional only for the first application, on TR-159. Both the first placard and the renewal go through the county treasurer’s motor vehicle office.` },
    { q: `Can an out-of-state doctor sign Kansas form TR-159?`, a: `Yes. A healing arts licensee from any state may sign it, which helps residents near a border. A registered nurse or a licensed practical nurse may not. Kansas is one of the few states to exclude registered nurses expressly on its form.` },
    { q: `How long is a Kansas temporary placard?`, a: `Up to six months. The pages we read print neither the length of the permanent placard nor its fee, so this site marks both as not stated. The Kansas site refuses automated readers; these facts come from search excerpts of its official pages.` },
  ],
  KY: [
    { q: `Can a Kentucky county clerk certify a disability placard?`, a: `Yes. Form TC 96-347, revised in September 2026, lists the county clerk among the people who may certify, beside a licensed physician, a physician assistant, a physical or occupational therapist, a chiropractor and an advanced practice registered nurse. Few states let a clerk certify.` },
    { q: `What does a replacement Kentucky placard cost?`, a: `$10. The original permanent placard is free, and so is the temporary one. A lost or stolen placard is replaced at your county clerk’s office. Permanent placards last six years and may be renewed an unlimited number of times. Bring identification.` },
    { q: `How long is a Kentucky temporary placard?`, a: `Up to three months, half the six months of the federal model and shorter than in most states. It is free. If the condition lasts longer, a new application or a permanent placard is the way forward, at your county clerk’s office.` },
  ],
  LA: [
    { q: `How much is a Louisiana hang tag?`, a: `$3, both for the four-year permanent hang tag and for the temporary tag. Louisiana is one of the few states that charges for every placard, though the amount is small. Both are issued at an Office of Motor Vehicles location, not at a county office.` },
    { q: `Can a Louisiana temporary hang tag be renewed?`, a: `Once, with a new physician’s certification. The temporary tag lasts up to 12 months, twice the federal model’s six months. After the single renewal, a new application starts over. The permanent hang tag, by contrast, renews without recertification. The fee is $3 each time.` },
    { q: `Who signs Louisiana form DPSMV 1966?`, a: `A physician. DPSMV 1966 is the Physician’s Certification of Mobility Impairment, a dedicated medical form separate from the application. The list we read names no other profession, so nurse practitioners or physician assistants should check with the Office of Motor Vehicles first.` },
  ],
  ME: [
    { q: `Can I get a Maine placard at my town office?`, a: `Yes. Maine town offices take the application, as do branches of the Bureau of Motor Vehicles. That makes Maine one of the easiest states to apply in close to home. Placards are free, and the provider’s certificate on the application sets their length.` },
    { q: `Can a registered nurse sign a Maine placard application?`, a: `Yes. Maine names registered nurses among the providers who may certify, with physicians, physician associates and nurse practitioners. Few states accept a registered nurse; Kansas, for example, expressly excludes them. The rule comes from section 521 of title 29-A of the Maine statutes.` },
    { q: `How long does a Maine placard last?`, a: `As long as the provider certifies: up to six years, or permanent. A temporary placard lasts up to six months. Where the disability is certified as permanent, you need not prove it again at renewal. Placards of every length are free.` },
  ],
  MD: [
    { q: `Do Maryland disability placards expire?`, a: `The permanent placard does not: Maryland makes it valid until the death of the holder, so there is nothing to renew. The temporary placard lasts up to six months. Both are free, and a lost permanent placard is simply replaced through the Motor Vehicle Administration.` },
    { q: `Can I apply for a Maryland placard online?`, a: `Yes, through the MVA online portal, besides mail and MVA offices. The application is VR-210, dated October 2025. A licensed medical provider certifies it. The MVA site refuses automated readers, so these facts come from search excerpts of its official pages.` },
    { q: `Who can certify Maryland form VR-210?`, a: `A licensed medical provider, without a list of professions in what we read. The Motor Vehicle Administration decides whether a given professional qualifies. If you see a professional other than a physician, ask the MVA before relying on their signature, to avoid a refused application.` },
  ],
  MA: [
    { q: `How long can a Massachusetts temporary placard last?`, a: `From 2 to 24 months, the longest temporary period among the 50 states and DC. It is free. A new application is needed four to six weeks before it expires if the condition continues. A permanent placard lasts five years.` },
    { q: `Do I have to renew a Massachusetts permanent placard?`, a: `No. The Registry of Motor Vehicles mails the new permanent placard before the old one expires, every five years. There is no doctor’s visit and no form to file for the renewal. The first application, MAB100, goes to Medical Affairs in Boston or an RMV service center.` },
    { q: `Can an optometrist sign a Massachusetts placard form?`, a: `Only for legal blindness. Form MAB100 also names physicians, chiropractors, registered nurses, physician assistants, osteopaths and podiatrists. Massachusetts is one of the few states to accept registered nurses. The Medical Affairs Branch of the RMV reviews every application, whoever signs it.` },
  ],
  MI: [
    { q: `How early can I renew a Michigan placard?`, a: `Up to 45 days before its expiration date, which is your birthday. Renewal is free. Renewing early avoids a gap if the mail is slow. Apply at a Secretary of State office or by mail, as for the first application on BFS-108.` },
    { q: `Can a Michigan temporary placard be renewed?`, a: `No. It lasts one to six months, and when it ends you file a new BFS-108 with a new health professional’s certification. If the condition turns out to be lasting, the health professional can certify a permanent placard instead, which runs four years.` },
    { q: `Who signs Michigan form BFS-108?`, a: `A health professional, without a list of professions in what we read. The Michigan Department of State decides whether a given professional qualifies. Its site refuses automated readers, so these facts come from search excerpts of its official pages, read on November 13, 2026.` },
  ],
  MN: [
    { q: `What is a long-term certificate in Minnesota?`, a: `A disability parking certificate for 13 to 71 months, free, between the temporary and the permanent ones. It fits a condition expected to last more than a year without being permanent. The permanent certificate lasts six years and is also free.` },
    { q: `What does a Minnesota temporary certificate cost?`, a: `$5 each, for one to six months. It is the only paid certificate in Minnesota. You apply on form PS2005 at a deputy registrar office or by mail, with a licensed health professional’s statement. A new statement is needed when the disability is extended.` },
    { q: `Which form do I need in Minnesota?`, a: `PS2005, the Application for Disability Parking Certificate, in its October 2026 edition, from Driver and Vehicle Services. A licensed health professional completes the medical statement. The DVS site refuses automated readers; these facts come from search excerpts of its official pages.` },
  ],
  MS: [
    { q: `How recent must the doctor’s statement be in Mississippi?`, a: `Dated within 90 days of the renewal application. Every five years the permanent placard needs a new application with that statement. An older statement means a new visit. The placard itself is free, and the county tax collector handles both the first application and the renewals.` },
    { q: `Where do I apply for a Mississippi placard?`, a: `At your county tax collector, with Form 76-104, the Disabled Parking Application of the Mississippi Department of Revenue. There is no state office route. Bring the form with the signature of a licensed physician or a nurse practitioner. The permanent placard is free and lasts five years.` },
    { q: `How long is a Mississippi temporary placard?`, a: `Valid for not over six months, as in the federal model. It is free, like the permanent placard. The same Form 76-104 serves, and the same signers apply: a licensed physician or a nurse practitioner. After six months, a new application is needed.` },
  ],
  MO: [
    { q: `What changed for Missouri placards in August 2026?`, a: `From August 28, 2026, new and manually renewed placards expire in the eighth year, while automatic renewals expire in the fourth. Read the expiration month on your placard rather than counting years. The Missouri Department of Revenue site refuses automated readers, so this comes from search excerpts.` },
    { q: `Do Missouri seniors need a physician’s statement to renew?`, a: `Not at 75 or older, and not for disabled veterans. Other holders need a new Form 1776, the Physician’s Statement, every eight years, dated within 90 days. It goes with Form 2769 to a license office or by mail. The placard itself is free.` },
    { q: `What does a Missouri temporary placard cost?`, a: `$2 for up to 180 days, with one renewal on new Forms 2769 and 1776 and another $2. The permanent placard is free. If the condition lasts beyond the renewal, the physician can certify a permanent placard instead. Its fee is among the lowest we read.` },
  ],
};
