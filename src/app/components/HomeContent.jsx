"use client";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const HomeContent = () => {
  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/darsh-patel-346022231", "_blank");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "2rem" }}>
          HI{" "}
          <Box component="span" sx={{ color: "#08d665" }}>
            THERE,
          </Box>
        </Typography>
        <Typography sx={{ fontSize: "2rem" }}>
          I am{" "}
          <Box component="span" sx={{ color: "#08d665" }}>
            Darsh{" "}
          </Box>
          Patel,
        </Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          I’m a passionate Frontend Developer.
        </Typography>
        <Typography sx={{ fontSize: "1rem", maxWidth: "30rem" }}>
          I focus on creating modern, efficient, and scalable web applications
          that bring ideas to life.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a href="/Darsh_K_Patel-1.pdf" download>
            <Button
              style={{
                color: "#1d2b53",
                backgroundColor: "#08d665",
                fontWeight: "bolder",
              }}
            >
              Download CV
            </Button>
          </a>

          <Button
            style={{
              color: "#1d2b53",
              backgroundColor: "#08d665",
              fontWeight: "bolder",
            }}
            onClick={openLinkedIn}
          >
            <Linkedin />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "250px",
            md: "300px",
            lg: "400px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ borderRadius: "10px" }}
          src="/PortfolioImage.jpg"
          alt="Personal Image"
          height={400}
          width={400}
        />
      </Box>
    </>
  );
};

export default HomeContent;
