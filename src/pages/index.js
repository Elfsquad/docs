import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card } from '@site/docs/components/Card';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Integrate your IT systems with Elfsquad CPQ">

      <div className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Developer Documentation</span>
          <h1 className={styles.heroTitle}>
            Build with <span className={styles.accent}>Elfsquad</span>
          </h1>
          <p className={styles.heroSubtitle}>
            APIs, libraries, and guides to integrate and extend your Elfsquad CPQ platform.
          </p>
        </div>
      </div>

      <main>
        <div className="container">
          <div className={styles.cardGrid}>

            <Card link="/docs/apis">
              <h2 className="color-tech-savy-purple">Integration</h2>
              <p>Connect Elfsquad with your ERP, CRM, or CAD systems using the OData-based Data API for seamless data synchronization.</p>
            </Card>

            <Card link="/docs/configurator">
              <h2 className="color-trust-turquoise">Configurator</h2>
              <p>Build custom configuration experiences with our Configurator API tailored to your unique product requirements.</p>
            </Card>

            <Card link="/docs/customization">
              <h2 className="color-manufacturing-orange">Customization</h2>
              <p>Extend Elfsquad with custom scripts, buttons, and workflows to match your business processes.</p>
            </Card>

            <Card link="/docs/spec/quotation/elfsquad-web-quotationapi">
              <h2 className="color-free-green">Quotations</h2>
              <p>Create, manage, and track quotations through specialized API endpoints for your applications.</p>
            </Card>

            <Card link="/docs/spec/scim/scim-api">
              <h2 className="color-smart-neon">Identity</h2>
              <p>Manage user identities across systems with the SCIM API for streamlined access control.</p>
            </Card>

          </div>
        </div>
      </main>

    </Layout>
  );
}
