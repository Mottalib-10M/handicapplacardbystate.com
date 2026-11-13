/** Three questions per state, Rhode Island to Wyoming (40 to 90 words each). Facts from src/data/states.json, read 2026-11-13. */
import type { FAQ } from '../../lib/page-types';

export const FAQS_4: Record<string, FAQ[]> = {
  RI: [
    { q: `What is a long-term placard in Rhode Island?`, a: `A placard for one to three years, between the temporary placard, which lasts 2 to 12 months, and the permanent placard, which lasts six years. The medical provider picks the tier that matches the expected length of the condition, and the DMV issues all three.` },
    { q: `Is there a separate renewal form in Rhode Island?`, a: `No. The New/Renew Disability Parking Placard Application covers both new placards and renewals, so there is a single form to keep. A medical provider certifies it. The Rhode Island DMV site refuses automated readers, so these facts come from search excerpts.` },
    { q: `What does a Rhode Island placard cost?`, a: `The pages we read print no fee for any of the three placards, so this site marks the cost as not stated rather than guessing. The Division of Motor Vehicles will give the current fee, if any, when you apply.` },
  ],
  SC: [
    { q: `What is the South Carolina photo placard?`, a: `The placard issued after you recertify with your physician before your current placard expires. It carries your photo. South Carolina is moving holders to it at renewal, so the recertification visit is the step to plan for before the date on your placard.` },
    { q: `How long is a South Carolina temporary placard?`, a: `It covers an impairment of at least four months and at most one year. Shorter conditions are not covered by the temporary placard. The permanent placard lasts four years. Both are applied for at an SCDMV branch on form RG-007A.` },
    { q: `Who signs South Carolina form RG-007A?`, a: `A licensed doctor. The June 2026 edition of RG-007A names no other profession in what we read. Fees were not printed either. The SCDMV site refuses automated readers, so these facts come from search excerpts of its official pages. Apply at an SCDMV branch.` },
  ],
  SD: [
    { q: `Where do I apply for a South Dakota disabled parking permit?`, a: `At the county treasurer where you live, with Form 1305 of the South Dakota Department of Revenue. The same form covers permits and license plates. A physician signs it. Both the permanent and the temporary permits are free. The permanent permit lasts up to five years.` },
    { q: `How long is a South Dakota temporary permit?`, a: `As long as the physician states on the form; we found no fixed ceiling in what we read. The permanent permit lasts up to five years. The Department of Revenue site refuses automated readers, so these facts come from search excerpts.` },
    { q: `How do I renew a South Dakota permit?`, a: `The page we read does not describe renewal, so this site marks the rule as not stated. Ask the county treasurer before the date printed on your permit, and bring a new physician’s signature on Form 1305 to avoid a second trip.` },
  ],
  TN: [
    { q: `Why is the Tennessee placard $26.50?`, a: `That is the fee printed for the permanent placard on Form 1310301, the highest permanent fee among the states we read. Renewal is $3, and nothing at all if the vehicle is registered in your name. The placard lasts two years.` },
    { q: `Can a Christian Science practitioner sign in Tennessee?`, a: `Yes. Form 1310301 names Christian Science practitioners, along with medical doctors, physical therapists, and physician assistants or nurse practitioners working under a physician’s protocol. Tennessee is unusual in naming this profession on its form. Apply at your county clerk with the fee of $26.50 for a permanent placard.` },
    { q: `How do I know when to renew a Tennessee placard?`, a: `A renewal notice comes about a month before the placard expires. You renew at your county clerk, for $3 or nothing if the vehicle is in your name. The temporary placard costs $10 and lasts up to six months. The permanent placard lasts two years.` },
  ],
  TX: [
    { q: `What is the difference between Texas blue and red placards?`, a: `Blue is permanent, free, and renewable every four years. Red is temporary, costs $5, and lasts six months or less, after which a new application is needed. Both are applied for on form VTR-214 at your county tax assessor-collector’s office.` },
    { q: `Do I need my doctor to renew a Texas blue placard?`, a: `No. At renewal, the doctor is not required to complete the disability statement on page 2 of VTR-214. That makes the four-yearly renewal of the blue placard quick. A red placard, by contrast, needs a new statement each time. Renewals are free.` },
    { q: `Who can sign Texas form VTR-214?`, a: `A physician, a podiatrist, an optometrist, a qualifying physician’s assistant or an advanced practice nurse. Chiropractors are not on the list we read. The September 2024 edition of VTR-214 is the one we read on November 13, 2026. Apply at your county tax assessor-collector’s office.` },
  ],
  UT: [
    { q: `Does a Utah disability placard expire?`, a: `A permanent one does not. Only the first doctor’s certification is needed, on form TC-842, so Utah holders never renew; they only replace a lost or damaged placard. The temporary placard, by contrast, ends after six months. Both placards are free at a DMV office.` },
    { q: `Can a Utah temporary placard be renewed?`, a: `No. It lasts six months and is free; a new one needs a new certification on TC-842. If the condition turns out to be lasting, the professional can certify a permanent placard instead, which never expires. Apply at a Utah DMV office.` },
    { q: `Who can sign Utah form TC-842?`, a: `A licensed physician, a physician assistant, a physical therapist or a nurse practitioner, according to the Utah Division of Motor Vehicles page. The site refuses automated readers, so this list comes from search excerpts of that page. Other professionals are not named; ask the DMV before relying on their signature.` },
  ],
  VT: [
    { q: `What is a Vermont orange placard?`, a: `A permanent placard with no expiration date. The blue placard, by contrast, lasts four years and needs a new medical form, VS-113, each time. The medical professional’s certification decides which one you receive. Apply by mail or at a DMV office with VD-120 and the medical form VS-113. Fees were not printed in what we read.` },
    { q: `Which form is the Vermont medical form?`, a: `VS-113, sent with VD-120, the Disabled Parking Placard Application in its June 2024 edition. A temporary placard uses VL-038 instead. A licensed physician, a certified physician assistant or an APRN signs the medical part. Send them by mail or bring them to a DMV office.` },
    { q: `Can a Vermont temporary placard be renewed?`, a: `No. It lasts six months at most and is not renewable. A new application on VL-038 is needed if the condition continues. Fees were not printed in what we read, so this site marks them as not stated. Apply by mail or at a DMV office.` },
  ],
  VA: [
    { q: `Do I need to renew a Virginia placard?`, a: `No. The DMV renews the permanent placard by itself and mails the new one about 60 days before the old one expires, every five years. Make sure the DMV has your current address, since the placard comes by mail. Both placards are free.` },
    { q: `Can I apply at a DMV Select in Virginia?`, a: `Yes. DMV Select offices take form MED 10, besides DMV customer service centers and mail. A licensed medical professional certifies it. All Virginia placards are free, permanent or temporary. The permanent placard lasts five years and the DMV renews it automatically, mailing the new one about 60 days before the old one expires.` },
    { q: `How long is a Virginia temporary placard?`, a: `Up to 12 months, twice the federal model’s six months, but it cannot be renewed. A new application on MED 10 is needed if the condition continues, or the professional can certify a permanent placard instead. Both placards are free.` },
  ],
  WA: [
    { q: `Can I apply online in Washington?`, a: `For a temporary placard only. Permanent placards go to a licensing office or by mail on Form 420-073. The Department of Licensing sends a renewal notice before the permanent privilege expires, every five years. Both placards are free. The temporary one lasts up to 12 months.` },
    { q: `How long is a Washington temporary placard?`, a: `Up to 12 months, twice the federal model’s six months. It is free. A new application is needed to renew it. The permanent placard is also free and lasts five years. The online route of the Department of Licensing is open to temporary placards, besides licensing offices and mail.` },
    { q: `Who can sign Washington Form 420-073?`, a: `A doctor or physician, or a licensed registered nurse practitioner, according to the form we read. The Disabled Parking Application for Individuals is the one form for both placards. Other professionals should check with the Department of Licensing first. Both placards are free.` },
  ],
  WV: [
    { q: `What does a replacement West Virginia placard cost?`, a: `$5, without a new doctor’s certification. It is the only fee printed in what we read; the first placard’s fee is marked not stated. Apply for a replacement at a DMV regional office or by mail. An eligible professional signs the first application on form DMV-41-TR.` },
    { q: `Where do I apply in West Virginia?`, a: `At a DMV regional office or by mail, with form DMV-41-TR, the Parking Application for a Mobility Impaired Person. Doctors of medicine or osteopathy, chiropractors, advanced nurse practitioners and physician’s assistants may sign Part II. The placard is renewed every five years.` },
    { q: `How often is a West Virginia placard renewed?`, a: `Every five years for a permanent placard. A temporary placard lasts up to six months. The page we read does not say whether a renewal needs a new physician’s signature, only that a replacement does not. The form is DMV-41-TR.` },
  ],
  WI: [
    { q: `Can a public health nurse sign in Wisconsin?`, a: `Yes. Form MV2548 names public health nurses, along with physicians, podiatrists, advanced practice nurses, chiropractors, physician assistants and physical therapists. Wisconsin’s list of seven professions is among the broadest in the country. Apply by mail or at a DMV service center. The permanent placard is free and lasts four years.` },
    { q: `What does a Wisconsin temporary placard cost?`, a: `$6, for up to six months, on form MV2933. When it ends, another permit of up to six months can follow, so a recovery of up to a year is covered. The permanent placard is free. Apply by mail or at a DMV service center.` },
    { q: `How often must I recertify in Wisconsin?`, a: `Every four years. Holders of a permanent placard renew and recertify on that cycle, with a professional’s signature. Apply by mail or at a DMV service center of the Wisconsin Department of Transportation. The permanent placard is free, on form MV2548.` },
  ],
  WY: [
    { q: `Do Wyoming placards expire?`, a: `Permanent placards issued on or after October 20, 2025 do not. Older permanent placards keep the date printed on them. A temporary placard lasts up to six months. All Wyoming placards are free. Apply by mail to WYDOT Driver Services, with a physician’s or an advanced practice nurse’s signature.` },
    { q: `Can a Wyoming temporary placard be renewed?`, a: `Once, on a new signed application. After that, a new application is needed, or the professional can certify a permanent placard, which now never expires. Everything goes by mail to WYDOT Driver Services. A temporary placard lasts up to six months and is free.` },
    { q: `Who can sign a Wyoming placard application?`, a: `A physician or an advanced practice nurse, according to the Application for Disabled Parking Identification Placard we read. Other professionals are not named on it. Send the signed application by mail to WYDOT Driver Services. All Wyoming placards are free.` },
  ],
};
