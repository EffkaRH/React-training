import Hello from "../components/Hello";
import Head from "next/head";
export default () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <p>
        Ahoy, I'm Nela,
        <br />
        I'm half labrador half swiss shepard.
      </p>
      <p>
        I love water (anytime, anywhere, dirty is better than clean), mud,
        mountines and play fetch.
      </p>
      <p>
        I was born 26th of May 2015 close to Hradec Kralove. Now, I live in
        Prague with my best owners Ondrej and Zuzka.
      </p>
    </>
  );
};
