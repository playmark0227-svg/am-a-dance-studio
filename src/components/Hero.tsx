import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white">
      {/* ヒーロー画像のみ表示（テキストなし） */}
      <div style={{ backgroundColor: '#1a1a1a' }}>
        {/* 画像エリア */}
        <div className="relative w-full min-h-[400px] md:min-h-[600px]" style={{ backgroundColor: '#1a1a1a' }}>
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-image.jpg)', backgroundColor: '#1a1a1a' }}
          ></div>
          
          {/* デスクトップのみスモーク効果 */}
          <div className="hidden md:block absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(to right, #1a1a1a 0%, transparent 15%, transparent 85%, #1a1a1a 100%)'
          }}></div>
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
