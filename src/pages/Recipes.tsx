import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { SEO } from '../components/SEO';

export const Recipes = () => {
  const [filter, setFilter] = useState('すべて');
  
  const categories = ['すべて', ...Array.from(new Set(siteData.recipes.map(r => r.category)))];
  
  const filteredRecipes = filter === 'すべて' 
    ? siteData.recipes 
    : siteData.recipes.filter(r => r.category === filter);

  return (
    <div>
      <SEO title="レシピ一覧" />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">レシピ一覧</h1>
          <p>家庭で作れる本格ラーメンレシピ</p>
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          <div className="flex gap-sm" style={{ marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(category => (
              <button 
                key={category}
                className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
            {filteredRecipes.map(recipe => (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="card">
                <div className="card-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-noodle-light)', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   {!recipe.image && <span className="text-serif text-brown" style={{ fontSize: '1.25rem' }}>{recipe.category}</span>}
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-badge">{recipe.category}</span>
                    <span>{recipe.cookingTime}</span>
                    <span>{recipe.difficulty}</span>
                  </div>
                  <h3 className="card-title">{recipe.name}</h3>
                  <p className="card-text">{recipe.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
