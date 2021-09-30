import React from 'react';
import Head from 'next/head';
// components
import Projects from '../components/Projects/Projects';

const Index = () => {
  return (
    <>
      <Head>
        <title>Gerald&apos;s Portfolio</title>
      </Head>
      <div className="root">
        <h1>Gerald Png</h1>
        <h2>About Me</h2>
        <ul>
          <li>Based in Singapore</li>
          <li>Co-founder / Lead developer of <a href="https://greatescape.co">greatescape.co</a> and <a href="https://covidcontrols.co">covidcontrols.co</a></li>
        </ul>
        <h2>What I do</h2>
        <ul>
          <li>Software Engineering / Full Stack Development</li>
          <li>Try to create useful apps</li>
        </ul>
        <h2>Things I Made</h2>
        <Projects />
        <style jsx>
          {`
            .root {
              padding: 2rem 1rem;
              max-width: 48rem;
              margin: 0 auto;
            }

            h1 {
              font-size: 3rem;
              font-weight: bold;
              margin: 0 0 2rem;
            }

            h2 {
              font-size: 1.5rem;
              font-weight: bold;
              margin: 0 0 1rem;
            }

            ul {
              font-size: 1rem
            }

            @media only screen and (min-width: 600px) {
              .root {
                padding: 6rem 2rem;
              }

            h1 {
              font-size: 4rem;
              margin: 0 0 3rem;
            }

            h2 {
              font-size: 3rem;
              margin: 0 0 2rem;
            }

            ul {
              font-size: 1.5rem
            }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
