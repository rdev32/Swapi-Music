import '../styles/globals.css';

import { Global } from '@emotion/react';
import { useState } from 'react';

import AppHead from '../components/Head/Head';
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext';
import { Materialize } from '../styles/Normalize';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState('Home');
  return (
    <useActiveOptContext.Provider value={{ active, setActive }}>
      <AppHead title="Swagger Music" />
      <Global styles={() => Materialize()} />
      <Component {...pageProps} />
    </useActiveOptContext.Provider>
  );
}

export default MyApp;
