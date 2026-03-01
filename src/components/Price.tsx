import React from 'react';
import { priceData } from '../data/prices';

const Price: React.FC = () => {
  return (
    <section id="price" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">料金システム</h2>
          <p className="text-xl text-accent-600">月謝制でわかりやすい料金設定</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 料金カードグリッド */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceData.map((price, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center justify-center">
                    {price.className}
                  </h3>
                  
                  {price.options ? (
                    // オプションがある場合（スキルアップクラス）
                    <div className="space-y-3">
                      {price.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className="bg-primary-50 rounded-xl p-4"
                        >
                          <p className="text-sm text-gray-700 mb-1">{option.label}</p>
                          <p className="text-3xl font-bold text-primary-600">{option.price}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // 通常の料金表示
                    <div className="bg-primary-50 rounded-xl p-6 mb-4">
                      <p className="text-sm text-gray-600 mb-2">月謝</p>
                      <p className="text-4xl font-bold text-primary-600">{price.monthlyFee}</p>
                    </div>
                  )}

                  {price.note && (
                    <p className="text-sm text-yellow-600 font-semibold mt-3">
                      ※ {price.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 注意事項 */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              料金に関するご案内
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">月謝制：</span>
                  お支払いは口座振替もしくはクレジットカードよりお選びいただけます
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">入会金：</span>
                  初回のみ入会金が必要です（詳細はお問い合わせください）
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">体験レッスン：</span>
                  初回体験レッスンを受付中（詳細はお問い合わせください）
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">お支払い方法：</span>
                  口座振替もしくはクレジットカードからお選びいただけます
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">年間管理費：</span>
                  2年目以降、年間管理費3,000円がかかります
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  <span className="font-semibold">その他：</span>
                  イベント参加費や衣装代などが別途必要です
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                体験レッスンを申し込む
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
