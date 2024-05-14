import myWebsite from "./images/my-website.jpg";
import discord from "./images/discord-logo.jpg";
import swapi from "./images/swapi.jpg";

const data = [
  {
    id: "proj-1",
    title: "Non-Personal Projects",
    info: [
      "Please contact me to ask about all the projects I've done that are not listed on my GitHub",
    ],
    technologies: ["N/A"],
    note: null,
    img: null,
    github: null,
    link: null,
  },
  {
    id: "proj-2",
    title: "Star Wars Character List",
    info: [
      "A project that fetches and displays a list of Star Wars character data from SWAPI.dev",
    ],
    technologies: ["React", "Fetch API"],
    note: null,
    img: swapi,
    github: "https://github.com/alex-togo/starwars-react-app",
    link: "https://keen-nightingale-21fdbc.netlify.app/",
  },
  {
    id: "proj-3",
    title: "My Personal Website",
    info: ["My personal portfolio website created to showcase my skills!"],
    technologies: ["React", "anime.js"],
    note: null,
    img: myWebsite,
    github: "https://github.com/alex-togo/my-new-website",
    link: "https://alextogo.ca",
  },
  {
    id: "proj-4",
    title: "Nugget Bot",
    info: [
      `An audio player that lets users play audio from youtube video links in a channel of their choice, plus a few extra fun features like a cron job that reminds you to drink water! 
    `,
    ],
    technologies: ["Discord.js, Node.js"],
    note: "There is a newer version of Nugget Bot, however it is not publicly available for use at this time.",
    img: discord,
    github: "https://github.com/alex-togo/NuggetBot",
    link: null,
  },
];
export default data;
