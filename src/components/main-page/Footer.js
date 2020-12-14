import React from "react";
import github from "./images/GitHub_Logo_White.png";
import linkedin from "./images/LI-Logo.png";

const Footer = () => {
  return (
    <>
      <nav className="footer">
        <div className="footer-links">
          <ul>
            <li>
              <a href="https://github.com/alex-togo">
                <img
                  src={github}
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "80px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alex-togo/">
                <img
                  src={linkedin}
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "130px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Footer;
