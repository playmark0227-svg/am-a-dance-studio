import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';

const Schedule: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<'odd' | 'even'>('odd');

  // 週ごとのクラスを取得
  const getClassForWeek = (classItem: any, week: 'odd' | 'even') => {
    if (!classItem.isAlternating) {
      return classItem.className;
    }
    
    if (week === 'odd') {
      return classItem.className; // 第1・3週：CHEER DANCE skill up
    } else {
      return classItem.alternateClass; // 第2・4週：ゆったりYOGA
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">レッスンスケジュール</h2>
          <p className="text-xl text-accent-600">週間タイムテーブル</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 週選択タブ */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
            <button
              onClick={() => setSelectedWeek('odd')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                selectedWeek === 'odd'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              第1・3週
            </button>
            <button
              onClick={() => setSelectedWeek('even')}
              className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                selectedWeek === 'even'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              第2・4週
            </button>
          </div>
        </div>

        {/* デスクトップビュー：横並び */}
        <div className="hidden lg:block max-w-7xl mx-auto overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 min-w-max">
            {scheduleData.map((day) => (
              <div key={day.dayEn} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4 pb-4 border-b-2 border-primary-600">
                  <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                  <p className="text-sm text-gray-600">{day.dayEn}</p>
                  <p className="text-xs text-primary-600 mt-1 font-semibold">{day.location}</p>
                </div>

                <div className="space-y-4">
                  {day.classes.map((classItem, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 ${
                        classItem.isAlternating ? 'border-2 border-yellow-400 relative' : ''
                      }`}
                    >
                      {classItem.isAlternating && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                          週替わり
                        </div>
                      )}
                      <div className="text-center">
                        <p className="text-sm font-bold text-primary-600 mb-2">{classItem.time}</p>
                        <p className="font-semibold text-gray-900">
                          {getClassForWeek(classItem, selectedWeek)}
                        </p>
                      </div>
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
            <div key={day.dayEn} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <div className="mb-4 pb-4 border-b-2 border-primary-600">
                <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                <p className="text-sm text-gray-600">{day.dayEn}</p>
                <p className="text-sm text-primary-600 mt-1 font-semibold">{day.location}</p>
              </div>

              <div className="space-y-3">
                {day.classes.map((classItem, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-4 shadow-md relative ${
                      classItem.isAlternating ? 'border-2 border-yellow-400' : ''
                    }`}
                  >
                    {classItem.isAlternating && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                        週替わり
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-primary-600 mb-1">{classItem.time}</p>
                        <p className="font-semibold text-gray-900">
                          {getClassForWeek(classItem, selectedWeek)}
                        </p>
                      </div>
                    </div>
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
              className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1"
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
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 木曜日17:30-18:30の枠は、週によってクラスが変わります</li>
                <li>• 第1・3週：CHEER DANCE skill up</li>
                <li>• 第2・4週：ゆったりYOGA</li>
                <li>• 上のタブで週を切り替えてスケジュールを確認できます</li>
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
