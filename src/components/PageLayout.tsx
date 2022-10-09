import Head from "next/head";
import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wiki for a personal book project" />
      </Head>
      <main className="px-2 sm:px-4 lg:p-8">{children}</main>
      <div className="flex-grow" />
      {/* <div className="divider mb-0" /> */}
      <footer className="footer footer-center p-4 text-base-content bg-base-200">
        <div>
          <p>Wiki</p>
        </div>
      </footer>
    </>
  );
};

export default PageLayout;
