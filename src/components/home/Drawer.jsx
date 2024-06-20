import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledAppLogo, StyledLogoutButton } from "./StyledHome";
import { textColor } from "../../common/colors";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import HotelContent from "./HotelsContent";
import PackagesContent from "./PackagesContent";

export default function HomeDrawer() {
  const [selectedContent, setSelectedContent] = useState("Dashboard");
  const [selectedSubContent, setSelectedSubContent] = useState("");

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("auth_token");
//     navigate("/login");
//   };

const renderContent = () => {
    switch (selectedContent) {
      case "Dashboard":
        return <HomeContent />;
      case "Bookings":
        switch (selectedSubContent) {
          case "Packages":
            return <PackagesContent />;
          case "Hotels":
            return <HotelContent />;
          default:
            return <PackagesContent />;
        }
      default:
        return <HomeContent />;
    }
};

  const iconMapping = {
    Dashboard: <HomeIcon sx={{ color: textColor.fonts }} />,
    Bookings: <PeopleIcon sx={{ color: textColor.fonts }} />,
  };

  const DrawerList = (
    <Box sx={{ width: 250, marginTop: "0px" }}>
      <List>
        <StyledAppLogo>Intrepid</StyledAppLogo>
        {["Dashboard", "Bookings"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              color: textColor.black,
              fontFamily: 'Quicksand", sans-serif !important',
            }}
          >
            <ListItemButton
              onClick={() => {
                setSelectedContent(text);
                if (text !== "Bookings") {
                  setSelectedSubContent("");
                }
              }}
              sx={{
                backgroundColor:
                  selectedContent === text && selectedSubContent === ""
                    ? textColor.moreLightGrey
                    : "inherit",
                borderRight: selectedContent === text && selectedSubContent === ""
                    ? "5px solid red"
                    : "none",
              }}
            >
              <ListItemIcon>{iconMapping[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {selectedContent === "Bookings" &&
          ["Packages", "Hotels"].map((subText) => (
            <ListItem
              key={subText}
              disablePadding
              sx={{
                color: textColor.black,
                fontFamily: 'Quicksand", sans-serif !important',
              }}
            >
              <ListItemButton
                onClick={() => setSelectedSubContent(subText)}
                sx={{
                  paddingLeft: 4,
                  backgroundColor:
                    selectedSubContent === subText ? textColor.moreLightGrey : "inherit",
                color:
                    selectedSubContent === subText ? textColor.fonts : "inherit",
                    
                }}
              >
                <ListItemIcon>{iconMapping[subText]}</ListItemIcon>
                <ListItemText primary={subText} />
              </ListItemButton>
            </ListItem>
          ))}

        <StyledLogoutButton>
          <div style={{ cursor: "pointer" }}>
            Logout
          </div>
        </StyledLogoutButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: "border-box",
            marginTop: "0px",
          },
        }}
      >
        {DrawerList}
      </Drawer>
      <Box
        component="main"
        sx={{
          bgcolor: "",
          marginTop: "0px",
        }}
      >
        <Box
          sx={{ width: "100%", position: "fixed", bgColor: textColor.white }}
        >
          <Navbar />
        </Box>
        <Box sx={{ marginTop: "100px", minWidth: "100%" }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
