import { describe, it, expect } from 'vitest';
import { STATES, byCode, expiry, lasts, feeText, signer, counts, cost, formRef, permSentence, caEnd } from '../src/lib/engine/placard';
import { statePages } from '../src/lib/state-pages';
import { getTool, TOOL_KINDS } from '../src/lib/tool-specs';
import { PAGES } from '../src/lib/pages';
import { helpers } from '../src/lib/helpers';

describe('state data', () => {
  it('covers the 50 states and DC once each', () => {
    expect(STATES.length).toBe(51);
    expect(new Set(STATES.map((s) => s.code)).size).toBe(51);
  });
  it('every state has a source page and a form', () => {
    for (const s of STATES) { expect(s.page).toMatch(/^https:\/\//); expect(s.form.length).toBeGreaterThan(2); }
  });
});

describe('engine', () => {
  it('fees', () => { expect(feeText(0)).toBe('Free'); expect(feeText(26.5)).toBe('$26.50'); expect(feeText(null)).toBe('Not printed on the form'); });
  it('Texas permanent placard issued March 2026 ends March 2030', () => expect(expiry(byCode('TX'), 'perm', 2026, 3).text).toBe('March 2030'));
  it('Florida ends on the birthday', () => expect(expiry(byCode('FL'), 'perm', 2026, 3, 9).text).toBe('September 2030'));
  it('Arizona never expires', () => expect(expiry(byCode('AZ'), 'perm', 2026, 3).year).toBeNull());
  // Testers 2026-11-14: "June 30 of an odd-numbered year" was shown instead of the computed date.
  it('California: the first June 30 of an odd-numbered year on or after the month of issue', () => {
    expect(expiry(byCode('CA'), 'perm', 2026, 3).text).toBe('June 30, 2027');
    expect(expiry(byCode('CA'), 'perm', 2026, 12).text).toBe('June 30, 2027');
    expect(expiry(byCode('CA'), 'perm', 2027, 3).text).toBe('June 30, 2027');
    expect(expiry(byCode('CA'), 'perm', 2027, 7).text).toBe('June 30, 2029');
    expect(caEnd(2025, 6)).toBe(2025);
  });
  it('temporary placard of Massachusetts lasts up to 24 months', () => expect(lasts(byCode('MA'), 'temp')).toBe('Up to 24 months'));
  it('signers', () => {
    expect(signer(byCode('AK'), 'ch').v).toBe('yes');
    expect(signer(byCode('CO'), 'ch').v).toBe('limited');
    expect(signer(byCode('KS'), 'rn').v).toBe('no');
    expect(signer(byCode('DE'), 'np').v).not.toBe('yes');
  });
  it('cost per placard', () => { expect(cost(byCode('NC'), 'perm', 2)).toBe(10); expect(cost(byCode('CO'), 'perm', 1)).toBeNull(); });
  it('national counts', () => { const c = counts(); expect(c.total).toBe(51); expect(c.permFree).toBeGreaterThan(30); });
});

describe('tools', () => {
  it('every tool runs on every state', () => {
    for (const k of TOOL_KINDS) for (const s of STATES) {
      const t = getTool(k, { st: s.code });
      const v = Object.fromEntries(t.inputs.map((i) => [i.id, i.def]));
      expect(t.run(v as never).value).toBeTruthy();
    }
  });
});

// Testers 2026-11-14: an unknown fee or date was shown as the large answer ("Not stated on the form").
describe('missing data is never the large answer', () => {
  it('no calculator shows "not stated" or "not printed" in large type, for any state and placard type', () => {
    for (const k of TOOL_KINDS) for (const s of STATES) for (const type of ['perm', 'temp']) {
      const t = getTool(k, { st: s.code, type });
      const v = Object.fromEntries(t.inputs.map((i) => [i.id, i.def]));
      const out = t.run(v as never);
      expect(out.value, `${k} ${s.code} ${type}`).not.toMatch(/not stated|not printed|odd-numbered/i);
    }
  });
  it('Colorado (no printed fee) leads with the end date and says whom to ask', () => {
    const out = getTool('state', { st: 'CO' }).run({ st: 'CO', type: 'perm', m: '3', y: '2026', b: '9' } as never);
    expect(out.value).toBe('March 2029');
    expect(out.sub).toMatch(/Fee not printed on form DR 2219: ask your county motor vehicle office/);
  });
  it('Alabama (no printed end date): the renewal checker answers the doctor question', () => {
    const out = getTool('renew', { st: 'AL' }).run({ st: 'AL', type: 'perm', m: '3', y: '2026', b: '9' } as never);
    expect(out.value).toBe('Yes');
    expect(out.sub).toMatch(/look at the date on your placard/);
  });
  it('state intros read as sentences and forms are never "form Form"', () => {
    for (const p of statePages()) {
      expect(p.intro, p.id).not.toMatch(/not stated|lasts no |lasts not|form Form|june/);
      expect(p.h1, p.id).not.toMatch(/form Form|form State Form/);
    }
    expect(formRef(byCode('AK'))).toBe('Form 861');
    expect(formRef(byCode('CA'))).toBe('form REG 195');
    expect(permSentence(byCode('AZ'), 'Arizona handicap placard')).toBe('The Arizona handicap placard for a permanent disability is free and never expires.');
  });
});

describe('pages', () => {
  it('between 60 and 80 content pages with valid lengths and bodies', () => {
    expect(PAGES.length).toBe(57);
    const h = helpers();
    for (const p of PAGES) {
      expect(p.title.length, p.id).toBeGreaterThanOrEqual(50); expect(p.title.length, p.id).toBeLessThanOrEqual(60);
      expect(p.description.length, p.id).toBeGreaterThanOrEqual(150); expect(p.description.length, p.id).toBeLessThanOrEqual(160);
      expect(p.resume.split(/\s+/).length, p.id).toBeGreaterThanOrEqual(120);
      expect(TOOL_KINDS).toContain(p.tool);
      expect(p.body(h).length).toBeGreaterThan(200);
    }
  });
  it('no FAQ question appears twice', () => {
    const q = PAGES.flatMap((p) => p.faqs.map((f) => f.q));
    expect(new Set(q).size).toBe(q.length);
  });
});
