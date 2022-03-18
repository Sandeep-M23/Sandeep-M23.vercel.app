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
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ImageCard from "../components/UI/Card/ImageCard";

const Contact = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Container maxW={"6xl"} centerContent overflow="hidden">
      <Box borderRadius="lg" m={{ base: 2 }} p={{ base: 2 }} width={"90%"}>
        <Stack align={"center"}>
          <Heading
            fontSize={{ base: "1.7rem", lg: "2.5rem" }}
            position={"relative"}
            textAlign="center"
            maxW={"600px"}
            _before={{
              position: "absolute",
              top: "50%",
              display: "block",
              left: { base: "-70px", lg: "-90px" },
              width: { base: "60px", lg: "80px" },
              height: "4px",
              content: '" "',
              backgroundColor: "red.600",
            }}
            _after={{
              position: "absolute",
              top: "50%",
              right: { base: "-70px", lg: "-90px" },
              width: { base: "60px", lg: "80px" },
              height: "4px",
              content: '""',
              backgroundColor: "red.600",
            }}
          >
            Get In Touch!
          </Heading>
          <Text
            fontSize={{ base: "1rem", lg: "1.2rem" }}
            textAlign={{ base: "center" }}
          >
            Got a question or proposal, or just want to say hello? Go ahead.
          </Text>
        </Stack>
        <Box margin={{ base: 2, lg: 6 }} mt={8} mb={0} display={"flex"}>
          {isMobile ? <div display="none"></div> : <ImageCard />}
          <VStack
            spacing={3}
            width={"100%"}
            p={6}
            bg="white"
            color="black"
            roundedTopRight={8}
            roundedBottomRight={8}
            roundedLeft={{ base: 8, lg: 0 }}
          >
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Your Name"
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Your-Email@example.com"
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                size="md"
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="Subject"
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="Your Message"
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
            <FormControl id="button" float="right">
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
      </Box>
    </Container>
  );
};

export default Contact;
