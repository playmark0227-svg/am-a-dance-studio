import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-black">
      <div className="container mx-auto px-4">
        {/* メインビジュアル - 画像全体表示 */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden">
          <img 
            src="/hero-image.jpg" 
            alt="am a DANCE STUDIO" 
            className="w-full h-full object-cover object-center"
          />
          {/* グラデーションオーバーレイ（下部） */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* コンテンツエリア */}
        <div className="bg-white py-12 md:py-16">
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

            {/* インストラクター紹介（コンパクト版） */}
            <div className="bg-white border border-accent-800 rounded-md shadow-sm p-6">
              <div className="relative mb-4">
                <div className="bg-neonpink-400 border border-accent-800 rounded-md shadow-sm px-4 py-2 inline-block">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    インストラクター：RIKO
                  </h3>
                </div>
                <p className="text-accent-700 font-semibold mt-2">主宰・チーフインストラクター</p>
              </div>

              <div className="space-y-2 text-accent-700 text-sm">
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
                それぞれの目標に合わせた指導を行っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
