import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityPostPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [] as File[],
  });
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData({
        ...formData,
        images: filesArray,
      });

      // プレビュー用のURLを生成
      const urls = filesArray.map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 実際にはAPIに送信する処理
    console.log('投稿データ:', formData);
    
    alert('活動報告を投稿しました！\n実際の投稿システムではサーバーに保存されます。');
    
    // 投稿後、活動報告ページに遷移
    navigate('/activities');
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newUrls = previewUrls.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
    setPreviewUrls(newUrls);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-accent-800 mb-4">活動報告を投稿</h1>
            <p className="text-xl text-accent-600">スタジオの最新情報を共有しましょう</p>
            <div className="w-24 h-1 bg-neonpink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* 投稿フォーム */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* タイトル */}
              <div>
                <label htmlFor="title" className="flex items-center text-xl font-bold text-accent-800 mb-3">
                  <span className="w-1 h-8 bg-neonpink-500 mr-3 rounded-full"></span>
                  タイトル
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="例：発表会を開催しました！"
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-neonpink-400 focus:outline-none text-lg"
                />
              </div>

              {/* 説明 */}
              <div>
                <label htmlFor="description" className="flex items-center text-xl font-bold text-accent-800 mb-3">
                  <span className="w-1 h-8 bg-neonpink-500 mr-3 rounded-full"></span>
                  説明
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="活動内容の詳細を記入してください..."
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-neonpink-400 focus:outline-none text-lg resize-none"
                />
              </div>

              {/* 写真アップロード */}
              <div>
                <label className="flex items-center text-xl font-bold text-accent-800 mb-3">
                  <span className="w-1 h-8 bg-neonpink-500 mr-3 rounded-full"></span>
                  写真
                </label>
                <div className="border-2 border-dashed border-primary-300 rounded-lg p-8 text-center hover:border-neonpink-400 transition-colors">
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="images"
                    className="cursor-pointer inline-block"
                  >
                    <div className="mb-4">
                      <svg
                        className="w-16 h-16 mx-auto text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-accent-700 mb-2">
                      クリックして写真を選択
                    </p>
                    <p className="text-sm text-accent-500">
                      複数の写真を選択できます
                    </p>
                  </label>
                </div>

                {/* 画像プレビュー */}
                {previewUrls.length > 0 && (
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-accent-800 mb-4">
                      選択した写真（{previewUrls.length}枚）
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`プレビュー ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg border-2 border-primary-200"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ボタン */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-neonpink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-neonpink-600 transition-colors shadow-lg"
                >
                  投稿する
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/activities')}
                  className="flex-1 bg-gray-200 text-accent-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors"
                >
                  キャンセル
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPostPage;
