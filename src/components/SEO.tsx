import { useEffect } from 'react';
import { siteData } from '../config/siteData';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | ${siteData.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || siteData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || siteData.description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};
