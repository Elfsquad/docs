import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <div class="hero__left">
          <h1 className="hero__title">Docs</h1>
          <h1 className="hero__title">Elfsquad</h1>
          <a className="primary" href="/docs/apis">Get started</a>
      </div> 
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Integrate your IT systems with Elfsquad CPQ">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>

        <HomepageHeader />

        <HomepageFeatures />
        </header>
    </Layout>
  );
}
