import React from "react";
import {
  Container,
  Heading,
  Flex,
  Box,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "../components/UI/Card/ProjectCard";
import FeaturedCard from "../components/UI/Card/FeaturedCard";
import { motion } from "framer-motion";
import { container, divider, InViewDivider } from "../util/Variants";

const FeaturedCardDetails = [
  {
    id:1,
    cardDir: "row",
    cardPos: "5%",
    cardAlign: "flex-end",
    title: "Hoodies",
    description:
      "Hoodies is an E-commerce Application which is used to purchase fancy and Modern Hoodies.The application includes features such as login,Favorites,Shopping Cart and Checkout System.",
    github: "https://github.com/Sandeep-M23/hoodies-app",
    link: "https://hoodies-app.vercel.app/",
    languages: ["ReactJS", "Material-UI", "Firebase"],
    image: "../assests/images/Website-Images/Hoodie-Website.png",
    direction: "right",
  },
  {
    id:2,
    cardDir: "row-reverse",
    cardPos: "0",
    cardAlign: "flex-start",
    imagePos: "5%",
    title: "MovieDirectory",
    description:
      "A MovieDirectory is an application that uses TMDB Api to get movie details.In addition to exploring and searching the listed movies, you can also add movies in your watchlists.",
    github: "https://github.com/Sandeep-M23/MovieDirectory",
    link: "https://movie-directory.vercel.app/",
    languages: ["ReactJS", "CSS", "Firebase", "TMDB API"],
    image: "../assests/images/Website-Images/MovieDirectory-Website.png",
  },
  {
    id:3,
    cardDir: "row",
    cardPos: "5%",
    cardAlign: "flex-end",
    title: "Mental Health Matters",
    description:
      "This website is created as part of 24 hrs UI Hackathon, Optimize Prime conducted by BMSCE and Hey Coach on 26th Nov 2021 to 27th Nov 2021.",
    github: "https://github.com/Sandeep-M23/OptimizePrime-BMSCE",
    link: "https://optimize-prime-bmsce.vercel.app/",
    languages: ["ReactJS", "NextJS", "TypeScript", "Chakra-UI"],
    image: "../assests/images/Website-Images/Mental-Health-Matters-Website.png",
    direction: "right",
  },
];

const ProjectCardDetails = [
  {
    id:1,
    title: "Blog Publishing Website",
    description:
      "Blog-publishing Application used for publishing/editing/deleting blog posts, upload pictures and also allows to bookmark blogs.",
    github: "https://github.com/Sandeep-M23/blog-website-frontend",
    link: "",
    languages: ["ReactJS", "NodeJS", "Express", "MongoDB"],
  },
  {
    id:2,
    title: "Burger Builder",
    description:
      "An Interactive Burger builder Web Application built using ReactJs and ReduxJs. It allows you to customize burger with ingredients and purchase the same.",
    github: "https://github.com/Sandeep-M23/burger-builder",
    link: "https://burger-builder-three.vercel.app/",
    languages: ["ReactJS", "Redux", "Firebase"],
  },
  {
    id:3,
    title: "Meditation App",
    description:
      "Meditation App allows user to select from 3 different ambient sounds & corresponding looped background videos.",
    github: "https://github.com/Sandeep-M23/meditation-app",
    link: "",
    languages: ["HTML", "CSS", "Javascript"],
  },
  {
    id:4,
    title: "Dobble Website",
    description:
      "UI of a Social Network Website like Facebook developed Using Bootstrap & CSS.",
    github: "https://github.com/Sandeep-M23/dobble-website",
    link: "https://sandeep-m23.github.io/Dobble-Website/",
    languages: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
  {
    id:5,
    title: "Gamma Website",
    description:
      "Simple UI for a Photo Sharing Web Application developed Using Bootstrap & CSS",
    github: "https://github.com/Sandeep-M23/gamma-website",
    link: "https://sandeep-m23.github.io/Gamma-Website/",
    languages: ["HTML", "CSS", "Bootstrap"],
  },
  {
    id:6,
    title: "Responsive WebPage Designs",
    description:
      "Collection of 5 responsive webpages made for freeCodecamp Responsive Web Design Certification.",
    github: "https://github.com/Sandeep-M23/responsive-web-design-freeCodeCamp",
    link: "",
    languages: ["HTML", "CSS"],
  },
];

const Projects = () => {
  const MotionContainer = motion(Container);
  const MotionDivider = motion(Divider);

  return (
    <MotionContainer
      maxW={"6xl"}
      mt={8}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box mb={4} width={"100%"} rounded={8} p={3}>
        <Heading mb={2} fontSize={32} textAlign={"flex-start"}>
          FEATURED PROJECTS
        </Heading>
        <MotionDivider height={"3px"} bg={"red"} variants={divider} />
      </Box>
      <Flex flexDir={"column"} alignItems={"center"}>
        {FeaturedCardDetails.map((data) => {
          return <FeaturedCard key={data.id} data={data} />;
        })}
      </Flex>
      <Flex flexDir={"column"} align={"center"} mt={16} mb={8}>
        <Box mb={4} width={"100%"}>
          <Heading mb={2} fontSize={32} textAlign={"flex-start"}>
            OTHER NOTEWORTHY PROJECTS
          </Heading>
          <MotionDivider
            height={"3px"}
            bg={"red"}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={InViewDivider}
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 1, md: 2, lg: 4 }}
        >
          {ProjectCardDetails.map((data) => {
            return <ProjectCard key={data.id} data={data} />;
          })}
        </SimpleGrid>
      </Flex>
    </MotionContainer>
  );
};

export default Projects;
