import React from "react";
import Project from "./Project";
import data from "./project-data";

const Projects = () => {
  return (
    <div className="flex row">
      {data.map((item) => {
        return (
          <Project
            key={item.id}
            {...item}
            // title={data.title}
            // info={data.info}
            // img={data.img}
          />
        );
      })}
    </div>
  );
};

export default Projects;
