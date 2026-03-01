import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    age: '',
    danceExperience: 'none',
    danceYears: '',
    email: '',
    phone: '',
    className: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際にはAPIやフォームサービスに送信
    alert('体験申込を受け付けました。\n後ほど担当者よりご連絡させていただきます。');
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-accent-800 mb-4">体験申込・お問い合わせ</h2>
          <p className="text-xl text-accent-600">まずは体験レッスンから始めませんか？</p>
          <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 体験レッスンのご案内 */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">体験レッスンについて</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>初回体験レッスン受付中</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>動きやすい服装でお越しください</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>飲み物とタオルをご持参ください</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>お気軽にご相談ください</p>
                </div>
              </div>
            </div>

            {/* アクセス情報 */}
            <div className="bg-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">スタジオアクセス</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">あすぱる</h4>
                  <p className="text-sm">月曜・火曜・金曜のレッスン会場</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">アイランドスタジオ</h4>
                  <p className="text-sm">水曜・木曜のレッスン会場</p>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm">
                    ※詳しい住所・アクセス方法はお申し込み後にご案内いたします
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 申込フォーム */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">体験申込フォーム</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="furigana" className="block text-sm font-semibold text-gray-700 mb-2">
                  お名前（ふりがな） <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="furigana"
                  name="furigana"
                  required
                  value={formData.furigana}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="やまだ たろう"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  年齢 <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="例: 25"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ダンス経験 <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="danceExperience"
                      value="none"
                      checked={formData.danceExperience === 'none'}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">無し</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="danceExperience"
                      value="yes"
                      checked={formData.danceExperience === 'yes'}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">有り</span>
                  </label>
                  {formData.danceExperience === 'yes' && (
                    <div className="ml-8 mt-3">
                      <label htmlFor="danceYears" className="block text-sm font-medium text-gray-700 mb-2">
                        ダンス経験年数
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="danceYears"
                          name="danceYears"
                          min="0"
                          max="100"
                          step="0.5"
                          value={formData.danceYears}
                          onChange={handleChange}
                          className="w-32 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                          placeholder="例: 3"
                        />
                        <span className="text-gray-700">年間</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号 <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="className" className="block text-sm font-semibold text-gray-700 mb-2">
                  希望クラス <span className="text-red-600">*</span>
                </label>
                <select
                  id="className"
                  name="className"
                  required
                  value={formData.className}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="CHEER DANCE一般">CHEER DANCE一般</option>
                  <option value="CHEER DANCE スキルアップ">CHEER DANCE スキルアップ</option>
                  <option value="JAZZ">JAZZ</option>
                  <option value="BATON beginner">BATON ビギナー</option>
                  <option value="BATON">BATON</option>
                  <option value="KPOP beginner">KPOP ビギナー</option>
                  <option value="KPOP">KPOP</option>
                  <option value="GIRLS beginner">GIRLS ビギナー</option>
                  <option value="GIRLS">GIRLS</option>
                  <option value="HIMARI Freestyle">HIMARI Freestyle</option>
                  <option value="体操">体操</option>
                  <option value="OVER 20 DANCE">OVER 20 DANCE</option>
                  <option value="TONE UP">TONE UP</option>
                  <option value="ゆったりYOGA">ゆったりYOGA</option>
                  <option value="未定">まだ決まっていない</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  ご質問・ご要望
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="ご質問やご要望がございましたらご記入ください"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-neonpink-500 text-white px-12 py-4 rounded-md font-bold text-lg hover:bg-neonpink-600 transition-colors shadow-md hover:shadow-lg"
                >
                  体験を申し込む
                </button>
              </div>
            </form>
          </div>

          {/* グッズ販売案内 */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-md p-8 text-center border border-accent-200">
            <h3 className="text-2xl font-bold text-accent-800 mb-4">スタジオオリジナルグッズ</h3>
            <p className="text-accent-700 mb-6">
              スタジオロゴ入りTシャツやバッグなど、オリジナルグッズを販売しています。
            </p>
            <button className="border-2 border-neonpink-500 text-neonpink-600 px-8 py-3 rounded-md font-semibold hover:bg-neonpink-50 transition-colors">
              グッズを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
