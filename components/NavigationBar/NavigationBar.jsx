import React from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
  IconButton,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {BsFillFileTextFill} from 'react-icons/bs'
import NavLink from "./NavLink/NavLink";
import Logo from "../UI/Logo/Logo";

const routes = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={{ base: 5, lg: 20 }} py={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _focus={{ outline: "none" }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Logo />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              mx={12}
            >
              {routes.map((link) => (
                <NavLink key={link.name} link={link.link}>
                  {link.name}
                </NavLink>
              ))}
              <Link _hover={{ textDecoration: "none"}} href="/assests/resume/sandeep M.pdf" download="Sandeep M.pdf">
                <Button
                  rightIcon={<BsFillFileTextFill />}
                  bg="red"
                  color="white"
                  variant="solid"
                  _focus={{ outline: "none" }}
                  _active={{ bg: "red" }}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Resume
                </Button>
              </Link>
            </HStack>
            <Button onClick={toggleColorMode} _focus={{ outline: "none" }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {routes.map((link) => (
                <NavLink key={link.name} link={link.link}>
                  {link.name}
                </NavLink>
              ))}
              <Button
                rightIcon={<BsFillFileTextFill />}
                bg="red"
                color="white"
                variant="solid"
                _focus={{ outline: "none" }}
                _active={{ bg: "red" }}
                _hover={{
                  bg: "red.500",
                }}
              >
                Resume
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavigationBar;
