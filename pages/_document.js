import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#125767" />
        <meta name="description" content="JK Power System - Government Approved Electrical Contractor specializing in industrial and commercial electrical solutions, material supply, and panel manufacturing." />
        <meta name="keywords" content="jkpowersystem, jkpower, material supplier, electrical contractor, industrial electrical, commercial electrical, panel manufacturing, electrical solutions, vadodara electrical, gujarat electrical contractor" />
        <meta name="author" content="JK Power System" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://jkpowersystem.com" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jkpowersystem.com/" />
        <meta property="og:title" content="JK Power System - Government Approved Electrical Contractor" />
        <meta property="og:description" content="Leading provider of industrial and commercial electrical solutions, specializing in material supply and panel manufacturing." />
        <meta property="og:image" content="/JK-TabLogo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jkpowersystem.com/" />
        <meta property="twitter:title" content="JK Power System - Government Approved Electrical Contractor" />
        <meta property="twitter:description" content="Leading provider of industrial and commercial electrical solutions, specializing in material supply and panel manufacturing." />
        <meta property="twitter:image" content="/JK-TabLogo.png" />

        <link rel="icon" href="/JK-TabLogo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
