import React from "react";
import {
  IconButton,
  Link,
  Stack,
  Tooltip,
  Center,
  useClipboard,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ImageCard = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  return (
    <Center
      py={6}
      boxSize="510px"
      rounded={8}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      display="flex"
      position="relative"
      backgroundImage="url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      role={"group"}
    >
      <Stack position="relative" height={"100%"}>
        <Stack
          position=" absolute"
          top="0px"
          right="140px"
          display=" flex"
          height={"100%"}
          align="center"
          justify="space-around"
          direction="column"
          opacity="0"
          transition="ease-in-out 0.8s"
          _groupHover={{
            opacity: 1,
          }}
        >
          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              _hover={{
                color: "red.500",
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>

          <Link href="#">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                color: "red.500",
              }}
              isRound
            />
          </Link>

          <Link href="#">
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="lg"
              icon={<BsTwitter size="28px" />}
              _hover={{
                color: "red.500",
              }}
              isRound
            />
          </Link>

          <Link href="#">
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              icon={<BsLinkedin size="28px" />}
              _hover={{
                color: "red.500",
              }}
              isRound
            />
          </Link>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ImageCard;
