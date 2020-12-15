import myWebsite from "./images/my-website.jpg";
import discord from "./images/discord-logo.jpg";
import blog from "./images/web422-major-proj-sm.jpg";
import airbnb from "./images/web322-major-proj-sm.jpg";

const data = [
  {
    id: "proj-1",
    title: "My Personal Website",
    info: "Created with React",
    img: myWebsite,
  },
  {
    id: "proj-2",
    title: "Nugget Bot",
    info: "Music player with a few extra fun features, created with Discord.js",
    img: discord,
  },
  {
    id: "proj-3",
    title: "Blog Post Website",
    info: "Created using Angular, Bootstrap and MongoDB. Hosted on Netlify.",
    img: blog,
  },
  {
    id: "proj-4",
    title: "AirB&B Website Recreation",
    info:
      "Created using Node.js, Express, Handlebars, MongoDB and other tools (such as bcrypt for password encryption). Hosted on Heroku.",
    img: airbnb,
  },
];
export default data;
