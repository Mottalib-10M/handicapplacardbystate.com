/** Handwritten notes, Montana to Pennsylvania. Facts from src/data/states.json (official forms and pages read on 2026-11-13). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_3: Record<string, StateNote> = {
  MT: {
    resume: `Montana’s Motor Vehicle Division takes form MV5-DSB, the May 2026 edition, through its online services or by mail, with no office visit needed. A licensed medical provider signs it. The permanent placard is free and lasts five years. The temporary placard has a twist: six months, or up to two years when the condition is expected to improve within two years. An updated permit needs a new application signed by a licensed provider. Montana’s site refuses automated readers; these facts come from search excerpts of its pages.`,
    how: `Complete MV5-DSB, have a licensed medical provider sign it, and submit it through MVD online services or by mail.`,
    renew: `An updated permit needs a new application with a licensed provider’s signature.`,
  },
  NE: {
    resume: `Nebraska lets your medical professional apply for you online, a route few states offer; mail works too. The Department of Motor Vehicles calls it the Application for Handicapped Parking Permit. A licensed physician, a physician assistant or a nurse practitioner certifies. The permanent permit is free and lasts six years, to the last day of your birth month, then must be renewed. Temporary permits last three or six months and can be renewed once. The DMV site refuses automated readers; these facts come from search excerpts.`,
    how: `Ask your Nebraska physician, PA or nurse practitioner to apply online for you, or mail the application yourself.`,
    renew: `Renew every six years, by the last day of your birth month.`,
  },
  NV: {
    resume: `Nevada has one of the longest terms: a permanent placard lasts ten years, and renewing it needs no new physician’s signature; a renewal notice comes as the date approaches. A moderate condition gets up to two years. Form SP-27 goes to a DMV office or a county assessor. Signers include a licensed physician, an APRN, a physician assistant, an occupational therapist or a physical therapist. Red temporary placards last up to six months. All are free.`,
    how: `Complete SP-27, have it signed by an eligible professional, and bring it to a DMV office or a county assessor.`,
    renew: `A renewal notice comes near the ten-year date. No new physician’s signature is needed.`,
  },
  NH: {
    resume: `New Hampshire speaks of walking disability privileges. Form RDMV 130 goes to any DMV registration office, by mail, or into a DMV drop box. Only a physician signs. The permanent placard lasts up to five years and ends with your driver’s license or ID; the temporary one up to six months. We did not find a fee or a renewal rule on the pages we read; the DMV site refuses automated readers, and these facts come from search excerpts.`,
    how: `Have a physician sign RDMV 130 and hand it in at a DMV registration office, by mail, or in a DMV drop box.`,
    renew: `The placard ends with your driver’s license or ID. Ask the DMV whether a new signature is needed; the page does not say.`,
  },
  NJ: {
    resume: `New Jersey splits the job: the Motor Vehicle Commission issues permanent placards on SP-41, while your local police department issues temporary ones on SP-68, for $4, with one renewal. The permanent placard is free and recertified every three years, also free, with a medical certification dated within 60 days.`,
    how: `For a permanent placard, file SP-41 with the MVC. For a temporary one, go to your local police department with SP-68.`,
    renew: `Every three years, recertify with a medical certification dated within 60 days. It is free.`,
  },
  NM: {
    resume: `In New Mexico, once a permanent placard is approved, no further medical information is required: form MVD 10383 is a one-time medical step. The Motor Vehicle Division issues at its offices, with a health care practitioner’s certification. The permanent placard lasts four years from the date of issue. The temporary one lasts up to a year and may not be renewed. Fees were not printed on what we read. The MVD site refuses automated readers; these facts come from search excerpts.`,
    how: `Have a health care practitioner certify MVD 10383 and bring it to an MVD office.`,
    renew: `Every four years, without new medical information once the permanent placard is approved.`,
  },
  NY: {
    resume: `New York is the exception: the state DMV issues only the plates, and parking permits are issued by your city, town or village. Form MV-664.1 explains how to apply. The local office sets the length, every permit has an expiration date, and fees vary. A physician certifies the first application. Form MV-664.1 says the medical certification is not required to renew a parking permit. The DMV site refuses automated readers; these facts come from search excerpts.`,
    how: `Read MV-664.1, then apply at your city, town or village office that issues parking permits.`,
    renew: `Renew at the local office; medical certification is not required for renewal.`,
  },
  NC: {
    resume: `North Carolina charges $5 per placard, permanent or temporary, with a limit of two. Apply on MVR-37A, revised July 2026, at a license plate agency the same day or by mail; renewals use MVR-37AA. A permanent placard lasts five years. Renewal needs a medical recertification, except at 80 or older or when you were certified permanently disabled. Blindness can be certified by an ophthalmologist, an optometrist or the Division of Services for the Blind.`,
    how: `Have the medical provider complete MVR-37A, then go to a license plate agency for the same-day placard, or mail it.`,
    renew: `Use MVR-37AA every five years. Recertify, unless you are 80 or older or certified permanently disabled.`,
  },
  ND: {
    resume: `North Dakota renews permanent permits on a three-year cycle, and for a non-reversible condition no new application from the medical provider is needed. The form is SFN 2886, at the Bismarck Motor Vehicle office or a local site, certified by a qualified medical provider. The temporary permit lasts three months, costs $3, and is not renewable.`,
    how: `Complete SFN 2886 with your medical provider and submit it in Bismarck or at a local site.`,
    renew: `Every three years. For a non-reversible condition, no new provider application is needed.`,
  },
  OH: {
    resume: `Ohio offers a choice: a standard placard up to ten years for $8, or a permanent placard with no expiration for $15. The Bureau of Motor Vehicles takes BMV 4826 at a deputy registrar or by mail. A physician, a physician assistant, an advanced practice nurse, an optometrist or a chiropractor signs. A temporary placard lasts six months or less, $8. A standard placard renews for $8, no more than 90 days before it expires.`,
    how: `Complete BMV 4826, have it certified, and go to a deputy registrar or mail it.`,
    renew: `Standard placards renew for $8 within 90 days of expiration. The $15 permanent one does not expire.`,
  },
  OK: {
    resume: `Service Oklahoma handles placards by mail only, on Form 302DC. A long list of professionals may sign: physicians and osteopathic physicians, chiropractors, podiatric physicians, optometrists, physician assistants and advanced registered nurse practitioners. The permanent placard is free and lasts five years from processing; the temporary one up to six months, at the physician’s date. Timing is strict: applications are accepted only within 60 days of the physician’s signature.`,
    how: `Have Form 302DC signed and mail it to Service Oklahoma within 60 days of the signature.`,
    renew: `Renewals also need a physician’s signature, and are taken only within 60 days of it.`,
  },
  OR: {
    resume: `Oregon lets a naturopath sign, which is rare. Form 735-265 goes to a DMV office or by mail. Other signers: doctors of medicine, osteopaths, podiatrists, chiropractors, nurse practitioners, physician associates and optometrists. The permanent placard is free and lasts eight years from the date of issue; the temporary one up to six months. The form has a renewal box but does not say whether a new certificate is required.`,
    how: `Complete Form 735-265, have it certified, and submit it at a DMV office or by mail.`,
    renew: `Check the renewal box on Form 735-265. Ask DMV whether a new certificate is required.`,
  },
  PA: {
    resume: `PennDOT handles placards by mail, on MV-145A. A health care provider licensed in Pennsylvania or a neighboring state certifies. The permanent placard is free and lasts five years; renewal uses sections A and E of the form only, with no new certification. A temporary placard is free, lasts up to six months, and is never extended.`,
    how: `Complete MV-145A, have a licensed provider certify it, and mail it to PennDOT.`,
    renew: `Fill in sections A and E only; no new medical certification is needed.`,
  },
};
