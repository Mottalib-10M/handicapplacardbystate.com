/** Three questions per state, Montana to Pennsylvania (40 to 90 words each). Facts from src/data/states.json, read 2026-11-13. */
import type { FAQ } from '../../lib/page-types';

export const FAQS_3: Record<string, FAQ[]> = {
  MT: [
    { q: `Can a Montana temporary placard last two years?`, a: `Yes, when the provider expects the condition to improve within two years. Otherwise it lasts six months. That two-year option is unusual: most states cap temporary placards at six months. Both permanent and temporary placards are free in Montana. A licensed medical provider signs the form.` },
    { q: `Do I need to visit an office for a Montana placard?`, a: `No. The Motor Vehicle Division lists its online services and mail as the two routes for form MV5-DSB, in its May 2026 edition. A licensed medical provider signs the form. Montana’s site refuses automated readers, so these facts come from search excerpts.` },
    { q: `How often is a Montana permanent placard renewed?`, a: `Every five years. An updated permit needs a new application signed by a licensed medical provider, sent through MVD online services or by mail. The placard is free, so the only cost of the renewal is the visit to your provider.` },
  ],
  NE: [
    { q: `Can my doctor apply for my Nebraska permit online?`, a: `Yes. Nebraska medical professionals can submit the Application for Handicapped Parking Permit online on your behalf, a route few states offer. You can also mail it yourself. A licensed physician, a physician assistant or a nurse practitioner certifies it. The permit is free and lasts six years.` },
    { q: `When does a Nebraska permanent permit expire?`, a: `Six years after issue, on the last day of your birth month. A permit issued in March 2026 to someone born in September ends on the last day of September 2032. It must then be renewed. The permit is free.` },
    { q: `How long is a Nebraska temporary permit?`, a: `Three or six months, renewable once. It is free, like the permanent permit. The Nebraska DMV site refuses automated readers, so these facts come from search excerpts of its official pages, read on November 13, 2026. A licensed physician, a physician assistant or a nurse practitioner certifies it.` },
  ],
  NV: [
    { q: `How long is a Nevada disability placard valid?`, a: `Ten years for a permanent placard, up to two years for a moderate condition, and up to six months for a red temporary placard. All are free. As the ten-year date approaches, a renewal notice comes, and no new physician’s signature is required.` },
    { q: `Can I get a Nevada placard at the county assessor?`, a: `Yes. County assessors accept form SP-27, as do DMV offices. That gives residents of rural counties a local route. Bring the form signed by an eligible professional: a licensed physician, an APRN, a physician assistant, an occupational therapist or a physical therapist.` },
    { q: `Can an occupational therapist sign Nevada form SP-27?`, a: `Yes. SP-27 names occupational and physical therapists with licensed physicians, advanced practice registered nurses and physician assistants. Few states allow therapists to certify. The Application for Disabled Persons License Plates and/or Placards covers both plates and placards. Nevada placards are free and are issued at DMV offices or county assessors.` },
  ],
  NH: [
    { q: `Why does my New Hampshire placard end with my license?`, a: `New Hampshire aligns the permanent placard, which lasts up to five years, with your driver’s license or ID card, so the two end together. Plan the renewal of both at the same time. The pages we read do not say whether a new physician signature is needed.` },
    { q: `Can I use a DMV drop box in New Hampshire?`, a: `Yes. The DMV accepts form RDMV 130, the Application for Walking Disability Privileges, in its drop boxes, at any registration office, or by mail. A physician must sign it. A temporary placard lasts up to six months. The permanent placard lasts up to five years and ends with your driver’s license or ID.` },
    { q: `What does a New Hampshire placard cost?`, a: `The pages we read print no fee for either placard, so this site marks the cost as not stated rather than guessing. The DMV site refuses automated readers, and these facts come from search excerpts of its official pages. A registration office will give the current fee.` },
  ],
  NJ: [
    { q: `Where do I get a temporary placard in New Jersey?`, a: `At your local police department, on form SP-68, for $4. It lasts up to six months and can be renewed once. The permanent placard, by contrast, comes from the Motor Vehicle Commission on form SP-41, and it is free. Recertification of the permanent placard is free too.` },
    { q: `How often must I recertify a New Jersey placard?`, a: `Every three years, with a medical certification dated within 60 days. Recertification is free. Three years is the shortest cycle among the states that require a new medical certification at each renewal, so New Jersey holders see their professional more often.` },
    { q: `Which form is the New Jersey permanent placard?`, a: `SP-41, the Application for Vehicle License Plates and/or Placard for Persons with a Disability, filed with the Motor Vehicle Commission. The certification must be dated within 60 days. The temporary placard uses a different form, SP-68, handled by the police.` },
  ],
  NM: [
    { q: `Does New Mexico ask for a doctor at each renewal?`, a: `No. Once a permanent placard is approved, no further medical information is required. The placard lasts four years from the date of issue and is renewed without a new certificate. The first application on MVD 10383 is the only medical step.` },
    { q: `How long is a New Mexico temporary placard?`, a: `Up to one year, twice the federal model’s six months, and it may not be renewed. After it ends, a new application with a health care practitioner’s certification is needed. Fees were not printed in what we read; an MVD office will state them.` },
    { q: `Who can certify New Mexico form MVD 10383?`, a: `A health care practitioner, without a list of professions in what we read. The Motor Vehicle Division decides whether a given professional qualifies. The MVD site refuses automated readers, so these facts come from search excerpts of its official pages.` },
  ],
  NY: [
    { q: `Who issues handicap parking permits in New York?`, a: `Your city, town or village, not the state DMV, which issues only the license plates for people with severe disabilities. The local office sets the length and the fee, and every permit carries an expiration date. Form MV-664.1 explains how to apply.` },
    { q: `Is a doctor needed to renew a New York parking permit?`, a: `No. Form MV-664.1 says the medical certification is not required to renew a parking permit. A physician certifies the first application. Renewal happens at the same local office that issued the permit, under its own rules and timing. Fees and lengths vary from one municipality to the next.` },
    { q: `Does a New York City permit differ from a village permit?`, a: `It can. Because each city, town or village issues its own permits, the length, fee and renewal timing are local. This site shows them as set by the local office, since the state form does not print them. Ask your municipality.` },
  ],
  NC: [
    { q: `How many placards can I have in North Carolina?`, a: `Up to two, at $5 each, for a permanent or a temporary placard. Form MVR-37A, revised in July 2026, sets the limit. A license plate agency issues the placard the same day, or you can apply by mail. A permanent placard lasts five years.` },
    { q: `Do North Carolina seniors need recertification?`, a: `Not at 80 or older, and not when you were certified permanently disabled. Other holders need a medical recertification at each five-year renewal, on form MVR-37AA. The fee stays $5 per placard. Renewals go to a license plate agency, which issues the placard the same day, or by mail to the Division of Motor Vehicles.` },
    { q: `Who can certify blindness in North Carolina?`, a: `An ophthalmologist, an optometrist or the Division of Services for the Blind. For other conditions, the form asks for a medical provider. For blindness, a state agency can therefore certify in place of a medical professional. The signed form goes to a license plate agency.` },
  ],
  ND: [
    { q: `Is a North Dakota temporary permit renewable?`, a: `No. It lasts three months and costs $3, and a new application is needed after that. The permanent permit, by contrast, is free and runs on a three-year cycle. Both are issued on form SFN 2886. A qualified medical provider certifies both permits.` },
    { q: `Where do I apply in North Dakota?`, a: `At the Bismarck Motor Vehicle office or a local site, with form SFN 2886, the Application for Mobility-Impaired Parking Permit. A qualified medical provider certifies it. There is no county treasurer route in what we read. The permanent permit is free and runs on a three-year cycle.` },
    { q: `Does North Dakota need a new medical form at renewal?`, a: `Not for a non-reversible condition: a new application from the medical provider is not needed when the permit expires. The permit renews on its three-year cycle. For other conditions, ask the Motor Vehicle office before the date. The permanent permit is free.` },
  ],
  OH: [
    { q: `What is the difference between Ohio’s $8 and $15 placards?`, a: `The $8 standard placard lasts up to ten years, as set by the medical professional; the $15 permanent placard has no expiration. Both are on form BMV 4826, filed at a deputy registrar or by mail. A temporary placard costs $8 for six months or less.` },
    { q: `When can I renew an Ohio placard?`, a: `No more than 90 days before it expires, for $8, for a standard placard. The $15 permanent placard does not expire and is never renewed. Deputy registrars, Ohio’s local license agencies, handle renewals. Renewal by mail to the Bureau of Motor Vehicles is also possible, on the same form BMV 4826.` },
    { q: `Can a chiropractor sign Ohio form BMV 4826?`, a: `Yes. The form names physicians, physician assistants, advanced practice nurses, optometrists and chiropractors. Ohio’s list is one of the wider ones among states that print a closed list. The March 2026 edition of BMV 4826 is the one we read.` },
  ],
  OK: [
    { q: `How quickly must I mail Oklahoma Form 302DC?`, a: `Within 60 days of the physician’s signature. Service Oklahoma takes new and renewal applications only inside that window. A signature older than that means a new visit. Everything goes by mail; there is no office counter route. Both placards are free.` },
    { q: `Can an optometrist sign Oklahoma’s placard form?`, a: `Yes. Form 302DC names physicians and osteopathic physicians, chiropractors, podiatric physicians, optometrists, physician assistants and advanced registered nurse practitioners. That is one of the widest lists in the country. Whichever professional signs, mail the form to Service Oklahoma within 60 days of the signature, or the application will be refused and a new signature needed.` },
    { q: `How long is an Oklahoma placard valid?`, a: `Five years from processing for a permanent placard; up to six months, on the date set by the physician, for a temporary one. Both are free. Renewal needs a new physician’s signature, again mailed within 60 days of it. No office counter takes these forms.` },
  ],
  OR: [
    { q: `Can a naturopath sign an Oregon placard application?`, a: `Yes. Form 735-265 names naturopaths, which is rare, along with doctors of medicine, osteopaths, podiatrists, chiropractors, nurse practitioners, physician associates and optometrists. Few states print a list this wide. Submit the signed form at a DMV office or by mail. The permanent placard is free and lasts eight years from the date of issue.` },
    { q: `How long is an Oregon placard valid?`, a: `Eight years from the date of issue for a permanent placard, one of the longest terms in the country. A temporary placard lasts up to six months. Both are free and come from Driver and Motor Vehicle Services. Apply at a DMV office or by mail.` },
    { q: `Does an Oregon renewal need a new certificate?`, a: `Form 735-265 has a renewal box, but it does not say whether a new medical certificate is needed. This site marks the rule as not stated. Ask DMV before your placard’s date, or bring a new certificate to avoid a second trip.` },
  ],
  PA: [
    { q: `Can a New Jersey doctor sign Pennsylvania’s MV-145A?`, a: `Yes. A health care provider licensed in Pennsylvania or a neighboring state may certify, so a doctor in New Jersey, New York, Delaware, Maryland, West Virginia or Ohio qualifies. That helps residents near a border. The signed form goes by mail to PennDOT. Both placards are free.` },
    { q: `Can a Pennsylvania temporary placard be extended?`, a: `No. It lasts up to six months and is never extended. A new application with a new certification is needed if the condition continues. Temporary and permanent placards are both free from PennDOT. The permanent placard lasts five years and renews without a new medical certification.` },
    { q: `What does a Pennsylvania renewal involve?`, a: `Sections A and E of form MV-145A only, with no new medical certification, every five years. The renewal goes by mail to PennDOT, like the first application. There is no county or local office for placards in Pennsylvania. The placard is free.` },
  ],
};
