import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Carousel from 'react-bootstrap/Carousel';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} >
    
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`egypt studios`}
      description="Welcome to Egypt Studio
      The goal: programming new things that affect the community of the five or more, and other things soon
      Work: We have end support for any script other than our own script that we are making from scratch
      We have also placed support only for monthly subscribers to the channel in order for them to receive a sufficient amount of support
      Stay tuned for our scripts coming soon, including all the policies in a completely different way">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
    
  );
}
