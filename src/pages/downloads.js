import React, { useState } from "react";
import Menu from "../components/Menu";
import { StaticImage } from "gatsby-plugin-image";

function Downloads() {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="downloads">
      <Menu scroll={true} page={"downloads"} />
      <div className={isActive ? "download is--active" : "download"}>
        <div className="header">
          <h1
            className={isActive ? "title lg is--active" : "title lg"}
            onClick={() => toggleActive()}
          >
            mount shasta
          </h1>
          <h3 className="date xsm">November, 2020</h3>
        </div>
        <span className="arrow is--active">&#x2197;</span>
        <div className="content">
          <h2 className="subheader md">100% Grass Fed California Samples</h2>
          <div className="cta">
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
          </div>
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/lKPqPXHUCLY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="cta">
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
          </div>
          <div className="body">
            <div className="description">
              <h2 className="sm">160+ personally recorded samples:</h2>
              <h2 className="sm">- one-shots</h2>
              <h2 className="sm">- grooves and loops</h2>
              <h2 className="sm">- mystery special sound design goodies</h2>
              <h2 className="sm">using:</h2>
              <h2 className="sm">- Grestch Catalina Club [20” / 14” / 10” ]</h2>
              <h2 className="sm">- Grestch Catalina Club [20” / 14” / 10” ]</h2>
              <h2 className="sm">- Pork Pie Black Brass Snare [14” x 6.5”]</h2>
              <h2 className="sm">- Zildjian, Istanbul, Bosphorous Cymbals</h2>
              <h2 className="sm">- Vanguard Audio v4 LDC Mics</h2>
              <h2 className="sm">- Teenage Engineering OP1</h2>
              <h2 className="sm">- Personal Collection Percussion</h2>
              <h2 className="sm">- BONA-FIDE stuff™ from outside</h2>
            </div>
            <div className="body-image">
              <StaticImage
                src="../images/downloads/shasta.jpeg"
                alt="Mt. Shasta Sample Pack Cover"
              />
            </div>
          </div>
          <div className="cta">
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
            <a href="/images/icon.png" className="md" download>
              download
            </a>
          </div>
          <span className="close xsm" onClick={() => toggleActive()}>
            ( close &#9650; )
          </span>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
