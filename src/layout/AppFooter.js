import { Box, Button, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "../icon/LinkedIn_icon.svg";
import EmailIcon from "../icon/email_icon.svg";

const AppFooter = () => {
  const theme = useTheme();
  return (
    <Box display="flex" width="100%" justifyContent="flex-end" sx={{ p: 2 }}>
      <Typography variant="caption">© 2025 Jessie Kao</Typography>
    </Box>
    // <Box
    //   display="flex"
    //   flexDirection="row"
    //   gap={3}
    //   sx={{
    //     borderTop: 1,
    //     justifyContent: "center",
    //     borderColor: "divider",
    //     py: 1.5,
    //     backgroundColor: theme.palette.background.main,
    //   }}
    // >
    //   <Box
    //     display="flex"
    //     flexDirection="row"
    //     gap={1}
    //     sx={{ alignItem: "center" }}
    //   >
    //     <Box>
    //       <img
    //         style={{ maxWidth: "20px", maxHeight: "20px" }}
    //         src={LinkedInIcon}
    //         alt="LinkedIn"
    //       />
    //     </Box>
    //     <Box display="flex" flexDirection="row" gap={1}>
    //       <Typography>LinkedIn: </Typography>
    //       <a href="https://www.linkedin.com/in/man-hei-kao-453024226/">
    //         <Typography>Jessie Kao</Typography>
    //       </a>
    //     </Box>
    //   </Box>
    //   <Box
    //     display="flex"
    //     flexDirection="row"
    //     gap={1}
    //     sx={{ alignItem: "center" }}
    //   >
    //     <Box>
    //       <img
    //         style={{ maxWidth: "20px", maxHeight: "20px" }}
    //         src={EmailIcon}
    //         alt="EmailIcon"
    //       />
    //     </Box>
    //     <Box display="flex" flexDirection="row" gap={1}>
    //       <Typography>Email: </Typography>
    //       <Typography>jkao001122@gmail.com</Typography>
    //     </Box>
    //   </Box>
    //   <Typography>© 2025 Jessie Kao</Typography>
    // </Box>
  );
};

export default AppFooter;
