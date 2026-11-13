/** Handwritten notes, Illinois to Missouri. Facts from src/data/states.json (official forms and pages read on 2026-11-13). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_2: Record<string, StateNote> = {
  IL: {
    resume: `Illinois sends the renewal paperwork to you: about three months before a placard expires, the Secretary of State mails a renewal certification form, which a licensed physician must sign again. The first application is VSD 62, mailed to the Secretary of State; temporary placards can also be obtained at a facility. Both placards are free. The permanent placard lasts four years and the temporary one up to six months from the physician’s signature. The Secretary of State site refuses automated readers, so these facts come from search excerpts of its official pages.`,
    how: `Have a licensed physician complete VSD 62 and mail it to the Illinois Secretary of State. For a temporary placard, a Secretary of State facility can issue it.`,
    renew: `Watch the mail about three months before expiration: the renewal certification form arrives then and needs your physician’s signature.`,
  },
  IN: {
    resume: `Indiana’s permanent placard does not expire unless a health care provider certifies otherwise, so most holders have nothing to renew. The application is State Form 42070, at any Bureau of Motor Vehicles branch or by mail, and it asks for a health care provider’s certification without listing professions. A temporary placard ends either on the provider’s date or one year after issue, whichever comes first. We found no fee printed on what we read.`,
    how: `Complete State Form 42070 with your health care provider’s certification and submit it at a BMV branch or by mail.`,
    renew: `A permanent placard has no renewal. A temporary placard ends at the provider’s date or after one year, whichever is earlier; then a new application is needed.`,
  },
  IA: {
    resume: `Iowa has no single state form for the medical part: a statement on the provider’s own letterhead does the job, sent with the application to the Department of Transportation online, by mail, or at a driver’s license or county treasurer office. A physician, a nurse practitioner or a physical therapist can write it. The permanent permit is free and lasts five years; a temporary one is free for up to six months. The DOT site refuses automated readers, so these facts come from search excerpts of its official pages, and they do not say whether renewal needs a new statement.`,
    how: `Ask your physician, nurse practitioner or physical therapist for a statement on their letterhead, and send it with the application online, by mail, or at a driver’s license or county treasurer office.`,
    renew: `The permit lasts five years. Iowa’s page does not say whether a new statement is required; a fresh letter from your provider avoids a second trip.`,
  },
  KS: {
    resume: `Kansas lets you renew by self-certification: form TR-159a asks you, not your doctor, to confirm you still qualify. The first application is TR-159, the Certification of Disability, to your county treasurer’s motor vehicle office. The certifier must hold a healing arts license, from any state; a registered nurse or a licensed practical nurse cannot sign. A temporary placard lasts up to six months. The Department of Revenue site refuses automated readers, so these facts come from search excerpts, and they print neither the permanent placard’s length nor its fee.`,
    how: `Have TR-159 signed by a healing arts licensee and bring it to the county treasurer’s motor vehicle office.`,
    renew: `Use TR-159a: you self-certify that you remain eligible, without a doctor’s statement.`,
  },
  KY: {
    resume: `Kentucky’s permanent placard lasts six years and may be renewed an unlimited number of times. It is issued at your county clerk’s office on TC 96-347, revised in September 2026. Kentucky lists the county clerk among those who can certify, besides a licensed physician, a physician assistant, a physical or occupational therapist, a chiropractor and an APRN. The placard is free; a replacement costs $10. A temporary placard lasts up to three months.`,
    how: `Complete TC 96-347, have it certified by an eligible signer, and take it to your county clerk’s office.`,
    renew: `Permanent placards renew without a limit on the number of times. A lost one costs $10 to replace.`,
  },
  LA: {
    resume: `Louisiana issues a four-year hang tag through the Office of Motor Vehicles, at a $3 fee, on DPSMV 1966, the Physician’s Certification of Mobility Impairment. Only a physician may sign. Its temporary tag is long by national standards: up to 12 months, also $3, with a single renewal that needs recertification. For the permanent hang tag, renewal does not need recertification.`,
    how: `Have your physician complete DPSMV 1966 and take it to an Office of Motor Vehicles location with the fee.`,
    renew: `Permanent hang tags renew every four years without a new certification. A temporary tag allows one renewal, with a new certification.`,
  },
  ME: {
    resume: `In Maine, the provider who signs sets how long the placard lasts: up to six years, or permanent. The Bureau of Motor Vehicles accepts the application at a BMV branch or at your town office, under section 521 of title 29-A of the Maine statutes. A registered nurse can sign here, with physicians, physician associates and nurse practitioners. Placards are free. A temporary one lasts up to six months. When the provider certifies the disability as permanent, you need not prove it again at renewal. Maine’s site refuses automated readers, so these facts come from search excerpts.`,
    how: `Have a provider complete the certificate on the application, then apply at a BMV branch or your town office.`,
    renew: `Where your disability is certified permanent, renewal needs no new proof. Otherwise, the provider’s date governs.`,
  },
  MD: {
    resume: `Maryland’s permanent placard has no renewal: it stays valid until the holder’s death. The application is VR-210, from October 2025, through the Motor Vehicle Administration’s online portal, by mail, or at an MVA office. A licensed medical provider certifies it. Both the permanent and the temporary placards, the latter up to six months, are free. The MVA site refuses automated readers, so these facts come from search excerpts of its official pages.`,
    how: `Complete VR-210 with a licensed medical provider’s certification and send it through the MVA portal, by mail, or at an office.`,
    renew: `Nothing to renew for a permanent placard. A temporary placard ends after six months at most.`,
  },
  MA: {
    resume: `Massachusetts handles placards through its Medical Affairs Branch, which mails a new permanent placard before the old one expires: renewal is automatic every five years. Apply on MAB100 at an RMV service center or by mail to Medical Affairs in Boston. Signers include physicians, chiropractors, registered nurses, physician assistants, osteopaths, podiatrists, and optometrists for legal blindness only. Its temporary placard is the longest: issued for two to 24 months. Both are free.`,
    how: `Have MAB100 completed by an eligible signer and send it to Medical Affairs in Boston or bring it to an RMV service center.`,
    renew: `The permanent placard is renewed and mailed automatically. For a temporary one, file a new application four to six weeks before it expires.`,
  },
  MI: {
    resume: `Michigan’s permanent placard expires on your birthday every four years and renews free, up to 45 days ahead. The Department of State takes BFS-108 at a Secretary of State office or by mail, certified by a health professional. Temporary placards last one to six months and are not renewed; a new application is needed. The Department of State site refuses automated readers, so these facts come from search excerpts.`,
    how: `Complete BFS-108, have a health professional certify it, and submit it at a Secretary of State office or by mail.`,
    renew: `Renew free up to 45 days before your birthday expiration. A temporary placard ends; then apply again.`,
  },
  MN: {
    resume: `Minnesota calls it a disability parking certificate. Driver and Vehicle Services takes form PS2005, from October 2026, at a deputy registrar office or by mail, certified by a licensed health professional. The permanent certificate lasts six years and long-term ones 13 to 71 months, all free. Temporary certificates last one to six months, $5 each. When a professional extends the disability, a new medical statement is required. The DVS site refuses automated readers; these facts come from search excerpts.`,
    how: `Complete PS2005 with the health professional’s statement, then go to a deputy registrar or send it by mail.`,
    renew: `A new medical statement is required when the professional extends the disability period.`,
  },
  MS: {
    resume: `In Mississippi the county tax collector handles placards, on Form 76-104 of the Department of Revenue. A licensed physician or a nurse practitioner signs. The permanent placard is free but needs a new application every five years, with a doctor’s statement dated within 90 days of the renewal application. The temporary placard, also free, is valid up to six months.`,
    how: `Have Form 76-104 signed by a licensed physician or nurse practitioner and take it to your county tax collector.`,
    renew: `Every five years, a new application with a doctor’s statement dated no more than 90 days before.`,
  },
  MO: {
    resume: `Missouri changed its rule on August 28, 2026: new and manually renewed placards now expire in the eighth year, automatic renewals in the fourth. Apply on Form 2769 with Form 1776, the Physician’s Statement, at a license office or by mail. A new Form 1776 is needed every eight years, dated within 90 days, but not at 75 or older, nor for disabled veterans. A temporary placard costs $2 for up to 180 days, with one renewal. The Department of Revenue site refuses automated readers; these facts come from search excerpts.`,
    how: `Complete Form 2769 and have your physician fill in Form 1776, then submit both at a license office or by mail.`,
    renew: `New Form 1776 every eight years, dated within 90 days, except at 75 or older and for disabled veterans.`,
  },
};
