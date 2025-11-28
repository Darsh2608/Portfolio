"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "../components/ProjectCard";
import { Typography } from "@mui/material";

const projectData = [
  {
    src: "/CandorProject.png",
    alt: "Image 1",
    srcavatar: ["/react.svg", "/tailwind-css.svg", "/material-ui.svg"],
    title: "CandorIVF Project",
    description:
      "Working into Candor IVF Admin Side web application make the updates based on the client requirement using an react.js and for the design I used Tailwind css and Material UI for the pre-build Components.",
    chips: ["React", "Tailwind", "MUI"],
    url: "https://candorivf.com/",
  },
  {
    src: "/Fasttrack.png",
    alt: "Image 2",
    srcavatar: [
      "/react.svg",
      "/tailwind-css.svg",
      "/material-ui.svg",
      "typescript.svg",
    ],
    title: "Fasttrack Project",
    description:
      "Built the frontend of a platform where teaching organizations can post jobs, and users can apply and schedule interviews. Focused on creating a clean, responsive UI with smooth user experience.",
    chips: ["React", "Tailwind", "MUI", "TypeScript"],
    url: "https://fasttrack.apperion.ai/",
  },
  {
    src: "/Fasttrack.png",
    alt: "Image 3",
    srcavatar: ["/react.svg", "/tailwind-css.svg", "/material-ui.svg"],
    title: "CCTV Stream Application",
    description:
      "This is a Video Management System Which is used for stream and manage a cctv live-feed of the user. I working an a front-end developer for the responsive design.",
    chips: ["React", "Tailwind", "MUI"],
    url:'not available'
  },
  {
    src: "/Fasttrack.png",
    alt: "Image 3",
    srcavatar: ["/react.svg", "/tailwind-css.svg", "/material-ui.svg"],
    title: "CCTV Stream Application",
    description:
      "This is a Video Management System Which is used for stream and manage a cctv live-feed of the user. I working an a front-end developer for the responsive design.",
    chips: ["React", "Tailwind", "MUI"],
  },
];

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        variant="h6"
      >
        Projects
      </Typography>

      <div className="w-[60%] sm:w-[75%] md:w-[80%] lg:w-[85%]">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projectData.map((elem, index) => (
              <CarouselItem
                key={index}
                className="
                  basis-full
                  sm:basis-1/2
                  lg:basis-1/3
                "
              >
                <ProjectCard {...elem} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
