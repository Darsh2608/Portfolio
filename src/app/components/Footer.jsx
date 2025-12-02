import React from "react";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: 'space-evenly',
        padding: "5px",
        backgroundColor: "#ffffffad",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">Thanks For Visit</Typography>
        <Typography variant="body2">
          @Darsh Portfolio All rights reserved
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">Contact info:</Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailIcon />
          <span>darshpatel830@gmail.com</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneAndroidIcon />
          <span>+91-9104303706</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
