import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              am a DANCE STUDIO
              <span className="block text-2xl md:text-3xl text-primary-600 mt-2">
                アムア ダンススタジオ
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              チアダンス・バトントワリング・K-POP・ジャズなど、多彩なダンスプログラムで、
              お子様から大人まで楽しく踊れるスタジオです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                クラスを見る
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                体験申込
              </button>
            </div>
          </div>

          {/* イメージプレースホルダー */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-400 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <svg
                  className="w-32 h-32 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xl font-semibold">スタジオの写真や動画をここに</p>
              </div>
            </div>
          </div>
        </div>

        {/* インストラクター紹介 */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* インストラクター写真プレースホルダー */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-secondary-200 to-secondary-400 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-24 h-24 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="mt-2 text-sm">インストラクター写真</p>
                </div>
              </div>
            </div>

            {/* インストラクタープロフィール */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  インストラクター：RIKO
                </h3>
                <p className="text-primary-600 font-semibold">主宰・チーフインストラクター</p>
              </div>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <p>JCDAチアダンス指導者ライセンス保持</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <p>元プロチアリーダーとして活躍</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <p>バトントワリング全国大会出場</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <p>豊富な指導経験で、初心者から上級者まで丁寧に指導</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                「ダンスの楽しさを一人でも多くの方に」という思いで、子どもから大人まで、
                それぞれの目標に合わせた指導を行っています。安心して楽しく踊れる環境づくりを大切にしています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
