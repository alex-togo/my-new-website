import React from "react";
import me from "./images/me-profile.jpg";
import Grid from "./Grid";

const AboutMe = () => {
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
    <section className="about-me">
      <h2 style={{ textAlign: "center", paddingTop: "20px", margin: "0 auto" }}>
        About Me
      </h2>
      <div class="container flex-row" style={{ paddingBottom: "20px" }}>
        <img
          id="profile-pic"
          src={me}
          height="auto"
          width="100%"
          style={{ maxWidth: "150px" }}
        />
        <article className="container">
          <p style={{ maxWidth: "300px", padding: "0 30px" }}>
            Hey! My name is Alex Togo and I'm an aspiring web developer who
            recently graduated from Seneca College with a perfect 4.0 GPA! I'm
            always eager to learn more about programming and I'm excited to put
            my skills to work!
          </p>
        </article>
        <div>
          <p style={{ textAlign: "center" }}>My Skills</p>
          <Grid skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
