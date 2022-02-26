import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Link href="/" _focus={{ outline: "none" }}>
        <Image
          src="/assests/images/logo.png"
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
