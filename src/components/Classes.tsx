import React, { useState } from 'react';
import { classesData } from '../data/classes';
import { ClassInfo } from '../types';

const Classes: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo>(classesData[0]);

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">クラス紹介</h2>
          <p className="text-lg text-gray-600">全14クラスから、あなたに合ったクラスを見つけてください</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* タブナビゲーション */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-wrap gap-2 justify-center min-w-max px-4">
              {classesData.map((classInfo) => (
                <button
                  key={classInfo.id}
                  onClick={() => setSelectedClass(classInfo)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                    selectedClass.id === classInfo.id
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {classInfo.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* クラス詳細表示 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 画像プレースホルダー */}
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 rounded-2xl shadow-lg flex items-center justify-center">
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
                    <p className="mt-2 text-sm font-semibold">{selectedClass.name}の写真</p>
                  </div>
                </div>
              </div>

              {/* クラス情報 */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedClass.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold">
                      {selectedClass.targetAge}
                    </span>
                    {selectedClass.duration && (
                      <span className="bg-secondary-100 text-secondary-700 px-4 py-1 rounded-full text-sm font-semibold">
                        {selectedClass.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{selectedClass.description}</p>

                {selectedClass.features && selectedClass.features.length > 0 && (
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">クラスの特徴</h4>
                    <ul className="space-y-2">
                      {selectedClass.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={() => {
                      document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                  >
                    スケジュールを見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
