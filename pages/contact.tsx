import Head from "next/head";
import Nav from "../components/Nav";

export default () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <Nav></Nav>
      <p>
        I'm <a href="https://instagram.com/jsemnela">@jsemnela</a> on Instagram,
        you can write me there. You can also follow my owners{" "}
        <a href="https://instagram.com/ondrejsika">@ondrejsika</a> and{" "}
        <a href="https://instagram.com/zuzjes">@zuzjes</a>.
      </p>
    </>
  );
};
