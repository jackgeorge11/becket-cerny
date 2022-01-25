import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Menu({ page, scroll }) {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
    console.log(isActive);
  };

  return (
    <>
      <MenuBar isActive={isActive} toggleMenu={toggleMenu} scroll={scroll} />
      <div className={`menu ${isActive && "is--active"}`}>
        <Link
          to="/case-studies"
          className={`nav-link ${page === "case-studies" && "is--active}"}`}
        >
          case studies
        </Link>
        <Link
          to="/downloads"
          className={`nav-link ${page === "downloads" && "is--active"}`}
        >
          downloads
        </Link>
        <Link
          to="/about"
          className={`nav-link ${page === "about" && "is--active"}`}
        >
          about
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${page === "contact" && "is--active"}`}
        >
          contact
        </Link>
        <div className="socials">
          <a
            className="social"
            href="https://www.instagram.com/becketcerny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/socials/instagram.png" />
          </a>
          <a
            className="social"
            href="https://www.facebook.com/becketcernymusic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/socials/facebook.png" />
          </a>
          <a
            className="social"
            href="https://twitter.com/BecketCerny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/socials/twitter.png" />
          </a>
          <a
            className="social"
            href="https://www.imdb.com/name/nm11518528/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/socials/imdb.png" />
          </a>
        </div>
        <span className="xsm citation">
          website designed by
          <br />
          <a
            href="https://jackgeorge.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            jack george
          </a>
        </span>
      </div>
      <div className="grain" />
    </>
  );
}

export default Menu;
