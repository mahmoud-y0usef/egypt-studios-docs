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
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
  return (
    
    <div className="container"
        style={{
        width: "100%",
        height: "100vh",
        background:"#200122",
        background: "-webkit-linear-gradient(to right, #6f0000, #200122)" ,/* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #6f0000, #200122)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
    >
        <video  src={videoBg} autoPlay muted loop controls
            style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
            }}
        />
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
      <h1 style={{display:"inline"}}>RoadMap - خطة الدراسة</h1>  <center><span><button style={{border:"none" , background:"#200122" , padding:"8px" , color:"white" , borderRadius:"10px"}}><a style={{textDecoration:"none" , color:"white"}} href='https://www.udemy.com/course/fivem-course' target={"_blank"}>شراء الكورس</a></button></span></center><br/><br/>
      
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>the first week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Introduction + creating a working environment</ListGroup.Item>
            <ListGroup.Item as="li">setup standlone server</ListGroup.Item>
            <ListGroup.Item as="li">How script is formed and how to make your first script</ListGroup.Item>
            <ListGroup.Item as="li">Print commands and variables & commands</ListGroup.Item>
            <ListGroup.Item as="li">KeyMapping</ListGroup.Item>
            <ListGroup.Item as="li">important fivem natives</ListGroup.Item>
            <ListGroup.Item as="li">if statement</ListGroup.Item>
            <ListGroup.Item as="li">client events</ListGroup.Item>
            <ListGroup.Item as="li">functions</ListGroup.Item>
            <ListGroup.Item as="li">loops & thread</ListGroup.Item>
            <ListGroup.Item as="li">key controls</ListGroup.Item>
            <ListGroup.Item as="li">draw markers</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>The second week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Arithmetic Operators</ListGroup.Item>
            <ListGroup.Item as="li">Relational Operators</ListGroup.Item>
            <ListGroup.Item as="li">Logical Operators</ListGroup.Item>
            <ListGroup.Item as="li">Arrays</ListGroup.Item>
            <ListGroup.Item as="li">models</ListGroup.Item>
            <ListGroup.Item as="li">animations</ListGroup.Item>
            <ListGroup.Item as="li">object oriented programming</ListGroup.Item>
            <ListGroup.Item as="li">stream cars & handling</ListGroup.Item>
            <ListGroup.Item as="li">stream maps</ListGroup.Item>
            <ListGroup.Item as="li">stream clothes</ListGroup.Item>
            <ListGroup.Item as="li"> stream weapons</ListGroup.Item>
            <ListGroup.Item as="li">stream peds</ListGroup.Item>
            <ListGroup.Item as="li">stream fonts</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>The third  week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">setup esx-core</ListGroup.Item>
            <ListGroup.Item as="li">Introduction to the database </ListGroup.Item>
            <ListGroup.Item as="li">server callbacks</ListGroup.Item>
            <ListGroup.Item as="li">important esx-core functions</ListGroup.Item>
            <ListGroup.Item as="li">import from data base</ListGroup.Item>
            <ListGroup.Item as="li">export from data base</ListGroup.Item>
            <ListGroup.Item as="li">create menu with label</ListGroup.Item>
            <ListGroup.Item as="li">create discord logs system</ListGroup.Item>
            <ListGroup.Item as="li">create job system</ListGroup.Item>
            <ListGroup.Item as="li">create robbery system</ListGroup.Item>
            <ListGroup.Item as="li">create new coin system</ListGroup.Item>
            <ListGroup.Item as="li">create shop system</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>The fourth week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">create weapon system</ListGroup.Item>
            <ListGroup.Item as="li">make used items</ListGroup.Item>
            <ListGroup.Item as="li">make inventory system</ListGroup.Item>
            <ListGroup.Item as="li">learn permissions system</ListGroup.Item>
            <ListGroup.Item as="li">make sell system</ListGroup.Item>
            <ListGroup.Item as="li">setup glopal level system</ListGroup.Item>
            <ListGroup.Item as="li">Examinations on other sections</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>the Fifth week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">learn cards system</ListGroup.Item>
            <ListGroup.Item as="li">learn licence system</ListGroup.Item>
            <ListGroup.Item as="li">learn vehicle shop system</ListGroup.Item>
            <ListGroup.Item as="li">learn garage & impound system</ListGroup.Item>
            <ListGroup.Item as="li">learn how to make full tebex system</ListGroup.Item>
            <ListGroup.Item as="li">make pirsonal level system for job or robbery</ListGroup.Item>
            <ListGroup.Item as="li">make menu for car remote control system</ListGroup.Item>
            <ListGroup.Item as="li">make animation menu system</ListGroup.Item>
            <ListGroup.Item as="li">make clothes item system</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>the VI week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">make admin system</ListGroup.Item>
            <ListGroup.Item as="li">make panic system</ListGroup.Item>
            <ListGroup.Item as="li">make mechanic system</ListGroup.Item>
            <ListGroup.Item as="li">make car chop shop system</ListGroup.Item>
            <ListGroup.Item as="li">make radio system</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>the VII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">make protection system</ListGroup.Item>
            <ListGroup.Item as="li">Examinations on other sections</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>the VIII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">setup qb-core</ListGroup.Item>
            <ListGroup.Item as="li">learn important functions and exports in qb core</ListGroup.Item>
            <ListGroup.Item as="li">make jobs in qb-core</ListGroup.Item>
            <ListGroup.Item as="li">make used items in qb-core</ListGroup.Item>
            <ListGroup.Item as="li">make clothes items in qb-core</ListGroup.Item>
            <ListGroup.Item as="li">make shop in qb-core</ListGroup.Item>
            <ListGroup.Item as="li">permission in qb-core</ListGroup.Item>
            <ListGroup.Item as="li">setup vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">learn important functions and exports in vrp core</ListGroup.Item>
            <ListGroup.Item as="li">make jobs in vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">make used items in vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">make clothes items in vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">make shop in vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">permission in vrp-core</ListGroup.Item>
            <ListGroup.Item as="li">learn how to convert qb,vrp,esx to vrp, esx, qb</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>the IX week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">getting starting files NUI</ListGroup.Item>
            <ListGroup.Item as="li">starting Git and GitHub</ListGroup.Item>
            <ListGroup.Item as="li">introduction to HTML5</ListGroup.Item>
            <ListGroup.Item as="li">comments</ListGroup.Item>
            <ListGroup.Item as="li">opening and closing tag</ListGroup.Item>
            <ListGroup.Item as="li">tags in head</ListGroup.Item>
            <ListGroup.Item as="li">body tag</ListGroup.Item>
            <ListGroup.Item as="li">self closing tag</ListGroup.Item>
            <ListGroup.Item as="li">heading</ListGroup.Item>
            <ListGroup.Item as="li">Paragraphs</ListGroup.Item>
            <ListGroup.Item as="li">Formatting</ListGroup.Item>
            <ListGroup.Item as="li">Attributes</ListGroup.Item>
            <ListGroup.Item as="li">Quotation</ListGroup.Item>
            <ListGroup.Item as="li">class & id</ListGroup.Item>
            <ListGroup.Item as="li">links</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>the X week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">images</ListGroup.Item>
            <ListGroup.Item as="li">lists</ListGroup.Item>
            <ListGroup.Item as="li">table</ListGroup.Item>
            <ListGroup.Item as="li">iframes</ListGroup.Item>
            <ListGroup.Item as="li">Forms</ListGroup.Item>
            <ListGroup.Item as="li">HTML Media</ListGroup.Item>
            <ListGroup.Item as="li">svg</ListGroup.Item>
            <ListGroup.Item as="li">font awesome</ListGroup.Item>
            <ListGroup.Item as="li">examples and training</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>the XI week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">introduction to CSS3</ListGroup.Item>
            <ListGroup.Item as="li">ways to link CSS in HTML</ListGroup.Item>
            <ListGroup.Item as="li">developer tools</ListGroup.Item>
            <ListGroup.Item as="li">colors</ListGroup.Item>
            <ListGroup.Item as="li">background</ListGroup.Item>
            <ListGroup.Item as="li">border style</ListGroup.Item>
            <ListGroup.Item as="li">dev tag in html</ListGroup.Item>
            <ListGroup.Item as="li">semantic tags in html</ListGroup.Item>
            <ListGroup.Item as="li">margin</ListGroup.Item>
            <ListGroup.Item as="li">padding</ListGroup.Item>
            <ListGroup.Item as="li">height / width</ListGroup.Item>
            <ListGroup.Item as="li">text</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>the XII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">fonts</ListGroup.Item>
            <ListGroup.Item as="li">links</ListGroup.Item>
            <ListGroup.Item as="li">lists</ListGroup.Item>
            <ListGroup.Item as="li">table</ListGroup.Item>
            <ListGroup.Item as="li">display</ListGroup.Item>
            <ListGroup.Item as="li">z-index</ListGroup.Item>
            <ListGroup.Item as="li">opacity</ListGroup.Item>
            <ListGroup.Item as="li">Float</ListGroup.Item>
            <ListGroup.Item as="li">position </ListGroup.Item>
            <ListGroup.Item as="li">overflow</ListGroup.Item>
            <ListGroup.Item as="li">pseudo-element</ListGroup.Item>
            <ListGroup.Item as="li">border-radius</ListGroup.Item>
            <ListGroup.Item as="li">border-image</ListGroup.Item>
            <ListGroup.Item as="li">Multiple Backgrounds</ListGroup.Item>
            <ListGroup.Item as="li">box-shadow</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>the XIII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Text Effects</ListGroup.Item>
            <ListGroup.Item as="li">2D Transforms</ListGroup.Item>
            <ListGroup.Item as="li">3D Transforms</ListGroup.Item>
            <ListGroup.Item as="li">Transitions</ListGroup.Item>
            <ListGroup.Item as="li">Animations</ListGroup.Item>
            <ListGroup.Item as="li">Masking</ListGroup.Item>
            <ListGroup.Item as="li">Multiple Columns</ListGroup.Item>
            <ListGroup.Item as="li">box-sizing</ListGroup.Item>
            <ListGroup.Item as="li">Variables</ListGroup.Item>
            <ListGroup.Item as="li">Media Queries</ListGroup.Item>
            <ListGroup.Item as="li">Flexbox</ListGroup.Item>
            <ListGroup.Item as="li">Grid Layout Module</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header>the XIV week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">library</ListGroup.Item>
            <ListGroup.Item as="li">make full template ui  (HTML & CSS)</ListGroup.Item>
            <ListGroup.Item as="li">introduction to JS</ListGroup.Item>
            <ListGroup.Item as="li">ways link script tag in html</ListGroup.Item>
            <ListGroup.Item as="li">Code structure</ListGroup.Item>
            <ListGroup.Item as="li">Variables</ListGroup.Item>
            <ListGroup.Item as="li">alert</ListGroup.Item>
            <ListGroup.Item as="li">Data types</ListGroup.Item>
            <ListGroup.Item as="li">Interaction: alert, prompt, confirm</ListGroup.Item>
            <ListGroup.Item as="li">Type Conversions</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header>the XV week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">console.log</ListGroup.Item>
            <ListGroup.Item as="li">Basic operators, maths</ListGroup.Item>
            <ListGroup.Item as="li">Comparisons</ListGroup.Item>
            <ListGroup.Item as="li">Conditional branching: if, '?'</ListGroup.Item>
            <ListGroup.Item as="li">Logical operators</ListGroup.Item>
            <ListGroup.Item as="li">Nullish coalescing operator '??'</ListGroup.Item>
            <ListGroup.Item as="li">Loops: while and for</ListGroup.Item>
            <ListGroup.Item as="li">The "switch" statement</ListGroup.Item>
            <ListGroup.Item as="li">Functions</ListGroup.Item>
            <ListGroup.Item as="li">Function expressions</ListGroup.Item>
            <ListGroup.Item as="li">Arrow functions, the basics</ListGroup.Item>
            <ListGroup.Item as="li">Coding Style</ListGroup.Item>
            <ListGroup.Item as="li">Objects</ListGroup.Item>
            <ListGroup.Item as="li">Object references and copying</ListGroup.Item>
            <ListGroup.Item as="li">Object methods, "this"</ListGroup.Item>
            <ListGroup.Item as="li">Constructor, operator "new"</ListGroup.Item>
            <ListGroup.Item as="li">Methods of primitives</ListGroup.Item>
            <ListGroup.Item as="li">Numbers</ListGroup.Item>
            <ListGroup.Item as="li">Strings</ListGroup.Item>
            <ListGroup.Item as="li">Arrays</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header>the XVI week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">JS html Dom</ListGroup.Item>
            <ListGroup.Item as="li">jQuery</ListGroup.Item>
            <ListGroup.Item as="li">jQuery practice and JS</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header>the XVII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">UI project (flight  job)</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header>the XVIII week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">UI project (radio)</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17">
        <Accordion.Header>the XIX week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">UI project (animation menu)</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="18">
        <Accordion.Header>the XX week</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">UI project (advance pc)</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="19">
        <Accordion.Header>last month</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">training and practice</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </main>
      <br/>
      <center><span><button style={{border:"none" , background:"#200122" , padding:"8px" , color:"white" , borderRadius:"10px"}}><a style={{textDecoration:"none" , color:"white"}} href='https://www.udemy.com/course/fivem-course' target={"_blank"}>شراء الكورس</a></button></span></center><br/><br/>
    </Layout>
  );
  
}