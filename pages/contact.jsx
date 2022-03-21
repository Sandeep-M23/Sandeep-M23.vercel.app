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
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ImageCard from "../components/UI/Card/ImageCard";
import SimpleModal from "../components/UI/Modal/Modal";

const Contact = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [formMessage, setFormMessage] = useState({
    title: "",
    message: "",
  });
  const [formSubmitted,setFormSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      to_name: "Sandeep M",
      message: messageRef.current.value,
      subject: subjectRef.current.value,
    };

    emailjs
      .send(
        "service_6plk3re",
        "template_1u212jk",
        templateParams,
        "KcwfnCu4p4AJfccFi"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted(true);
            setFormMessage({
              title: "Message has been sent",
              message: "Will be in contact with you soon.",
            });
            e.target.reset();
          } else {
            setFormSubmitted(true);
            setFormMessage({
              title: "Unexpected Error Occured",
              message:
                "Try again later! Please contact by phone or other social platforms",
            });
            e.target.reset();
          }
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setFormSubmitted(true)
          setFormMessage({
            title: "Error sending message, try again later",
            paragraph: "Please contact by phone or other social platforms",
          });
          e.target.reset();
        }
      );
  };

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
        <Box
          margin={{ base: 2, lg: 4 }}
          mt={8}
          mb={0}
          display={"flex"}
          as={"form"}
          onSubmit={onSubmitHandler}
        >
          {isMobile ? null : <ImageCard />}
          <VStack
            spacing={3}
            width={"100%"}
            p={5}
            bg="white"
            color="black"
            roundedTopRight={8}
            roundedBottomRight={8}
            roundedLeft={{ base: 8, lg: 0 }}
          >
            <FormControl id="name" isRequired>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input
                  ref={nameRef}
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
            <FormControl id="email" isRequired>
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input
                  ref={emailRef}
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
            <FormControl id="subject" isRequired>
              <FormLabel>Subject</FormLabel>
              <Input
                ref={subjectRef}
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
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                ref={messageRef}
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
                type="submit"
                variant="solid"
                bg="red.500"
                color="white"
                _focus={{ outline: "none" }}
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
      {formSubmitted && (
        <SimpleModal
          isOpen={formSubmitted}
          message={formMessage.message}
          title={formMessage.title}
          onClose={() => setFormSubmitted(false)}
        />
      )}
    </Container>
  );
};

export default Contact;
