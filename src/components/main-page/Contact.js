import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
// import axios from "axios";
// const nodemailer = require("nodemailer");

const Contact = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // axios
  //   //   .post("http://localhost:3030/api/email", person)
  //   //   .then((res) => {
  //   //     if (res.data.success) {
  //   //       setPerson({ emailSent: true });
  //   //     } else {
  //   //       setPerson({ emailSent: false });
  //   //     }
  //   //   })
  //   //   .catch((err) => {
  //   //     setPerson({ emailSent: false });
  //   //   });
  //   let form = document.querySelector("#contact-form");
  //   let successMsg = document.createTextNode("Your message was sent!");
  //   form.appendChild(successMsg);

  //   console.log(person);
  // };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...person }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section className="contact-me info-section" id="contact">
      <div className="container flex">
        <SectionTitle title={"Contact"} id="contact-title" />
        <form
          netlify
          name="contact"
          id="contact-form"
          className="flex wrap"
          method="POST"
          onSubmit={handleSubmit}
        >
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
            name="message"
            placeholder="Type your message here."
            rows="5"
            onChange={handleChange}
          ></textarea>
          {/* <div data-netlify-recaptcha="true"></div> */}

          <button type="submit" value="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
