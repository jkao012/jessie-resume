import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactDetail from "../component/ContactDetail";
import EmailIcon from "../icon/EnvelopeSimple.svg";
import PhoneIcon from "../icon/PhoneCall.svg";

const ContactPage = () => {
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
        <Typography variant="h1">Contact Me!</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h4" width="85%">
            Want to understand more about me? <br></br>
          </Typography>
          <Typography variant="h6" width="100%">
            No matter asking Education, Working or even Personal Interest, feel
            free to contact me via email or phone!
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <ContactDetail
            iconPath={EmailIcon}
            alt="email_icon"
            title="Email:"
            text="jkao001122@gmail.com"
          />
          <ContactDetail
            iconPath={PhoneIcon}
            alt="phone_icon"
            title="Phone:"
            text="+852 92029513"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
