import { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";


import { getEmail } from "../helper/axiosHelper";

const initialState = { name: "", email: "", message: "" };
export const Contact = () => {
  const [formData, setForm] = useState(initialState);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    getEmail(formData);
    setForm(initialState);
    alert("Thanks for reaching out to me 😍");
  };
  return (
    <section id="contact">
      <h1 className="text-center pb-5">Contact Me</h1>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>roshanbhattarai021@gmail.com</h5>
            <a
              rel="noreferrer"
              href="mailto:roshanbhattarai021@gmail.com"
              target="_blank"
              className="link"
            >
              Send me a email
            </a>
          </article>

          {/* <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon"/>
              <h4>Twitter</h4>
              <h5>tech-and-me</h5>
              <a href="mailto:pharyphal@icloud.com" target="_blank">Send me a message</a>
            </article> */}

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+61405624418</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+61405624418"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handelOnChange}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handelOnChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={handelOnChange}
            value={formData.message}
          ></textarea>
          <button className=" btnn " type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};