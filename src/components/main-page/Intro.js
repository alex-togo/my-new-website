import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Navbar from "./Navbar";

const Intro = () => {
  // set viewbox to bounding box to get rid of whitespace
  // function setViewbox(svg) {
  //   var bb = svg.getBBox();
  //   svg.setAttribute(
  //     "viewBox",
  //     bb.x + "," + bb.y + "," + bb.width + "," + bb.height
  //   );
  // }

  // useEffect(() => {
  //   setViewbox(document.querySelector("svg"));
  // }, []);

  // useEffect(() => {
  //   anime({
  //     targets: ".square",
  //     width: "100%", // -> from '28px' to '100%',
  //     easing: "easeInOutQuad",
  //   });
  // }, []);

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
      );
    // .add(
    //   {
    //     targets: ".darkRectangle",
    //     boxShadow: "5px 10px 15px 2px rgb(8, 8, 8)",
    //     easing: "linear",
    //     duration: 300,
    //   },
    //   "-=500"
    // );

    dr.play();
  }, []);

  return (
    <section className="intro-bg">
      <div className="container flex" style={{ height: "65vh" }}>
        <div className="darkRectangle flex-row">
          <p className="title-text" style={{ fontSize: "24px" }}>
            <span className="hey">Hey,</span>
            <span className="im" style={{ display: "block", fontSize: "42px" }}>
              I'm{" "}
              <span className="my-name" style={{ color: "rgb(0, 168, 36)" }}>
                Alex Togo.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
