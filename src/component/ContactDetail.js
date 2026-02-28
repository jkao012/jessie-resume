import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactDetail = ({ iconPath, alt, title, text }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      width="100%"
      sx={{ alignItems: "center" }}
    >
      <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }}>
        <img src={iconPath} alt={alt} />
      </Box>
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6">{text}</Typography>
      </Box>
    </Box>
  );
};

export default ContactDetail;
