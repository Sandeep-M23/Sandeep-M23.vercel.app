import {
    Box,
    Stack,
    Text,
    Image,
    Icon,
    Flex,
    Link,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsArrowRightCircleFill} from 'react-icons/bs'
  
const WorkCard = ({data}) => {
    return (
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={{ base: 14 }}
      >
        <Stack spacing={{ base: 6 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", md: "2.6rem" }}
            >
              {data.jobTitle}
            </Heading>
            <Box
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
              alignItems={{ base: "baseline", md: "center" }}
              justifyContent={"space-between"}
              w={{ base: "100%", md: "50%" }}
              my={2}
            >
              <Link
                href={data.link}
                isExternal
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
              >
                <Text
                  color="red.600"
                  fontWeight={300}
                  fontSize={{ base: "1rem", md: "2xl" }}
                >
                  @{data.company}
                </Text>
              </Link>
              <Text
                color={useColorModeValue("#000d9", "#c1c1c1")}
                fontWeight={500}
                fontSize={{ base: "0.8rem", md: "1rem" }}
                mr={8}
              >
                ( {data.duration} )
              </Text>
            </Box>
          </Box>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box width={{ base: "100%", md: "60%" }} my={{ base: 4, md: 0 }}>
              {data.responsibilities.map((r, i) => {
                return (
                  <Box key={i} display={"flex"} alignItems={"center"} p={1}>
                    <Icon
                      as={BsArrowRightCircleFill}
                      w={4}
                      h={4}
                      mr={2}
                      color="red.500"
                    />
                    <Text p={1}>{r}</Text>
                  </Box>
                );
              })}
            </Box>
            <Flex justifyContent={"center"}>
              <Image
                rounded={"md"}
                bg="white"
                padding={8}
                alt={data.company}
                src={data.image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "75%" }}
              />
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    );
  }

  export default WorkCard;