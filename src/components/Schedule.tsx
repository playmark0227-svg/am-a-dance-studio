import React from 'react';
import { scheduleData } from '../data/schedule';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">レッスンスケジュール</h2>
          <p className="text-lg text-gray-600">週間タイムテーブル</p>
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
                      className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow ${
                        classItem.isAlternating ? 'border-2 border-yellow-400' : ''
                      }`}
                    >
                      <div className="text-center">
                        <p className="text-sm font-bold text-primary-600 mb-2">{classItem.time}</p>
                        <p className="font-semibold text-gray-900">{classItem.className}</p>
                        
                        {classItem.isAlternating && classItem.alternatePattern && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-xs text-gray-600 leading-relaxed">
                              ※ {classItem.alternatePattern}
                            </p>
                          </div>
                        )}
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
                    className={`bg-white rounded-xl p-4 shadow-md ${
                      classItem.isAlternating ? 'border-2 border-yellow-400' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-primary-600 mb-1">{classItem.time}</p>
                        <p className="font-semibold text-gray-900">{classItem.className}</p>
                      </div>
                    </div>
                    
                    {classItem.isAlternating && classItem.alternatePattern && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          ※ {classItem.alternatePattern}
                        </p>
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
