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
        image="/static/images/escape.jpg"
      />
      <ProjectCard
        title="Covid Controls"
        description={`Covid Controls tracks and visualizes how governments around the world are responding to the Covid-19 outbreak.
        
It collects data on lockdown measures, quarantine policies, tourists bans along with numbers on how the disease is spreading in every country and state around the world.`}
        url="https://covidcontrols.co"
        image="/static/images/covidcontrols.png"
      />
      <ProjectCard
        title="GE2020 Lineups"
        description={`View all candidates that contested in Singapore's General Elections 2020, with final and historical results.
        
Made in 1 day, in response to a lack of coordinated news by the various political parties. The goal was to visualise the confirmed/unconfirmed lineups that each party had announced before nomination day.`}
        url="https://ge2020.now.sh"
        source="https://github.com/gpng/ge2020"
        image="/static/images/ge2020.png"
      />
      <ProjectCard
        title="SG Delivery Slots Telegram Bot"
        description={`During the Covid-19 period, delivery slots from the major supermarkets were a rare commodity that were being snapped up immediately.
        
SG Delivery Slots Bot was created to notify users based on their postcode, when a delivery slot opens up near to them.

Decommissioned due to increased security by the major supermarkets on their API endpoints.`}
        source="https://github.com/gpng/delivery-bot-api"
        image="/static/images/sg_delivery_bot.png"
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
