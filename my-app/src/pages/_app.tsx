import Head from "next/head";
import { GlobalStyles, css } from "twin.macro";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import {
  RecoilRoot,
} from 'recoil';
import ToastList from '~/components/ToastList'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <RecoilRoot>
      <GlobalStyles />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
      <ToastList />
    </RecoilRoot>
  </>
);

// globalStyleの適用
const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default App;
