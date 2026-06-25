import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

// Lazy loaded routes for aggressive code splitting
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Recipes = lazy(() => import('./pages/Recipes').then(module => ({ default: module.Recipes })));
const RecipeDetail = lazy(() => import('./pages/RecipeDetail').then(module => ({ default: module.RecipeDetail })));
const BrothGuide = lazy(() => import('./pages/BrothGuide').then(module => ({ default: module.BrothGuide })));
const ToppingsGuide = lazy(() => import('./pages/ToppingsGuide').then(module => ({ default: module.ToppingsGuide })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions').then(module => ({ default: module.TermsAndConditions })));

// A simple loading fallback
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <div className="steam-container">
      <div style={{ color: 'var(--color-text-light)' }}>読み込み中...</div>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home is NOT lazy loaded to ensure fast LCP */}
        <Route index element={<Home />} />
        
        {/* Other routes are lazy loaded */}
        <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="recipes" element={<Suspense fallback={<PageLoader />}><Recipes /></Suspense>} />
        <Route path="recipes/:id" element={<Suspense fallback={<PageLoader />}><RecipeDetail /></Suspense>} />
        <Route path="broth-guide" element={<Suspense fallback={<PageLoader />}><BrothGuide /></Suspense>} />
        <Route path="toppings-guide" element={<Suspense fallback={<PageLoader />}><ToppingsGuide /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        <Route path="privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
        <Route path="terms" element={<Suspense fallback={<PageLoader />}><TermsAndConditions /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
