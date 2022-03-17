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
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import React from "react";

const glitch = keyframes`
to {
  background-position: 200% center;
}
`;

const Home = () => {
  const LinkBgDarkModeColor = "#272727";
  const LinkBgLightModeColor = "#f4f1ee";
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${glitch} 6s ease-in-out reverse infinite`;

  return (
    <Container maxW={"6xl"} mt={24}>
      <VStack spacing={4} align={"flex-start"}>
        <Box p={2}>
          <Heading
            size={"3xl"}
            animation={animation}
            textTransform=" uppercase"
            backgroundImage="linear-gradient(245deg, #f4f1ee 0%, #FED7D7 29%,#F56565  49%,#C53030 67%,#822727 100%)"
            backgroundSize="200% auto"
            textFillColor="transparent"
            backgroundClip="text"
            display="inline-block"
          >
            I&apos;m Sandeep M
          </Heading>
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
            href="/projects"
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
            _focus={{ outline: "none" }}
          >
            Projects
          </Link>
          ,{"  "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            px={3}
            py={2}
            rounded={6}
            href="/contact"
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
            _focus={{ outline: "none" }}
          >
            Contact Me
          </Link>
          {"  "}
          or send me an email at{"  "}
          <Link
            bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
            href="mailto:sandeep.m24.rathanm@gmail.com"
            target="_blank"
            rel="noreferrer"
            px={3}
            py={2}
            rounded={6}
            _hover={{
              textDecoration: "none",
              bg: "red",
              color: "white",
            }}
            _focus={{ outline: "none" }}
          >
            sandeep.m24.rathnam@gmail.com
          </Link>
        </Box>
        <Box p={2}>
          <Link href="/about" _hover={{ textDecoration: "none", color: "red" }} _focus={{ outline: "none" }}>
            <Flex alignItems={"center"}>
              <Text>See More About Me</Text>
              <Icon as={BsFillArrowRightSquareFill} w={8} h={4} m={2} />
            </Flex>
          </Link>
        </Box>
        <Box p={2} display={"flex"} flexDir={"row"} alignItems={"center"}>
          <Link href="https://github.com/Sandeep-M23" _hover={{ color: "red" }} _focus={{ outline: "none" }}>
            <Icon as={BsGithub} w={10} h={6} mr={2} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sandeep-m23/"
            _hover={{ color: "red" }}
            _focus={{ outline: "none" }}
          >
            <Icon as={BsLinkedin} w={10} h={6} />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
