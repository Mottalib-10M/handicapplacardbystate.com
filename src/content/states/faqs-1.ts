/** Three questions per state, Alabama to Idaho (40 to 90 words each). Facts from src/data/states.json, read 2026-11-13. */
import type { FAQ } from '../../lib/page-types';

export const FAQS_1: Record<string, FAQ[]> = {
  AL: [
    { q: `Can a nurse midwife sign an Alabama disability parking application?`, a: `Yes. Form MVR 32-6-230 names a certified nurse midwife among the three professionals who may certify, with a physician and a certified registered nurse practitioner. A chiropractor, a physician assistant or a physical therapist does not appear on that list, so their signature would not complete the Alabama form.` },
    { q: `Where do Alabama residents turn in the placard form?`, a: `At the license plate issuing office of their county. The Alabama Department of Revenue, through its Motor Vehicle Division, designs the form and sets the rules, but the credential itself is handed out locally, in the county where you live, so there is no central office to mail it to.` },
    { q: `How long does an Alabama permanent credential last?`, a: `The form we read does not print a length for a permanent credential, so this site does not guess one. Look at the date on the credential you receive. A temporary credential lasts up to six months, and both kinds are renewed on a new certified application.` },
  ],
  AK: [
    { q: `Can I e-mail my Alaska disability parking application?`, a: `Yes. The Alaska Division of Motor Vehicles lists e-mail as a way to submit Form 861, besides any DMV office, which helps residents far from a counter. The permit is free either way. Make sure the medical section is signed by an eligible professional before you scan and send it.` },
    { q: `Can a speech-language pathologist sign Form 861 in Alaska?`, a: `Yes. Alaska’s form names speech-language pathologists among eight professions allowed to certify, together with physicians, physician assistants, nurse practitioners, podiatrists, chiropractors, physical therapists and occupational therapists. Few states print a list this wide, so a professional refused elsewhere may well be accepted in Alaska.` },
    { q: `How long is an Alaska permanent permit valid?`, a: `Up to five years, according to Form 861 as revised in October 2025. A temporary permit lasts up to six months. Neither costs anything. When either one ends, the DMV renews it on a new application with a new medical certification, filed at a DMV office.` },
  ],
  AZ: [
    { q: `Does my Arizona disability placard expire?`, a: `Not if it is a permanent placard issued under the current rule: Arizona removed the expiration date on October 28, 2018. A temporary placard still lasts six months. If you hold an older placard printed with a date, check with the Motor Vehicle Division whether it needs replacing.` },
    { q: `Which form replaces a lost Arizona placard?`, a: `Form 40-0112, the renewal and replacement form, filed at an MVD office or through ServiceArizona. Arizona does not ask for a new medical certification to replace a permanent placard, so you do not need to see your physician again for a lost or damaged one.` },
    { q: `Who can certify an Arizona placard application?`, a: `The official pages we read speak of an authorized physician on Form 96-0104, and the same for the new certification a temporary placard needs after six months. They do not print a wider list, so ask MVD before relying on a nurse practitioner or another professional.` },
  ],
  AR: [
    { q: `How long does an Arkansas temporary placard last?`, a: `Up to three months, half the six months many states allow. Arkansas is strict about it: a temporary placard cannot be renewed, and once expired it cannot even be replaced. A new Form 10-336, signed again by an eligible professional, starts the process over at a revenue office.` },
    { q: `When does an Arkansas permanent placard expire?`, a: `Four years after issue, at the last day of the month it was issued. A placard issued in March 2026 ends on the last day of March 2030. The permanent certificate is renewed without a new disability certification, and the placard itself costs nothing.` },
    { q: `Can a physical therapist sign Arkansas Form 10-336?`, a: `Yes. The November 2024 edition of the Licensed Physician’s Certification names physicians, physician assistants, physical therapists and advanced practice registered nurses. A chiropractor or an optometrist is not on that list. Take the signed form to any Arkansas revenue office of the Department of Finance and Administration.` },
  ],
  CA: [
    { q: `Why does my California placard expire on June 30?`, a: `Because every California permanent placard expires on June 30 of an odd-numbered year, whatever month it was issued. The year depends on when you received it and is printed on the placard. Renewal is free and needs no new medical certification, so only the date needs watching.` },
    { q: `How many times can a California temporary placard be renewed?`, a: `It can be renewed, but not more than six times in a row. Each temporary placard lasts up to 180 days and costs $6, unlike the permanent placard, which is free. If the condition lasts, the professional can certify a permanent placard instead on REG 195.` },
    { q: `Can a chiropractor or optometrist sign REG 195 in California?`, a: `Yes. California’s form names physicians and surgeons, chiropractors, optometrists, physician assistants, nurse practitioners and certified nurse midwives. That makes it one of the wider lists in the country. The signed application goes to a DMV office, by mail, or through the DMV online service.` },
  ],
  CO: [
    { q: `Can a chiropractor sign a Colorado disability placard form?`, a: `Only for a temporary placard. Form DR 2219 limits chiropractors and physical therapists to temporary placards. A permanent placard needs a physician, a physician assistant, a podiatrist or an advanced practice nurse. Check which placard you need before booking the appointment, to avoid a second visit.` },
    { q: `How long is a Colorado permanent placard good for?`, a: `Three years. When it is replaced, a professional validates it and the three-year certification date starts over. The page we read prints no fee for either placard and no length for the temporary one, so the county motor vehicle office is the place to ask.` },
    { q: `Can I apply for a Colorado placard online?`, a: `Yes. Colorado accepts DR 2219 at your county motor vehicle office, by mail, or online. Whatever route you choose, the professional part must be completed by a signer eligible for the placard type you ask for, permanent or temporary, or the application will not go through.` },
  ],
  CT: [
    { q: `Can a VA psychiatrist sign a Connecticut placard form?`, a: `Yes, for a veteran with post-traumatic stress disorder: form B-225P names a psychiatrist of the U.S. Department of Veterans Affairs for that case. In general, physicians, advanced practice registered nurses and physician assistants can sign, and an optometrist or ophthalmologist can certify blindness.` },
    { q: `Why does Connecticut want my license renewed before the placard?`, a: `The Connecticut DMV links the permanent permit to your driver’s license or state ID card and asks that the license or ID be renewed before the permit. If yours has expired, renew it first. The permanent permit itself is free and can last up to eight years.` },
    { q: `Can I fax a Connecticut temporary placard form?`, a: `No. Form B-225T, for the temporary placard, cannot be faxed or e-mailed. Send it by mail or bring it to a DMV branch, where visits are by appointment. A temporary placard costs $5 and lasts up to six months, while the permanent one is free.` },
  ],
  DE: [
    { q: `Do I need my doctor again to renew a Delaware placard at 85?`, a: `No. From age 85, Delaware accepts proof of age instead of a new physician’s signature on MV474. Younger holders need a new application signed by their physician before each renewal, which comes every three years, and always file it at a DMV branch in person.` },
    { q: `Can a nurse practitioner sign Delaware’s MV474?`, a: `The form we read names a physician only. If your nurse practitioner offers to sign, check with a Delaware DMV branch before you go, or ask your physician. A signature from a profession the form does not name risks a refused application and a second trip.` },
    { q: `What does a Delaware placard cost?`, a: `The MV474 form we read prints no fee, and no length for a temporary placard, so this site shows both as not stated rather than guessing. A permanent placard lasts three years. The DMV branch where you apply will give the current fee, if any.` },
  ],
  DC: [
    { q: `Can I get a DC parking permit without a doctor?`, a: `For one week, yes: the District of Columbia issues a one-week permit that needs no medical certification. Longer placards, temporary or long-term, need a medical practitioner’s certification on the Application for Disability Parking Tags & Placard. All of them are free at the DC DMV.` },
    { q: `When can I renew a DC long-term placard?`, a: `Within 60 days of its expiration date, with a new application and a new medical certification. The long-term placard lasts up to eight years. Plan the visit to your practitioner inside that window, then file at a DC DMV service center or by mail.` },
    { q: `Which professionals can certify a DC placard?`, a: `The District’s application asks for a medical practitioner’s certification without listing professions. That leaves the DC DMV to decide whether a given professional qualifies. A temporary placard lasts as long as the practitioner sets, so the certification also fixes its end date.` },
  ],
  FL: [
    { q: `Is the second Florida temporary permit free?`, a: `Yes, when it is issued within a year of the first one. The first temporary permit costs $15 and lasts up to six months. The permanent permit is free. Both are issued by your county tax collector or a license plate agency, not by a state office.` },
    { q: `Why does my Florida permit expire on my birthday?`, a: `Florida ties the permanent permit to your birthday: it ends on it four years after issue. A permit issued in March 2026 to someone born in September ends in September 2030. The exact date is printed on the permit, and it governs.` },
    { q: `How recent must the Florida medical signature be?`, a: `The certifying medical authority must have signed HSMV 83039 within the last 12 months when you apply. An older signature means a new visit. The official pages refuse automated readers, so this fact comes from search excerpts of the Florida Department of Highway Safety and Motor Vehicles pages.` },
  ],
  GA: [
    { q: `Does Georgia charge for a disability parking placard?`, a: `No. The Georgia Department of Revenue lists both the permanent placard, replaced every four years, and the temporary one, valid up to 180 days, as free. You apply at the tag office of the county where you live with the MV-9D Disabled Person’s Parking Affidavit.` },
    { q: `Can an optometrist sign Georgia’s MV-9D?`, a: `Yes. The affidavit names doctors of medicine or osteopathic medicine, podiatrists, optometrists and chiropractors. Physician assistants and nurse practitioners do not appear on the list we read, so a Georgia resident who sees one of them should ask the county tag office before relying on their signature.` },
    { q: `Does a Georgia renewal need a new affidavit?`, a: `The state page we read does not say. The permanent placard is replaced every four years at the county tag office. To avoid a second trip, ask the office when you go, or bring a newly signed MV-9D. This site marks the rule as not stated.` },
  ],
  HI: [
    { q: `Who issues disability placards in Hawaii?`, a: `The counties, under the rules of the state Disability and Communication Access Board, which publishes form PA-3. You take the completed form to a county issuing site. The board sets the rules for the whole state; the counties hand out the blue long-term placards and the temporary ones.` },
    { q: `How much is a Hawaii temporary placard?`, a: `$12, and $12 again for each renewal of it. A temporary placard lasts up to six months. The long-term blue placard is free and lasts six years. A licensed practicing physician or an advanced practice registered nurse signs the certificate on PA-3.` },
    { q: `When should my Hawaii certificate be signed?`, a: `No more than 60 days before the permit expires. A certificate signed earlier than that is too old for the renewal. Schedule the visit to your physician or APRN inside the window, then bring PA-3 to a county issuing site before the date on your placard.` },
  ],
  ID: [
    { q: `What does an Idaho permanent placard cost?`, a: `Form ITD 3392, revised in August 2026, lists an extra $25 initial fee for the permanent placard. Idaho is one of the few states that charge for it. The form prints no fee for the temporary placard, so this site marks that one as not stated.` },
    { q: `How long is an Idaho temporary placard valid?`, a: `One to six months, with an expiration date set when it is issued. The permanent placard has no length printed on the form we read. The certification can come from a physician, a physician’s assistant or an advanced-practice professional nurse, according to ITD 3392.` },
    { q: `Can I mail my Idaho placard application?`, a: `Yes. The Idaho Transportation Department accepts ITD 3392 by mail, and counties also issue placards. The form does not say whether a renewal needs a new certification, so ask the county or ITD before the date printed on your placard, and bring the fee.` },
  ],
};
