import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Head from "next/head";
import theme from "../styles/theme";
import { AnimatePresence, motion } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Sandeep M</title>
        <meta name="description" content="PortFolio Website of Sandeep M" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <NavigationBar /> {/*CHANGED LOCATION FOR GLOBAL REFERENCE*/}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
};

export default App;
