import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 leading-tight">
              am a DANCE STUDIO
              <span className="block text-xl md:text-2xl text-accent-600 mt-2">
                アムア ダンススタジオ
              </span>
            </h2>
            <p className="text-base text-accent-700 leading-relaxed">
              チアダンス・バトントワリング・K-POP・ジャズなど、多彩なダンスプログラムで、
              お子様から大人まで楽しく踊れるスタジオです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-neonpink-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-neonpink-600 transition-colors shadow-md"
              >
                クラスを見る
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-primary-400 text-accent-800 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
              >
                体験申込
              </button>
            </div>
          </div>

          {/* イメージプレースホルダー */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-md shadow-md flex items-center justify-center border border-accent-800">
              <div className="text-center text-accent-700">
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
                <p className="text-lg font-semibold">スタジオの写真や動画をここに</p>
              </div>
            </div>
          </div>
        </div>

        {/* インストラクター紹介 */}
        <div className="mt-16 bg-white rounded-md shadow-md p-6 md:p-10 border border-accent-200">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* インストラクター写真プレースホルダー */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-md shadow-sm flex items-center justify-center border border-accent-800">
                <div className="text-center text-accent-700">
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
              <div className="relative">
                <div className="bg-neonpink-400 border border-accent-800 rounded-md shadow-sm px-4 py-2 inline-block">
                  <h3 className="text-2xl font-bold text-white">
                    インストラクター：RIKO
                  </h3>
                </div>
                <p className="text-accent-700 font-semibold mt-2">主宰・チーフインストラクター</p>
              </div>

              <div className="bg-white border border-accent-800 rounded-md shadow-sm p-6">
                <div className="space-y-3 text-accent-700 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold">✓</span>
                    <p>JCDAチアダンス指導者ライセンス保持</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold">✓</span>
                    <p>元プロチアリーダーとして活躍</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold">✓</span>
                    <p>バトントワリング全国大会出場</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold">✓</span>
                    <p>豊富な指導経験で、初心者から上級者まで丁寧に指導</p>
                  </div>
                </div>

                <p className="text-accent-600 leading-relaxed mt-4 text-sm">
                  「ダンスの楽しさを一人でも多くの方に」という思いで、子どもから大人まで、
                  それぞれの目標に合わせた指導を行っています。安心して楽しく踊れる環境づくりを大切にしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
