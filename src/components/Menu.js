import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "gatsby";

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
          className={page === "case-studies" && "is--active"}
        >
          case studies
        </Link>
        <Link
          to="/downloads"
          className={page === "downloads" && "is--active"}
        >
          downloads
        </Link>
        <Link
          to="/about"
          className={page === "about" && "is--active"}
        >
          about
        </Link>
        <Link
          to="/contact"
          className={page === "contact" && "is--active"}
        >
          contact
        </Link>
      </div>
    </>
  );
}

export default Menu;
