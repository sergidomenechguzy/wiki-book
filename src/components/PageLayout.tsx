import Head from "next/head";
import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wiki for a personal book project" />
      </Head>
      <main className="px-2 sm:px-4 lg:p-8">{children}</main>
    </div>
  );
};

export default PageLayout;
