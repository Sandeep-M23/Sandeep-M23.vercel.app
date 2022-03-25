import React from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  HStack,
  Icon,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { center } from "../../../util/Variants";

const FeaturedCard = ({ data }) => {
  const MotionCenter = motion(Center);

  return (
    <MotionCenter
      py={6}
      variants={center(data.direction)}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <Stack
        borderRadius="lg"
        w={{ base: "100%" }}
        height={{ sm: "476px", md: "30rem", lg: "28rem" }}
        direction={{ base: "column", md: data.cardDir }}
        padding={4}
      >
        <Flex
          flex={1}
          bg="#272727f2"
          w={{ base: "100%", lg: "50%" }}
          h={"100%"}
          position={"relative"}
          rounded={8}
          right={{ base: 0, md: data.imagePos }}
          overflow={"hidden"}
        >
          <Image
            w={"100%"}
            h={"100%"}
            opacity={"0.4"}
            _hover={{
              opacity: 1,
            }}
            src={data.image}
          />
        </Flex>
        <Flex
          flex={0.9}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems={{ base: "flex-start", md: data.cardAlign }}
          p={1}
          position={"relative"}
          right={{ base: 0, md: data.cardPos }}
          pt={2}
        >
          <Text color="red.600">Featured Project</Text>
          <Heading>{data.title}</Heading>
          <Text
            bg={"red"}
            p={4}
            rounded={8}
            mt={{ base: 2, md: 6 }}
            color={"white"}
          >
            {data.description}
          </Text>
          <HStack
            spacing={6}
            my={3}
            color={useColorModeValue("#000d9", "#c1c1c1")}
            fontWeight={500}
          >
            {data.languages.map((i) => {
              return <Text>{i}</Text>;
            })}
          </HStack>
          <HStack spacing={6} my={2}>
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
          </HStack>
        </Flex>
      </Stack>
    </MotionCenter>
  );
};

export default FeaturedCard;
