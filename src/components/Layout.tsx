import Head from "next/head";
import { type PropsWithChildren } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

interface Props {
  title?: string,
  description?: string,
}

export default function Layout(props: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:image:alt" content={props.description} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="/" />
        <link rel="canonical" href="/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/my.webmanifest" /> */}
        <meta name="theme-color" content="#2e026d" />
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
