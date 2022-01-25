import React from "react";
import Menu from "../components/Menu";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet';

function CaseStudies(props) {
  const caseStudies = [
    {
      title: "madison beer",
      slug: "madison-beer",
      link: "https://pitchfork.com/reviews/albums/madison-beer-life-support/",
      image: (
        <StaticImage
          src={`../images/stills/madison-beer.JPG`}
          alt={`madison beer life support tour action shot`}
        />
      ),
      year: "2021",
      description:
        "Sound Design and Mix on Madison Beer’s Life Support Tour visuals",
    },
    {
      title: "olivia o'brien",
      slug: "olivia-obrien",
      link: "https://vimeo.com/560988604",
      image: (
        <StaticImage
          src={`../images/stills/olivia-obrien.png`}
          alt={`olivia o'brien episodes still`}
        />
      ),
      year: "2021",
      description: "Sound Design and Mix for Olivia O’Brien’s 'EPISODES'",
    },
    {
      title: "flood magazine",
      slug: "flood-magazine",
      link: "https://floodmagazine.com/tag/f-yeah-fridays/",
      image: (
        <StaticImage
          src={`../images/covers/flood.jpeg`}
          alt={`f-yeah friday flood magazine cover promo photo`}
        />
      ),
      year: "2021",
      description:
        "PRODUCER of Flood Magazine's first-of-its-kind inaugural new indie music podcast hosted by radio legend DJ AARON AXELSEN // Launched FLOOD FM",
    },
    {
      title: "chet faker",
      slug: "chet-faker",
      link: "https://www.youtube.com/watch?v=YyODHqG2Tz0",
      image: (
        <StaticImage
          src={`../images/stills/chet-faker.png`}
          alt={`chet faker feel good music video still`}
        />
      ),
      year: "2021",
      description: "Sound Design and Mix for Chet Faker’s Western 'Feel Good'",
    },
    {
      title: "oldboy",
      slug: "oldboy",
      link: "https://open.spotify.com/album/5dB1rRORDF1E8nrWlkCqo5?si=mQc_jTLuRvCS1LmIqfBa6g",
      image: (
        <StaticImage
          src={`../images/covers/oldboy.jpeg`}
          alt={`alex scher album oldboy cover`}
        />
      ),
      year: "2021",
      description: "Mixed Alex Scher’s debut record, OLDBOY",
    },
    {
      title: "goody grace",
      slug: "goody-grace",
      link: "https://www.youtube.com/watch?v=AemkMbDeREM",
      image: (
        <StaticImage
          src={`../images/stills/nothing-good.png`}
          alt={`goody grace ft. juicy jay and g-eazy music video still`}
        />
      ),
      year: "2021",
      description: `Sound Design and Mix on “NOTHING GOOD” by goody grace ft. Juicy jay & G Eazy`,
    },
    {
      title: "JOLIE Skincare",
      slug: "jolie-skincare",
      link: "https://vimeo.com/636445922",
      image: (
        <StaticImage
          src={`../images/stills/jolie.png`}
          alt={`jolie skincare ad still`}
        />
      ),
      year: "2021",
      description:
        "Sound Design and Mix on JOLIE SKIN CARE by Frank & Beans Pictures",
    },
    {
      title: "Bruiser",
      slug: "bruiser-film",
      link: "https://www.shortoftheweek.com/2021/07/01/bruiser/",
      image: (
        <StaticImage
          src={`../images/stills/bruiser.png`}
          alt={`bruiser film still`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix for Miles Warren’s 'BRUISER'",
    },
    {
      title: "SEGO SKI CO",
      slug: "sego-ski-co",
      link: "https://vimeo.com/552173042",
      image: (
        <StaticImage
          src={``}
          alt={`madison beer`}
        />
      ),
      year: "2021",
      description:
        "Sound Design and Mix on SEGO SKIS by Frank & Beans Pictures",
    },
    {
      title: "day by day",
      slug: "day-by-day-podcast",
      link: "https://open.spotify.com/episode/1hKpTZ4vD9prAPOpgZ5dFy?si=392f3ad5a5a644cc",
      image: (
        <StaticImage
          src={`../images/covers/day-by-day.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Day By Day Podcast, MustBNice Productions",
    },
    {
      title: "ben draghi",
      slug: "ben-draghi",
      link: "https://www.papermag.com/ben-draghi-richie-shazam-2649427792.html?rebelltitem=14",
      image: (
        <StaticImage
          src={`../images/stills/ben-draghi.jpeg`}
          alt={`madison beer`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix on Ben Draghi’s Like U Do",
    },
    {
      title: "SEPT ANGES",
      slug: "sept-angels",
      link: "https://www.imdb.com/title/tt11229716/?ref_=tt_mv_close",
      image: (
        <StaticImage
          src={`../images/covers/sept-anges.jpg`}
          alt={`sept anges film cover`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix Erick Ifergan’s 'SEPT ANGES'",
    },
    {
      title: "breathe",
      slug: "breathe-film",
      link: "https://www.imdb.com/title/tt13464648/?ref_=ttfc_fc_tt",
      image: (
        <StaticImage
          src={`../images/covers/breathe.jpg`}
          alt={`breathe: a solo experience film cover`}
        />
      ),
      year: "2020",
      description: "Sound Design and Mix for Philicia Saunders’s film 'Breathe: A Solo Experience'",
    },
    {
      title: "absolut",
      slug: "absolut-vodka",
      link: "https://www.youtube.com/watch?v=RIai26m-P0M",
      image: (
        <StaticImage
          src={`../images/stills/absolut.png`}
          alt={`madison beer`}
        />
      ),
      year: "2019",
      description:
        "Music Production and Mix on Pedro Becker’s Born Colourless with Armored Pictures",
    },
    {
      title: "estee lauder",
      slug: "estee-lauder",
      link: "https://www.esteelauder.com/product/676/35652/product-catalog/re-nutriv/re-nutriv-eye-care/re-nutriv/ultimate-diamond-transformative-energy-eye-creme",
      image: (
        <StaticImage
          src={`../images/stills/estee-lauder.png`}
          alt={`estee lauder renutritiv campaign cover`}
        />
      ),
      year: "2019",
      description:
        "Music Production and Mix on Estee Lauder 2019 ReNutriv campaign",
    },
  ];

  const hash = props.location.hash;

  console.log(hash);

  return (
    <div className="case-studies">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | Case Studies</title>
        <meta
          name="description"
          content="Becket Cerny's multitude of projects. From tour visuals for Madison Beer's Life Support album to the chart-topping Day By Day podcast, Becket's experience covers a vast array of all things sound."
        />
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu page="case-studies" scroll={true} />
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 0 ? (
            <div className="case-study-wrapper" id={study.slug}>
              <div
                className={
                  hash === `#${study.slug}`
                    ? "case-study is--active"
                    : "case-study"
                }
                key={i}
              >
                <Link
                  to={study.link}
                  className="title lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {study.title}
                </Link>
                <Link to={study.link} target="_blank" rel="noopener noreferrer">
                  {study.image}
                </Link>
                <p className="date xsm">{study.year}</p>
                <h2 className="description sm">{study.description}</h2>
                <div className={`block-${i % 2} c${(i % 5) + 1}`} />
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 1 ? (
            <div className="case-study-wrapper" id={study.slug}>
              <div
                className={
                  hash === `#${study.slug}`
                    ? "case-study is--active"
                    : "case-study"
                }
                key={i}
              >
                <Link
                  to={study.link}
                  className="title lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {study.title}
                </Link>
                <Link to={study.link} target="_blank" rel="noopener noreferrer">
                  {study.image}
                </Link>
                <p className="date xsm">{study.year}</p>
                <h2 className="description sm">{study.description}</h2>
                <div className={`block-${i % 2} c${(i % 5) + 1}`} />
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="col">
        {caseStudies.map((study, i) => {
          return i % 3 === 2 ? (
            <div className="case-study-wrapper" id={study.slug}>
              <div
                className={
                  hash === `#${study.slug}`
                    ? "case-study is--active"
                    : "case-study"
                }
                key={i}
              >
                <Link
                  to={study.link}
                  className="title lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {study.title}
                </Link>
                <Link to={study.link} target="_blank" rel="noopener noreferrer">
                  {study.image}
                </Link>
                <p className="date xsm">{study.year}</p>
                <h2 className="description sm">{study.description}</h2>
                <div className={`block-${i % 2} c${(i % 5) + 1}`} />
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default CaseStudies;
