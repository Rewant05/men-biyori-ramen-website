import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';

export const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">{siteData.name}</h3>
            <p className="footer-link" style={{ cursor: 'default' }}>{siteData.tagline}</p>
            <p className="footer-link" style={{ cursor: 'default', marginTop: '1rem' }}>
              {siteData.address}<br />
              {siteData.businessHours}
            </p>
          </div>
          
          <div>
            <h3 className="footer-title">リンク</h3>
            <ul>
              {siteData.navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">法的情報・その他</h3>
            <ul>
              {siteData.footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
              <li>
                <a href={siteData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-sm">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="safety-notice" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ccc', borderLeftColor: 'var(--color-noodle-yellow)' }}>
          <p style={{ fontSize: '0.85rem' }}>{siteData.foodSafetyDisclaimer}</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteData.editor}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});
