import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, url, image, source }) => {
  return (
    <div className="project-card-root">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="content">
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
              <img src="/static/icons/github.svg" alt="github" />
              <span>View Source</span>
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .project-card-root {
          margin-top: 2rem;
          box-shadow: 0.2rem 0.2rem 0.8rem #888888;
          background: #ffffff;
          width: 100%;
          border-radius: 0.2rem;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .image-wrapper {
          display: none;
        }

        .content {
          padding: 2rem;
          border-radius: 0.2rem;
          z-index: 1;
          background: #ffffff;
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
          padding: 0.5rem 1rem;
          text-decoration: none;
          margin-right: 1rem;
          display: flex;
          align-items: center;
        }

        .link > img {
          width: 1rem;
          margin-right: 0.5rem;
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

        @media (min-width: 1024px) {
          .image-wrapper {
            display: block;
            flex: 0 0 20rem;
            overflow: hidden;
            min-width: 1px;
          }

          .image-wrapper > img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            height: 100%;
          }

          .content {
            flex: 1 1 auto;
            min-width: 1px;
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
  image: PropTypes.string.isRequired,
  source: PropTypes.string,
};

export default ProjectCard;
