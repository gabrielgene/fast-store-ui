import Head from 'next/head';
import { StylesProvider } from '@material-ui/core/styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
      </StylesProvider>
    </>
  );
}

export default MyApp;
