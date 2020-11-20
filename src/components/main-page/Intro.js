import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Navbar from "./Navbar";

const Intro = () => {
  // useEffect(() => {
  // const dropColor = anime({
  //   targets: ".circle",
  //   translateY: 250,
  //   duration: 2000,
  //   complete: () => {
  //     anime({
  //       targets: ".intro",
  //       backgroundColor: ["rgb(131, 131, 131)", "#000"],
  //       duration: 4000,
  //     });
  //   },
  // });
  // const myName = anime({
  //   targets: "#name-svg path",
  //   loop: false,
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: "linear",
  //   direction: "alternate",
  //   duration: 600,
  //   delay: (el, i) => {
  //     return i * 150;
  //   },
  //   complete: () => {
  //     anime({
  //       targets: "#name-svg path",
  //       fill: "#ffffff",
  //       duration: 4000,
  //       complete: () => {
  //         anime({
  //           targets: "#heyIm",
  //           display: "flex",
  //         });
  //       },
  //     });
  //   },
  // });
  // const dropColor = anime({
  //   targets: ".circle",
  //   translateY: 250,
  //   duration: 500,
  //   complete: () => {
  //     anime({
  //       targets: ".intro",
  //       backgroundColor: ["rgb(131, 131, 131)", "#000"],
  //       duration: 500,
  //     });
  //   },
  // });
  // }, []);

  return (
    <section className="intro">
      {/* <div className="circle"></div> */}
      <div className="flex">
        <Navbar />
      </div>
    </section>
  );
};

export default Intro;
