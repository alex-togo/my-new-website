import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-me info-section" id="contact">
      <div className="container flex">
        <SectionTitle title={"Contact"} id="contact-title" />
        <form id="contact-form">
          <div className="form-control">
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Name"></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Email"></input>
          </div>
          <div className="form-control">
            <label htmlFor="message">Message: </label>
            <textarea
              type="email"
              placeholder="Type your message here."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
