import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainPage from "../view/MainPage";
import ContactPage from "../view/ContactPage";
import Icon from "../icon/earth.png";

const AppHeader = ({ value, setValue }) => {
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar || 1100,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: theme.palette.background.main,
            }}
          >
            <Box
              display="flex"
              sx={{ flexGrow: 1, alignItems: "center", ml: 2 }}
            >
              <img
                src={Icon}
                alt="icon"
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  marginRight: "10px",
                }}
              />
              <Typography variant="h5">JESSIE KAO</Typography>
            </Box>
            <TabList
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#7a5e4bff",
                },
                mr: 2,
                mb: 1,
              }}
              onChange={handleTabChange}
            >
              {["Home Page", "Education", "Work Experience", "Contact"].map(
                (tab) => (
                  <Tab
                    key={tab}
                    label={tab}
                    value={tab}
                    sx={{ ...theme.typography.body2 }}
                  />
                ),
              )}
            </TabList>
          </Box>
        </Box>

        <Box sx={theme.mixins.toolbar} />

        <Box sx={{ overflow: "auto" }}>
          <TabPanel
            value="Home Page"
            sx={{ p: 0 }}
            // sx={{
            //   "& .MuiTabPanel-root": {
            //     padding: 0,
            //   },
            // }}
          >
            <MainPage />
          </TabPanel>
          <TabPanel value="Contact">
            <ContactPage />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default AppHeader;
