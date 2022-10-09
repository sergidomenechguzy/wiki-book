import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import PageLayout from "../../components/PageLayout";
import TagList from "../../components/TagList";
import { getAllWikiPageIds, getWikiPage } from "../../lib/wikiPages";

interface WikiPageProps {
  wikiPageData: {
    id: string;
    title: string;
    tags: string[];
    content: string;
  };
}

const WikiPage: NextPage<WikiPageProps> = ({ wikiPageData }) => {
  return (
    <PageLayout>
      <Head>
        <title>Wiki - {wikiPageData.title}</title>
      </Head>
      <h1 className="text-4xl mb-4">{wikiPageData.title}</h1>
      <TagList wikiPageData={wikiPageData} />
      <div className="divider -mx-2" />
      <article className="prose lg:prose-lg max-w-6xl">
        <ReactMarkdown>{wikiPageData.content}</ReactMarkdown>
      </article>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllWikiPageIds();
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
  const wikiPageData = getWikiPage(
    Array.isArray(params.id) ? params.id[0] : params.id
  );
  return {
    props: {
      wikiPageData,
    },
  };
};

export default WikiPage;
