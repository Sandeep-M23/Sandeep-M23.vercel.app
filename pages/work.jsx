import React from "react";
import {
  Container,
  Flex,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, divider} from "../util/Variants";
import WorkCard from "../components/UI/Card/WorkCard";

const workDetails = [
    {
        id:1,
        jobTitle:'Front-End Developer Intern',
        company:'Project42 Labs',
        link:'https://project42labs.com/',
        image:'../assests/images/Work/Project42-Labs.png',
        duration:'May 2022 - Aug 2022',
        responsibilities:[
          "Worked as an Frontend Developer performing tasks such as seamlessly Integrating frontend with Server Rest API.",
          "Collaborated with back-end developers and designers to strike a balance between functional and aesthetic design.",
          "Made Use of React Context API to create central store for State Management and dependency injection.",
          "Also worked with latest technologies in react ecosystem such as NextJS and Strapi."
        ]
    }
]

const Work = () => {
    const MotionContainer = motion(Container);
    const MotionDivider = motion(Divider);
  
    return (
      <MotionContainer
        maxW={"6xl"}
        mt={8}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box mb={4} width={"100%"} rounded={8} p={3}>
          <Heading mb={2} fontSize={32} textAlign={"flex-start"}>
            WORK EXPERIENCE
          </Heading>
          <MotionDivider height={"3px"} bg={"red"} variants={divider} />
          <Flex flexDir={"column"} alignItems={"center"}>
            {workDetails.map((data) => {
              return <WorkCard key={data.id} data={data} />;
            })}
          </Flex>
        </Box>
      </MotionContainer>
    );
  };
  
  export default Work;