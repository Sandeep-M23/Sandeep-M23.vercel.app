import { Link, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavLink = ({ link, children }) => {
  const router = useRouter();
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
      color={
        router.asPath === link ? "red.500" : useColorModeValue("black", "white")
      }
      sx={{
        position: "relative",
        letterSpacing: "2px",
        padding: "12px",
        ":after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: router.asPath === link ? 0 : "50%",
          width: router.asPath === link ? "100%" : 0,
          height: "2px",
          transition: "width 0.3s ease 0s,left 0.3s ease 0s",
          background: "none repeat scroll 0 0 red",
        },
        ":hover::after": {
          width: "100%",
          left: 0,
        },
      }}
      href={children.toString().toLowerCase()}
    >
      {children}
    </Link>
  );
};

export default NavLink;
