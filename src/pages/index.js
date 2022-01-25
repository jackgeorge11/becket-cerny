import React, { useState, useRef } from "react";
import { Link } from "gatsby";

import Menu from "../components/Menu";
import "../styles/styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

function Index() {
  const [scroll, setScroll] = useState(0);

  const homeRef = useRef();

  const handleScroll = () => {
    const scrollTop = homeRef.current.scrollTop;
    setScroll(scrollTop);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | Home</title>
        <meta
          name="description"
          content="Welcome to Becket Cerny's website. Repeat after me: sound, sound, sound, sound."
        />
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu scroll={scroll} />
      <div className="index" ref={homeRef} onScroll={handleScroll}>
        <div className="b-breathe" />
        <div className="b-sound" />
        <div className="b-madison" />
        <div className="b-chet" />
        <div className="b-grace" />
        <div className="b-olivia" />
        <div
          className="b-absolut"
          style={{
            transform: `rotate(${scroll / 5}deg) translateZ(0px) scale(1)`,
            transformOrigin: "center",
            transition: "none",
          }}
        />
        <div className="b-day" />
        <div className="b-ben" />
        <div className="bubbles">
          <div className="container">
            <div className="b-1 bubble"></div>
            <div className="b-2 bubble"></div>
            <div className="b-3 bubble"></div>
          </div>
        </div>
        <div className="sound">
          <div className="design" />
          <div className="production" />
          <div className="mixing" />
          <div className="scoring" />
        </div>
        <Link to="case-studies#madison-beer" className="title xlg madison">
          madison beer
        </Link>
        <Link to="case-studies#chet-faker" className="title xlg chet">
          chet faker
        </Link>
        <Link to="case-studies#olivia-obrien" className="title xlg olivia">
          olivia o'brien
        </Link>
        <Link to="case-studies#flood-magazine" className="flood logo">
          <div>
            <StaticImage alt="image" src="../images/logos/flood.jpg" />
          </div>
        </Link>
        <Link to="case-studies#absolut-vodka" className="absolut logo">
          <div>
            <StaticImage alt="image" src="../images/logos/absolut.jpg" />
          </div>
        </Link>
        <Link to="case-studies#day-by-day-podcast" className="day still">
          <StaticImage
            alt="day by day podcast image"
            src="../images/covers/day-by-day.jpeg"
          />
        </Link>
        <Link to="case-studies#bruiser-film" className="ben still">
          <StaticImage
            src="../images/stills/bruiser.png"
            alt="ben draghi film cover with laurels"
          />
        </Link>
        <Link to="case-studies#madison-beer" className="beer-pic still">
          <StaticImage alt="image" src="../images/stills/beer.JPG" />
        </Link>
        <Link to="case-studies#goody-grace" className="lg grace">
          goody grace
          <br />
          <span className="md">ft. </span>
          <span className="lg">juicy jay</span>
          <span className="md"> & </span>
          <span className="lg">g-eazy</span>
        </Link>
        <StaticImage
          alt="laurel"
          src="../images/laurels/forbes.png"
          className="forbes laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/black-fest.png"
          className="black-fest laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/short-fest.png"
          className="short-fest laurel"
        />
        <StaticImage
          alt="image"
          src="../images/laurels/bibff.png"
          className="bibff laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/women-fest.png"
          className="women-fest laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/stills/audience.png"
          className="audience laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/sundance.png"
          className="sundance laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/sxsw.png"
          className="sxsw laurel"
        />
        <StaticImage
          alt="laurel"
          src="../images/laurels/face.png"
          className="face laurel"
        />
      </div>
    </>
  );
}

export default Index;
