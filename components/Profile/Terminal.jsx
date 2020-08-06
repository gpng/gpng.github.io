import React from 'react';

const Terminal = () => {
  return (
    <div className="window">
      <div className="controls">
        <div className="buttons close" id="close" />
        <div className="buttons maximize" href="#" />
        <div className="buttons minimize" href="#" />
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
          margin: 75px auto;
          background: #2c3e50;
          height: 300px;
          border-radius: 5px;
          display: relative;
          box-shadow: 10px 10px 10px #888888;
        }

        .bash {
          padding: 12px;
          width: 100%;
          background: #34495e;
          height: 260px;
          border-radius: 5px;
          top: 40px;
          display: absolute;
          color: #ffffff;
        }

        .bash > div {
          line-height: 1.5;
        }

        .buttons {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          float: right;
          margin: 13px 4px;
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
          margin-bottom: 8px;
        }

        .controls {
          height: 40px;
          top: 0;
          padding-right: 12px;
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
