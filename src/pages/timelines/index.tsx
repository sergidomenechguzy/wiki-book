import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import { buildTitle } from "../../lib/utils";

const TimelinesPage: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>{buildTitle("All Timelines")}</title>
      </Head>
      <h1 className="text-5xl">All Timelines</h1>
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = () => {
//   const wikiPageLists = getAllWikiPageData();
//   return {
//     props: {
//       wikiPageLists,
//     },
//   };
// };

export default TimelinesPage;
