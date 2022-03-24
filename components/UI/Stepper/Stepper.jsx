import { Divider, Center, Box, Text, Icon, Heading } from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";
import React from "react";
import { motion } from "framer-motion";

const Stepper = ({ data }) => {
  const MotionDivider = motion(Divider);
  const MotionBox = motion(Box);

  const InViewDivider = {
    hidden: { height: 0 },
    whileInView: {
      height: "100%",
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  }


  const box = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
      },
    },
  };
  
  return (
    <React.Fragment>
      <Box display={"flex"}>
        <Center height={{ base: "auto", lg: "145px" }} flexDir={"column"}>
          {/*ON RESPONSIVE HEIGHT=AUTO*/}
          <Icon width={5} height={5} mx={2} as={BsCircle} color={"red"} />
          <MotionDivider
            bg={"red"}
            width="1px"
            orientation={"vertical"}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={InViewDivider}
          />
        </Center>
        <MotionBox
          display={"flex"}
          flexDir={"column"}
          justifyContent={"flex-start"}
          mb={4}
          variants={box}
          animate="visible"
          initial="hidden"
        >
          <Heading fontSize={"1.35rem"} mb={3} mt={0} mx={2}>
            {data.course}
          </Heading>
          <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            m={2}
          >
            <Text>{data.year}</Text>
            <Text>{data.institution}</Text>
            <Text>{data.grade}</Text>
          </Box>
        </MotionBox>
      </Box>
    </React.Fragment>
  );
};

export default Stepper;
