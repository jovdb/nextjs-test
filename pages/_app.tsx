import '../styles/variables.css'
import '../styles/app.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp
