import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="projects-root">
      <h2>Projects</h2>
      <ProjectCard
        title="Escape"
        description="Don’t know where to go? Explore the cheapest trips from your city to every tourist
        destination in the world on any given travel dates. Compare all the trips on a fun and
        interactive map with respect to the weather forecast, popularity, safety levels, visa
        requirements and so on."
        url="https://greatescape.co"
      />
      <ProjectCard
        title="Covid Controls"
        description="Covid Controls tracks and visualizes how governments around the world are responding to the Covid-19 outbreak. It collects data on lockdown measures, quarantine policies, tourists bans along with numbers on how the disease is spreading in every country and state around the world."
        url="https://covidcontrols.co"
      />
      <ProjectCard
        title="GE2020 Lineups"
        description="View all candidates that contested in Singapore's General Elections 2020, with final and historical results."
        url="https://ge2020.now.sh"
      />
      <style jsx>{`
        .projects-root {
          margin-bottom: 4rem;
        }

        h2 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Projects;
