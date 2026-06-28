import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';
import { AlertCircle } from 'lucide-react';

export const BrothGuide = () => {
  return (
    <div>
      <SEO title="スープガイド" />
      
      <div className="page-header" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
        <img src="/images/broth_hero.png" alt="Broth Hero" fetchPriority="high" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(62, 39, 35, 0.7)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-title">スープガイド</h1>
          <p>ラーメンの骨格となる、5つの基本出汁</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              ラーメンにおけるスープ（出汁）は、丼の中で最も大きな体積を占める重要な要素です。
              動物系、魚介系、野菜など、様々な素材から抽出された旨味が組み合わさることで、奥深い味わいが生まれます。
              ここでは、代表的なスープの種類とその特徴をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {siteData.brothTypes.map((broth, index) => (
              <div key={index} className="card" style={{ padding: '2rem', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <h2 className="text-red" style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  {broth.name}
                </h2>
                
                <div style={{ flexGrow: 1 }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 500 }}>{broth.flavorProfile}</p>
                  
                  <div style={{ marginBottom: '1rem', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.5rem' }}>
                    <span className="text-brown" style={{ fontWeight: 700 }}>おすすめタレ:</span>
                    <span>{broth.recommendedTare}</span>
                    
                    <span className="text-brown" style={{ fontWeight: 700 }}>相性の良い麺:</span>
                    <span>{broth.recommendedNoodles}</span>
                    
                    <span className="text-brown" style={{ fontWeight: 700 }}>調理難易度:</span>
                    <span>{broth.cookingDifficulty}</span>
                  </div>
                  
                  <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-soy-brown)' }}>美味しく作るコツ</strong>
                    <p style={{ fontSize: '0.9rem' }}>{broth.beginnerTip}</p>
                  </div>
                </div>

                <div className="safety-notice" style={{ margin: 0, padding: '0.75rem', fontSize: '0.85rem' }}>
                  <div className="safety-notice-title" style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                    <AlertCircle size={14} /> 注意点
                  </div>
                  <p>{broth.safetyNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
