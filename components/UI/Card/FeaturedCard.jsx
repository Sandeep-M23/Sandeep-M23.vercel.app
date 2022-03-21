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

const FeaturedCard = ({data}) => {
  return (
    <Center py={6}>
      <Stack
        borderRadius="lg"
        w={{ base: "100%" }}
        height={{ sm: "476px", md: "30rem", lg: "27rem" }}
        direction={{ base: "column", md: data.cardDir }}
        padding={4}
      >
        <Flex
          flex={1}
          bg="#2727277d"
          w={{ base: "100%", lg: "50%" }}
          h={"100%"}
          position={"relative"}
          right={{ base: 0, md: data.imagePos }}
          overflow={"hidden"}
        >
          <Image
            boxSize={"100%"}
            opacity={"0.4"}
            rounded={8}
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
          <Text bg={"red"} p={4} rounded={8} mt={{ base: 2, md: 6 }}>
            {data.description}
          </Text>
          <HStack spacing={6} my={3} color={"#c1c1c1"} fontWeight={500}>
            {data.languages.map((i) => {
              return <Text>{i}</Text>;
            })}
          </HStack>
          <HStack spacing={6} my={2}>
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
      </Stack>
    </Center>
  );
};

export default FeaturedCard;
