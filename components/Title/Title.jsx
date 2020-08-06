import React from 'react';

const Title = () => {
  return (
    <div className="title-root">
      <div className="typewriter-wrapper">
        <div className="typewriter">
          <h1>&gt; Gerald Png&nbsp;</h1>
        </div>
      </div>
      <p className="description">
        I am a Full Stack Developer working on{' '}
        <a href="https://greatescape.co" target="_blank" rel="noopener noreferrer">
          greatescape.co
        </a>{' '}
        and{' '}
        <a href="https://covidcontrols.co" target="_blank" rel="noopener noreferrer">
          covidcontrols.co
        </a>
        .
        <br />
        <br />
        My passion is building simple, useful apps that hopefully some will find useful.
      </p>
      <style jsx>{`
        .title-root {
          margin-top: 5rem;
        }

        .description {
          font-size: 1.2rem;
          margin: 3rem 0;
        }

        .typewriter-wrapper {
          display: flex;
          justify-content: center;
        }

        .typewriter h1 {
          font-size: 2rem;
          line-height: 1.5;
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 0.5rem solid #333333; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: 0.1rem; /* Adjust as needed */
          animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #333333;
          }
        }
      `}</style>
    </div>
  );
};

export default Title;
