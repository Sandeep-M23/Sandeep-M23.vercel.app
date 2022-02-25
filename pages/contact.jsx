import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Container,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ImageCard from "../components/UI/ImageCard";

const Contact = () => {
  return (
    <Container maxW={"6xl"} centerContent overflow="hidden">
      <Box borderRadius="lg" m={{ base: 5 }} p={{ base: 5 }} width={"100%"}>
        <Box width={"100%"}>
          <Stack
            spacing={{ base: 4, md: 8, lg: 28 }}
            direction={{ base: "column", md: "row" }}
            align={"center"}
          >
            <ImageCard />
            <Box
              borderRadius="lg"
              p={8}
              bg="white"
              color="#0B0E3F"
              width={"70%"}
            >
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    size="md"
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="subject"
                  />
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="red.500"
                    color="white"
                    _hover={{
                      bg: "red.700",
                    }}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
