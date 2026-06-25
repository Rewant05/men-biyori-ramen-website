import { useState } from 'react';
import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'レシピについて',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <div>
      <SEO title="お問い合わせ" />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">お問い合わせ</h1>
          <p>ご意見・ご感想・ご質問をお寄せください</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '3rem' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>お問い合わせ先</h2>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>運営:</strong> {siteData.editor}</p>
                <p style={{ marginBottom: '0.5rem' }}><strong>所在地:</strong> {siteData.address}</p>
                <p style={{ marginBottom: '0.5rem' }}><strong>メールアドレス:</strong> <a href={`mailto:${siteData.email}`} className="text-red">{siteData.email}</a></p>
                <p style={{ marginBottom: '0.5rem' }}><strong>営業時間:</strong> {siteData.businessHours}</p>
              </div>

              <div style={{ backgroundColor: 'var(--color-cream)', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>よくあるご質問</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>お問い合わせの前に、よくあるご質問もご確認ください。</p>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                  <li><a href="/#faq" className="text-red">自宅で本格的なスープを作るのは難しいですか？</a></li>
                  <li><a href="/#faq" className="text-red">スープとタレを分けて作るメリットは？</a></li>
                </ul>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 className="text-brown" style={{ marginBottom: '1rem' }}>送信完了</h3>
                  <p>お問い合わせありがとうございます。<br />内容を確認の上、担当者よりご連絡いたします。</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '2rem' }}>新しく入力する</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem', height: 'auto', display: 'block' }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">お名前 <span className="text-red">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">メールアドレス <span className="text-red">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="type" className="form-label">お問い合わせ種別</label>
                    <select 
                      id="type" 
                      name="type" 
                      className="form-select"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="レシピについて">レシピについて</option>
                      <option value="食材について">食材について</option>
                      <option value="取材・掲載について">取材・掲載について</option>
                      <option value="コラボレーションについて">コラボレーションについて</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">メッセージ <span className="text-red">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                    送信することで、<a href="/privacy-policy" className="text-red">プライバシーポリシー</a>に同意したものとみなされます。
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>送信する</button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};
