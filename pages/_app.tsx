import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import '../styles/normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
