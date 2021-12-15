import { Link, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{ textDecoration: "none" }}
    sx={{
      position: "relative",
      letterSpacing: "2px",
      padding: "12px",
      ":after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: '50%',
        width: 0,
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

export default NavLink;
