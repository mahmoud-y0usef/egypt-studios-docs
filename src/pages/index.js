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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />

      <div className="container">
      <Carousel>
      <Carousel.Item>
        <img style={{width:"100px" , height:"400px"}}
          className="d-block w-50"
          src="https://media.discordapp.net/attachments/923389102890549278/1072121769873395763/advance_cloak_room.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{marginLeft:"410px" , marginBottom:"50px"}}>[esx][paid] konar_advancedcloakroom</h3>
          <button className='btn-slide' style={{marginLeft:"410px" , marginBottom:"50px"}}><a href='https://egyptstudio.tebex.io/package/5058633'>Buy Now</a></button>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/esxscripts/intro">
            ️  go now
          </Link>
        </div> */}
      </div>
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
