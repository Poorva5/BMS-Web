import HomeCards from "./HomeCards";
import Box from "@mui/material/Box";


const HomeContent = () => {
    return (
      <>
        <Box sx={{ marginTop: "100px", width: "100%" }}>
          <div>
            <HomeCards />
          </div>
        </Box>
      </>
    )
}

export default HomeContent;