/** Handwritten notes, Rhode Island to Wyoming. Facts from src/data/states.json (official forms and pages read on 2026-11-13). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_4: Record<string, StateNote> = {
  RI: {
    resume: `Rhode Island uses one form for everything: the New/Renew Disability Parking Placard Application serves new placards and renewals alike, at the Division of Motor Vehicles. A medical provider certifies. There are three lengths: permanent for six years, long-term for one to three years, and temporary for two to 12 months. Fees were not printed in what we read. The DMV site refuses automated readers; these facts come from search excerpts.`,
    how: `Fill in the New/Renew application, have a medical provider certify it, and submit it to the DMV.`,
    renew: `Use the same New/Renew application. A permanent placard lasts six years.`,
  },
  SC: {
    resume: `South Carolina’s placard is moving to a photo placard: holders recertify with their physician before the placard expires to obtain one. Form RG-007A, from June 2026, goes to an SCDMV branch, signed by a licensed doctor. The permanent placard lasts four years. The temporary placard covers an impairment of at least four months and at most one year. Fees were not printed in what we read. The SCDMV site refuses automated readers; these facts come from search excerpts.`,
    how: `Have a licensed doctor sign RG-007A and bring it to an SCDMV branch.`,
    renew: `Recertify with your physician before expiration to obtain a photo placard.`,
  },
  SD: {
    resume: `South Dakota issues through the county treasurer where you live, on Form 1305 of the Department of Revenue. A physician signs. The permanent permit is free and lasts up to five years; the temporary one is free for the length the physician states. The page we read does not describe renewal; the Department of Revenue site refuses automated readers, and these facts come from search excerpts.`,
    how: `Have a physician sign Form 1305 and take it to your county treasurer.`,
    renew: `The page does not describe renewal. Ask your county treasurer before the date on the permit.`,
  },
  TN: {
    resume: `Tennessee charges the most among the states we read: $26.50 for a permanent placard, then $3 to renew, with no charge if the vehicle is registered in your name. It lasts two years, with California the shortest permanent term. Apply at your county clerk on Form 1310301, July 2026 edition. Signers: a medical doctor, a physician assistant or nurse practitioner under a physician’s protocol, a physical therapist, or a Christian Science practitioner. A temporary placard costs $10 for up to six months. A renewal notice comes about a month before expiration.`,
    how: `Complete Form 1310301, have an eligible signer certify it, and bring it to your county clerk with the fee.`,
    renew: `Watch for the notice about a month before expiration, then renew at the county clerk.`,
  },
  TX: {
    resume: `Texas uses colors: a blue placard for a permanent disability, renewable every four years, and a red one for a temporary disability, six months or less. The Department of Motor Vehicles form is VTR-214, revised September 2024, taken by your county tax assessor-collector. The blue placard is free; the red one costs $5. At renewal, the doctor need not complete the disability statement on page 2. Signers: a physician, a podiatrist, an optometrist, a qualifying physician’s assistant or an advanced practice nurse.`,
    how: `Complete VTR-214, have page 2 signed by an eligible professional, and bring it to your county tax assessor-collector.`,
    renew: `Every four years for the blue placard, without page 2. A red placard ends; then a new application.`,
  },
  UT: {
    resume: `Utah’s permanent placard does not expire, and only the first doctor’s certification is needed. The form is TC-842, Disability Certification, at a Division of Motor Vehicles office or by mail, signed by a licensed physician, a physician assistant, a physical therapist or a nurse practitioner. Placards are free. A temporary placard lasts six months and is not renewable; a new one needs a new certification. The DMV site refuses automated readers; these facts come from search excerpts.`,
    how: `Have an eligible professional complete TC-842 and bring it to a DMV office, or mail it to the Motor Vehicle Division.`,
    renew: `Nothing to renew for a permanent placard. A new temporary placard needs a new certification.`,
  },
  VT: {
    resume: `Vermont uses two colors for permanent placards: a blue placard for four years and an orange placard with no expiration. The application is VD-120 with the medical form VS-113; temporary placards use VL-038. Apply by mail or at a DMV office. Signers: a licensed physician, a certified physician assistant or an APRN. A temporary placard lasts six months at most, not renewable. A new medical form is needed every four years. Fees were not printed in what we read.`,
    how: `Complete VD-120 and have VS-113 filled in by an eligible signer; send them by mail or bring them to a DMV office.`,
    renew: `A new VS-113 medical form every four years for the blue placard.`,
  },
  VA: {
    resume: `Virginia renews the permanent placard by itself: the new one is mailed about 60 days before the old one expires, every five years. Form MED 10 goes to a DMV customer service center, a DMV Select, or by mail, certified by a licensed medical professional. All placards are free. A temporary placard lasts up to 12 months and is not renewable.`,
    how: `Have a licensed medical professional complete MED 10 and submit it at a DMV center, DMV Select, or by mail.`,
    renew: `Automatic: the new placard arrives about 60 days before expiration.`,
  },
  WA: {
    resume: `Washington’s Department of Licensing takes Form 420-073 at a licensing office, by mail, or online for temporary placards only. A doctor or physician or a licensed registered nurse practitioner signs. The permanent placard is free and lasts five years; DOL sends a renewal notice before it expires. A temporary placard lasts up to 12 months and needs a new application to renew.`,
    how: `Complete Form 420-073, have it certified, and submit it at a licensing office or by mail; temporary placards can also go online.`,
    renew: `DOL sends a renewal notice before expiration. A temporary placard needs a new application.`,
  },
  WV: {
    resume: `West Virginia renews placards every five years, on form DMV-41-TR, at a DMV regional office or by mail. The form calls the signer a licensed physician and counts in it doctors of medicine and osteopathy, chiropractors, advanced nurse practitioners and physician’s assistants. A temporary placard lasts up to six months. A replacement costs $5 and needs no new doctor’s certification. Other fees were not printed in what we read. The form was read directly; the five-year length comes from search excerpts of the DMV pages.`,
    how: `Have an eligible professional complete Part II of DMV-41-TR and take it to a DMV regional office or mail it.`,
    renew: `Every five years. A replacement is $5 without a new certification.`,
  },
  WI: {
    resume: `Wisconsin uses MV2548 for permanent placards and MV2933 for temporary ones, by mail or at a DMV service center. A public health nurse can sign here, with physicians, podiatrists, advanced practice nurses, chiropractors, physician assistants and physical therapists. Permanent placards are free; holders renew and recertify every four years. A temporary placard costs $6 for up to six months, then another of up to six months.`,
    how: `Complete MV2548 or MV2933, have it certified, and send it by mail or bring it to a DMV service center.`,
    renew: `Every four years, with recertification.`,
  },
  WY: {
    resume: `Wyoming’s permanent placards issued on or after October 20, 2025 do not expire. Apply by mail to WYDOT Driver Services, with a physician’s or an advanced practice nurse’s signature. Placards are free. A temporary placard lasts up to six months, with one renewal on a new signed application.`,
    how: `Complete the application, have it signed, and mail it to WYDOT Driver Services.`,
    renew: `Nothing to renew for a permanent placard issued since October 20, 2025.`,
  },
};
