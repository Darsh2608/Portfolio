import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffffad",
        height: "100%",
      }}
    >
      <Typography variant="h5">Thanks For Visit</Typography>
      <Typography variant="body2">
        @Darsh Portfolio.All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
