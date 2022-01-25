import React from "react";
import Menu from "../components/Menu";
import { Helmet } from "react-helmet";

function About() {
  const makeBanner = (i, dir, str) => {
    const mapper = [...Array(i).keys()];

    return (
      <>
        <div class="m-scroll">
          <div class="m-scroll__title">
            <div className={dir}>
              {mapper.map((x) => {
                return <h1 key={x}>{str}</h1>;
              })}
            </div>
          </div>
        </div>
        <p className="still">({str})</p>
      </>
    );
  };

  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | About</title>
        <meta
          name="description"
          content="All you need to know about sound designer, producer, mixer and masterer, composer, drummer, podcaster and everything-in-betweener, Becket Cerny."
        />
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu page="about" scroll={true} />

      {makeBanner(15, "left", "Becket Cerny makes audio in Los Angeles")}
      {makeBanner(
        3,
        "right",
        "As Music Supervisor helped launch FLOOD MAGAZINE’s podcast platform FLOOD FM with two shows hosted by SF Radio legend DJ AARON AXELSEN and manages a dynamic roster of 11 award-winning composers on the dynamic indie feature WHO AM I. He’s in post on 3 film projects in a music supervision role."
      )}
      {makeBanner(
        1,
        "left",
        "As Sound Designer led sound production on international ad campaigns for ABSOLUT and ESTEE LAUDER, as well as music videos for MADISON BEER’s Life Support World Tour, CHET FAKER’s Feel Good, OLIVIA OBRIEN’s Episodes, GOODY GRACE’s Nothing Good ft. G Eazy and Juicy J, and BEN DRAGHI’S Somewhere and multiple award-winning Like U Do. He designed MILES WARREN’s Sundance/SXSW/SeattleFilmFestival/Short-of-the-Week-winning Bruiser, PHILICIA SAUNDERS’ powerful and decorated one-woman play Breathe, and Day by Day, a charting Top-10 Fiction podcast from Must B Nice that tells uplifting stories about adapting to quarantine and stars sought-after young Hollywood talent. The Face Magazine called it “the best thing to emerge from quarantine."
      )}
      {makeBanner(
        3,
        "right",
        "As a musician has worked closely with artists across genres drumming, music directing, producing, and engineering. He produced and mixed Playdate Theatre’s 2021 Christmas album, featuring live and remote vocal sessions with Broadway actors and LA studio musicians. He mixed AL’s two most recent full albums."
      )}
      {makeBanner(
        10,
        "left",
        "His work has been covered in Deadline, Forbes, Playbill, Paper Mag, and others."
      )}
      {makeBanner(
        3,
        "right",
        "Becket graduated with honors in 2019 from Wesleyan University with a B.A. in Music. His undergraduate thesis “Groove Science: the Dilla Feel” has been downloaded and read over 1,100 times. In 2019 he participated in the Banff International Workshop for Jazz and Creative Music directed by Vijay Iyer and Tyshawn Sorey."
      )}
    </div>
  );
}

export default About;
