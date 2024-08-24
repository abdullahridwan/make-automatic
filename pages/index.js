import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import config from '../public/config.json';


export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title={config.appName}
        description={config.tagline}
      />
      <Head>
        <title>{config.appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
