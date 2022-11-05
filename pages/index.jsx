import {
  VStack,
  Box,
  Icon,
  Container,
  Text,
  Link,
  Flex,
  Image,
  Heading,
  useColorModeValue,
  keyframes,
  usePrefersReducedMotion,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import React from "react";
import { motion } from "framer-motion";
import { container, box } from "../util/Variants";

const glitch = keyframes`
to {
  background-position: 200% center;
}
`;

const Home = () => {
  const LinkBgDarkModeColor = "#272727";
  const LinkBgLightModeColor = "#EEEEEE";
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const MotionContainer = motion(Container);
  const MotionBox = motion(Box);


  const animation = prefersReducedMotion
    ? undefined
    : `${glitch} 6s ease-in-out reverse infinite`;

  return (
    <MotionContainer
      maxW={"7xl"}
      mt={{ base: 12, lg: 24 }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <Flex alignItems={"flex-start"}>
        <VStack spacing={4} align={"flex-start"}>
          <MotionBox p={2} variants={box}>
            <Heading
              fontSize={{ base: "2.3rem", lg: "3.5rem" }}
              animation={animation}
              textTransform=" uppercase"
              backgroundImage="linear-gradient(245deg, #f4f1ee 0%, #FED7D7 29%,#F56565  49%,#C53030 67%,#822727 100%)"
              backgroundSize="200% auto"
              textfillcolor="transparent"
              backgroundClip="text"
              display="inline-block"
            >
              I&apos;m Sandeep M
            </Heading>
          </MotionBox>
          <MotionBox p={2} variants={box}>
            <Text>
              A Web Developer! Currently pursuing 4th year of Bachelor of
              Engineering in Computer Science from JSS Academy of Technical
              Education Bengaluru. I&apos;m a passionate learner who&apos;s
              always willing to learn and work across new technologies.
            </Text>
          </MotionBox>
          <MotionBox p={2} lineHeight={{ base: 10 }} variants={box}>
            View my{" "}
            <Link
              bg={useColorModeValue(LinkBgLightModeColor, LinkBgDarkModeColor)}
              px={3}
              boxShadow="2xl"
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
              boxShadow="2xl"
              py={2}
              rounded={6}
              href="/work"
              _hover={{
                textDecoration: "none",
                bg: "red",
                color: "white",
              }}
              _focus={{ outline: "none" }}
            >
              Work
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
            or send me an email at{"   "}
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
              isExternal
            >
              sandeep.m24.rathnam@gmail.com
            </Link>
          </MotionBox>
          <MotionBox p={2} variants={box}>
            <Link
              href="/about"
              _hover={{ textDecoration: "none", color: "red" }}
              _focus={{ outline: "none" }}
            >
              <Flex alignItems={"center"}>
                <Text>See More About Me</Text>
                <Icon as={BsFillArrowRightSquareFill} w={8} h={4} m={2} />
              </Flex>
            </Link>
          </MotionBox>
          <MotionBox
            p={2}
            display={"flex"}
            flexDir={"row"}
            alignItems={"center"}
            variants={box}
          >
            <Link
              href="https://github.com/Sandeep-M23"
              _hover={{ color: "red" }}
              _focus={{ outline: "none" }}
              isExternal
            >
              <Icon as={BsGithub} w={10} h={6} mr={2} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sandeep-m23/"
              isExternal
              _hover={{ color: "red" }}
              _focus={{ outline: "none" }}
            >
              <Icon as={BsLinkedin} w={10} h={6} />
            </Link>
          </MotionBox>
        </VStack>
        {isMobile ? null : (
          <MotionBox
            ml={4}
            width={"530px"}
            variants={box}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/assests/images/Profile/Image.jpeg"
              alt="Sandeep M"
              width={"100%"}
              height={"95%"}
              rounded={8}
            />
          </MotionBox>
        )}
      </Flex>
    </MotionContainer>
  );
};

export default Home;