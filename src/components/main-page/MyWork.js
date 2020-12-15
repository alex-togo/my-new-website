import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import SectionTitle from "./SectionTitle";
import Projects from "./Projects";

const MyWork = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let myWorkAnim = anime.timeline({
      targets: ".my-work",
      autoplay: false,
    });

    if (inView) {
      myWorkAnim.play();
    }
  }, [inView]);

  return (
    <section className="my-work info-section" id="my-work">
      <SectionTitle title={"My Work"} id="my-work-title" />
      <Projects />
    </section>
  );
};

export default MyWork;
