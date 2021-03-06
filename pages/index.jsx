import React from 'react';
import Head from 'next/head';
// components
import Title from '../components/Title/Title';
import Terminal from '../components/Profile/Terminal';
import Projects from '../components/Projects/Projects';

const Index = () => {
  return (
    <>
      <Head>
        <title>Gerald&apos;s Portfolio</title>
      </Head>
      <div className="root">
        <Title />
        <Terminal />
        <Projects />
        <style jsx>
          {`
            .root {
              padding: 0 1rem;
              max-width: 1000px;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
