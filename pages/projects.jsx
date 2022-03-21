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
    languages:['ReactJS','Material-UI','Firebase'],
    image:'../assests/images/website-Images/screencapture-hoodies-app-vercel-app-2022-03-19-19_17_29.png'
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
    languages:['ReactJS','CSS','Firebase'],
    image:'../assests/images/website-Images/screencapture-movie-watchlist-flax-vercel-app-2022-03-19-18_55_26.png'
  },
  {
    cardDir:"row", 
    cardPos:"5%", 
    cardAlign:"flex-end",
    title:"Mental Health Matters",
    description:"This website is created as part of 24 hrs UI Hackathon, Optimize Prime conducted by BMSCE and Hey Coach on 26th Nov 2021 to 27th Nov 2021.",
    github:"https://github.com/Sandeep-M23/OptimizePrime-BMSCE",
    link:"https://optimize-prime-bmsce.vercel.app/",
    languages:['ReactJS','NextJS','TypeScript','Chakra-UI'],
    image:'../assests/images/website-Images/screencapture-optimize-prime-bmsce-vercel-app-2022-03-19-18_56_58.png'
  },
]

const ProjectCardDetails = [
  {
    title: "Blog Publishing Website",
    description: "A Website for writing Blogs and Publishing them.",
    github: "https://github.com/Sandeep-M23/blog-website-frontend",
    link: "",
    languages:['ReactJS','NodeJS','Express','MongoDB']
  },
  {
    title: "Burger Builder",
    description:
      "A Burger builder is a Web Application built using ReactJs and Redux.",
    github: "https://github.com/Sandeep-M23/burger-builder",
    link: "",
    languages:['ReactJS','Redux','Firebase']
  },
  {
    title: "Meditation App",
    description: "A meditation web application with relaxing sounds",
    github: "https://github.com/Sandeep-M23/meditation-app",
    link: "",
    languages:['HTML','CSS','Javascript']
  },
  {
    title: "Dobble Website",
    description: "UI of a Social Network Webiste like Facebook",
    github: "https://github.com/Sandeep-M23/dobble-website",
    link: "",
    languages:['HTML','CSS','Bootstrap','Javascript']
  },
  {
    title: "Gamma Website",
    description: "UI for a Photo Sharing Web Application",
    github: "https://github.com/Sandeep-M23/gamma-website",
    link: "",
    languages:['HTML','CSS','Bootstrap']
  },
  {
    title: "Responsive WebPage Designs",
    description:
      "Collection of 5 responsive webpages from freeCodeCamp Web Design Certification.",
    github: "https://github.com/Sandeep-M23/responsive-web-design-freeCodeCamp",
    link: "",
    languages:['HTML','CSS']
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
      <Flex flexDir={"column"} align={"center"} mt={16} mb={8}>
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
