import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";

const Project = ({ title, info, img }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let projAnim = anime.timeline({
      targets: ".project",
      autoplay: false,
    });

    if (inView) {
      projAnim.play();
    }
  }, [inView]);

  return (
    <div className="flex project" ref={ref}>
      <img src={img} alt={"Project Image"} className="proj-img" />
      <div
        onClick={() => {
          setShowInfo(!showInfo);
          setArrowDown(!arrowDown);
        }}
        className="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className={`${arrowDown ? "arrow-up" : "arrow-down"}`}
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>
      <h4>{title}</h4>
      {console.log(title)}
      {showInfo && info}
    </div>
  );
};

export default Project;
