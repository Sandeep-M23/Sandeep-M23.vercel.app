import { background, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig } from 'chakra-ui-steps';
import NavigationBar from "../components/NavigationBar/NavigationBar";

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: props => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      stepIconContainer:{
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
        borderColor:'red',
      },
    };
  },
};


const theme = extendTheme({
  components: {
    Steps:CustomSteps
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar /> {/*CHANGED LOCATION FOR GLOBAL REFERENCE*/}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
