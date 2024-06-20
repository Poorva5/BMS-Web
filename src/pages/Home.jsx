import { Box } from "@mui/material";
import HomeDrawer from "../components/home/Drawer";

const Home = () => {

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gap: "30px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <HomeDrawer />
      </Box>
    </div>
  );
};

export default Home;