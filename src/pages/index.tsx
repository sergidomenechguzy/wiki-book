import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import { buildTitle } from "../lib/utils";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>{buildTitle("Home")}</title>
      </Head>
      <h1 className="text-5xl">Home</h1>
    </PageLayout>
  );
};

export default Home;
