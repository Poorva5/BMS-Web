import { Box } from "@mui/material";
import HomeDrawer from "../components/home/Drawer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem("auth_token")) {
    navigate("/login");
  }

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