import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const toggleButton = document.querySelector(".toggle-button");
    const nav = document.querySelector(".navbar-links");
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* <div className="brand-title">Alex Togo</div> */}
        <a className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#my-work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
