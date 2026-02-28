import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function WorkCard({ card }) {
  const theme = useTheme();

  return (
    <Button display="flex" flexDirection="column" gap={2}>
      <Box display="flex" flexDirection="column" sx={{ p: 2 }}>
        <Box>
          <img
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            height="80%"
            src={card.image}
            alt={card.alt}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.dark,
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            p: 1,
          }}
        >
          <Typography variant="h4">{card.title}</Typography>
        </Box>
      </Box>
    </Button>
  );
}

export default WorkCard;
