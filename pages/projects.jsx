import React from "react";
import {
  Container,
  HStack,
  Heading,
  Flex,
  Box,
  Divider,
} from "@chakra-ui/react";
import ProjectCard from "../components/UI/Card/ProjectCard";
import FeaturedCard from "../components/UI/Card/FeaturedCard";

const Projects = () => {
  return (
    <Container maxW={"6xl"} mt={8}>
      <Flex>
        <FeaturedCard/>
      </Flex>
      <Flex flexDir={"column"} align={"center"}>
        <Box mb={4} width={'100%'}>
          <Heading mb={2} fontSize={32} textAlign={'center'}>OTHER NOTEWORTHY PROJECTS</Heading>
          <Divider height={"3px"} bg={"red"}/>
        </Box>
        <HStack spacing={4}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Projects;
