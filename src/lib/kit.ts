/**
 * Writing kit: every figure written in a page comes from here, never typed by hand.
 *   K.S(code)                 one state's rules (src/data/states.json, read on the official forms on 2026-11-13)
 *   K.STATES, K.C             all states, and national counts (free placards, renewals without a doctor…)
 *   K.fee, K.lasts, K.expiry, K.signer, K.cost, K.renewWord   engine (lib/engine/placard.ts)
 *   K.EX                      the one example case of the whole site
 *   formats                   K.num, K.day("2026-11-13")
 */
import P from '../data/params-2026.json';
import { EX, longDate } from './tool-specs';
import { formatNumber } from './format';
import * as E from './engine/placard';

export const KIT = {
  P, EX, READ: E.READ, STATES: E.STATES, S: E.byCode, C: E.counts(),
  fee: E.feeText, lasts: E.lasts, expiry: E.expiry, signer: E.signer, cost: E.cost, renewWord: E.renewWord, PROFESSIONS: E.PROFESSIONS,
  num: (x: number) => formatNumber(x, 0), day: longDate,
};
export type Kit = typeof KIT;
