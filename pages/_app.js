import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JK Power System - Government Approved Electrical Contractor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://jkpowersystem.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
