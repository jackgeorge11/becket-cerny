import React from "react";
import Menu from "../components/Menu";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function CaseStudies() {
  const caseStudies = [
    {
      title: "madison beer",
      link: "",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "Sound Design and Mix on Madison Beer’s Life Support Tour visuals",
    },
    {
      title: "olivia o'brien",
      link: "https://vimeo.com/560988604",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix  for Olivia O’Brien’s EPISODES",
    },
    {
      title: "flood magazine",
      link: "https://open.spotify.com/show/4NCfXrjKJf0yjAChuXowVT?si=XhGw70qvRGOKWralT2hL8A",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "PRODUCER of Flood Magazine's first-of-its-kind inaugural new indie music podcast hosted by radio legend DJ AARON AXELSEN // Launched FLOOD FM",
    },
    {
      title: "Bruiser",
      link: "",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix for Miles Warren’s BRUISER",
    },
    {
      title: "chet faker",
      link: "https://www.youtube.com/watch?v=YyODHqG2Tz0",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix for Chet Faker’s Western “Feel Good”",
    },
    {
      title: "g-eazy & juicy jay",
      link: "https://www.youtube.com/watch?v=AemkMbDeREM",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: `Sound Design and Mix on “NOTHING GOOD” by goody grace ft. Juicy jay & G Eazy`,
    },
    {
      title: "day by day",
      link: "https://open.spotify.com/episode/1hKpTZ4vD9prAPOpgZ5dFy?si=392f3ad5a5a644cc",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Day By Day Podcast, MustBNice Productions",
    },
    {
      title: "oldboy",
      link: "https://open.spotify.com/album/5dB1rRORDF1E8nrWlkCqo5?si=mQc_jTLuRvCS1LmIqfBa6g",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Mixed Alex Scher’s debut record, OLDBOY",
    },
    {
      title: "absolut",
      link: "https://www.youtube.com/watch?v=RIai26m-P0M",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "Music Production and Mix on Pedro Becker’s Born Colourless with Armored Pictures",
    },
    {
      title: "estee lauder",
      link: "",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "Music Production and Mix on Estee Lauder 2019 ReNutriv campaign",
    },
    {
      title: "ben draghi",
      link: "https://www.papermag.com/ben-draghi-richie-shazam-2649427792.html?rebelltitem=14",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix on Ben Draghi’s Like U Do",
    },
    {
      title: "SEGO SKI CO",
      link: "",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "Sound Design and Mix  on SEGO SKIIS by Frank & Beans Pictures",
    },
    {
      title: "JOLIE Skincare",
      link: "",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description:
        "Sound Design and Mix on JOLIE SKIN CARE by Frank & Beans Pictures",
    },
    {
      title: "SEPT ANGES",
      link: "https://www.imdb.com/title/tt11229716/?ref_=tt_mv_close",
      image: (
        <StaticImage
          src={`../images/downloads/shasta.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix  Erick Ifergan’s SEPT ANGES",
    },
  ];

  return (
    <div className="case-studies">
      <Menu page="case-studies" scroll={true} />
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 0 ? (
            <div className="case-study" key={i}>
              <Link
                to={study.link}
                className="title lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {study.title}
              </Link>
              {study.image}
              <p className="date xsm">{study.year}</p>
              <h2 className="description sm">{study.description}</h2>
              <div className={`block-${i % 2} c${(i % 5) + 1}`}/>
            </div>
          ) : null;
        })}
      </div>
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 1 ? (
            <div className="case-study" key={i}>
              <Link
                to={study.link}
                className="title lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {study.title}
              </Link>
              {study.image}
              <p className="date xsm">{study.year}</p>
              <h2 className="description sm">{study.description}</h2>
              <div className={`block-${i % 2} c${(i % 5) + 1}`}/>
            </div>
          ) : null;
        })}
      </div>
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 2 ? (
            <div className="case-study" key={i}>
              <Link
                to={study.link}
                className="title lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {study.title}
              </Link>
              {study.image}
              <p className="date xsm">{study.year}</p>
              <h2 className="description sm">{study.description}</h2>
              <div className={`block-${i % 2} c${(i % 5) + 1}`}/>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default CaseStudies;
