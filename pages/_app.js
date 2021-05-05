import Head from 'next/head';
import { StylesProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import { CartProvider } from 'react-use-cart';
import { IntlProvider } from 'react-intl';
import client from '~/apollo/client';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Beandare</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Limelight&family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <IntlProvider locale="pt-br" timeZone="America/Sao_Paulo">
        <ApolloProvider client={client}>
          <CartProvider>
            <StylesProvider injectFirst>
              <Component {...pageProps} />
            </StylesProvider>
          </CartProvider>
        </ApolloProvider>
      </IntlProvider>
    </>
  );
}

export default MyApp;
