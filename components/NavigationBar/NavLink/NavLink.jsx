import { Link, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecorationLine: "underline",
      textUnderlineOffset:'10px'
    }}
    href={children.toString().toLowerCase()}
  >
    {children}
  </Link>
);

export default NavLink;
