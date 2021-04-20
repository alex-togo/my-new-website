import myWebsite from "./images/my-website.jpg";
import discord from "./images/discord-logo.jpg";
import blog from "./images/web422-major-proj-sm.jpg";
import airbnb from "./images/web322-major-proj-sm.jpg";
import swapi from "./images/swapi.jpg";

const data = [
  {
    id: "proj-1",
    title: "Star Wars Character List",
    info: [
      "A project that fetches and displays a list of Star Wars character data from SWAPI.dev",
    ],
    technologies: ["React", "Fetch API", "Node.js"],
    note: null,
    img: swapi,
    github: "https://github.com/alex-togo/starwars-react-app",
    link: "https://keen-nightingale-21fdbc.netlify.app/",
  },
  {
    id: "proj-2",
    title: "My Personal Website",
    info: ["My personal portfolio website created to showcase my skills!"],
    technologies: ["React", "anime.js", "Node.js", "Express", "SendGrid"],
    note: null,
    img: myWebsite,
    github: "https://github.com/alex-togo/my-new-website",
    link: "https://alextogo.ca",
  },
  {
    id: "proj-3",
    title: "Nugget Bot",
    info: [
      `An audio player that lets users play audio from youtube video links in a channel of their choice, plus a few extra fun features like a cron job that reminds you to drink water! 
    `,
      `This bot is currently hosted on an Ubuntu server provided by DigitalOcean.`,
    ],
    technologies: ["Discord.js, Ubuntu"],
    note: "Not yet publicly available for use.",
    img: discord,
    github: "https://github.com/alex-togo/NuggetBot",
    link: null,
  },
  {
    id: "proj-4",
    title: "Blog Post Website",
    info: [
      "A scalable blog post website that uses an API to create/edit/delete posts. Users can comment on posts and the number of views per post are tracked. ",
    ],
    technologies: [
      "Angular",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express",
      "Netlify",
    ],
    note: "School project - not all features have been fully implemented",
    img: blog,
    github: null,
    link: "https://adoring-wescoff-d581eb.netlify.app/home",
  },
  {
    id: "proj-5",
    title: "AirB&B Website Recreation",
    info: [
      "A condensed version of the AirB&B website featuring a login system, authentication, protected routes, room searching and more!",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Heroku"],
    note: "School project - not all features have been fully implemented",
    img: airbnb,
    github: null,
    link: "https://web322-major-assignment.herokuapp.com/",
  },
];
export default data;
