import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
// import axios from "axios";
// const nodemailer = require("nodemailer");

const Contact = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: "",
    emailSent: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .post("http://localhost:3030/api/email", person)
    //   .then((res) => {
    //     if (res.data.success) {
    //       setPerson({ emailSent: true });
    //     } else {
    //       setPerson({ emailSent: false });
    //     }
    //   })
    //   .catch((err) => {
    //     setPerson({ emailSent: false });
    //   });

    console.log(person);
  };

  return (
    <section className="contact-me info-section" id="contact">
      <div className="container flex">
        <SectionTitle title={"Contact"} id="contact-title" />
        <form id="contact-form" className="flex wrap" method="post">
          {/* <label htmlFor="name">Name: </label> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          ></input>

          {/* <label htmlFor="email">Email: </label> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          ></input>

          {/* <label htmlFor="message">Message: </label> */}
          <textarea
            type="text"
            name="message"
            placeholder="Type your message here."
            rows="5"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            value="submit"
            className="submit-btn"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
