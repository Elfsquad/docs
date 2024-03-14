import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'API integration',
    Svg: require('../../static/img/icons/API.svg').default,
    description: (
      <>
        <p>
          Integrating with our API gives more flexibility and control, but comes at the cost of being more complex to set up.
        </p>
      </>      
    ),
  },
  {
    title: 'Customization',
    Svg: require('../../static/img/icons/Configure.svg').default,
    description: (
      <>
        <p>
          You will also be able to create a new interface from scratch using our <a href="apis/configurator">configuration endpoints.</a> Or check out our <a href="/blog/tutorial%20-%20custom%20configurator">tutorial on Custom Configurators.</a>
        </p>
      </>
    ),
  },
  {
    title: 'Guides',
    Svg: require('../../static/img/icons/Blog.svg').default,
    description: (
      <>
        <p>Some integrations can be more complex than others.</p>
        <p>
          Leverage <a href="/docs/guides/embed-showroom">our guides</a> to make building complex integrations easier.
        </p>
      </>
    ),
  },
  {
    title: 'Archer',
    Svg: require('../../static/img/icons/Archer.svg').default,
    description: (
      <>
        <p><a href="/docs/archer/Introduction">Archer modeling language</a> is a domain-specific language designed to model configuration models based on variables and constraints.</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.feature}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
