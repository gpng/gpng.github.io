import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="projects-root">
      <ProjectCard
        title="Escape"
        description={`Don’t know where to go?

Explore the cheapest trips from your city to every tourist destination in the world on any given travel dates.

Compare all the trips on a fun and interactive map with respect to the weather forecast, popularity, safety levels, visa requirements and so on.`}
        url="https://greatescape.co"
      />
      <ProjectCard
        title="Covid Controls"
        description={`Covid Controls tracks and visualizes how governments around the world are responding to the Covid-19 outbreak.
        
It collects data on lockdown measures, quarantine policies, tourists bans along with numbers on how the disease is spreading in every country and state around the world.`}
        url="https://covidcontrols.co"
        image="/static/images/covidcontrols.png"
      />
      <ProjectCard
        title="MeetGoWhere"
        description={`Enter postal codes, and see where the are the best places to meetup in Singapore based on travel times.

Made in response to colleagues lamenting about organizing team lunches when everyone stays all over Singapore.`}
        url="https://meetgowhere.vercel.app"
        source="https://github.com/gpng/meetgowhere"
      />
      <ProjectCard
        title="Broker Fees SG"
        description={`Compare fees for trading US,HK and SG stocks across popular brokers in SG, such as IBKR, Saxo, Tiger Brokers, FSMOne and MooMoo`}
        url="https://brokerfees.vercel.app"
      />
      <ProjectCard
        title="RSwagGen"
        description={`Generate RSwag schema from JSON input.

Writing RSwag schema for JSON input/output was a super tedious process, so wrote this simple utility to generate a skeleton schema from a JSON object.`}
        url="http://rswaggen.vercel.app/"
        source="https://github.com/gpng/meetgowhere"
      />
      <ProjectCard
        title="Go Log Utils"
        description={`VS Code Extension. Easily insert and remove log.Println statements.`}
        url="https://marketplace.visualstudio.com/items?itemName=gpng.go-log-utils/"
        source="https://github.com/gpng/vscode-go-log-utils"
      />
      <ProjectCard
        title="Text To XML Safe String"
        description={`VS Code Extension. Formats text to XML safe string, replace linebreaks (\\n), tabs (\\t), and special characters (&, ', ", <, >).
        
Made this as we needed a way to convert multi-line Go code into strings in xml.`}
        url="https://marketplace.visualstudio.com/items?itemName=gpng.text-to-xml-safe-string"
        source="https://github.com/gpng/vscode-text-to-xml-safe-string"
      />
      <ProjectCard
        title="Wheel Tracker"
        description={`Track your option wheel status and performance.`}
        url="http://wheel.gpng.tech/"
      />
      <ProjectCard
        title="GE2020 Lineups"
        description={`View all candidates that contested in Singapore's General Elections 2020, with final and historical results.
        
Made in 1 day, in response to a lack of coordinated news by the various political parties. The goal was to visualise the confirmed/unconfirmed lineups that each party had announced before nomination day.`}
        url="https://ge2020.now.sh"
        source="https://github.com/gpng/ge2020"
      />
      <ProjectCard
        title="SG Delivery Slots Telegram Bot"
        description={`During the Covid-19 period, delivery slots from the major supermarkets were a rare commodity that were being snapped up immediately.
        
SG Delivery Slots Bot was created to notify users based on their postcode, when a delivery slot opens up near to them.

Decommissioned due to increased security by the major supermarkets on their API endpoints.`}
        source="https://github.com/gpng/delivery-bot-api"
      />
      <style jsx>{`
        .projects-root {
          display: grid;
          grid-template-columns: 1fr;
          column-gap: 1rem;
          row-gap: 1rem;
        }

        @media only screen and (min-width: 600px) {
          .projects-root {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
