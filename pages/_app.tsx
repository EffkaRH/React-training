import App from "next/app";

import Nav from "../components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <style jsx global>{`
          body {
            overflow-y: scroll;
          }
          p {
            font-size: 20px;
          }
        `}</style>
        <Nav />
        <Component {...pageProps} />
      </Container>
    );
  }
}
