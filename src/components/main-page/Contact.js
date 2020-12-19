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
  const [isBot, setIsBot] = useState(false);

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setIsBot(true);
    }
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isBot) {
      if (person.name && person.email && person.message) {
        axios
          .post("/api/email", person)
          .then((res) => {
            if (res.data.success) {
              setPerson({ name: "", email: "", message: "", emailSent: true });
            } else {
              setPerson({ name: "", email: "", message: "", emailSent: false });
              setErrors("Message not sent.");
            }
          })
          .catch((err) => {
            console.log(err);
            setPerson({ ...person, emailSent: false });
          });
      } else {
        setPerson({ ...person, emailSent: false });
        // append same error after every failed attempt
        setErrors([...errors, "All fields must be filled in."]);
        // only show error once on failed attempt
        setErrors(["All fields must be filled in."]);
      }
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
          <div style={{ height: "0px" }}>
            <input
              type="checkbox"
              name="mrDestructoid"
              onChange={handleChange}
            ></input>
            <label htmlFor="mrDestructoid">
              Do you agree to the terms and services?
            </label>
          </div>

          {/* <label htmlFor="name">Name: </label> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={person.name}
            onChange={handleChange}
          ></input>
          {/* <label htmlFor="email">Email: </label> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={person.email}
            onChange={handleChange}
          ></input>
          {/* <label htmlFor="message">Message: </label> */}
          <textarea
            type="text"
            name="message"
            placeholder="Type your message here."
            rows="5"
            value={person.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            value="submit"
            className="submit-btn"
            style={{ marginBottom: "10px" }}
          >
            Send
          </button>
          {person.emailSent === true && (
            <div className="valid">Message sent!</div>
          )}
          {person.emailSent === false &&
            errors.map((err, i) => {
              return (
                <div className="error" key={i}>
                  {err}
                </div>
              );
            })}
        </form>
      </div>
    </section>
  );
};

export default Contact;
