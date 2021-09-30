import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, url, source }) => {
  return (
    <div className="project-card-root">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="footer">
        {url && (
          <a className="link link-site" href={url} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        )}
        {source && (
          <a className="link link-source" href={source} target="_blank" rel="noopener noreferrer">
            <Image src="/static/icons/github.svg" alt="github" height={16} width={16} />
            <span>View Source</span>
          </a>
        )}
      </div>
      <style jsx>{`
        .project-card-root {
          box-shadow: 0 2px 1px rgb(0 0 0 / 5%), 0 4px 2px rgb(0 0 0 / 5%),
            0 8px 4px rgb(0 0 0 / 5%), 0 16px 8px rgb(0 0 0 / 5%);
          background: #ffffff;
          width: 100%;
          border-radius: 0.2rem;
          padding: 1rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 0;
        }

        p {
          white-space: pre-wrap;
        }

        .footer {
          display: flex;
          margin-top: 2rem;
        }

        .link {
          flex: 0 0 auto;
          border-radius: 0.2rem;
          padding: 0.3rem 0.5rem;
          text-decoration: none;
          margin-right: 1rem;
          display: flex;
          align-items: center;
        }

        .link > span {
          margin-left: 0.5rem;
        }

        .link:hover {
          background: #000000;
          color: #ffffff;
        }

        .link-site {
          background: #333333;
          border: none;
          color: #f0f0f0;
        }

        .link-source {
          background: transparent;
          border: 1px solid #333333;
          color: #333333;
        }

        @media only screen and (min-width: 600px) {
          .project-card-root {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

ProjectCard.defaultProps = {
  url: null,
  source: null,
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  source: PropTypes.string,
};

export default ProjectCard;
