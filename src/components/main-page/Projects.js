import React from "react";
import Project from "./Project";
import data from "./project-data";

const Projects = () => {
  return (
    <div className="container flex row wrap">
      {data.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </div>
  );
};

export default Projects;
