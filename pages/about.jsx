import {
  VStack,
  Box,
  List,
  Container,
  Text,
  ListItem,
  ListIcon,
  HStack,
  Flex,
  Button,
  Contents,
  Heading,
  Divider,
} from "@chakra-ui/react";
import {
MdCheckCircle
} from "react-icons/md";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import React from 'react';



const About = () => {
  return (
    <Container maxW={"6xl"} mt={8}>
      <HStack spacing={20}>
        <VStack spacing={12} align={"flex-start"} width={"58%"}>
          <Box>
            <Box mb={4}>
              <Heading mb={2}>ABOUT ME</Heading>
              <Divider height={"3px"} bg={"red"} />
            </Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis suscipit sagittis. Sed porta a felis ut fringilla.
              Maecenas luctus dolor ligula, vel pellentesque libero auctor et.
              Duis mollis accumsan neque eget lacinia. Proin ultrices molestie
              sagittis. Vivamus laoreet ipsum lectus, ac lobortis tortor varius
              non. Nunc consectetur purus in mi euismod, quis malesuada velit
              egestas.
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
        <VStack spacing={5} align={"flex-start"}>
          <Box>
            <Steps orientation="vertical" colorScheme={"red"} size={"sm"} activeStep={-1}>
              <Step icon={"none"} label={"Bachelor of Engineering"} >
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Text>2019-2023</Text>
                  <Text>Computer Science and Engineering</Text>
                  <Text>JSS Academy of Technical Education - Bengaluru</Text>
                  <Text>CGPA - 8.4</Text>
                </Box>
              </Step>
              <Step icon={"none"} label={"Pre-University"}>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Text>2017-2019</Text>
                  <Text>Science(PCMB)</Text>
                  <Text>The National PU College</Text>
                  <Text>Percentage - 78%</Text>
                </Box>
              </Step>
              <Step icon={"none"}>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Text>2006-2017</Text>
                  <Text>ICSE</Text>
                  <Text>Sree Rama Vidyalaya</Text>
                  <Text>Percentage - 83.25%</Text>
                </Box>
              </Step>
            </Steps>
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
}

export default About;