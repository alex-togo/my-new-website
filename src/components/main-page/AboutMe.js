import React from "react";
import me from "./images/me-profile.jpg";
import Grid from "./Grid";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";

const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let aboutAnim = anime.timeline({
      autoplay: false,
    });

    aboutAnim
      .add({
        targets: "#about-title",
        opacity: [0, 1],
        easing: "easeInSine",
        duration: 1000,
      })
      .add(
        {
          targets: "#profile-pic",
          opacity: [0, 1],
          easing: "easeInSine",
          duration: 600,
        },
        "-=1000"
      )
      .add(
        {
          targets: "#about-text",
          opacity: [0, 1],
          easing: "easeInSine",
          duration: 600,
        },
        "-=1000"
      );

    aboutAnim.play();
  }, [inView]);

  const skills = [
    "C++",
    "Java",
    "C",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Bootstrap",
  ];

  return (
    <section className="about-me info-section flex" id="about-me">
      <h2
        id="about-title"
        style={{
          textAlign: "center",
          margin: "0 auto",
          color: "white",
          marginBottom: "50px",
        }}
      >
        About Me
      </h2>
      <div className="flex-row">
        <img
          id="profile-pic"
          src={me}
          height="auto"
          width="100%"
          style={{ maxWidth: "150px" }}
          alt="Me"
          ref={ref}
        />
        <article className="container" id="about-text" ref={ref}>
          <p style={{ maxWidth: "300px", padding: "0 30px", color: "white" }}>
            Hey! My name is Alex Togo and I'm an aspiring web developer who
            recently graduated from Seneca College with a perfect 4.0 GPA! I'm
            always eager to learn more about programming and I'm excited to put
            my skills to work!
          </p>
        </article>
        <div>
          <p style={{ textAlign: "center", color: "white" }}>My Skills</p>
          {}
          <Grid skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
