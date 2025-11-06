import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function WorkCard(props) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <img src={props.path} alt={props.alt} />
      </Box>
      <Box>
        <Typography variant="h4">{props.content}</Typography>
      </Box>
    </Box>
  );
}

export default WorkCard;
