import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import theme from '../styles/theme';

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Sandeep M</title>
        <meta name='description' content='PortFolio Website of Sandeep M' />
        <script id='gtm-new' async src='/scripts/gtm.jsx' />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <NavigationBar />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
};

export default App;
