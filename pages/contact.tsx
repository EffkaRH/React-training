import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <Link href="/">
        <a>About me</a>
      </Link>
      <p>
        I'm <a href="https://instagram.com/jsemnela">@jsemnela</a> on Instagram,
        you can write me there. You can also follow my owners{" "}
        <a href="https://instagram.com/ondrejsika">@ondrejsika</a> and{" "}
        <a href="https://instagram.com/zuzjes">@zuzjes</a>.
      </p>
    </>
  );
};
