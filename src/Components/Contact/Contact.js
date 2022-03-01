export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2 className="contact-header">Contact</h2>
        <div className="contact-text">
          <h3 className="contact-subheader">Get it touch</h3>
          <p>
            <span className="important-text">Currently</span>, I am looking for
            a position as a{" "}
            <span className="important-text">Frontend Developer</span>. I am
            open to Full-time, Part-time, or Internship positions at this time.
            If you would like to get in contact with me, email would be best
            followed by a direct message on LinkedIn. I will try to get back to
            you as soon as possible. Thank You!
          </p>
        </div>

        <a className="email-link" href="mailto:troyrichards28@gmail.com">
          {" "}
          Contact Me
        </a>
      </div>
    </section>
  );
}
