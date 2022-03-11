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
0%, 20%, 33%, 60%, 64%, 66%, 69%, 73%, 75%, 90%, 93%, 100% {
  transform: skew(0deg);
}
21%, 81% {
  transform: skew(30deg);
}
61% {
  transform: skew(-35deg);
}
65% {
  transform: skew(15deg);
}
70% {
  transform: skew(65deg);
}
74% {
  transform: skew(-15deg);
}
`;

const glitchTop = keyframes`
0% {
  clip: rect(77px, 9999px, 6px, 0);
}
5% {
  clip: rect(65px, 9999px, 70px, 0);
}
10% {
  clip: rect(82px, 9999px, 82px, 0);
}
15% {
  clip: rect(32px, 9999px, 35px, 0);
}
20% {
  clip: rect(31px, 9999px, 49px, 0);
}
25% {
  clip: rect(18px, 9999px, 46px, 0);
}
30% {
  clip: rect(94px, 9999px, 64px, 0);
}
35% {
  clip: rect(69px, 9999px, 31px, 0);
}
40% {
  clip: rect(6px, 9999px, 72px, 0);
}
45% {
  clip: rect(25px, 9999px, 35px, 0);
}
50% {
  clip: rect(82px, 9999px, 26px, 0);
}
55% {
  clip: rect(7px, 9999px, 92px, 0);
}
60% {
  clip: rect(54px, 9999px, 30px, 0);
}
65% {
  clip: rect(86px, 9999px, 90px, 0);
}
70% {
  clip: rect(38px, 9999px, 65px, 0);
}
75% {
  clip: rect(41px, 9999px, 66px, 0);
}
80% {
  clip: rect(31px, 9999px, 37px, 0);
}
85% {
  clip: rect(8px, 9999px, 12px, 0);
}
90% {
  clip: rect(50px, 9999px, 69px, 0);
}
95% {
  clip: rect(7px, 9999px, 42px, 0);
}
100% {
  clip: rect(14px, 9999px, 57px, 0);
}`;

const glitchBottom = keyframes`
0% {
  clip: rect(77px, 9999px, 6px, 0);
}
5% {
  clip: rect(65px, 9999px, 70px, 0);
}
10% {
  clip: rect(82px, 9999px, 82px, 0);
}
15% {
  clip: rect(32px, 9999px, 35px, 0);
}
20% {
  clip: rect(31px, 9999px, 49px, 0);
}
25% {
  clip: rect(18px, 9999px, 46px, 0);
}
30% {
  clip: rect(94px, 9999px, 64px, 0);
}
35% {
  clip: rect(69px, 9999px, 31px, 0);
}
40% {
  clip: rect(6px, 9999px, 72px, 0);
}
45% {
  clip: rect(25px, 9999px, 35px, 0);
}
50% {
  clip: rect(82px, 9999px, 26px, 0);
}
55% {
  clip: rect(7px, 9999px, 92px, 0);
}
60% {
  clip: rect(54px, 9999px, 30px, 0);
}
65% {
  clip: rect(86px, 9999px, 90px, 0);
}
70% {
  clip: rect(38px, 9999px, 65px, 0);
}
75% {
  clip: rect(41px, 9999px, 66px, 0);
}
80% {
  clip: rect(31px, 9999px, 37px, 0);
}
85% {
  clip: rect(8px, 9999px, 12px, 0);
}
90% {
  clip: rect(50px, 9999px, 69px, 0);
}
95% {
  clip: rect(7px, 9999px, 42px, 0);
}
100% {
  clip: rect(14px, 9999px, 57px, 0);
}
}
@keyframes noise-anim-2 {
0% {
  clip: rect(18px, 9999px, 13px, 0);
}
5% {
  clip: rect(74px, 9999px, 51px, 0);
}
10% {
  clip: rect(33px, 9999px, 65px, 0);
}
15% {
  clip: rect(64px, 9999px, 66px, 0);
}
20% {
  clip: rect(75px, 9999px, 6px, 0);
}
25% {
  clip: rect(40px, 9999px, 49px, 0);
}
30% {
  clip: rect(71px, 9999px, 1px, 0);
}
35% {
  clip: rect(42px, 9999px, 73px, 0);
}
40% {
  clip: rect(92px, 9999px, 57px, 0);
}
45% {
  clip: rect(4px, 9999px, 33px, 0);
}
50% {
  clip: rect(4px, 9999px, 34px, 0);
}
55% {
  clip: rect(49px, 9999px, 25px, 0);
}
60% {
  clip: rect(24px, 9999px, 44px, 0);
}
65% {
  clip: rect(31px, 9999px, 99px, 0);
}
70% {
  clip: rect(54px, 9999px, 83px, 0);
}
75% {
  clip: rect(57px, 9999px, 97px, 0);
}
80% {
  clip: rect(3px, 9999px, 15px, 0);
}
85% {
  clip: rect(84px, 9999px, 34px, 0);
}
90% {
  clip: rect(100px, 9999px, 88px, 0);
}
95% {
  clip: rect(91px, 9999px, 59px, 0);
}
100% {
  clip: rect(10px, 9999px, 87px, 0);
}`;

const Home = () => {
  const LinkBgDarkModeColor = "#272727";
  const LinkBgLightModeColor = "#f4f1ee";
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${glitch} 5s linear infinite`;

  const animationTop = prefersReducedMotion
    ? undefined
    : `${glitchTop} 3s linear alternate-reverse infinite`;

  const animationBottom = prefersReducedMotion
    ? undefined
    : `${glitchBottom} 5s linear alternate-reverse infinite`;

  return (
    <Container maxW={"6xl"} mt={24}>
      <VStack spacing={4} align={"flex-start"}>
        <Box p={2}>
          <Heading
            size={"3xl"}
            animation={animation}
            position="relative"
            zIndex="1"
            left="0"
            right="0"
            bottom="0"
            _before={{
              position: "absolute",
              content: `"I'm Sandeep M"`,
              animation: animationTop,
              top: 0,
              left: 0,
              clip: "rect(0, 900px, 0, 0)",
              filter: "drop-shadow(2px 2px 2px rgba(35,184,197,1))",
              opacity: 0.8,
            }}
            _after={{
              position: "absolute",
              content: `"I'm Sandeep M"`,
              animation: animationBottom,
              top: 0,
              left: 0,
              clip: "rect(0, 900px, 0, 0)",
              filter: "drop-shadow(2px 2px 2px rgba(274,27,27,1))",
              opacity: 0.8,
            }}
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
