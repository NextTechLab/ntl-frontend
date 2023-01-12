import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/landing/Landing";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Next Tech Lab</title>
        <link rel="shortcut icon" href="/ntl.png" type="image/x-icon" />
      </Head>
      <Landing />
    </>
  );
};

export default Home;
