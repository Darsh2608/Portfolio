"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import { DeleteIcon, Link } from "lucide-react";

const ProjectCard = ({
  src,
  alt,
  srcavatar,
  title,
  description,
  chips = [],
  url,
}) => {
  const openProjectUrl = (url) => {
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    window.open(url, "_blank");
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        height: { md: "460px", lg: "500px" },
        backgroundColor: "var(--background-color)",
      }}
    >
      <Box>
        <Image
          src={src}
          height={100}
          width={400}
          className="w-full object-fill"
          alt={alt}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <div className="flex flex-wrap gap-2">
          {chips.map((elem, idx) => (
            <Tooltip key={idx} title={elem}>
              <Avatar sx={{ backgroundColor: "#E6FEF1" }}>
                {srcavatar[idx] ? (
                  <Avatar
                    sx={{ width: 24, height: 24, borderRadius: "0%" }}
                    className="[&>img]:object-fill"
                    alt={elem}
                    src={srcavatar[idx]}
                  />
                ) : undefined}
              </Avatar>
            </Tooltip>
          ))}
        </div>

        <Typography gutterBottom variant="h6" sx={{ color: "#08d665" }}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            flex: 1,
            overflow: "auto",
            textOverflow: "ellipsis",
            display: { xs: "-webkit-box", md: "block" },
            WebkitLineClamp: { xs: 6, md: "unset" },
            WebkitBoxOrient: { xs: "vertical", md: "unset" },
          }}
        >
          {description}
        </Typography>
        <CardActions className="flex float-right">
          {url !== "not available" ? (
            <button
              onClick={() => openProjectUrl(url)}
              className="rounded-2xl p-2 bg-[var(--main-text-color)] "
            >
              <Link className="text-[var(--background-color)]" />
            </button>
          ) : (
            <button
              disabled
              className="rounded-2xl p-2 bg-[#08d66569] cursor-not-allowed"
            >
              <Link className="text-[var(--background-color)]" />
            </button>
          )}
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProjectCard;
