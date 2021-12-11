import React from "react";
import Menu from "../components/Menu";
import "../styles/styles.scss";

function Contact() {
  let array = [];

  const addEmails = () => {
    for (let i = 1; i <= 500; i++) {
      array.push(
        <a href="mailto:becketcerny@me.com" className={`c${
          (i % 7) + 1
        }`}>becketcerny@me.com</a>
      );
      console.log(array);
    }
  };

  addEmails();

  return (
    <div className="contact">
      <Menu page="contact" scroll={true} />

      <div className="emails">
        {array.map((a) => {
          return a
        })}
      </div>
    </div>
  );
}

export default Contact;
