import {
  VStack,
  Box,
  List,
  Container,
  Text,
  ListItem,
  ListIcon,
  HStack,
  Heading,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import React from "react";
import Stepper from "../components/UI/Stepper/Stepper";
import {motion} from 'framer-motion';

const data = [
  {
    course: "Computer Science and Engineering",
    year: "2019-2023",
    institution: "JSS Academy of Technical Education - Bengaluru",
    grade: "CGPA - 8.4",
  },
  {
    course: "PCMB",
    year: "2017-2019",
    institution: "The National PU College",
    grade: "Percentage - 78",
  },
  {
    course: "ISCE",
    year: "2006-2017",
    institution: "Sree Rama Vidyalaya",
    grade: "Percentage - 83.25",
  },
];

const About = () => {
  return (
    <Container maxW={"6xl"} mt={8}>
      <HStack spacing={28} alignItems={"flex-start"}>
        <VStack spacing={12} align={"flex-start"} width={"53%"}>
          <Box>
            <Box mb={4}>
              <Heading mb={2}>ABOUT ME</Heading>
              <Divider height={"3px"} bg={"red"} />
            </Box>
            <Text>
              I started my journey by learning basics of Web Development and making small web Applications using HTML,CSS & Javascript.
              Later learnt MERN Stack and began building full stack web applications and have worked on few projects.
              I'm currently working on improving my data structure and Algorithm skills. 
              I'm a passionate learner who's always willing to learn and work across new technologies.
            </Text>
          </Box>
          <Box width={"100%"}>
            <Box mb={4}>
              <Heading mb={2}>TECHINCAL SKILLS</Heading>
              <Divider height={"3px"} bg={"red"} />
            </Box>
            <HStack spacing={32}>
              <List spacing={8}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  MERN Stack
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  Redux
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  NextJS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  TypeScript
                </ListItem>
              </List>
              <List spacing={8}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />C
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  Java
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  GIT
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="red.500" />
                  Firebase
                </ListItem>
              </List>
            </HStack>
          </Box>
        </VStack>
        <Box>
          <Box mb={4}>
            <Heading mb={2}>EDUCATION</Heading>
            <Divider height={"3px"} bg={"red"} />
          </Box>
          {data.map((data, index) => (
            <Stepper key={index} data={data} />
          ))}
          <Icon width={5} height={5} mx={2} as={BsCircleFill} color={"red"} />
        </Box>
      </HStack>
    </Container>
  );
};

export default About;
