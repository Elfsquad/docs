import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cards = [
  {
    title: 'Integration',
    description: 'Connect Elfsquad with your ERP, CRM, or CAD systems using the OData-based Data API for seamless data synchronization.',
    link: '/docs/apis',
    iconClass: 'iconIntegration',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3v4a2 2 0 01-2 2H3m14-6v4a2 2 0 01-2 2h-2M3 13v-2a2 2 0 012-2h2m8 4v-2a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Configurator',
    description: 'Build custom configuration experiences with our Configurator API tailored to your unique product requirements.',
    link: '/docs/configurator',
    iconClass: 'iconConfigurator',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3v2m0 10v2m7-7h-2M5 10H3m12.07-4.07l-1.42 1.42M6.34 13.66l-1.41 1.41m10.14 0l-1.42-1.41M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Customization',
    description: 'Extend Elfsquad with custom scripts, buttons, and workflows to match your business processes.',
    link: '/docs/customization',
    iconClass: 'iconCustomization',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3l-4 8h6l-1 6 8-10h-6l1-4H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Quotations',
    description: 'Create, manage, and track quotations through specialized API endpoints for your applications.',
    link: '/docs/spec/quotation/elfsquad-web-quotationapi',
    iconClass: 'iconQuotations',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3h8l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10h6m-6 3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Identity',
    description: 'Manage user identities across systems with the SCIM API for streamlined access control.',
    link: '/docs/spec/scim/scim-api',
    iconClass: 'iconIdentity',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3a3 3 0 00-3 3v2a3 3 0 006 0V6a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 17v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Extensions',
    description: 'Build powerful extensions and plugins that integrate deeply with the Elfsquad platform.',
    link: '/docs/extensions',
    iconClass: 'iconExtensions',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3H9v3a2 2 0 01-4 0V3H3a1 1 0 00-1 1v4h3a2 2 0 010 4H2v4a1 1 0 001 1h4v-3a2 2 0 014 0v3h4a1 1 0 001-1v-2h-3a2 2 0 010-4h3V4a1 1 0 00-1-1h-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Integrate your IT systems with Elfsquad CPQ">

      <div className={styles.hero}>
        {/* Decorative geometric shape */}
        <svg className={styles.heroDecor} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="250,30 470,420 30,420" fill="currentColor" opacity="0.5"/>
          <polygon points="250,80 430,390 70,390" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </svg>

        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Developer Documentation</span>
            <h1 className={styles.heroTitle}>
              Build with <span className={styles.accent}>Elfsquad</span>
            </h1>
            <p className={styles.heroSubtitle}>
              APIs, SDKs, and guides to integrate and extend the Elfsquad CPQ platform.
            </p>
            <div className={styles.heroCta}>
              <Link to="/docs/apis" className="primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Link key={card.title} to={card.link} className={styles.cardItem}>
                <div className={`${styles.cardIcon} ${styles[card.iconClass]}`}>
                  {card.icon}
                </div>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardArrow}>
                  <span>Explore</span>
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

    </Layout>
  );
}
