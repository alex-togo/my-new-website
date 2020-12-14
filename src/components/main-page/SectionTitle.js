import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";

const SectionTitle = ({ title, id }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let titleAnim = anime.timeline({
      autoplay: false,
    });

    titleAnim
      .add({
        targets: `#${id} .section-title`,
        translateX: [-270, 0],
        opacity: [0, 1],
        easing: "easeInSine",
        duration: 600,
      })
      .add({
        targets: `#${id} .line`,
        width: [0, 70],
        easing: "easeInSine",
        duration: 300,
      });
    if (inView) {
      titleAnim.play();
    }
  }, [inView, id]);

  return (
    <div className="flex" id={id}>
      <div
        className="section-title"
        ref={ref}
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "30px",
        }}
      >
        {title}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SectionTitle;
