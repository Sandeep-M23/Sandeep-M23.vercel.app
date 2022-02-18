import {
    Divider,
    Center,
    Box,
    Text,
    Icon,
    Heading
  } from "@chakra-ui/react";
  import {BsCircle} from 'react-icons/bs'
import React from "react";

const Stepper = ({data}) => {
  return (
    <React.Fragment>
      <Box display={"flex"}>
        <Center height={'145px'} flexDir={"column"}>{/*ON RESPONSIVE HEIGHT=AUTO*/}
          <Icon width={5} height={5} mx={2} as={BsCircle} color={'red'}/>
          <Divider bg={"red"} orientation={"vertical"} />
        </Center>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"flex-start"}
        >
          <Heading fontSize={"1.35rem"} mb={3} mt={0} mx={2}>{data.course}</Heading>
          <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"} m={2}>
            <Text>{data.year}</Text>
            <Text>{data.institution}</Text>
            <Text>{data.grade}</Text>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Stepper;
