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
} from "@chakra-ui/react";
import { FiFolder, FiExternalLink } from "react-icons/fi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({data}) => {
  return (
    <Center py={{base:2,lg:6}}>
      <Box
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("#f4f1ee", "#272727")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Flex flexDir={"row"} justify={"space-between"} align={"center"}>
          <Icon as={FiFolder} w={12} h={12} color={"red.500"} />
          <HStack spacing={4}>
            <Link href={data.github} isExternal>
              <Icon as={BsGithub} w={6} h={6} />
            </Link>
            <Link href={data.link} isExternal>
              <Icon as={FiExternalLink} w={6} h={6} />
            </Link>
          </HStack>
        </Flex>
        <Stack spacing={4} m={4} p={2}>
          <Heading>{data.title}</Heading>
          <Text>
            {data.description}
          </Text>
        </Stack>
        <HStack>
          <Icon as={AiOutlineHtml5} w={8} h={8} />
        </HStack>
      </Box>
    </Center>
  );
};

export default ProjectCard;