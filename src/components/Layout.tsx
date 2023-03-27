import { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

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
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta property="og:image:alt" content="画像の説明文" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://mywebsite.com/page" />
        <link rel="canonical" href="https://mywebsite.com/page" />
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
