import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white">
      {/* ヒーロー画像表示（スマホとデスクトップで画像を切り替え） */}
      
      {/* スマホ用画像 (md未満) - テキストなし */}
      <div className="md:hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="relative w-full min-h-[400px]" style={{ backgroundColor: '#1a1a1a' }}>
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-image-mobile.jpg)', backgroundColor: '#1a1a1a' }}
          ></div>
        </div>
      </div>
      
      {/* デスクトップ用画像 (md以上) - テキストオーバーレイあり */}
      <div className="hidden md:block pt-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="relative w-full min-h-[600px] flex items-center" style={{ backgroundColor: '#1a1a1a' }}>
          {/* 背景画像 */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-image-desktop.jpg)', backgroundColor: '#1a1a1a' }}
          ></div>
          
          {/* スモーク効果 */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(to right, #1a1a1a 0%, transparent 15%, transparent 85%, #1a1a1a 100%)'
          }}></div>

          {/* コンテンツ */}
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-xl">
              <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
                am a
                <span className="block">DANCE STUDIO</span>
              </h1>
              <p className="text-2xl text-white/90 mb-8 font-medium">
                アムア ダンススタジオ
              </p>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                チアダンス・バトントワリング・K-POP・ジャズなど、<br />
                多彩なダンスプログラムで楽しく踊ろう
              </p>
              <div className="flex flex-row gap-4">
                <Link
                  to="/classes"
                  className="bg-neonpink-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-neonpink-600 transition-colors shadow-lg inline-block text-center"
                >
                  クラスを見る
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/90 text-accent-800 px-10 py-4 rounded-md font-bold text-lg hover:bg-white transition-colors shadow-lg inline-block text-center"
                >
                  体験申込
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* インストラクター紹介セクション */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-800 mb-4">インストラクター紹介</h2>
            <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* インストラクターカードのグリッド */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* RIKO先生 */}
            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-5 gap-0">
                {/* 写真エリア */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full">
                    <img 
                      src="/instructor-riko.jpg" 
                      alt="インストラクター RIKO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* 写真上の名前バッジ */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="bg-gradient-to-r from-neonpink-400 to-neonpink-500 rounded-xl shadow-lg px-6 py-3 inline-block">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        RIKO
                      </h3>
                    </div>
                    <p className="text-white font-bold text-lg mt-2">代表</p>
                  </div>
                </div>

                {/* 情報エリア */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="space-y-6">
                    {/* 資格・経歴 */}
                    <div>
                      <h4 className="text-2xl font-bold text-accent-800 mb-4 flex items-center">
                        <span className="w-1 h-8 bg-neonpink-500 mr-3 rounded-full"></span>
                        資格・経歴
                      </h4>
                      <div className="space-y-3 text-accent-700">
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">JCDAチアダンス指導者ライセンスAdvance取得</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">プロバスケットボールチーム元専属チアリーダー</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">バトントワリング北海道大会1位</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">バトントワリング全国大会出場</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">全米ヨガアライアンス認定資格 RYT200 取得</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">スポーツジムでのダンスクラス指導</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-transparent p-4 rounded-lg border-l-4 border-neonpink-400">
                          <span className="text-neonpink-500 mt-1 font-bold text-xl flex-shrink-0">❤︎</span>
                          <p className="font-medium text-lg">他団体での指導歴多数あり</p>
                        </div>
                      </div>
                    </div>

                    {/* メッセージ */}
                    <div>
                      <h4 className="text-2xl font-bold text-accent-800 mb-4 flex items-center">
                        <span className="w-1 h-8 bg-neonpink-500 mr-3 rounded-full"></span>
                        メッセージ
                      </h4>
                      <div className="bg-gradient-to-br from-neonpink-50 to-primary-50 p-6 rounded-xl border-2 border-neonpink-200">
                        <p className="text-accent-700 leading-relaxed text-lg">
                          「ダンスの楽しさを一人でも多くの方に」という思いで、子どもから大人まで、
                          それぞれの目標に合わせた指導を行っています。安心して楽しく踊れる環境づくりを大切にしています。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2人目のインストラクター */}
            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-5 gap-0">
                {/* 写真エリア */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full">
                    <img 
                      src="/instructor-2.jpg" 
                      alt="インストラクター"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* 写真上の名前バッジ */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl shadow-lg px-6 py-3 inline-block">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        HIMARI
                      </h3>
                    </div>
                    <p className="text-white font-bold text-lg mt-2">インストラクター</p>
                  </div>
                </div>

                {/* 情報エリア */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="space-y-6">
                    {/* 資格・経歴 */}
                    <div>
                      <h4 className="text-2xl font-bold text-accent-800 mb-4 flex items-center">
                        <span className="w-1 h-8 bg-purple-500 mr-3 rounded-full"></span>
                        経歴
                      </h4>
                      <div className="space-y-3 text-accent-700">
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg border-l-4 border-purple-400">
                          <span className="text-purple-500 mt-1 font-bold text-xl flex-shrink-0">⭐</span>
                          <p className="font-medium text-lg">学生時代からam a DANCE STUDIOで学ぶ</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg border-l-4 border-purple-400">
                          <span className="text-purple-500 mt-1 font-bold text-xl flex-shrink-0">⭐</span>
                          <p className="font-medium text-lg">2024年よりam a DANCE STUDIOでインストラクターとして活動開始</p>
                        </div>
                        <div className="flex items-start space-x-3 bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg border-l-4 border-purple-400">
                          <span className="text-purple-500 mt-1 font-bold text-xl flex-shrink-0">⭐</span>
                          <p className="font-medium text-lg">HIMARI Freestyleクラスを担当</p>
                        </div>
                      </div>
                    </div>

                    {/* メッセージ */}
                    <div>
                      <h4 className="text-2xl font-bold text-accent-800 mb-4 flex items-center">
                        <span className="w-1 h-8 bg-purple-500 mr-3 rounded-full"></span>
                        メッセージ
                      </h4>
                      <div className="bg-gradient-to-br from-purple-50 to-primary-50 p-6 rounded-xl border-2 border-purple-200">
                        <p className="text-accent-700 leading-relaxed text-lg">
                          ※HIMARIさんからのメッセージを募集中
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
