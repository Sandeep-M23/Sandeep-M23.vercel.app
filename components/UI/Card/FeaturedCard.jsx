import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react';
import {FiExternalLink} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';

const FeaturedCard = () => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: "100%" }}
        height={{ sm: "476px", md: "30rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          p={1}
          pt={2}
        >
          <Text>Featured Project</Text>
          <Heading>Project Name</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
          <HStack>
            <Text>HTML5</Text>
            <Text>CSS3</Text>
          </HStack>
          <HStack spacing={4}>
            <Link href="#">
              <Icon as={BsGithub} w={6} h={6} />
            </Link>
            <Link href="#">
              <Icon as={FiExternalLink} w={6} h={6} />
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default FeaturedCard;