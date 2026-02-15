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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-600">
              am a <span className="text-gray-700">DANCE STUDIO</span>
            </h1>
          </div>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                ホーム
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('classes')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                クラス紹介
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                スケジュール
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('price')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                料金
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('activities')}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                活動報告
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                体験申込
              </button>
            </li>
          </ul>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
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
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
                >
                  ホーム
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('classes')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
                >
                  クラス紹介
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('schedule')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
                >
                  スケジュール
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('price')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
                >
                  料金
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('activities')}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
                >
                  活動報告
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
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
