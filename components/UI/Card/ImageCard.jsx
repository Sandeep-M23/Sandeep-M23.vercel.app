import React from "react";
import { IconButton, Link, Stack, Center } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ImageCard = () => {
  return (
    <Center
      width={"530px"}
      roundedTopLeft={8}
      roundedBottomLeft={8}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      display="flex"
      backgroundImage="url('/assests/images/Image.jpeg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Stack
        display="flex"
        flexDirection={"row"}
        width={"100%"}
        height={"95%"}
        align="flex-end"
        justify="space-evenly"
      >
        <Link href="#">
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<BsGithub />}
            isRound
          />
        </Link>
        <Link href="#">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="lg"
            icon={<BsLinkedin size="28px" />}
            isRound
          />
        </Link>
      </Stack>
    </Center>
  );
};

export default ImageCard;
