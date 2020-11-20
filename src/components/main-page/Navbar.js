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
        <div className="brand-title">Alex Togo</div>
        <a href="/#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
