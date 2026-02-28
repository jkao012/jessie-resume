import React from "react";
import MainPage from "./view/MainPage";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ContactBackground from "./icon/ContactBackground.svg";

function App() {
  const [value, setValue] = useState("Home Page");
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.main,
          backgroundImage:
            value === "Contact" ? `url(${ContactBackground})` : "none",
          backgroundSize: "100% auto",
        }}
      >
        <Box
          sx={{
            minHeight: "680px",
            display: "flex",
            flexDirection: "column",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <AppHeader value={value} setValue={setValue} />
        </Box>
        <Box>
          <AppFooter />
        </Box>
      </Box>
    </>
  );
}

export default App;
