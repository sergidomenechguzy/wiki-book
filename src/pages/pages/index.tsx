import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DensityToggle from "../../components/DensitySwap";
import PageLayout from "../../components/PageLayout";
import PageList from "../../components/PageList";
import Search from "../../components/Search";
import { getAllWikiPageData } from "../../lib/wikiPages";

interface PageOverviewPageProps {
  wikiPageLists: WikiPageLists;
}
const PageOverviewPage: NextPage<PageOverviewPageProps> = ({
  wikiPageLists,
}) => {
  const [denseUi, setDenseUi] = useState(false);

  return (
    <PageLayout>
      <Head>
        <title>Wiki - All Pages</title>
      </Head>
      {/* <h1 className="text-5xl">All Pages</h1> */}
      <Search />
      <DensityToggle value={denseUi} onChange={setDenseUi} />
      <PageList wikiPageLists={wikiPageLists} denseUi={denseUi} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const wikiPageLists = getAllWikiPageData();
  return {
    props: {
      wikiPageLists,
    },
  };
};

export default PageOverviewPage;
