import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Escape',
    description: `Don't know where to go?

Explore the cheapest trips from your city to every tourist destination in the world on any given travel dates.

Compare all the trips on a fun and interactive map with respect to the weather forecast, popularity, safety levels, visa requirements and so on.`,
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    github: null,
    website: 'https://greatescape.co',
    image: undefined,
  },
  {
    id: '2',
    name: 'Covid Controls',
    description: `Covid Controls tracks and visualizes how governments around the world are responding to the Covid-19 outbreak.
        
It collects data on lockdown measures, quarantine policies, tourists bans along with numbers on how the disease is spreading in every country and state around the world.`,
    technologies: ['React', 'TypeScript', 'GraphQL'],
    github: null,
    website: 'https://covidcontrols.co',
    image: '/static/images/covidcontrols.png',
  },
  {
    id: '3',
    name: 'FINeDER',
    description: `Find fine dining restaurants in Singapore.

I made this because I realized that there is no single source of information of fine dining restaurants, especially their set menu prices. With this site, you can filter by price, Michelin stars, google ratings, lunch/dinner days, cuisine, and even dress code.`,
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    github: null,
    website: 'https://fineder.sg',
    image: undefined,
  },
  {
    id: '4',
    name: 'Geodle',
    description: `A geography-based variant of Wordle, inspired by Worldle.
        
You have 6 attempts to guess the daily location. Initiatlly released with 2 puzzles, Singapore MRTs & LRTs, and Singapore MRTs only.`,
    technologies: ['React', 'Next.js', 'TypeScript'],
    github: 'https://github.com/gpng/geodle',
    website: 'https://geodle.vercel.app',
    image: undefined,
  },
  {
    id: '5',
    name: 'TeleSheets Expense Bot',
    description: `This telegram bot allows you to easily track your expenses on a Google Sheet by sending messages in private and group chats.

Initially a private bot as I wanted an easy way to keep track of expenses, and a combination of Google Sheets + a messenging app that I'm used to.

Extended it so anyone can connect their Google Sheets and use it too.`,
    technologies: ['Node.js', 'Telegram API', 'Google Sheets API'],
    github: null,
    website: 'https://t.me/telesheets_expense_bot',
    image: undefined,
  },
  {
    id: '6',
    name: 'MeetGoWhere',
    description: `Enter postal codes, and see where the are the best places to meetup in Singapore based on travel times.

Made in response to colleagues lamenting about organizing team lunches when everyone stays all over Singapore.`,
    technologies: ['React', 'Next.js', 'TypeScript'],
    github: 'https://github.com/gpng/meetgowhere',
    website: 'https://meetgowhere.vercel.app',
    image: undefined,
  },
  {
    id: '7',
    name: 'Broker Fees SG',
    description:
      'Compare fees for trading US,HK and SG stocks across popular brokers in SG, such as IBKR, Saxo, Tiger Brokers, FSMOne and MooMoo',
    technologies: ['React', 'Next.js', 'Vercel'],
    github: null,
    website: 'https://brokerfees.vercel.app',
    image: undefined,
  },
  {
    id: '8',
    name: 'RSwagGen',
    description:
      'Generate RSwag schema from JSON input.\n\nWriting RSwag schema for JSON input/output was a super tedious process, so wrote this simple utility to generate a skeleton schema from a JSON object.',
    technologies: ['React', 'Vercel'],
    github: 'https://github.com/gpng/meetgowhere',
    website: 'http://rswaggen.vercel.app/',
    image: undefined,
  },
  {
    id: '9',
    name: 'Go Log Utils',
    description:
      'VS Code Extension. Easily insert and remove log.Println statements.',
    technologies: ['VS Code API', 'TypeScript'],
    github: 'https://github.com/gpng/vscode-go-log-utils',
    website:
      'https://marketplace.visualstudio.com/items?itemName=gpng.go-log-utils/',
    image: undefined,
  },
  {
    id: '10',
    name: 'Text To XML Safe String',
    description:
      'VS Code Extension. Formats text to XML safe string, replace linebreaks (\\n), tabs (\\t), and special characters (&, \', ", <, >).\n\nMade this as we needed a way to convert multi-line Go code into strings in xml.',
    technologies: ['VS Code API', 'TypeScript'],
    github: 'https://github.com/gpng/vscode-text-to-xml-safe-string',
    website:
      'https://marketplace.visualstudio.com/items?itemName=gpng.text-to-xml-safe-string',
    image: undefined,
  },
  {
    id: '11',
    name: 'Wheel Tracker',
    description: 'Track your option wheel status and performance.',
    technologies: ['React', 'TypeScript'],
    github: null,
    website: 'http://wheel.gpng.tech/',
    image: undefined,
  },
  {
    id: '12',
    name: 'GE2020 Lineups',
    description: `View all candidates that contested in Singapore's General Elections 2020, with final and historical results.
        
Made in 1 day, in response to a lack of coordinated news by the various political parties. The goal was to visualise the confirmed/unconfirmed lineups that each party had announced before nomination day.`,
    technologies: ['React', 'Next.js'],
    github: 'https://github.com/gpng/ge2020',
    website: 'https://ge2020.now.sh',
    image: undefined,
  },
  {
    id: '13',
    name: 'SG Delivery Slots Telegram Bot',
    description: `During the Covid-19 period, delivery slots from the major supermarkets were a rare commodity that were being snapped up immediately.
        
SG Delivery Slots Bot was created to notify users based on their postcode, when a delivery slot opens up near to them.

Decommissioned due to increased security by the major supermarkets on their API endpoints.`,
    technologies: ['Node.js', 'Telegram API'],
    github: 'https://github.com/gpng/delivery-bot-api',
    website: null,
    image: undefined,
  },
];
