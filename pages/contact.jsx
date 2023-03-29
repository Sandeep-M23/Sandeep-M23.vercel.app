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
  Divider,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SimpleModal from "../components/UI/Modal/Modal";
import { container, box, stack, ContactDivider } from "../util/Variants";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [formMessage, setFormMessage] = useState({
    title: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const MotionContainer = motion(Container);
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);
  const MotionHeading = motion(Heading);
  const MotionDivider = motion(Divider);

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
        "service_74k06az",
        "template_1u212jk",
        templateParams,
        "LYvGTZ9808EWllPcj"
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
          setFormSubmitted(true);
          setFormMessage({
            title: "Error sending message, try again later",
            paragraph: "Please contact by phone or other social platforms",
          });
          e.target.reset();
        }
      );
  };

  return (
    <MotionContainer
      maxW={"6xl"}
      centerContent
      overflow="hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={container}
    >
      <Box borderRadius="lg" m={{ base: 2 }} p={{ base: 2 }} width={"90%"}>
        <MotionStack align={"center"} variants={stack}>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"center"}
          >
            <MotionDivider
              height={"3px"}
              bg={"red"}
              width={"13%"}
              variants={ContactDivider}
            />
            <MotionHeading
              fontSize={{ base: "1.7rem", lg: "2.5rem" }}
              textAlign="center"
              mx={3}
            >
              Get In Touch!
            </MotionHeading>
            <MotionDivider
              height={"3px"}
              bg={"red"}
              width={"13%"}
              variants={ContactDivider}
            />
          </Box>
          <Text
            fontSize={{ base: "1rem", lg: "1.2rem" }}
            textAlign={{ base: "center" }}
          >
            Got a question or proposal, or just want to say hello? Go ahead.
          </Text>
        </MotionStack>
        <MotionBox
          margin={{ base: 2, lg: 4 }}
          mt={8}
          mb={0}
          display={"flex"}
          as={"form"}
          onSubmit={onSubmitHandler}
          variants={box}
        >
          <VStack
            spacing={3}
            width={"100%"}
            p={5}
            bg="#EEEEEE"
            boxShadow={"2xl"}
            color="black"
            rounded={8}
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
                _active={{ bg: "red.500" }}
                _hover={{
                  bg: "red.700",
                }}
              >
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </MotionBox>
      </Box>
      {formSubmitted && (
        <SimpleModal
          isOpen={formSubmitted}
          message={formMessage.message}
          title={formMessage.title}
          onClose={() => setFormSubmitted(false)}
        />
      )}
    </MotionContainer>
  );
};

export default Contact;
