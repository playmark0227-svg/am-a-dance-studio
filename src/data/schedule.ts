import type { DaySchedule } from '../types';

// クラス名からクラスIDへのマッピング
export const classNameToId: { [key: string]: string } = {
  'CHEER DANCE 一般': 'cheer-dance-general',
  'CHEER DANCE skill up': 'cheer-dance-skillup',
  'JAZZ': 'jazz',
  'BATON beginner': 'baton-beginner',
  'BATON': 'baton',
  'KPOP beginner': 'kpop-beginner',
  'KPOP': 'kpop',
  'GIRLS beginner': 'girls-beginner',
  'GIRLS': 'girls',
  'HIMARI Freestyle': 'himari-freestyle',
  '体操': 'gymnastics',
  'OVER 20': 'over20',
  'TONE UP': 'toneup',
  'ゆったりYOGA': 'yoga',
};

export const scheduleData: DaySchedule[] = [
  {
    day: '月曜日',
    dayEn: 'Monday',
    location: 'あすぱる',
    classes: [
      {
        time: '18:30-19:30',
        className: 'CHEER DANCE skill up',
        location: 'あすぱる',
      },
      {
        time: '19:30-20:30',
        className: 'HIMARI Freestyle',
        location: 'あすぱる',
      },
    ],
  },
  {
    day: '火曜日',
    dayEn: 'Tuesday',
    location: 'あすぱる',
    classes: [
      {
        time: '17:30-18:00',
        className: '体操',
        location: 'あすぱる',
      },
      {
        time: '18:15-19:15',
        className: 'KPOP',
        location: 'あすぱる',
      },
      {
        time: '19:30-20:30',
        className: 'GIRLS',
        location: 'あすぱる',
      },
    ],
  },
  {
    day: '水曜日',
    dayEn: 'Wednesday',
    location: 'アイランドスタジオ',
    classes: [
      {
        time: '15:30-16:30',
        className: 'KPOP beginner',
        location: 'アイランドスタジオ',
      },
      {
        time: '16:30-17:15',
        className: 'TONE UP',
        location: 'アイランドスタジオ',
      },
      {
        time: '17:30-18:30',
        className: 'BATON beginner',
        location: 'アイランドスタジオ',
      },
      {
        time: '18:30-19:30',
        className: 'OVER 20',
        location: 'アイランドスタジオ',
      },
    ],
  },
  {
    day: '木曜日',
    dayEn: 'Thursday',
    location: 'アイランドスタジオ',
    classes: [
      {
        time: '16:30-17:30',
        className: 'BATON',
        location: 'アイランドスタジオ',
      },
      {
        time: '17:30-18:30',
        className: 'CHEER DANCE skill up',
        location: 'アイランドスタジオ',
        isAlternating: true,
        alternateClass: 'ゆったりYOGA',
        alternateTime: '17:45-18:15',
        alternatePattern: '第1・3週：CHEER DANCE skill up / 第2・4週：ゆったりYOGA（17:45-18:15）',
      },
      {
        time: '18:30-19:30',
        className: 'CHEER DANCE 一般',
        location: 'アイランドスタジオ',
      },
    ],
  },
  {
    day: '金曜日',
    dayEn: 'Friday',
    location: 'あすぱる',
    classes: [
      {
        time: '16:30-17:30',
        className: 'JAZZ',
        location: 'あすぱる',
      },
      {
        time: '17:30-18:30',
        className: 'GIRLS beginner',
        location: 'あすぱる',
      },
    ],
  },
];
