import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";

const Project = ({
  title,
  info,
  technologies,
  note,
  img,
  id,
  github,
  link,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    let projAnim = anime.timeline({
      targets: ".project",
      autoplay: false,
    });

    projAnim.add({
      targets: `#${id}`,
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 1200,
    });

    if (inView) {
      projAnim.play();
    }
  }, [inView, id]);

  useEffect(() => {
    if (showInfo) {
      anime({
        targets: "proj-links-row .proj-info",
        opacity: [0, 1],
        scale: [0, 1],
        duration: 1200,
      });
    }
    if (!showInfo) {
      anime({
        targets: "proj-links-row .proj-info",
        opacity: [1, 0],
        scale: [1, 0],
        duration: 1200,
      });
    }
  }, [showInfo]);

  return (
    <div className="flex project" ref={ref} id={id}>
      <h2>{title}</h2>
      {img ? <img src={img} alt={id} className="proj-img" /> : null}
      <div className="proj-links-row flex links-row">
        {link === null ? (
          <button className="button-proj-link" disabled>
            <a href={link}>View Project Page</a>
          </button>
        ) : (
          <button className="button-proj-link">
            <a href={link}>View Project Page</a>
          </button>
        )}
        <div
          onClick={() => {
            setShowInfo(!showInfo);
            setArrowDown(!arrowDown);
          }}
          className="button-proj-link flex"
        >
          Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className={`${arrowDown ? "arrow-down" : "arrow-up"}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
        {github === null ? (
          <button className="button-proj-link" disabled>
            <a href={github}>View on Github</a>
          </button>
        ) : (
          <button className="button-proj-link">
            <a href={github}>View on Github</a>
          </button>
        )}
      </div>
      <div
        className="proj-info flex"
        style={{
          maxWidth: "400px",
          textAlign: "center",
          margin: "30px 0 0 0",
        }}
      >
        {showInfo && (
          <div>
            {info.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
        )}
        {showInfo && (
          <div style={{ margin: "20px 0" }}>
            <b>Technologies: </b>
            {technologies.map((item, i) => {
              if (i === technologies.length - 1) {
                return <span key={i}>{item}</span>;
              } else {
                return <span key={i}>{item}, </span>;
              }
            })}
          </div>
        )}
        {showInfo && note != null && (
          <div>
            <b>Note: </b>
            {note}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
