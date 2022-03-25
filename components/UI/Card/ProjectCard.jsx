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
import { motion } from "framer-motion";
import { ProjectCardCenter } from "../../../util/Variants";

const ProjectCard = ({ data }) => {
  const MotionCenter = motion(Center);

  return (
    <MotionCenter
      py={{ base: 2, lg: 4 }}
      whileHover={{ translateY: -10 }}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={ProjectCardCenter}
    >
      <Box
        maxW={"500px"}
        w={"405px"}
        h={"330px"}
        bg={useColorModeValue("#EEEEEE", "#272727")}
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
              <Link
                href={data.github}
                isExternal
                _hover={{ color: "red" }}
                _focus={{ outline: "none" }}
              >
                <Icon as={BsGithub} w={6} h={6} />
              </Link>
            </Tooltip>
            {data.link != "" ? (
              <Tooltip label="Link" fontSize="sm">
                <Link
                  href={data.link}
                  isExternal
                  _hover={{ color: "red" }}
                  _focus={{ outline: "none" }}
                >
                  <Icon as={FiExternalLink} w={6} h={6} />
                </Link>
              </Tooltip>
            ) : null}
          </HStack>
        </Flex>
        <Stack spacing={4} m={3} p={2}>
          <Heading fontSize={"1.6rem"} textAlign={"flex-start"}>
            {data.title}
          </Heading>
          <Text>{data.description}</Text>
        </Stack>
        <HStack
          spacing={4}
          color={useColorModeValue("#000d9", "#c1c1c1")}
          fontWeight={500}
        >
          {data.languages.map((i) => {
            return <Text>{i}</Text>;
          })}
        </HStack>
      </Box>
    </MotionCenter>
  );
};

export default ProjectCard;
