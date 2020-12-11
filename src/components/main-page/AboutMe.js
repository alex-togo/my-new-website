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

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
      var visible = isElementInViewport(el);
      if (visible != old_visible) {
        old_visible = visible;
        if (typeof callback == "function") {
          callback();
        }
      }
    };
  }

  return (
    <section className="about-me flex">
      <h2
        style={{
          textAlign: "center",
          margin: "0 auto",
          color: "white",
        }}
      >
        About Me
      </h2>
      <div class="flex-row">
        <img
          id="profile-pic"
          src={me}
          height="auto"
          width="100%"
          style={{ maxWidth: "150px" }}
        />
        <article className="container">
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
