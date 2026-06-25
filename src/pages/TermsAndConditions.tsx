import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';

export const TermsAndConditions = () => {
  return (
    <div>
      <SEO title="利用規約" />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">利用規約</h1>
        </div>
      </div>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '3rem', height: 'auto', display: 'block' }}>
            <p style={{ marginBottom: '2rem' }}>
              この利用規約（以下、「本規約」といいます）は、{siteData.editor}が提供するウェブサイト「{siteData.name}」（以下、「当サイト」といいます）の利用条件を定めるものです。
            </p>
            
            {siteData.termsSections.map((section, index) => (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--color-soy-brown)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  第{index + 1}条（{section.title}）
                </h2>
                <p style={{ lineHeight: '1.8' }}>{section.content}</p>
              </div>
            ))}

            <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
              制定日: 2024年1月1日
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
