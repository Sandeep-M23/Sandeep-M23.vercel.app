import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  Container,
  useColorModeValue,
  VStack,
  useClipboard
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com');
  return (
    <Container maxW={"6xl"} centerContent overflow="hidden">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 6 }}
        p={{ base: 5 }}
        width={"100%"}
      >
        <Box width={"100%"}>
          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: "column", md: "row" }}
          >
            <Box
              borderRadius="lg"
              p={8}
              bg="white"
              color="#0B0E3F"
              shadow="base"
              width={"60%"}
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
            <Stack
              align="center"
              justify="space-around"
              direction={{ base: "row", md: "column" }}
            >
              <Tooltip
                label={hasCopied ? "Email Copied!" : "Copy Email"}
                closeOnClick={false}
                hasArrow
              >
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<MdEmail />}
                  _hover={{
                    color: "red.500",
                  }}
                  onClick={onCopy}
                  isRound
                />
              </Tooltip>

              <Link href="#">
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsGithub />}
                  _hover={{
                    color: "red.500",
                  }}
                  isRound
                />
              </Link>

              <Link href="#">
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  icon={<BsTwitter size="28px" />}
                  _hover={{
                    color: "red.500",
                  }}
                  isRound
                />
              </Link>

              <Link href="#">
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  icon={<BsLinkedin size="28px" />}
                  _hover={{
                    color: "red.500",
                  }}
                  isRound
                />
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;