import { useParams, Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';
import { AlertCircle, Clock, Users, ChefHat } from 'lucide-react';

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = siteData.recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="section text-center">
        <h2>レシピが見つかりませんでした。</h2>
        <Link to="/recipes" className="btn btn-primary" style={{ marginTop: '1rem' }}>レシピ一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <SEO title={`${recipe.name}`} description={recipe.description} />
      
      <div className="page-header">
        <div className="container">
          <span className="card-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{recipe.category}</span>
          <h1 className="page-title">{recipe.name}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          {recipe.image && (
            <div style={{ marginBottom: '3rem', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-md)' }}></div>
          )}
          
          <div className="flex justify-center gap-lg" style={{ marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div className="flex items-center gap-sm text-brown">
              <Clock size={20} />
              <span>調理時間: {recipe.cookingTime}</span>
            </div>
            <div className="flex items-center gap-sm text-brown">
              <Users size={20} />
              <span>{recipe.servingSize}</span>
            </div>
            <div className="flex items-center gap-sm text-brown">
              <ChefHat size={20} />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--color-soy-brown)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>材料</h2>
              {recipe.ingredients ? (
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>主要食材: {recipe.keyIngredients.join(', ')}</p>
              )}
              
              <div className="safety-notice" style={{ marginTop: '2rem' }}>
                <div className="safety-notice-title"><AlertCircle size={18} /> アレルギー情報</div>
                <p>{recipe.allergyNote}</p>
              </div>
            </div>
            
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--color-soy-brown)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>作り方</h2>
              {recipe.cookingSteps ? (
                <ol style={{ paddingLeft: '1.2rem' }}>
                  {recipe.cookingSteps.map((step, index) => (
                    <li key={index} style={{ marginBottom: '1rem', paddingLeft: '0.5rem' }}>
                      {step}
                    </li>
                  ))}
                </ol>
              ) : (
                <p>※こちらのレシピの詳細は現在準備中です。</p>
              )}
            </div>
          </div>

          {recipe.brothPreparation && (
            <div className="card" style={{ padding: '2rem', height: 'auto', display: 'block', marginBottom: '3rem' }}>
              <h3 className="text-red" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>美味しく作るコツ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
                <div>
                  <strong>スープの準備:</strong>
                  <p>{recipe.brothPreparation}</p>
                </div>
                <div>
                  <strong>タレの準備:</strong>
                  <p>{recipe.tarePreparation}</p>
                </div>
                <div>
                  <strong>おすすめトッピング:</strong>
                  <p>{recipe.toppingSuggestion}</p>
                </div>
                <div>
                  <strong>保存について:</strong>
                  <p>{recipe.storageNote}</p>
                </div>
              </div>
            </div>
          )}

          {recipe.foodSafetyNote && (
            <div className="safety-notice" style={{ backgroundColor: '#ffebee', borderLeftColor: '#d32f2f' }}>
              <div className="safety-notice-title" style={{ color: '#c62828' }}><AlertCircle size={18} /> 調理時の注意点</div>
              <p>{recipe.foodSafetyNote}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
