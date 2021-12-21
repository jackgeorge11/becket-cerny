import React, { useState, useRef } from "react";
import { Link } from "gatsby";

import Menu from "../components/Menu";
import "../styles/styles.scss";
import { StaticImage } from "gatsby-plugin-image";

function Index() {
  const [scroll, setScroll] = useState(0);

  const homeRef = useRef();

  const handleScroll = () => {
    const scrollTop = homeRef.current.scrollTop;
    setScroll(scrollTop);
  };

  return (
    <>
      <Menu scroll={scroll} />
      <div className="index" ref={homeRef} onScroll={handleScroll}>
        {/* SOUND */}
        <div className="sound">
          <div className="design" />
          <div className="production" />
          <div className="mixing" />
          <div className="scoring" />
        </div>

        {/* NAMES */}
        <Link to="case-studies#madison-beer" className="title xlg madison">
          madison beer
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg chet">
          chet faker
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg olivia">
          olivia o'brien
        </Link>

        {/* LOGO */}
        <Link to="case-studies" className="absolut">
          <div>
            <StaticImage src="../images/logos/absolut.jpg" />
          </div>
        </Link>
        <Link to="case-studies" className="flood">
          <div>
            <StaticImage src="../images/logos/flood.jpg" />
          </div>
        </Link>

        {/* COVERS */}
        <Link to="case-studies" className="day">
          <StaticImage src="../images/covers/day-by-day.jpeg" />
        </Link>

        {/* STILLS */}
        <Link to="case-studies" className="grace">
          <StaticImage src="../images/stills/nothing-good.png" />
        </Link>
        {/* BLOCKS */}
        <div className="b-sound" />
      </div>
    </>
  );
}

export default Index;
