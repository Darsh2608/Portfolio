"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import HomePage from "../home/page";
import ProjectPage from "../projects/page";
import SkillPage from "../skills/page";
import { useParams, usePathname } from "next/navigation";
import { List, Rows3, X } from "lucide-react";
import Footer from "./Footer";

const MenuBar = () => {
  const pathname = usePathname();
  const [menuList, setMenuList] = useState(false);

  const onListClick = () => {
    setMenuList(!menuList);
  };

  const handleMenuClick = () => {
    setMenuList(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
            fontWeight: "bolder",
            fontSize: "1.1rem",
            gap: "15rem",
            background: "#ffffffad",
          }}
        >
          {/* Left side */}
          <Box sx={{ fontSize: "1.5rem" }}>Portfolio</Box>

          {/* Right side */}
          {menuList ? (
            <Box className="flex flex-col gap-7 p-5 absolute top-0 right-0 h-auto w-full z-50 bg-slate-200">
              <Box className="w-full">
                <button className="float-right" onClick={onListClick}>
                  <X />
                </button>
              </Box>
              <Box
                onClick={handleMenuClick}
                className="flex flex-col items-center justify-center gap-5"
              >
                <a href="#home">Home</a>
                <a href="#skills">Experience</a>
                <a href="#projects">Projects</a>
              </Box>
            </Box>
          ) : (
            <>
              <Box className="hidden md:flex space-x-10">
                <a
                  href="#home"
                  // className={`${pathname === "#home" ? "bg-red-500 " : ""}`}
                >
                  Home
                </a>
                <a href="#skills">Experience</a>
                <a href="#projects">Projects</a>
              </Box>
            </>
          )}

          <Box className="flex md:hidden">
            <button onClick={onListClick}>
              <List />
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            "@media (min-width:1563px)": {
              height: "60%",
              flex: "unset",
              overflow: "unset",
            },
          }}
        >
          {/* Define sections */}
          <Box
            id="home"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { md: "100%", sm: "80%" },
              padding: "25px",
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
              },
            }}
          >
            <HomePage />
          </Box>

          <Box
            id="skills"
            style={{
              height: "auto",
            }}
          >
            <SkillPage />
          </Box>

          <Box
            id="projects"
            style={{
              height: "100%",
            }}
          >
            <ProjectPage />
          </Box>
          <Box
            sx={{
              height: "12%",
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuBar;
