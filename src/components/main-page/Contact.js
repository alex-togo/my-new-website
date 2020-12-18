import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const Contact = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: "",
    emailSent: null,
  });

  const errors = [];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.name && person.email && person.message) {
      axios
        .post("http://localhost:3030/api/email", person)
        .then((res) => {
          if (res.data.success) {
            setPerson({ name: "", email: "", message: "", emailSent: true });
          } else {
            setPerson({ name: "", email: "", message: "", emailSent: false });
          }
        })
        .catch((err) => {
          setPerson({ emailSent: false });
        });
    } else {
      errors.push("All fields must be filled in.");
      setPerson({ ...person, emailSent: false });
    }
  };

  return (
    <section className="contact-me info-section" id="contact">
      <div className="container flex">
        <SectionTitle title={"Contact"} id="contact-title" />
        <form
          id="contact-form"
          name="contact"
          className="flex wrap"
          method="post"
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
            type="text"
            name="message"
            placeholder="Type your message here."
            rows="5"
            onChange={handleChange}
          ></textarea>
          <button type="submit" value="submit" className="submit-btn">
            Send
          </button>
          {person.emailSent === true && (
            <div style={{ color: "green" }}>Message sent!</div>
          )}{" "}
          {person.emailSent === false &&
            errors.map((err, i) => {
              return (
                <div className="error" key={i}>
                  {err}
                </div>
              );
            })}
          {/* {person.emailSent === true && (
            <div style={{ margin: "10px 0", color: "green" }}>
              Message sent!
            </div>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
