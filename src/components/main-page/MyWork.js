import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import SectionTitle from "./SectionTitle";

const MyWork = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let aboutAnim = anime.timeline({
      targets: ".my-work",
      autoplay: false,
    });

    if (inView) {
      aboutAnim.play();
    }
  }, [inView]);

  return (
    <section className="my-work info-section" id="my-work">
      <div className="container flex">
        <SectionTitle title={"My Work"} id="my-work-title" />
      </div>
    </section>
  );
};

export default MyWork;
