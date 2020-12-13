import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";

const Grid = ({ skills }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: ".skills-grid .skill",
        translateX: [350, 0],
        delay: anime.stagger(100),
        easing: "easeInSine",
        duration: 300,
      });
    }
  }, [inView]);

  return (
    <div className="skills-grid" ref={ref}>
      {skills.map((skill, i) => {
        return (
          <div key={i} className="skill" style={{ color: "white" }}>
            {skill}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
