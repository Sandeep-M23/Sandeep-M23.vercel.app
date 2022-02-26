import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Head from "next/head";
import theme from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sandeep M</title>
        <meta name="description" content="PortFolio Website of Sandeep M" />
      </Head>
      <ChakraProvider theme={theme}>
        <NavigationBar /> {/*CHANGED LOCATION FOR GLOBAL REFERENCE*/}
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
