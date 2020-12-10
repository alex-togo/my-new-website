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
    var dr = anime
      .timeline({
        targets: ".darkRectangle",
        autoplay: false,
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        targets: ".title-text",
        opacity: [0, 1],
        delay: anime.stagger(400),
      });

    dr.play();
  }, []);

  return (
    <section className="intro">
      <div className="container flex">
        <Navbar />
      </div>
      {/* <div className="square" style={{ position: "absolute" }}></div>
      <p style={{ zIndex: "-1" }}>YO</p>
      <div className="circle"></div> */}
      <div className="container flex">
        <div className="darkRectangle flex">
          <p className="title-text">Hey,</p>
          <p className="title-text">I'm</p>
          <p className="title-text">Alex Togo</p>
        </div>
      </div>
      {/* <div className="my-name">Alex Togo</div> */}
    </section>
  );
};

export default Intro;
