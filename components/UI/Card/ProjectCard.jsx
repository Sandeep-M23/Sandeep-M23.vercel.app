import React from "react";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Link,
  Icon,
  useColorModeValue,
  HStack,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { FiFolder, FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ data }) => {
  return (
    <Center py={{ base: 2, lg: 4 }}>
      <Box
        maxW={"500px"}
        w={"405px"}
        h={"320px"}
        bg={useColorModeValue("#f4f1ee", "#272727")}
        boxShadow={"2xl"}
        display={"flex"}
        flexDir={"column"}
        rounded={"lg"}
        justifyContent={"space-around"}
        p={6}
      >
        <Flex flexDir={"row"} justify={"space-between"} align={"center"}>
          <Icon as={FiFolder} w={12} h={12} color={"red.500"} />
          <HStack spacing={4}>
            <Tooltip label="Github" fontSize="sm">
              <Link href={data.github} isExternal>
                <Icon as={BsGithub} w={6} h={6} />
              </Link>
            </Tooltip>
            <Tooltip label="Link" fontSize="sm">
              <Link href={data.link} isExternal>
                <Icon as={FiExternalLink} w={6} h={6} />
              </Link>
            </Tooltip>
          </HStack>
        </Flex>
        <Stack spacing={4} m={3} p={2}>
          <Heading fontSize={"1.6rem"} textAlign={"flex-start"}>
            {data.title}
          </Heading>
          <Text>{data.description}</Text>
        </Stack>
        <HStack spacing={4} color={"#c1c1c1"} fontWeight={500}>
          {data.languages.map((i) => {
            return (
              <Text>{i}</Text>
            );
          })}
        </HStack>
      </Box>
    </Center>
  );
};

export default ProjectCard;
