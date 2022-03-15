import React from "react";
import {
  Container,
  HStack,
  Heading,
  Flex,
  Box,
  Divider,
  Grid,
} from "@chakra-ui/react";
import ProjectCard from "../components/UI/Card/ProjectCard";
import FeaturedCard from "../components/UI/Card/FeaturedCard";

const Projects = () => {
  return (
    <Container maxW={"6xl"} mt={8}>
      <Flex flexDir={"column"} alignItems={"center"}>
        <FeaturedCard cardDir={"row"} cardPos={"5%"} cardAlign={"flex-end"} />
        <FeaturedCard
          cardDir={"row-reverse"}
          cardPos={0}
          imagePos={"5%"}
          cardAlign={"flex-start"}
        />
        <FeaturedCard cardDir={"row"} cardPos={"5%"} cardAlign={"flex-end"} />
      </Flex>
      <Flex flexDir={"column"} align={"center"}>
        <Box mb={4} width={"100%"}>
          <Heading mb={2} fontSize={32} textAlign={"center"}>
            OTHER NOTEWORTHY PROJECTS
          </Heading>
          <Divider height={"3px"} bg={"red"} />
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Flex>
    </Container>
  );
};

export default Projects;
