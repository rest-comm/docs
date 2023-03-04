import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'WEB',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The frontend application of rest.com.sg. Built using 
        <b> Next.js</b>, <b>TypeScript</b>, <b>ChakraUI</b>, and <b>Storybook. </b>
        <Link href="/docs/web">Get started with <code>WEB</code>.</Link>
      </>
    ),
  },
  {
    title: 'SERVER',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The backend application of rest.com.sg. Built using 
        <b> Nest.js</b> and <b>TypeScript. </b>
        <Link href="/docs/server">Get started with <code>SERVER</code>.</Link>
      </>
    ),
  },
  {
    title: 'DOCS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The official documentation of rest.com.sg. Built with <b>Docusaurus. </b>
        <Link href="/docs/docusaurus-intro">Learn how <code>Docusaurus</code> works.</Link>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
