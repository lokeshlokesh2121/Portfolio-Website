import "../styles/Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_45s8es1",     // e.g. "service_abc123"
        "template_ebw36as",    // e.g. "template_xyz789"
        form.current,
        "DYBo-ygrPOyHhILlt"      // e.g. "aBcDeFgH..."
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <span className="contact-tag">LET'S CONNECT</span>
          <h2>
            Let's Build Something<span> Amazing</span>
          </h2>
          <p>
            Whether it's a startup idea, SaaS platform, enterprise
            application, or freelance project, I'm always open to discussing
            new opportunities.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <span>immandilokesh431@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 8260547148</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Rajahmundry, Andhra Pradesh</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-wrapper">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Project Subject"
              required
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
            />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-msg success">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-msg error">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;