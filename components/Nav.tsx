import Link from "next/link";

export default () => {
  return (
    <>
      <p>
        <Link href="/">
          <a>About me</a>
        </Link>
        <br />
        <Link href="/contact">
          <a>Contact me</a>
        </Link>
      </p>
    </>
  );
};
