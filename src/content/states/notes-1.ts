/** Handwritten notes, Alabama to Idaho. Facts from src/data/states.json (official forms and pages read on 2026-11-13). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_1: Record<string, StateNote> = {
  AL: {
    resume: `Alabama hands out its parking credentials through the county, not through a central office: you take form MVR 32-6-230 to the license plate issuing office of your county. The Department of Revenue prints no charge for the placard itself, and a temporary credential runs up to six months. One gap is worth knowing before you go: the form we read does not print how long a permanent credential lasts, so the date on the card you receive is the one to note. Three kinds of signers appear on the form: a physician, a certified registered nurse practitioner, or a certified nurse midwife.`,
    how: `Download MVR 32-6-230 from the Alabama Department of Revenue, fill in the applicant section, and have one of the three listed professionals sign the certification. Bring it to the county office that issues license plates where you live.`,
    renew: `Alabama asks for a new certified application at renewal, so the medical part is signed again each time. A lost or damaged credential is a replacement, not a renewal, and needs no new certification.`,
  },
  AK: {
    resume: `Alaska’s Form 861, revised in October 2025, is one of the most open applications in the country about who may sign it: a physician, a physician assistant, a nurse practitioner, a podiatrist, a chiropractor, a physical or occupational therapist, and even a speech-language pathologist. The Division of Motor Vehicles charges nothing. A permanent permit lasts up to five years and a temporary one up to six months. Unusually, the DMV also accepts the application by e-mail, which helps residents far from an office. Both permit types are renewed through a fresh application with a new medical signature.`,
    how: `Complete Form 861, have the medical section signed by one of the eight professions named on it, and submit it at a DMV office or by e-mail to the DMV address printed on the form. Keep a copy of what you sent.`,
    renew: `A permanent Alaska permit is renewable upon reapplication at a DMV office, which means a new Form 861 with a new medical certification. Temporary permits follow the same route.`,
  },
  AZ: {
    resume: `Since October 28, 2018, a permanent Arizona disability placard has no expiration date. That single change means most Arizona holders never renew; they only replace a lost or worn placard, and the Motor Vehicle Division says no new certification is needed for that. New applications go on Form 96-0104, at an MVD office or through ServiceArizona; replacements use Form 40-0112. The placard is free. A temporary placard lasts six months, after which an authorized physician must certify again. What we read did not print a fee for the temporary placard, so check it at the counter. The ADOT site refuses automated readers, so these facts come from search excerpts of its official pages.`,
    how: `Fill in Form 96-0104 with the physician’s certification and submit it at an MVD office or through ServiceArizona. For a replacement or a renewal, Form 40-0112 is the one to use.`,
    renew: `There is nothing to renew for a permanent placard issued since October 28, 2018. A temporary placard ends after six months and needs a new physician certification to continue.`,
  },
  AR: {
    resume: `In Arkansas the paperwork starts with Form 10-336, the Licensed Physician’s Certification revised in November 2024, which you bring to any revenue office of the Department of Finance and Administration. A permanent certificate is free and runs four years, counted from the last day of the month it was issued. The temporary placard is short here: three months at most, and the state is strict about it, since an expired temporary placard can be neither renewed nor replaced. The form lets a physician, a physician assistant, a physical therapist or an advanced practice registered nurse sign.`,
    how: `Have Form 10-336 completed and signed by one of the four listed professionals, then take it to an Arkansas revenue office with your identification. The placard is issued there.`,
    renew: `The permanent certificate is renewed without a new disability certification. For a temporary placard there is no renewal at all: when it ends, a new application starts the process again.`,
  },
  CA: {
    resume: `California runs its placards on a fixed calendar: every permanent placard expires on June 30 of an odd-numbered year, so a cycle lasts two years, whatever month you applied in. The Department of Motor Vehicles renews it free and without a new certification, by mail, at an office or online, and asks for your own signature only once six years have passed. The application is REG 195. Temporary placards cost $6 and last up to 180 days; they cannot be renewed more than six times in a row. The list of signers is wide: physicians and surgeons, chiropractors, optometrists, physician assistants, nurse practitioners and certified nurse midwives.`,
    how: `Complete REG 195 and have the medical section certified by one of the listed professionals. Send it by mail, take it to a DMV office, or use the DMV online service.`,
    renew: `Permanent placards renew free, with no new medical certification, at the end of each cycle on June 30 of an odd-numbered year. Every six years DMV asks for your own signature to confirm you still need it.`,
  },
  CO: {
    resume: `Colorado separates two kinds of signers. A physician, a physician assistant, a podiatrist or an advanced practice nurse can certify any placard, while a chiropractor or a physical therapist can certify only a temporary one. The application is DR 2219, accepted at your county motor vehicle office, by mail or online. Permanent impairments receive a three-year placard. What Colorado calls a reset is the key feature: each new placard restarts the three-year certification date once a professional validates it. The page we read gives no fee and no length for the temporary placard; ask the county office before you go.`,
    how: `Fill in DR 2219, have the professional part completed by an eligible signer for your placard type, and turn it in at your county motor vehicle office, by mail, or online.`,
    renew: `A new placard resets the three-year certification date when a professional validates it, so the medical part comes back regularly. Colorado does not let a chiropractor or physical therapist certify a permanent placard.`,
  },
  CT: {
    resume: `Connecticut uses two forms: B-225P for a permanent placard, revised in October 2026, and B-225T for a temporary one. The permanent placard is free and can last up to eight years, but it is tied to your license: the Department of Motor Vehicles wants your driver’s license or ID card renewed before the permit. Temporary placards cost $5 and last up to six months, and form B-225T cannot be faxed or e-mailed. The signer list includes an optometrist or ophthalmologist for blindness, and a psychiatrist of the U.S. Department of Veterans Affairs for a veteran with post-traumatic stress disorder.`,
    how: `Complete B-225P or B-225T and have it certified. Send it by mail, apply online, or go to a DMV branch with an appointment.`,
    renew: `Renew your driver’s license or ID card first; Connecticut renews the permit after it. A temporary placard goes on a new B-225T, sent by mail or brought in, never by fax or e-mail.`,
  },
  DE: {
    resume: `Delaware keeps a short list: only a physician can sign MV474, the application for a disability plate or placard, and only a DMV branch takes it. A permanent placard lasts three years. Each renewal needs a new application signed by your physician, with one exception written on the form: at 85 or older, proof of age is enough. We did not find a fee or a temporary placard length on the form we read, so these are left as not stated; the counter will tell you.`,
    how: `Ask your physician to complete and sign MV474, then bring it to a Delaware DMV branch with your identification.`,
    renew: `Every three years, a new MV474 signed by your physician. From age 85, proof of age replaces the physician’s signature.`,
  },
  DC: {
    resume: `The District of Columbia issues a long-term placard for up to eight years, free, from a DC DMV service center or by mail. The application asks for a medical practitioner’s certification without listing professions. A renewal is a new application with a new certification, filed within 60 days of the expiration date. The District also has a feature few states have: a one-week permit that needs no doctor at all. Other temporary placards last as long as the practitioner sets.`,
    how: `Complete the Application for Disability Parking Tags & Placard, have a medical practitioner certify it, and submit it at a DC DMV service center or by mail.`,
    renew: `Renewal is a new application with medical certification, accepted within 60 days of the expiration date. Plan the appointment with your practitioner around that window.`,
  },
  FL: {
    resume: `In Florida the permanent permit ends on your birthday, four years after issue, and costs nothing. The temporary permit costs $15 and lasts up to six months, but a second one within a year of the first is free. Applications go on HSMV 83039 to your county tax collector or a license plate agency. The form must carry the signature of a certifying medical authority, dated within the last 12 months. The Department of Highway Safety and Motor Vehicles blocks automated readers, so these facts come from search excerpts of its official pages.`,
    how: `Have HSMV 83039 certified by a medical authority, no more than 12 months before you apply, and take it to your county tax collector or a license plate agency.`,
    renew: `The permanent permit ends on your birthday in its fourth year. The certification must have been signed within the last 12 months when you apply.`,
  },
  GA: {
    resume: `Georgia calls its form an affidavit: the MV-9D Disabled Person’s Parking Affidavit, which you take to the tag office of the county where you live. The placard is free and is replaced every four years. A temporary one is also free and valid up to 180 days. The affidavit can be signed by a doctor of medicine or of osteopathic medicine, a podiatrist, an optometrist or a chiropractor. The Department of Revenue page does not say whether a renewal needs a new affidavit.`,
    how: `Have the MV-9D signed by one of the professionals named on it, then bring it to the county tag office where you live.`,
    renew: `The permanent placard is replaced every four years at the county tag office. Ask there whether a new affidavit is needed; the state page does not say.`,
  },
  HI: {
    resume: `Hawaii is a special case: the placards are the business of the Disability and Communication Access Board, and the counties issue them. The application is PA-3, the 2025 edition. The long-term blue placard lasts six years and is free; a temporary placard costs $12 and so does each renewal of it. Timing matters: the certificate must be dated no more than 60 days before the permit expires. A licensed physician or an advanced practice registered nurse can sign.`,
    how: `Complete PA-3, have the certificate signed by a licensed physician or an APRN, and take it to a county issuing site.`,
    renew: `Have the certificate signed no earlier than 60 days before the placard expires. Each temporary placard renewal costs $12.`,
  },
  ID: {
    resume: `Idaho is one of the few states to charge for the permanent placard: form ITD 3392, revised in August 2026, lists an extra $25 initial fee. The Idaho Transportation Department takes it by mail, and counties also issue. The form does not print how long the permanent placard lasts. A temporary placard is issued for one to six months with a set expiration date. A physician, a physician’s assistant or an advanced-practice professional nurse can sign.`,
    how: `Complete ITD 3392, have the medical part signed, and send it to ITD by mail or take it to your county, with the fee.`,
    renew: `The form does not say whether a renewal needs a new certification. Ask the county before the date printed on the placard.`,
  },
};
