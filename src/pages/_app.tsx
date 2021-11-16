import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Materialize } from '../styles/Normalize';
import { Global } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={() => Materialize()} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
