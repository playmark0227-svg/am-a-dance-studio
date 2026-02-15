import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-black">
      {/* ヒーロービジュアル - 画像を背景にしてテキストをオーバーレイ */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center">
        {/* 背景画像 - 全体表示（切り取りなし、オーバーレイなし） */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-image.jpg)' }}
        ></div>

        {/* コンテンツ */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              am a
              <span className="block">DANCE STUDIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              アムア ダンススタジオ
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              チアダンス・バトントワリング・K-POP・ジャズなど、<br className="hidden md:block" />
              多彩なダンスプログラムで楽しく踊ろう
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-neonpink-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-neonpink-600 transition-colors shadow-lg"
              >
                クラスを見る
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/90 text-accent-800 px-10 py-4 rounded-md font-bold text-lg hover:bg-white transition-colors shadow-lg"
              >
                体験申込
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* インストラクター紹介セクション */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-accent-200 rounded-md shadow-md p-8 md:p-10">
              <div className="relative mb-6">
                <div className="bg-neonpink-400 border border-accent-800 rounded-md shadow-sm px-6 py-3 inline-block">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    インストラクター：RIKO
                  </h3>
                </div>
                <p className="text-accent-700 font-semibold mt-3 text-lg">主宰・チーフインストラクター</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-accent-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold text-lg">✓</span>
                    <p>JCDAチアダンス指導者ライセンス保持</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold text-lg">✓</span>
                    <p>元プロチアリーダーとして活躍</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold text-lg">✓</span>
                    <p>バトントワリング全国大会出場</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-neonpink-500 mt-1 font-bold text-lg">✓</span>
                    <p>豊富な指導経験で、初心者から上級者まで丁寧に指導</p>
                  </div>
                </div>

                <div>
                  <p className="text-accent-600 leading-relaxed">
                    「ダンスの楽しさを一人でも多くの方に」という思いで、子どもから大人まで、
                    それぞれの目標に合わせた指導を行っています。安心して楽しく踊れる環境づくりを大切にしています。
                  </p>
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
