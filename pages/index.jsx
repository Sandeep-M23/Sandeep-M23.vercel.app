import { VStack, Box, Icon, Container,Text,Image,Flex } from "@chakra-ui/react";
import { BsLinkedin, BsGithub,BsFillArrowRightSquareFill } from "react-icons/bs";
import React from "react";

const Home = () => {
  return (
    <Container maxW={"4xl"} centerContent mt={24}>
      <Flex>
      <VStack spacing={8} align={'flex-start'}>
        <Box h={"40px"}>I&apos;m Sandeep M</Box>
        <Box h={"40px"}>
          A Web Developer! Currently pursuing 3rd year of Bachelor of
          Engineering in Computer Science from JSS Academy of Technical
          Education Bengaluru. I&apos;m a passionate learner who&apos;s always
          willing to learn and work across new technologies
        </Box>
        <Box h={"40px"}>
          View my Projects, Resume, Contact Me, or send me an email at
          sandeep.m24.rathnam@gmail.com.
        </Box>
        <Box h={"40px"} alignItems={"center"} display={"flex"}>
          <Text>See More About Me</Text>
          <Icon as={BsFillArrowRightSquareFill} w={8} h={4} m={2} />
        </Box>
        <Box h={"40px"} display={"flex"} flexDir={"row"} alignItems={"center"}>
          <Icon as={BsGithub} w={6} h={4} m={2} />
          <Icon as={BsLinkedin} w={6} h={4} m={2} />
        </Box>
      </VStack>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      </Flex>
    </Container>
  );
};

export default Home;