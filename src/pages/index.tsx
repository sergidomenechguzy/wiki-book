import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Wiki - Home</title>
      </Head>
      <h1 className="text-5xl">Home</h1>
    </PageLayout>
  );
};

export default Home;
