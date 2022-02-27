import {
  VStack,
  Box,
  Icon,
  Container,
  Text,
  Link,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import React from "react";

const Home = () => {
  const LinkBgDarkModeColor = "#272727";
  const LinkBgLightModeColor = "#f4f1ee";

  return (
    <Container maxW={"6xl"} mt={24}>
      <VStack spacing={4} align={"flex-start"}>
        <Box p={2}>
          <Heading size={"3xl"}>I&apos;m Sandeep M</Heading>
        </Box>
        <Box p={2}>
          <Text>
            A Web Developer! Currently pursuing 3rd year of Bachelor of
            Engineering in Computer Science from JSS Academy of Technical
            Education Bengaluru. I&apos;m a passionate learner who&apos;s always
            willing to learn and work across new technologies.
          </Text>
        </Box>
        <Box p={2}>
          View my{" "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            px={3}
            py={2}
            rounded={6}
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
          >
            Projects
          </Link>
          ,{"  "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            px={3}
            py={2}
            rounded={6}
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
          >
            Resume
          </Link>
          ,{"  "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            px={3}
            py={2}
            rounded={6}
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
          >
            Contact Me
          </Link>
          {"  "}
          or send me an email at{"  "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            px={3}
            py={2}
            rounded={6}
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
          >
            sandeep.m24.rathnam@gmail.com
          </Link>
        </Box>
        <Box p={2}>
          <Link _hover={{ textDecoration: "none", color: "red" }}>
            <Flex alignItems={"center"}>
              <Text>See More About Me</Text>
              <Icon as={BsFillArrowRightSquareFill} w={8} h={4} m={2} />
            </Flex>
          </Link>
        </Box>
        <Box p={2} display={"flex"} flexDir={"row"} alignItems={"center"}>
          <Link _hover={{ color: "red" }}>
            <Icon as={BsGithub} w={10} h={6} mr={2} />
          </Link>
          <Link _hover={{ color: "red" }}>
            <Icon as={BsLinkedin} w={10} h={6} />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
