import React from "react";
import { Box, Image, Link, useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Link href="/" _focus={{ outline: "none" }}>
        <Image
          src={"/assests/images/Logo/LightLogo.png"}
          alt="Logo"
          maxW={"60px"}
          h={"auto"}
          _focus={{ outline: "none" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
