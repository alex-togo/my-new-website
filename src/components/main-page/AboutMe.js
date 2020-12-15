import React from "react";
import me from "./images/me-profile.jpg";
import Grid from "./Grid";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs/lib/anime.es.js";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let aboutAnim = anime.timeline({
      targets: "about-me",
      autoplay: false,
    });

    aboutAnim
      .add(
        {
          targets: ".row-list .row-list-item",
          opacity: [0, 1],
          translateX: [-500, 0],
          easing: "easeInSine",
          delay: anime.stagger(400),
          duration: 500,
        },
        "-=200"
      )
      .add(
        {
          targets: "#profile-pic",
          translateX: [-270, 0],
          opacity: [0, 1],
          easing: "easeInSine",
          duration: 600,
        },
        "-=1500"
      )
      .add(
        {
          targets: ".who-am-i",
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
      )
      .add(
        {
          targets: ".my-skills-title",
          opacity: [0, 1],
          translateX: [270, 0],
        },
        "-=1000"
      )
      .add({
        targets: ".circle",
        borderWidth: [0, 2],
      });
    if (inView) {
      // anime({
      //   targets: ".about-me",
      //   borderWidth: [0, 2],
      // });
      aboutAnim.play();
    }
  }, [inView]);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "Angular",
    "React",
    "Photoshop",
    "Illustrator",
  ];

  return (
    <section
      className="about-me info-section"
      id="about-me"
      ref={ref}
      // style={{ border: "1px solid white" }}
    >
      <div className="container flex">
        <SectionTitle title={"About Me"} id="about-me-title" />
        <div className="flex space-between md row-list">
          <div className="flex row-list-item">
            <div className="circle flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
            <h3>Detail Oriented</h3>
            <div style={{ maxWidth: "200px", textAlign: "center" }}>
              Every detail matters when you strive for quality.
            </div>
          </div>
          <div className="flex row-list-item">
            <div className="circle flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-alarm"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                />
              </svg>
            </div>
            <h3>Quick Learner</h3>
            <div style={{ maxWidth: "200px", textAlign: "center" }}>
              Quick learner who is adaptable and resourceful.
            </div>
          </div>
          <div className="flex row-list-item">
            <div className="circle flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cpu"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
                />
              </svg>
            </div>
            <h3>Tech Lover</h3>
            <div style={{ maxWidth: "200px", textAlign: "center" }}>
              A passion for all things tech and programming.
            </div>
          </div>
        </div>
        <div
          className="skills-container flex space-between sm"
          style={{
            margin: "75px 0 0 0",
          }}
        >
          <img
            id="profile-pic"
            src={me}
            height="auto"
            width="100%"
            style={{ maxWidth: "200px", borderRadius: "100px" }}
            alt="Me"
            ref={ref}
          />

          <div className="who-am-i" style={{ padding: "20px 0" }} ref={ref}>
            {" "}
            <h3 className="who-am-i-title" style={{ textAlign: "center" }}>
              Who Am I?
            </h3>
            <article className="who-am-i-text" ref={ref}>
              <p style={{ maxWidth: "260px" }}>
                Hey! My name is Alex Togo and I'm a web developer who recently
                graduated from Seneca College with a perfect 4.0 GPA!
              </p>
            </article>
          </div>

          <div>
            <h3 className="my-skills-title" style={{ textAlign: "center" }}>
              My Skills
            </h3>
            {}
            <Grid skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
