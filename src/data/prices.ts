import type { PriceInfo } from '../types';

export const priceData: PriceInfo[] = [
  {
    className: 'CHEER DANCE 一般',
    monthlyFee: '¥6,000',
  },
  {
    className: 'CHEER DANCE スキルアップ',
    monthlyFee: '¥6,000 / ¥8,000',
    options: [
      { label: '月4回（月曜のみ）', price: '¥6,000' },
      { label: '月6回（月曜4回+木曜2回）', price: '¥8,000' },
    ],
  },
  {
    className: 'JAZZ',
    monthlyFee: '¥6,000',
  },
  {
    className: 'BATON beginner',
    monthlyFee: '¥6,000',
  },
  {
    className: 'BATON',
    monthlyFee: '¥6,000',
  },
  {
    className: 'KPOP beginner',
    monthlyFee: '¥6,000',
  },
  {
    className: 'KPOP',
    monthlyFee: '¥6,000',
  },
  {
    className: 'GIRLS beginner',
    monthlyFee: '¥6,000',
  },
  {
    className: 'GIRLS',
    monthlyFee: '¥6,000',
  },
  {
    className: 'HIMARI Freestyle',
    monthlyFee: '¥3,000',
    note: 'お試し期間価格',
  },
  {
    className: '体操',
    monthlyFee: '¥4,000',
  },
  {
    className: 'TONE UP（exercise）',
    monthlyFee: '¥4,000',
  },
  {
    className: 'OVER 20 DANCE',
    monthlyFee: '¥5,000',
  },
  {
    className: 'ゆったりYOGA',
    monthlyFee: '¥3,000',
  },
];
