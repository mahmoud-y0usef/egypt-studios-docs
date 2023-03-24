import React , { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import videoBg from '../../static/img/courses-fivem.mp4';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
  
/>
  return (
    <div className="container">
      <br></br>
       <iframe style={{width:"100%" , height:"550px"}} src='https://form-seven-sigma.vercel.app/'></iframe>   
    </div>
    
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
      
      <br/>
      <main className='container'>
     
      </main>
      <br/>
    </Layout>
  );
  
}
