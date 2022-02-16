import { background, ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <NavigationBar /> {/*CHANGED LOCATION FOR GLOBAL REFERENCE*/}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
