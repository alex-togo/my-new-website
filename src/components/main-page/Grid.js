import React from "react";

const Grid = ({ skills }) => {
  return (
    <div className="skills-grid">
      {skills.map((skill, i) => {
        return (
          <div key={i} className="skill">
            {skill}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
