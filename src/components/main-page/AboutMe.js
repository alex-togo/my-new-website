import React from "react";
import me from "./images/me-profile.jpg";

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
  // const skillsGrid = document.querySelector(".skills-grid");
  // for (let i = 0; i < skills.length; i++) {
  //   let element = document.createElement("span");
  //   element.textContent = skills[i];
  //   skillsGrid.appendChild(element);
  // }
  return (
    <section className="about-me">
      <p style={{ textAlign: "center" }}>About Me</p>
      <div class="yo container">
        <img
          id="profile-pic"
          src={me}
          height="auto"
          width="100%"
          style={{ maxWidth: "150px" }}
        />
        <article>
          <p style={{ maxWidth: "300px" }}>
            Hey! My name is Alex Togo and I'm an aspiring web developer who
            recently graduated from Seneca College with a perfect 4.0 GPA! I'm
            always eager to learn more about programming and I'm excited to put
            my skills to work!
          </p>
        </article>
        <div className="skills-grid">
          {skills.map((skill, i) => {
            return (
              <span key={i} className="skill">
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
