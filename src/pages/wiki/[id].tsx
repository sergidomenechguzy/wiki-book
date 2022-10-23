import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Markdown from "../../components/Markdown";
import PageLayout from "../../components/PageLayout";
import TagList from "../../components/TagList";
import { buildTitle } from "../../lib/utils";
import { getAllWikiPageIds, getWikiPage } from "../../lib/wikiPages";

interface IWikiPageProps {
  wikiPageData: WikiPageFrontMatter & Content;
}

const WikiPage: NextPage<IWikiPageProps> = ({ wikiPageData }) => {
  return (
    <PageLayout>
      <Head>
        <title>{buildTitle(wikiPageData.title)}</title>
      </Head>
      <div className="flex flex-row justify-between flex-wrap">
        <div>
          <h1 className="text-4xl mb-4">{wikiPageData.title}</h1>
          <TagList data={wikiPageData.tags} />
        </div>
        {wikiPageData.icon ? (
          <Image
            src={wikiPageData.icon}
            alt={wikiPageData.icon}
            width="80"
            height="80"
          />
        ) : null}
      </div>
      <div className="divider -mx-2" />
      <article className="prose lg:prose-lg max-w-6xl">
        <Markdown content={wikiPageData.content} />
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
