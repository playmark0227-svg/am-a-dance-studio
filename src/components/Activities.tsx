import React, { useState, useEffect } from 'react';
import type { ActivityReport } from '../types';
import { getActivities, likeActivity, unlikeActivity } from '../firebase/activities';

// サンプルデータ（実際にはAPIや管理画面から取得）
const sampleActivities: ActivityReport[] = [
  {
    id: '1',
    date: '2026-02-10',
    title: '発表会を開催しました！',
    description: '2月10日に年度末発表会を開催しました。子どもたちの1年間の成長を感じられる素晴らしいステージでした。みんなで一生懸命練習した成果を発揮し、保護者の皆様からも温かい拍手をいただきました。今年のテーマは「未来への一歩」。それぞれのクラスが個性あふれるパフォーマンスを披露してくれました。',
    images: [],
  },
  {
    id: '2',
    date: '2026-01-25',
    title: '新しいクラスがスタート',
    description: 'HIMARI Freestyleクラスがスタートしました！自由な発想で踊る楽しさを体験できます。初回レッスンでは、基礎的なステップから始めて、最後にはみんなで即興ダンスを楽しみました。',
    images: [],
  },
  {
    id: '3',
    date: '2026-01-15',
    title: '地域イベントに出演',
    description: '地域のお祭りでチアダンスを披露しました。たくさんの方に見ていただき、子どもたちも大喜びでした。地域の皆様との交流も深まり、素敵な一日となりました。',
    images: [],
  },
  {
    id: '4',
    date: '2025-12-20',
    title: 'クリスマスパーティー',
    description: '今年最後のレッスンはクリスマスパーティーで楽しく締めくくりました！サンタ衣装でダンスを踊ったり、プレゼント交換をしたりと、みんな笑顔いっぱいの時間を過ごしました。',
    images: [],
  },
];

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityReport[]>([]);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedByUser, setLikedByUser] = useState<Record<string, boolean>>({});
  const [selectedActivity, setSelectedActivity] = useState<ActivityReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Firebaseから活動報告を取得
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const fetchedActivities = await getActivities();
        setActivities(fetchedActivities);
        
        // いいね数を初期化
        const likesData: Record<string, number> = {};
        fetchedActivities.forEach(activity => {
          likesData[activity.id] = activity.likes || 0;
        });
        setLikes(likesData);
        
        setIsLoading(false);
      } catch (error) {
        console.error('活動報告の取得エラー:', error);
        // エラー時はサンプルデータを使用
        setActivities(sampleActivities);
        setLikes({
          '1': 12,
          '2': 8,
          '3': 15,
          '4': 10,
        });
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // いいねボタン処理
  const handleLike = async (activityId: string) => {
    try {
      if (likedByUser[activityId]) {
        // すでにいいね済み → いいね解除
        await unlikeActivity(activityId);
        setLikes(prev => ({ ...prev, [activityId]: prev[activityId] - 1 }));
        setLikedByUser(prev => ({ ...prev, [activityId]: false }));
      } else {
        // いいねする
        await likeActivity(activityId);
        setLikes(prev => ({ ...prev, [activityId]: (prev[activityId] || 0) + 1 }));
        setLikedByUser(prev => ({ ...prev, [activityId]: true }));
      }
    } catch (error) {
      console.error('いいねエラー:', error);
      // エラー時はローカルのみ更新（Firebaseが設定されていない場合）
      if (likedByUser[activityId]) {
        setLikes(prev => ({ ...prev, [activityId]: prev[activityId] - 1 }));
        setLikedByUser(prev => ({ ...prev, [activityId]: false }));
      } else {
        setLikes(prev => ({ ...prev, [activityId]: (prev[activityId] || 0) + 1 }));
        setLikedByUser(prev => ({ ...prev, [activityId]: true }));
      }
    }
  };

  // モーダルを開く
  const openModal = (activity: ActivityReport) => {
    setSelectedActivity(activity);
    document.body.style.overflow = 'hidden'; // スクロール防止
  };

  // モーダルを閉じる
  const closeModal = () => {
    setSelectedActivity(null);
    document.body.style.overflow = 'unset'; // スクロール復元
  };

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">活動報告</h2>
          <p className="text-xl text-accent-600">スタジオの最新情報をお届けします</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* ローディング表示 */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-xl text-gray-500">まだ投稿がありません</p>
              <p className="text-gray-400 mt-2">管理画面から投稿を作成してください</p>
            </div>
          ) : (
            <>
          {/* 活動報告グリッド（2カラム） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <article
                key={activity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* 画像エリア（コンパクトに） */}
                {activity.images && activity.images.length > 0 ? (
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-300">
                    <img 
                      src={activity.images[0]} 
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <svg
                        className="w-12 h-12 mx-auto"
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
                      <p className="mt-1 text-xs">画像</p>
                    </div>
                  </div>
                )}

                {/* コンテンツエリア（コンパクトに） */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <svg
                      className="w-4 h-4 mr-1"
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

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 flex-1">{activity.description}</p>

                  {/* SNS風のインタラクションボタン（コンパクトに） */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-4 text-gray-500">
                    <button 
                      onClick={() => handleLike(activity.id)}
                      className={`flex items-center space-x-1 transition-all text-sm ${
                        likedByUser[activity.id] 
                          ? 'text-red-500' 
                          : 'hover:text-red-500'
                      }`}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill={likedByUser[activity.id] ? 'currentColor' : 'none'} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-xs font-semibold">{likes[activity.id] || 0}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span className="text-xs">シェア</span>
                    </button>
                    <button 
                      onClick={() => openModal(activity)}
                      className="ml-auto text-primary-600 hover:text-primary-700 font-semibold text-xs transition-colors"
                    >
                      詳細を見る →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* もっと見るボタン */}
          <div className="text-center mt-12">
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors">
              もっと見る
            </button>
          </div>
            </>
          )}
        </div>
      </div>

      {/* モーダル（詳細表示） */}
      {selectedActivity && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* モーダルヘッダー */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">投稿詳細</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* モーダルコンテンツ */}
            <div className="p-6">
              {/* 画像エリア */}
              {selectedActivity.images && selectedActivity.images.length > 0 ? (
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 rounded-xl mb-6">
                  <img 
                    src={selectedActivity.images[0]} 
                    alt={selectedActivity.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <svg
                      className="w-20 h-20 mx-auto"
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

              {/* 日付 */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
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
                <time dateTime={selectedActivity.date}>{formatDate(selectedActivity.date)}</time>
              </div>

              {/* タイトル */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedActivity.title}</h2>

              {/* 本文 */}
              <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {selectedActivity.description}
              </p>

              {/* インタラクションボタン */}
              <div className="pt-6 border-t border-gray-200 flex items-center space-x-6">
                <button 
                  onClick={() => handleLike(selectedActivity.id)}
                  className={`flex items-center space-x-2 transition-all ${
                    likedByUser[selectedActivity.id] 
                      ? 'text-red-500' 
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <svg 
                    className="w-6 h-6" 
                    fill={likedByUser[selectedActivity.id] ? 'currentColor' : 'none'} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="font-semibold">{likes[selectedActivity.id] || 0}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span>シェア</span>
                </button>
              </div>
            </div>

            {/* モーダルフッター */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
