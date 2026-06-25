import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';
import { AlertCircle } from 'lucide-react';

export const ToppingsGuide = () => {
  return (
    <div>
      <SEO title="トッピングガイド" />
      
      <div className="page-header" style={{ position: 'relative', overflow: 'hidden', backgroundImage: 'url(/images/toppings_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '6rem 0' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(62, 39, 35, 0.7)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-title">トッピングガイド</h1>
          <p>一杯を彩る、名脇役たちの役割</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              トッピング（具材）は、ラーメンの見た目を華やかにするだけでなく、食感のコントラストを生み出し、食べ進める中の味の変化を楽しむための重要な要素です。
              それぞれの具材が持つ役割を理解することで、よりバランスの取れた一杯を作ることができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
            {siteData.toppings.map((topping, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  <h3 className="text-red" style={{ fontSize: '1.3rem', margin: 0 }}>{topping.name}</h3>
                  <span className="card-badge">{topping.bestPairing}</span>
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    <strong>役割: </strong>
                    {topping.flavorRole}
                  </p>
                  <div style={{ backgroundColor: 'var(--color-cream)', padding: '0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    <strong style={{ display: 'block', color: 'var(--color-soy-brown)', marginBottom: '0.25rem' }}>調理のポイント</strong>
                    <p>{topping.preparationTip}</p>
                  </div>
                </div>

                {topping.allergySafetyNote && (
                  <div className="safety-notice" style={{ margin: '1rem 0 0 0', padding: '0.5rem', fontSize: '0.8rem' }}>
                    <div className="safety-notice-title" style={{ fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                      <AlertCircle size={12} /> 注意
                    </div>
                    <p>{topping.allergySafetyNote}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
