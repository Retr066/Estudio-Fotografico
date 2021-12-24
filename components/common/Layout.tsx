import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  props: {
    title: string;
    description: string;
  };
}

export default function Layout({ children, ...props }: any) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
