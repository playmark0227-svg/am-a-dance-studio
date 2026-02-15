// クラス情報の型定義
export interface ClassInfo {
  id: string;
  name: string;
  nameEn: string;
  targetAge: string;
  description: string;
  duration?: string;
  features?: string[];
}

// スケジュール情報の型定義
export interface ScheduleItem {
  time: string;
  className: string;
  location: string;
  isAlternating?: boolean;
  alternateClass?: string;
  alternatePattern?: string;
}

export interface DaySchedule {
  day: string;
  dayEn: string;
  location: string;
  classes: ScheduleItem[];
}

// 料金情報の型定義
export interface PriceInfo {
  className: string;
  monthlyFee: string;
  options?: {
    label: string;
    price: string;
  }[];
  note?: string;
}

// お知らせ情報の型定義
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category?: 'info' | 'event' | 'important';
}

// 活動報告の型定義
export interface ActivityReport {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
}
