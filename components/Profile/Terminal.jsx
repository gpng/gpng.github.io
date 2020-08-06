import React from 'react';

const Terminal = () => {
  return (
    <div className="window">
      <div className="controls">
        <div className="buttons minimize" />
        <div className="buttons maximize" />
        <div className="buttons close" />
      </div>
      <div className="bash">
        <div>
          <span>
            [<span className="user">gerald</span>@linux-pc ~]:$
          </span>
          <span className="type-it"> echo $LOCATION</span>
        </div>
        <div className="result">
          <span>Singapore</span>
        </div>
        <div>
          <span>
            [<span className="user">gerald</span>@linux-pc ~]:$
          </span>
          <span className="type-it"> echo $CONTACT</span>
        </div>
        <div className="result">
          <span>
            <a
              className="link"
              href="https://www.linkedin.com/in/geraldpng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            ;{' '}
            <a
              className="link"
              href="https://github.com/gpng"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
        <div>
          <span>
            [<span className="user">gerald</span>@linux-pc ~]:$
          </span>
          <span className="type-it"> echo $EDUCATION</span>
        </div>
        <div className="result">
          <span>B.Eng Biomedical Engineering, Imperial College London</span>
        </div>
      </div>
      <style jsx>{`
        .window {
          width: 100%;
          margin: 4rem auto;
          background: #2c3e50;
          height: 18rem;
          border-radius: 0.4rem;
          box-shadow: 0.6rem 0.6rem 0.6rem #888888;
        }

        .controls {
          height: 2.5rem;
          padding-right: 0.75rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .bash {
          padding: 0.75rem;
          width: 100%;
          background: #34495e;
          height: 15.5rem;
          border-radius: 0.4rem;
          color: #ffffff;
        }

        .bash > div {
          line-height: 1.5;
        }

        .buttons {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin: 0.75rem 0.25rem;
          border: none;
        }

        .close {
          background: #e74c3c;
        }

        .maximize {
          background: #f1c40f;
        }

        .minimize {
          background: #2ecc71;
        }

        .result {
          margin-bottom: 0.5rem;
        }

        .user {
          color: #3498db;
          font-weight: bold;
        }

        .link {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Terminal;
