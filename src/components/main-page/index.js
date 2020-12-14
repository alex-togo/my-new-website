import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

const MainPage = () => {
  return (
    <>
      <Intro />
      <Navbar />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
      {/* <Router>
        <Route path="/" component={Intro} />
        <Navbar />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/my-work" component={MyWork} />
        <Route path="/contact" component={Contact} />
      </Router> */}
    </>
  );
};

export default MainPage;
