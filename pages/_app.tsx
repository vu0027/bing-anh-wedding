import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Bing and Anh&apos;s Wedding</title>
        <meta name="description" content="Sunday, May 5th, 2024" />
        {/* open graph */}
        <meta property="og:title" content="Bing and Anh's Wedding" />
        <meta property="og:description" content="Sunday, May 5th, 2024" />
        <link rel="icon" href="/favicon.ico" />
        <script
          className="daum_roughmap_loader_script"
          src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        ></script>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
