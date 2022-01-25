import * as React from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";

// markup
const NotFoundPage = () => {
  return (
    <div className="four-oh-four">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Becket Cerny | 404 (Page Not Found)</title>
        <meta name="robots" content="noindex"></meta>
        <link rel="icon" href="favicon.png" />
      </Helmet>
      <Menu scroll={true} page="none" />
      <div className="block" />
      <div className="nums-wrapper">
        <div className="nums lg">
          <span className="num dark">404</span>
          <span className="num light">404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
