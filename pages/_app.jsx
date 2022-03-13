import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Head from "next/head";
import theme from "../styles/theme";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Sandeep M</title>
        <meta name="description" content="PortFolio Website of Sandeep M" />
      </Head>
      <ChakraProvider theme={theme}>
        <NavigationBar /> {/*CHANGED LOCATION FOR GLOBAL REFERENCE*/}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="initial"
            animate="animate"
            transition="0.7"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                left: "-100%",
                scale: 0.6,
              },
              animate: {
                opacity: 1,
                left: 0,
                scale: 1,
              },
              exit: {
                opacity: 0,
                left: "100%",
                scale: 0.6,
              },
            }}
          >
            <Component {...pageProps} key={router.route} />
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
};

export default App;
