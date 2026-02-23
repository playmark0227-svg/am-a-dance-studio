import React, { useState } from 'react';
import { faqData } from '../data/faq';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <p className="text-xl text-gray-700">FAQ</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-primary-50 transition-colors"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-neonpink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      Q
                    </span>
                    <span className="font-semibold text-gray-900 text-lg pt-0.5">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-primary-600 transition-transform flex-shrink-0 ml-4 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openId === faq.id && (
                  <div className="px-6 pb-5 bg-gradient-to-b from-primary-50 to-white">
                    <div className="flex items-start space-x-4 pt-4 border-t border-gray-200">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        A
                      </span>
                      <p className="text-gray-800 leading-relaxed pt-0.5 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* お問い合わせへの誘導 */}
          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <p className="text-gray-800 mb-4">
              その他のご質問がございましたら、お気軽にお問い合わせください。
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-neonpink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-neonpink-600 transition-colors shadow-lg"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
