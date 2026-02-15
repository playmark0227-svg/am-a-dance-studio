import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-primary-300 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl md:text-2xl font-bold text-accent-800">
              am a DANCE STUDIO
            </h1>
          </div>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                ホーム
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('classes')}
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                クラス紹介
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                スケジュール
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('price')}
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                料金
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('activities')}
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                活動報告
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary-300 text-accent-800 px-6 py-2 rounded-md hover:bg-secondary-400 transition-colors font-medium border border-accent-800"
              >
                体験申込
              </button>
            </li>
          </ul>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-accent-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/90 rounded-md">
            <ul className="space-y-3 p-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  ホーム
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('classes')}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  クラス紹介
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('schedule')}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  スケジュール
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('price')}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  料金
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('activities')}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  活動報告
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center bg-secondary-300 text-accent-800 px-6 py-2 rounded-md hover:bg-secondary-400 transition-colors font-medium border border-accent-800"
                >
                  体験申込
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
