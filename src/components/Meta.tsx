import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Music App | Find informations for your artist</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Music app is developed by PH"
      />
      <meta
        name="keywords"
        content="code, music, music app, next.js, typescript, tailwind css, open music"
      />
      <meta name="author" content="Paulo Henrique" />
  
      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Weather App' />
      <meta
        property='og:description'
        content='Music app is developed by PH'
      />
      <meta property='og:site_name' content='PH' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='PH' />
      <meta
        name='twitter:description'
        content='Music app is developed by PH'
      />
      <meta name='twitter:image:alt' content='Music APP' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@ph_santosjr' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
