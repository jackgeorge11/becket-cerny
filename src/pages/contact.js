import React from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";
import "../styles/styles.scss";

function Contact() {
  let array = [];

  const addEmails = () => {
    for (let i = 1; i <= 500; i++) {
      array.push(
        <a href="mailto:becketcerny@me.com" className={`c${(i % 7) + 1}`}>
          becketcerny@me.com
        </a>
      );
    }
  };

  addEmails();

  return (
    <div className="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | Contact</title>
        <meta
          name="description"
          content="Contact Becket Cerny here or via email for project enquiries and availability."
        />
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu page="contact" scroll={true} />

      <div className="emails">
        {array.map((a) => {
          return a;
        })}
      </div>
    </div>
  );
}

export default Contact;
