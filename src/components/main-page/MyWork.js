import React from "react";
import SectionTitle from "./SectionTitle";
import Projects from "./Projects";

const MyWork = () => {
  return (
    <section className="my-work info-section" id="my-work">
      <SectionTitle title={"My Work"} id="my-work-title" />
      <Projects />
    </section>
  );
};

export default MyWork;
