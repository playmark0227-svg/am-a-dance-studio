import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { classesData } from '../data/classes';
import type { ClassInfo } from '../types';

const Classes: React.FC = () => {
  const [searchParams] = useSearchParams();
  const classId = searchParams.get('class');
  
  // URLパラメータからクラスを選択、なければ最初のクラス
  const initialClass = classId 
    ? classesData.find(c => c.id === classId) || classesData[0]
    : classesData[0];
  
  const [selectedClass, setSelectedClass] = useState<ClassInfo>(initialClass);
  
  // URLパラメータが変更されたときに選択を更新
  useEffect(() => {
    if (classId) {
      const foundClass = classesData.find(c => c.id === classId);
      if (foundClass) {
        setSelectedClass(foundClass);
      }
    }
  }, [classId]);

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">クラス紹介</h2>
          <p className="text-xl text-accent-600">全14クラスから、あなたに合ったクラスを見つけてください</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* タブナビゲーション */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-wrap gap-2 justify-center min-w-max px-4">
              {classesData.map((classInfo) => (
                <button
                  key={classInfo.id}
                  onClick={() => setSelectedClass(classInfo)}
                  className={`px-4 py-2 rounded-md font-semibold transition-all whitespace-nowrap border ${
                    selectedClass.id === classInfo.id
                      ? 'bg-neonpink-500 text-white shadow-md scale-105 border-neonpink-500'
                      : 'bg-white text-accent-700 hover:bg-primary-50 hover:text-accent-900 border-accent-300'
                  }`}
                >
                  {classInfo.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* クラス詳細表示 */}
          <div className="bg-white rounded-md shadow-md p-8 md:p-12 border border-accent-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 画像エリア */}
              <div className="order-2 md:order-1">
                {selectedClass.image ? (
                  <div className="aspect-video rounded-md shadow-sm overflow-hidden border border-accent-200">
                    <img 
                      src={selectedClass.image} 
                      alt={`${selectedClass.name}のクラス写真`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 rounded-md shadow-sm flex items-center justify-center border border-accent-800">
                    <div className="text-center text-accent-700">
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
                )}
              </div>

              {/* クラス情報 */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-accent-800 mb-2">
                    {selectedClass.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-neonpink-100 text-neonpink-700 px-4 py-1 rounded-md text-sm font-semibold border border-neonpink-300">
                      {selectedClass.targetAge}
                    </span>
                    {selectedClass.duration && (
                      <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-md text-sm font-semibold border border-primary-300">
                        {selectedClass.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-accent-600 leading-relaxed">{selectedClass.description}</p>

                {selectedClass.features && selectedClass.features.length > 0 && (
                  <div>
                    <h4 className="font-bold text-accent-800 mb-3">クラスの特徴</h4>
                    <ul className="space-y-2">
                      {selectedClass.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-neonpink-500 mt-1 font-bold">✓</span>
                          <span className="text-accent-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4">
                  <Link
                    to="/schedule"
                    className="bg-neonpink-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-neonpink-600 transition-colors shadow-md inline-block"
                  >
                    スケジュールを見る
                  </Link>
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
