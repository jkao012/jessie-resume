import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Banner from "../icon/GIS_banner.jpg";
import Timeline from "../component/Timeline";

const MainPage = ({ value }) => {
  const theme = useTheme();

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          justifyContent: "flex-start",
          my: 10,
          mx: 15,
        }}
      >
        <Typography variant="h1">
          Welcome to <br></br>Jessie's Portfolio!
        </Typography>
        <Typography variant="h4" width="85%">
          Hi! This is Jessie. I am a GIS master graduate who offers GIS-based
          digital advisory to achieve and accelerate smart city development.
        </Typography>
        <Typography variant="h6">
          Participated in GIS-based projects to create interactive dashboard and
          app for clients’ needs. Usually approached software and products
          include ArcGIS Pro, ArcGIS Enterprises (Dashboard and Experience
          Builder) and being a frontend development beginner.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: theme.palette.background.dark,
          py: 10,
        }}
      >
        <Box
          sx={{
            justifyContent: "flex-start",
            mx: 15,
          }}
        >
          <Typography variant="h3">My Education</Typography>
          <Box sx={{ my: 5 }}>
            <Timeline />
          </Box>
          <Button variant="filled">Explore More!</Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          py: 10,
        }}
      >
        <Box
          sx={{
            justifyContent: "flex-start",
            mx: 15,
          }}
        >
          <Typography variant="h3">My Working Experience</Typography>
          <Box sx={{ my: 5 }}>{/* <Timeline /> */}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default MainPage;
