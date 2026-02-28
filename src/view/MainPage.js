import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Banner from "../icon/GIS_banner.jpg";
import Timeline from "../component/Timeline";
import WorkCard from "../component/WorkCard";
import Internship from "../icon/Internship.png";
import Career from "../icon/Career.png";

const MainPage = ({ value }) => {
  const theme = useTheme();
  const card = [
    { title: "Internships", image: Internship, alt: "internship_image" },
    { title: "Career", image: Career, alt: "career_image" },
  ];

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
          I participated in GIS-based projects to create interactive dashboard
          and app to meet clients’ needs and usually approached software and
          products including ArcGIS Pro, ArcGIS Enterprises (Dashboard and
          Experience Builder). Alternatively being a frontend development
          beginner (see this website and you will guess it).
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
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={10}
          >
            <Box sx={{ my: 5 }}>
              <WorkCard card={card[0]} />
            </Box>
            <Box sx={{ my: 5 }}>
              <WorkCard card={card[1]} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default MainPage;
