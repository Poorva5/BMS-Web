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
import HotelContent from "./HotelsContent";
import PackagesContent from "./PackagesContent";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BedIcon from '@mui/icons-material/Bed';
import BookingContent from "./BookingContent";
import PackageOverViewContent from "./PackageOverview";
import { useNavigate } from "react-router-dom";

export default function HomeDrawer() {
  const [selectedContent, setSelectedContent] = useState("Dashboard");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login");
  };

  const renderContent = () => {
    if (selectedPackage) {
      return <PackageOverViewContent singlePackage={selectedPackage} />;
    }
    switch (selectedContent) {
      case "Dashboard":
        return <HomeContent />;
      case "Bookings":
        return <BookingContent />;
      case "Packages":
        return <PackagesContent  onSelectPackage={setSelectedPackage}/>;
      case "Hotels":
        return <HotelContent />;
      default:
        return <HomeContent />;
    }
  };

  const iconMapping = {
    Dashboard: <DashboardIcon sx={{ color: textColor.fonts, fontSize: '15px' }} />,
    Bookings: <EventAvailableIcon sx={{ color: textColor.fonts, fontSize: '15px'  }} />,
    Packages: <Inventory2OutlinedIcon sx={{ color: textColor.fonts, fontSize: '15px'  }} />, 
    Hotels: <BedIcon sx={{ color: textColor.fonts, fontSize: '15px'  }} />,
  };

  const DrawerList = (
    <Box sx={{ marginTop: "0px" }}>
      <List>
        <StyledAppLogo>Intrepid</StyledAppLogo>
        {["Dashboard", "Bookings", "Packages", "Hotels"].map((text) => (
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
                setSelectedPackage(null);
              }}
              sx={{
                color: '#8383a9',
                borderBottom: '1px solid #f4f4f9',
                backgroundColor: selectedContent === text ? textColor.moreLightGrey : "inherit",
                borderRight: selectedContent === text ? "5px solid red" : "none",
                color: selectedContent === text ? textColor.black : "#8383a9"
              }}
            >
              <ListItemIcon>{iconMapping[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        <StyledLogoutButton>
          <div onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</div>
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
      <Box component="main" sx={{ bgcolor: "", marginTop: "0px" }}>
        <Box sx={{ width: "100%", position: "fixed", bgColor: textColor.white }}>
          <Navbar />
        </Box>
        <Box sx={{ marginTop: "100px", minWidth: "1130px" }}>{renderContent()}</Box>
      </Box>
    </Box>
  );
}
