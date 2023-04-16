import Head from "next/head";
import { type PropsWithChildren } from "react";
import Footer from "src/components/Footer";

interface Props {
  title?: string,
}

export default function Layout(props: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="世の中の個人開発を紹介するメディアです。独自に見つけた良さげな個人開発を独断と偏見で勝手に掲載しています。" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content="世の中の個人開発を紹介するメディアです。独自に見つけた良さげな個人開発を独断と偏見で勝手に掲載しています。" />
        <meta property="og:image" content="https://personal-project-eta.vercel.app/ogp.png" />
        <meta property="og:image:alt" content="世の中の個人開発を紹介するメディアです。独自に見つけた良さげな個人開発を独断と偏見で勝手に掲載しています。" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://personal-project-eta.vercel.app" />
        <link rel="canonical" href="https://personal-project-eta.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/my.webmanifest" /> */}
        <meta name="theme-color" content="#2e026d" />
      </Head>

      <main>{props.children}</main>
      <Footer />
    </>
  )
}
