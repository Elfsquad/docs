import React from 'react';


export default function HomepageFeatures() {
  return (
    <div class="grid grid-cols-4 gap-8">

      <Card link="/docs/apis/data-api">
        <img src="/img/elfsquad-it-landscape.svg" class="background-tech-savy-purple" />
        <h2 class="color-tech-savy-purple">Data API</h2>
        The Data API is your gateway to data within Elfsquad. It implements the OData specification, allowing for seamless querying and manipulation of all data. This API is perfect for integrating Elfsquad with your ERP, CRM, or CAD systems, ensuring that your data is always synchronized and up-to-date.
      </Card>


      {/* <Link to="/docs/apis/data-api" class="col--6 card w-312">
        <img src="/img/elfsquad-it-landscape.svg" class="background-tech-savy-purple" />
        <h2 class="color-tech-savy-purple">Data API</h2>
        The Data API is your gateway to data within Elfsquad. It implements the OData specification, allowing for seamless querying and manipulation of all data. This API is perfect for integrating Elfsquad with your ERP, CRM, or CAD systems, ensuring that your data is always synchronized and up-to-date.
      </Link>

      <Link to="/docs/configurator" class="col--6 card w-312">
        <img src="/img/visual-configurator_2.webp" class="background-trust-turquoise" />
        <h2 class="color-trust-turquoise">Configurator API</h2>
        Our Configurator API is designed to build custom user interfaces. This API provides possibilities for creating tailored configuration experiences that meet your unique business and product requirements.
      </Link>

      <Link to="/docs/apis/quotation-api" class="col--6 card w-312">
        <img src="/img/quote.svg" class="background-manufacturing-orange" />
        <h2 class="color-manufacturing-orange">Quotation API</h2>
        The Quotation API offers specialized endpoints for creating, managing, and retrieving quotation data within Elfsquad. This API streamlines the quotation process, making it easier to generate, update, and track quotations directly through your applications.
      </Link>

      <Link to="/docs/apis/scim-api" class="col--6 card w-312">
        <img src="/img/channel-management.webp" class="background-free-green" />
        <h2 class="color-free-green">SCIM API</h2>
        The SCIM (System for Cross-domain Identity Management) API provides endpoints for managing user identities within Elfsquad. This API simplifies user management across different systems and domains, enhancing security and reducing administrative overhead.
      </Link> */}
    </div>


  );
}

import Link from '@docusaurus/Link';
import { Card }  from '@site/docs/components/Card';
