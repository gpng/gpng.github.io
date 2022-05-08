import Head from 'next/head';
import React from 'react';
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
        <div className="links">
          <a href="https://github.com/gpng" target="_blank" rel="noopener noreferrer">
            <img src="/static/icons/github.svg" alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/geraldpng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:geraldpng+hello@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/static/icons/gmail.svg" alt="gmail" />
          </a>
        </div>
        <h2>about me</h2>
        <ul>
          <li>Based in Singapore</li>
          <li>
            Co-founder / lead developer of <a href="https://greatescape.co">greatescape.co</a> and{' '}
            <a href="https://covidcontrols.co">covidcontrols.co</a>
          </li>
        </ul>
        <h2>what i do</h2>
        <ul>
          <li>Software Engineering / Full Stack Development</li>
          <li>Try to create useful apps</li>
        </ul>
        <h2>things i&apos;ve made</h2>
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
              margin: 0 0 0.5rem;
            }

            h2 {
              font-size: 1.5rem;
              font-weight: bold;
              margin: 0 0 1rem;
            }

            ul {
              font-size: 1rem;
            }

            .links {
              display: flex;
              margin: 0 0 1rem;
            }

            .links > a + a {
              margin-left: 1rem;
            }

            .links > a > img {
              width: 1.5rem;
            }

            @media only screen and (min-width: 600px) {
              .root {
                padding: 6rem 2rem;
              }

              h1 {
                font-size: 4rem;
                margin: 0 0 1rem;
              }

              h2 {
                font-size: 3rem;
                margin: 0 0 2rem;
              }

              ul {
                font-size: 1.5rem;
              }

              .links {
                margin: 0 0 2rem;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
