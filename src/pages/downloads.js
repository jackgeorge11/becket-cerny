import React, { useState } from "react";
import Menu from "../components/Menu";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

function Downloads() {
  const [isActive, setActive] = useState({ shasta: false, butter: false });

  const toggleActive = (x) => {
    console.log(isActive, x)
    setActive({...isActive, [x]: !isActive[x]})
    console.log(isActive, x)
  };

  return (
    <div className="downloads">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | Downloads</title>
        <meta
          name="description"
          content="Download all Becket Cerny's work, including his renowned Mt. Shasta sample pack."
        />
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu scroll={true} page={"downloads"} />
      <div className={isActive.shasta ? "download is--active" : "download"}>
        <div className="header">
          <h1
            className={isActive.shasta ? "title lg is--active" : "title lg"}
            onClick={() => toggleActive('shasta')}
          >
            mount shasta
          </h1>
          <h3 className="date xsm">November, 2020</h3>
        </div>
        <span className="arrow is--active">&#x2197;</span>
        <div className="content">
          <h2 className="subheader md">100% Grass Fed California Samples</h2>
          <div className="cta">
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
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
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
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
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
            <a href="MT_SHASTA_PACK.zip" className="md" download>
              download
            </a>
          </div>
          <span className="close xsm" onClick={() => toggleActive('shasta')}>
            ( close &#9650; )
          </span>
        </div>
      </div>
      <div className={isActive.butter ? "download is--active" : "download"}>
        <div className="header">
          <h1
            className={isActive.butter ? "title lg is--active" : "title lg"}
            onClick={() => toggleActive('butter')}
          >
            shutter butter
          </h1>
          <h3 className="date xsm">March, 2021</h3>
        </div>
        <span className="arrow is--active">&#x2197;</span>
        <div className="content">
          <h2 className="subheader md">
            “100% ORGANIC MICHIGAN CAMERA SAMPLES”
          </h2>
          <div className="cta">
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
          </div>
          <iframe
            width="100%"
            height="507"
            src="https://www.youtube.com/embed/S4zSc2uvhs8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="cta">
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
          </div>
          <div className="body">
            <div className="description">
              <h2 className="sm">
                A unique collection of camera sounds from some of the most
                popular and beautiful-sounding film cameras in the world.
              </h2>
              <h2 className="sm">50+ Personally Recorded</h2>
              <h2 className="sm">- one shots</h2>
              <h2 className="sm">- loops</h2>
              <h2 className="sm">- bonus sounds</h2>
              <h2 className="sm">Using:</h2>
              <h2 className="sm">- Canon AE1</h2>
              <h2 className="sm">- Mamiya 645</h2>
              <h2 className="sm">- Mamiya RZ67</h2>
              <h2 className="sm">- Minolta X-700</h2>
              <h2 className="sm">- Nikon FM2</h2>
              <h2 className="sm">- Pentax 6x 7</h2>
              <h2 className="sm">- Pentax K-1000</h2>
              <h2 className="sm">Recorded and mixed with:</h2>
              <h2 className="sm">- Ableton Live</h2>
              <h2 className="sm">- Izotope RX7</h2>
              <h2 className="sm">- XLN Audio</h2>
            </div>
            <div className="body-image">
              <StaticImage
                src="../images/downloads/butter.jpeg"
                alt="Mt. Shasta Sample Pack Cover"
              />
            </div>
          </div>
          <div className="cta">
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
            <a href="SHUTTER_BUTTER_PACK.zip" className="md" download>
              download
            </a>
          </div>
          <span className="close xsm" onClick={() => toggleActive('butter')}>
            ( close &#9650; )
          </span>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
