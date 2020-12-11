import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./style.css";

const MainPage = () => {
  return (
    <>
      <Intro />
      <Navbar />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
};

export default MainPage;
