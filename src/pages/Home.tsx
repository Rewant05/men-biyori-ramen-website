import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';
import { AlertCircle } from 'lucide-react';

export const Home = () => {
  const featuredRecipe = siteData.recipes.find(r => r.featured) || siteData.recipes[0];
  const popularRecipes = siteData.recipes.slice(0, 3);
  const brothPreview = siteData.brothTypes.slice(0, 3);

  return (
    <div>
      <SEO title="ホーム" />
      
      {/* Hero Section */}
      <section className="section section-dark" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', backgroundImage: 'url(/images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(62, 39, 35, 0.7)' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <div className="steam-container">
            <h1 className="page-title">「家でつくる一杯を、もっと深く、もっと楽しく。」</h1>
          </div>
          <p className="section-subtitle" style={{ color: 'var(--color-cream)', maxWidth: '800px', margin: '1rem auto 2rem' }}>
            「麺日和は、スープ、タレ、香味油、麺、具材の組み立て方をやさしく解説する、家庭向けラーメンレシピの編集サイトです。」
          </p>
          <div className="flex justify-center gap-md">
            <Link to="/recipes" className="btn btn-primary">レシピを見る</Link>
            <Link to="/broth-guide" className="btn btn-secondary" style={{ borderColor: 'var(--color-cream)', color: 'var(--color-cream)' }}>スープガイドへ</Link>
          </div>
        </div>
      </section>

      {/* Beginner Ramen Guide (Architecture) */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ラーメンの組み立て方</h2>
            <p className="section-subtitle">5つの要素を理解すれば、おうちラーメンはもっと自由になります。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-red" style={{ marginBottom: '0.5rem' }}>1. タレ（かえし）</h3>
                <p>ラーメンの塩味と風味のベース。醤油、塩、味噌など、ここが味の決め手となります。</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-red" style={{ marginBottom: '0.5rem' }}>2. 香味油</h3>
                <p>ネギ油や煮干し油など、スープの表面を覆い、香りとコク、温度を保ちます。</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-red" style={{ marginBottom: '0.5rem' }}>3. スープ（出汁）</h3>
                <p>鶏ガラや豚骨、魚介、野菜などから旨味を抽出した液体。タレを割るための土台です。</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-red" style={{ marginBottom: '0.5rem' }}>4. 麺</h3>
                <p>スープとの相性が重要。太さや縮れ具合、加水率によって全く異なる表情を見せます。</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-red" style={{ marginBottom: '0.5rem' }}>5. トッピング</h3>
                <p>チャーシューや味玉、ねぎなど。一杯のラーメンに彩りと食感のアクセントを加えます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">今週のおすすめレシピ</h2>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: 'auto' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: 'var(--color-soy-brown)', minHeight: '250px', backgroundImage: `url(${featuredRecipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!featuredRecipe.image && <span className="text-serif" style={{ color: 'var(--color-noodle-yellow)', fontSize: '2rem' }}>{featuredRecipe.name}</span>}
            </div>
            <div style={{ flex: '2 1 400px', padding: '2rem' }}>
              <div className="flex gap-sm items-center" style={{ marginBottom: '1rem' }}>
                <span className="card-badge">{featuredRecipe.category}</span>
                <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>{featuredRecipe.cookingTime} • {featuredRecipe.difficulty}</span>
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{featuredRecipe.name}</h3>
              <p style={{ marginBottom: '1.5rem' }}>{featuredRecipe.description}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong>主な食材: </strong>
                {featuredRecipe.keyIngredients.join(', ')}
              </div>
              <Link to={`/recipes`} className="btn btn-primary">レシピ詳細を見る</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Preview */}
      <section className="section section-light">
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>人気のレシピ</h2>
            <Link to="/recipes" className="text-red" style={{ fontWeight: 500 }}>すべて見る &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
            {popularRecipes.map(recipe => (
              <Link to="/recipes" key={recipe.id} className="card">
                <div className="card-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0d8c0', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   {!recipe.image && <span className="text-serif text-brown">{recipe.category}</span>}
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-badge">{recipe.category}</span>
                    <span>{recipe.cookingTime}</span>
                  </div>
                  <h3 className="card-title">{recipe.name}</h3>
                  <p className="card-text">{recipe.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Broth Guide Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">スープの基本を知る</h2>
            <p className="section-subtitle">出汁の取り方で、ラーメンの表情は大きく変わります。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
            {brothPreview.map((broth, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', display: 'block', height: 'auto' }}>
                <h3 className="text-brown" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{broth.name}</h3>
                <p style={{ marginBottom: '1rem' }}>{broth.flavorProfile}</p>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                  <strong>おすすめタレ:</strong> {broth.recommendedTare}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/broth-guide" className="btn btn-secondary">スープガイドを詳しく見る</Link>
          </div>
        </div>
      </section>

      {/* Topping Preview */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="section-title">こだわりのトッピング</h2>
          <p className="section-subtitle" style={{ color: 'var(--color-cream)', marginBottom: '2rem' }}>味玉、チャーシュー、メンマ。自家製に挑戦してみませんか？</p>
          <Link to="/toppings-guide" className="btn btn-primary" style={{ backgroundColor: 'var(--color-noodle-yellow)', color: 'var(--color-soy-brown)' }}>トッピングガイドへ</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">よくあるご質問</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {siteData.faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Q. {faq.question}</h3>
                <p style={{ color: 'var(--color-text-light)' }}>A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="section section-light" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="safety-notice" style={{ margin: 0 }}>
            <div className="safety-notice-title"><AlertCircle size={20} /> 食品安全に関するお願い</div>
            <p>{siteData.foodSafetyDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="section text-center" style={{ backgroundColor: 'var(--color-noodle-light)', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2rem' }}>ご意見・お問い合わせ</h2>
          <p style={{ marginBottom: '2rem' }}>レシピのリクエストや、サイトに関するご質問はこちらから承ります。</p>
          <Link to="/contact" className="btn btn-primary">お問い合わせフォーム</Link>
        </div>
      </section>
    </div>
  );
};
