import React from 'react';
import { scheduleData } from '../data/schedule';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">レッスンスケジュール</h2>
          <p className="text-xl text-gray-700">週間タイムテーブル</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* デスクトップビュー：横並び */}
        <div className="hidden lg:block max-w-7xl mx-auto overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 min-w-max">
            {scheduleData.map((day) => (
              <div key={day.dayEn} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-4 pb-4 border-b-2 border-primary-600">
                  <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                  <p className="text-sm text-gray-600">{day.dayEn}</p>
                  <p className="text-xs text-primary-600 mt-1 font-semibold">{day.location}</p>
                </div>

                <div className="space-y-4">
                  {day.classes.map((classItem, index) => (
                    <div key={index}>
                      {classItem.isAlternating ? (
                        // 週替わりクラスは2分割表示
                        <div className="space-y-2">
                          {/* 第1・3週 */}
                          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-3 shadow-sm border-l-4 border-pink-500">
                            <div className="text-xs text-pink-700 font-bold mb-1">第1・3週</div>
                            <p className="text-xs font-bold text-pink-600 mb-1">{classItem.time}</p>
                            <p className="font-semibold text-gray-900 text-sm">{classItem.className}</p>
                          </div>
                          {/* 第2・4週 */}
                          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-3 shadow-sm border-l-4 border-purple-500">
                            <div className="text-xs text-purple-700 font-bold mb-1">第2・4週</div>
                            <p className="text-xs font-bold text-purple-600 mb-1">{classItem.time}</p>
                            <p className="font-semibold text-gray-900 text-sm">{classItem.alternateClass}</p>
                          </div>
                        </div>
                      ) : (
                        // 通常クラスは1つ
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                          <div className="text-center">
                            <p className="text-sm font-bold text-primary-600 mb-2">{classItem.time}</p>
                            <p className="font-semibold text-gray-900">{classItem.className}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* モバイル・タブレットビュー：縦並び */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-6">
          {scheduleData.map((day) => (
            <div key={day.dayEn} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="mb-4 pb-4 border-b-2 border-primary-600">
                <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                <p className="text-sm text-gray-600">{day.dayEn}</p>
                <p className="text-sm text-primary-600 mt-1 font-semibold">{day.location}</p>
              </div>

              <div className="space-y-3">
                {day.classes.map((classItem, index) => (
                  <div key={index}>
                    {classItem.isAlternating ? (
                      // 週替わりクラスは2分割表示
                      <div className="space-y-2">
                        {/* 第1・3週 */}
                        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-4 shadow-sm border-l-4 border-pink-500">
                          <div className="text-xs text-pink-700 font-bold mb-1">第1・3週</div>
                          <p className="text-sm font-bold text-pink-600 mb-1">{classItem.time}</p>
                          <p className="font-semibold text-gray-900">{classItem.className}</p>
                        </div>
                        {/* 第2・4週 */}
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 shadow-sm border-l-4 border-purple-500">
                          <div className="text-xs text-purple-700 font-bold mb-1">第2・4週</div>
                          <p className="text-sm font-bold text-purple-600 mb-1">{classItem.time}</p>
                          <p className="font-semibold text-gray-900">{classItem.alternateClass}</p>
                        </div>
                      </div>
                    ) : (
                      // 通常クラスは1つ
                      <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                        <p className="text-sm font-bold text-primary-600 mb-1">{classItem.time}</p>
                        <p className="font-semibold text-gray-900">{classItem.className}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 注釈 */}
        <div className="max-w-4xl mx-auto mt-12 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">スケジュールについて</h4>
              <ul className="text-sm text-gray-800 space-y-1">
                <li>• 木曜日17:30-18:30の枠は、週によってクラスが変わります</li>
                <li>• 第1・3週：CHEER DANCE skill up（ピンク表示）</li>
                <li>• 第2・4週：ゆったりYOGA（紫表示）</li>
                <li>• 祝日や年末年始はスケジュールが変更になる場合があります</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
