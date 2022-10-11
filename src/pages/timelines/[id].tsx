import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import Timeline from "../../components/Timeline";
import {
  getAllTimelinePageIds,
  getTimelinePage,
} from "../../lib/timelinePages";

interface ITimelinePageProps {
  timelinePageData: TimelinePage;
}

const TimelinePage: NextPage<ITimelinePageProps> = ({ timelinePageData }) => {
  return (
    <PageLayout>
      <Head>
        <title>Wiki - {timelinePageData.title}</title>
      </Head>
      <h1 className="text-4xl mb-4">{timelinePageData.title}</h1>
      <div className="divider -mx-2" />
      <Timeline entries={timelinePageData.entries} />
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllTimelinePageIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    };
  }
  const timelinePageData = getTimelinePage(
    Array.isArray(params.id) ? params.id[0] : params.id
  );
  return {
    props: {
      timelinePageData,
    },
  };
};

export default TimelinePage;
