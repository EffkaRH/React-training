import Hello from "../components/Hello";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Image from "../components/MyImage";

export default () => {
  return (
    <Container>
      <Head>
        <title>About me</title>
      </Head>
      <Image src={require("../static/klobouk.jpg")} />
      <p>
        Ahoy, I'm <Hello name="zuz" />,
        <br />
        I'm half labrador half swiss shepard.
      </p>
      <p>
        I love water (anytime, anywhere, dirty is better than clean), mud,
        mountains and play fetch.
      </p>
      <p>
        I was born 26th May 2015 close to Hradec Kralove. Now, I live in Prague
        with my best owners Ondrej and Zuzka.
      </p>
    </Container>
  );
};
