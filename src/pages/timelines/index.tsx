import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DensityToggle from "../../components/DensitySwap";
import PageLayout from "../../components/PageLayout";
import PageList from "../../components/PageList";
import Search from "../../components/Search";
import { getAllTimelinePageData } from "../../lib/timelinePages";
import { buildTitle } from "../../lib/utils";

interface IPageOverviewPageProps {
  timelinePageLists: LetterLists<TimelinePage>;
}

const TimelinesPage: NextPage<IPageOverviewPageProps> = ({
  timelinePageLists,
}) => {
  const [denseUi, setDenseUi] = useState(false);

  return (
    <PageLayout>
      <Head>
        <title>{buildTitle("All Timelines")}</title>
      </Head>
      {/* <h1 className="text-5xl">All Timelines</h1> */}

      <Search />
      <DensityToggle value={denseUi} onChange={setDenseUi} />
      <PageList pageLists={timelinePageLists} denseUi={denseUi} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const timelinePageLists = getAllTimelinePageData();
  return {
    props: {
      timelinePageLists,
    },
  };
};

export default TimelinesPage;
