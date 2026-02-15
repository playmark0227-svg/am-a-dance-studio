import React, { useState } from 'react';
import type { ActivityReport } from '../types';

// サンプルデータ（実際にはAPIや管理画面から取得）
const sampleActivities: ActivityReport[] = [
  {
    id: '1',
    date: '2026-02-10',
    title: '発表会を開催しました！',
    description: '2月10日に年度末発表会を開催しました。子どもたちの1年間の成長を感じられる素晴らしいステージでした。',
    images: [],
  },
  {
    id: '2',
    date: '2026-01-25',
    title: '新しいクラスがスタート',
    description: 'HIMARI Freestyleクラスがスタートしました！自由な発想で踊る楽しさを体験できます。',
    images: [],
  },
  {
    id: '3',
    date: '2026-01-15',
    title: '地域イベントに出演',
    description: '地域のお祭りでチアダンスを披露しました。たくさんの方に見ていただき、子どもたちも大喜びでした。',
    images: [],
  },
];

const Activities: React.FC = () => {
  const [activities] = useState<ActivityReport[]>(sampleActivities);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">活動報告</h2>
          <p className="text-xl text-accent-600">スタジオの最新情報をお届けします</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 活動報告フィード */}
          <div className="space-y-8">
            {activities.map((activity) => (
              <article
                key={activity.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* 画像エリア（実際の画像がある場合） */}
                {activity.images && activity.images.length > 0 ? (
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300">
                    {/* 実際の画像をここに表示 */}
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <svg
                        className="w-16 h-16 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-sm">画像</p>
                    </div>
                  </div>
                )}

                {/* コンテンツエリア */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <time dateTime={activity.date}>{formatDate(activity.date)}</time>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>

                  {/* SNS風のインタラクションボタン（将来の拡張用） */}
                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-sm">いいね</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span className="text-sm">シェア</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* もっと見るボタン（将来の拡張用） */}
          <div className="text-center mt-12">
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors">
              もっと見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
