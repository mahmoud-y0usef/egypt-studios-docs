import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software',
    Svg: require('@site/static/img/System-Software.jpg').default,
    description: (
      <>
        we can build your software programm in other fields
      </>
    ),
  },
  {
    title: 'Game Developer & fivem Developer Scripts',
    Svg: require('@site/static/img/game-developer.png').default,
    description: (
      <>
        we can make your own game design and game server , we can build fivem scripts from zero in your server 
      </>
    ),
  },
  {
    title: 'Web Developer',
    Svg: require('@site/static/img/web-developer.jpeg').default,
    description: (
      <>
        we can make your website for your server or another fields like portfolio & cv & ecommerce & more...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
