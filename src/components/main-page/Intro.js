import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Intro = () => {
  useEffect(() => {
    var dr = anime.timeline({
      targets: ".darkRectangle",
      autoplay: false,
    });

    dr.add({
      duration: 400,
      easing: "easeInOutExpo",
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
    }).add({
      duration: 300,
      easing: "easeInOutExpo",
      scaleX: 1,
      complete: () => {
        anime({
          targets: ".darkRectangle",
          boxShadow: "5px 10px 15px 2px rgb(8, 8, 8)",
          easing: "linear",
          duration: 900,
        });
      },
    });

    dr.add({
      targets: ".title-text .hey",
      opacity: [0, 1],
      easing: "linear",
    })
      .add(
        {
          targets: ".title-text .im",
          opacity: [0, 1],
          easing: "linear",
        },
        "-=600"
      )
      .add(
        {
          targets: ".title-text .my-name",
          opacity: [0, 1],
          easing: "linear",
        },
        "-=900"
      )
      .add(
        {
          targets: ".title-text .job-title",
          opacity: [0, 1],
          easing: "linear",
        },
        "-=300"
      )
      .add(
        {
          targets: ".button",
          opacity: [0, 1],
          easing: "linear",
        },
        "+=200"
      );

    dr.play();
  }, []);

  return (
    <>
      <section className="intro-bg" id="intro">
        <div className="container flex" style={{ height: "95vh" }}>
          <div className="darkRectangle flex">
            <div className="title-text">
              <span className="hey">Hey,</span>
              <span className="im"> I'm </span>
              <span className="my-name" style={{ color: "rgb(0, 168, 36)" }}>
                Alex Togo.
              </span>
              <br></br>
              <span className="job-title">I'm an aspiring web developer.</span>
            </div>
            <div className="button">
              <a href="#my-work" style={{ textDecoration: "none" }}>
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
