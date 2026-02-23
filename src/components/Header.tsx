import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              <Link
                to="/"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                クラス紹介
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                スケジュール
              </Link>
            </li>
            <li>
              <Link
                to="/price"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                料金
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                活動報告
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-accent-800 hover:text-accent-900 transition-colors font-medium"
              >
                よくある質問
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-neonpink-500 text-white px-6 py-2 rounded-md hover:bg-neonpink-600 transition-colors font-medium shadow-md"
              >
                体験申込
              </Link>
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
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  クラス紹介
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  スケジュール
                </Link>
              </li>
              <li>
                <Link
                  to="/price"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  活動報告
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={closeMenu}
                  className="block w-full text-center text-accent-800 hover:text-accent-900 transition-colors font-medium py-2"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center bg-neonpink-500 text-white px-6 py-2 rounded-md hover:bg-neonpink-600 transition-colors font-medium shadow-md"
                >
                  体験申込
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
