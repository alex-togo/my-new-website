import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Contact from "./Contact";
import "./style.css";

const MainPage = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
};

export default MainPage;
