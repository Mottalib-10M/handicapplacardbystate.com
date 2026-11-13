import { describe, it, expect } from 'vitest';
import { STATES, byCode, expiry, lasts, feeText, signer, counts, cost } from '../src/lib/engine/placard';
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
  it('fees', () => { expect(feeText(0)).toBe('Free'); expect(feeText(26.5)).toBe('$26.50'); expect(feeText(null)).toMatch(/Not stated/); });
  it('Texas permanent placard issued March 2026 ends March 2030', () => expect(expiry(byCode('TX'), 'perm', 2026, 3).text).toBe('March 2030'));
  it('Florida ends on the birthday', () => expect(expiry(byCode('FL'), 'perm', 2026, 3, 9).text).toBe('September 2030'));
  it('Arizona never expires; California gives no guessed year', () => {
    expect(expiry(byCode('AZ'), 'perm', 2026, 3).year).toBeNull();
    expect(expiry(byCode('CA'), 'perm', 2026, 3).year).toBeNull();
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
