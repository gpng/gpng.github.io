import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className="project-card-root">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="footer">
        {url && (
          <a className="link-site" href={url} target="_blank" rel="noopener noreferrer">
            View Site
          </a>
        )}
      </div>
      <style jsx>{`
        .project-card-root {
          margin-top: 2rem;
          box-shadow: 0.2rem 0.2rem 0.8rem #888888;
          background: #ffffff;
          width: 100%;
          padding: 2rem;
          border-radius: 0.2rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 0;
        }

        .footer {
          margin-top: 2rem;
        }

        .link-site {
          border-radius: 0.2rem;
          padding: 0.5rem 1rem;
          background: #333333;
          border: none;
          color: #f0f0f0;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

ProjectCard.defaultProps = {
  url: null,
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default ProjectCard;
