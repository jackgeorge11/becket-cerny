import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import Menu from "../components/Menu";
import "../styles/styles.scss";

function Index() {
  const [scroll, setScroll] = useState(0);

  const homeRef = useRef();

  const handleScroll = () => {
      const scrollTop = homeRef.current.scrollTop;
      setScroll(scrollTop);
    };

  console.log(scroll)

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
        <Link to="case-studies#madison-beer" className="title xlg olivia">
          olivia o'brien
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg flood">
          flood magazine
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg chet">
          chet faker
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg grace">
          goody grace<span className="md"> ft. </span>
          <br />
          g-eazy & juicy j
        </Link>

        {/* LOGO */}
        {/* <Link to="case-studies#madison-beer" className="title xlg">
          madison
        </Link>
        <Link to="case-studies#madison-beer" className="title xlg">
          madison
        </Link> */}

        {/* STILLS */}

        {/* BLOCKS */}
        <div className="b-sound" />
      </div>
    </>
  );
}

export default Index;
