import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';

export const About = () => {
  return (
    <div>
      <SEO title="私たちについて" />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">私たちについて</h1>
          <p>麺日和の想い</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-title text-center" style={{ marginBottom: '1.5rem' }}>おうちラーメンを、もっと自由に。</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              麺日和は、ラーメンを“難しい職人料理”としてではなく、家庭の台所で少しずつ理解できる料理として紹介する編集サイトです。
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              スープ、タレ、香味油、麺、具材を分けて考えることで、一杯の味づくりをやさしく学べるようにしています。
              お店の味を完全に再現することを目指すのではなく、ご自身の好みやその日の気分に合わせて、自由に組み立てる楽しさを提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
            <div className="card" style={{ padding: '2rem', height: 'auto', display: 'block' }}>
              <h3 className="text-red" style={{ marginBottom: '1rem' }}>編集方針</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-light)' }}>
                <li style={{ marginBottom: '0.5rem' }}>家庭のキッチンで作れる現実的なレシピの提案</li>
                <li style={{ marginBottom: '0.5rem' }}>スーパーで手に入る食材を中心とした構成</li>
                <li style={{ marginBottom: '0.5rem' }}>初心者でも失敗しにくい丁寧な解説</li>
                <li>特定の飲食店の味の模倣や無断掲載は行わない</li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: '2rem', height: 'auto', display: 'block' }}>
              <h3 className="text-red" style={{ marginBottom: '1rem' }}>安全な調理のために</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                豚肉や鶏肉などの生肉を扱う際は、中心部まで十分に加熱してください。
                また、スープを長時間煮込む際は、換気を十分に行い、火の元から目を離さないようにご注意ください。
              </p>
            </div>
          </div>

          <div className="text-center" style={{ backgroundColor: 'var(--color-cream)', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem' }}>運営情報</h3>
            <p style={{ marginBottom: '0.5rem' }}><strong>運営:</strong> {siteData.editor}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>所在地:</strong> {siteData.address}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>お問い合わせ:</strong> {siteData.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
