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
  Stack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import React from "react";
import Stepper from "../components/UI/Stepper/Stepper";
import { motion } from "framer-motion";
import {
  container,
  divider,
  InViewDivider,
  text,
  listItem,
} from "../util/Variants";

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

const skill = [
  "MERN Stack",
  "Redux",
  "NextJS",
  "TypeScript",
  "C",
  "Java",
  "GIT",
  "Firebase",
];

const About = () => {
  const MotionContainer = motion(Container);
  const MotionDivider = motion(Divider);
  const MotionListItem = motion(ListItem);
  const MotionText = motion(Text);

  return (
    <MotionContainer
      maxW={"6xl"}
      mt={8}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Stack
        spacing={{ base: 14, lg: 28 }}
        alignItems={"flex-start"}
        direction={{ base: "column", lg: "row" }}
      >
        <VStack
          spacing={12}
          align={"flex-start"}
          width={{ base: "100%", lg: "53%" }}
        >
          <Box>
            <Box mb={4}>
              <Heading mb={2}>ABOUT ME</Heading>
              <MotionDivider height={"3px"} bg={"red"} variants={divider} />
            </Box>
            <MotionText variants={text}>
              I started my journey by learning basics of Web Development and
              making small web Applications using HTML,CSS & Javascript. Later
              learnt MERN Stack and began building full stack web applications
              and have worked on few projects. I'm currently working on
              improving my data structure and Algorithm skills. I'm a passionate
              learner who's always willing to learn and work across new
              technologies.
            </MotionText>
          </Box>
          <Box width={"100%"}>
            <Box mb={4}>
              <Heading mb={2}>TECHINCAL SKILLS</Heading>
              <MotionDivider height={"3px"} bg={"red"} variants={divider} />
            </Box>
            <HStack spacing={32}>
              <List spacing={8}>
                {skill.slice(0, 4).map((i, key) => {
                  return (
                    <MotionListItem
                      key={key}
                      variants={listItem}
                      animate="visible"
                      initial="hidden"
                      custom={key}
                    >
                      <ListIcon as={MdCheckCircle} color="red.500" />
                      {i}
                    </MotionListItem>
                  );
                })}
              </List>
              <List spacing={8}>
                {skill.slice(4, 8).map((item, key) => {
                  return (
                    <MotionListItem
                      key={key}
                      variants={listItem}
                      animate="visible"
                      initial="hidden"
                      custom={key}
                    >
                      <ListIcon as={MdCheckCircle} color="red.500" />
                      {item}
                    </MotionListItem>
                  );
                })}
              </List>
            </HStack>
          </Box>
        </VStack>
        <Box>
          <Box mb={4}>
            <Heading mb={2}>EDUCATION</Heading>
            <MotionDivider
              height={"3px"}
              bg={"red"}
              variants={InViewDivider}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
            />
          </Box>
          {data.map((data, index) => (
            <Stepper key={index} data={data} />
          ))}
          <Icon width={5} height={5} mx={2} as={BsCircleFill} color={"red"} />
        </Box>
      </Stack>
    </MotionContainer>
  );
};

export default About;
