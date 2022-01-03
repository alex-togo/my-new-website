import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqrvngy");

  return (
    <section className="contact-me info-section" id="contact">
      <div className="container flex">
        <SectionTitle title={"Contact"} id="contact-title" />
        <form
          id="contact-form"
          name="contact"
          className="flex wrap"
          // method="post"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Name" maxLength="50" />
          <input type="email" name="email" placeholder="Email" maxLength="50" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            type="text"
            name="message"
            placeholder="Type your message here (Max 500 Characters)"
            maxLength="500"
            rows="5"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            value="submit"
            className="submit-btn"
            style={{ marginBottom: "10px" }}
            disabled={state.submitting}
          >
            Send
          </button>
          {state.succeeded && <div className="valid">Message sent!</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
