import React from "react";
import Project from "./Project";
import data from "./project-data";

const Projects = () => {
  return (
    <div className="flex row">
      {data.map((item) => {
        return <Project key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Projects;
