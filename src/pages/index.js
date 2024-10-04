import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card }  from '@site/docs/components/Card';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Integrate your IT systems with Elfsquad CPQ">
      <header class="container py-16">
        <div>
          <h1 className="hero__title">Elfsquad <span className="color-smart-neon">Docs</span></h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

          <Card link="/docs/apis">
            <h2 class="color-tech-savy-purple">Integration</h2>
            The Data API is your gateway to data within Elfsquad. It implements the OData specification, allowing for seamless querying and manipulation of all data. This API is perfect for integrating Elfsquad with your ERP, CRM, or CAD systems, ensuring that your data is always synchronized and up-to-date.
          </Card>

          <Card link="/docs/configurator">
            <h2 class="color-trust-turquoise">Configurator</h2>
            Our Configurator API is designed to build custom user interfaces. This API provides possibilities for creating tailored configuration experiences that meet your unique business and product requirements.
          </Card>

          <Card link="/docs/customization">
            <h2 class="color-manufacturing-orange">Customization</h2>
            Custom scripts are snippets of JavaScript code that you can link to custom buttons. When a user clicks the button, their browser executes the script.
          </Card>

          <Card link="/docs/spec/quotation/elfsquad-web-quotationapi">
            <h2 class="color-free-green">Quotations</h2>
            The Quotation API offers specialized endpoints for creating, managing, and retrieving quotation data within Elfsquad. This API streamlines the quotation process, making it easier to generate, update, and track quotations directly through your applications.
          </Card>

          <Card link="/docs/archer">
            <h2 class="color-creative-pink">Archer</h2>
            Archer modeling language is a domain-specific language designed to model configuration models based on variables and constraints.
          </Card>

          <Card link="/docs/spec/scim/scim-api">
            <h2 class="color-smart-neon">Identity</h2>
            The SCIM (System for Cross-domain Identity Management) API provides endpoints for managing user identities within Elfsquad. This API simplifies user management across different systems and domains, enhancing security and reducing administrative overhead.
          </Card>

        </div>

      </header>
    </Layout>
  );
}
