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

const FeaturedCardDetails = [
  {
    cardDir:"row", 
    cardPos:"5%", 
    cardAlign:"flex-end",
    title:"Hoodies App",
    description:"An E-commerce App to purchase fancy and Modern Hoodies",
    github:"https://github.com/Sandeep-M23/hoodies-app",
    link:"https://hoodies-app.vercel.app/",
  },
  {
    cardDir:"row-reverse", 
    cardPos:"0", 
    cardAlign:"flex-start",
    imagePos:"5" ,
    title:"Movie WatchList",
    description:"A Movie Watchlist application that uses TMDB Api to get movie details.",
    github:"https://github.com/Sandeep-M23/movie-watchList",
    link:"https://movie-watchlist-flax.vercel.app/",
  },
  {
    cardDir:"row", 
    cardPos:"5%", 
    cardAlign:"flex-end",
    title:"Mental Health Matters",
    description:"This website is created as part of 24 hrs UI Hackathon, Optimize Prime conducted by BMSCE and Hey Coach on 26th Nov 2021 to 27th Nov 2021.",
    github:"https://github.com/Sandeep-M23/OptimizePrime-BMSCE",
    link:"https://optimize-prime-bmsce.vercel.app/",
  },
]

const ProjectCardDetails = [
  {
    title: "Blog Publishing Website",
    description: "A Website for writing Blogs and Publishing them.",
    github: "https://github.com/Sandeep-M23/blog-website-frontend",
    link: "",
  },
  {
    title: "Burger Builder",
    description:
      "A Burger builder is a Web Application built using ReactJs and Redux.",
    github: "https://github.com/Sandeep-M23/burger-builder",
    link: "",
  },
  {
    title: "Meditation App",
    description: "A meditation web application with relaxing sounds",
    github: "https://github.com/Sandeep-M23/meditation-app",
    link: "",
  },
  {
    title: "Dobble Website",
    description: "UI of a Social Network Webiste like Facebook",
    github: "https://github.com/Sandeep-M23/dobble-website",
    link: "",
  },
  {
    title: "Gamma Website",
    description: "UI for a Photo Sharing Web Application",
    github: "https://github.com/Sandeep-M23/gamma-website",
    link: "",
  },
  {
    title: "Responsive WebPage Design",
    description:
      "Collection of 5 responsive webpages from freeCodeCamp Responsive Web Design Certification.",
    github: "https://github.com/Sandeep-M23/responsive-web-design-freeCodeCamp",
    link: "",
  },
];

const Projects = () => {
  return (
    <Container maxW={"6xl"} mt={8}>
      <Flex flexDir={"column"} alignItems={"center"}>
        {FeaturedCardDetails.map((data, key) => {
          return <FeaturedCard key={key} data={data} />;
        })}
      </Flex>
      <Flex flexDir={"column"} align={"center"}>
        <Box mb={4} width={"100%"}>
          <Heading mb={2} fontSize={32} textAlign={"center"}>
            OTHER NOTEWORTHY PROJECTS
          </Heading>
          <Divider height={"3px"} bg={"red"} />
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 1, md: 2, lg: 4 }}
        >
          {ProjectCardDetails.map((data, key) => {
            return <ProjectCard key={key} data={data} />;
          })}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Projects;
