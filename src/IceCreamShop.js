import { AppBar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import iceCreamImage from "../src/images/Ice Cone Fruit Art (1920x1080).jpg";

const IceCreamShop = () => {
  return (
    <Grid
      container
      size={12}
      sx={{
        backgroundImage: `url("${iceCreamImage}")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <AppBar sx={{ bgcolor: "pink", height: "10vh" }}>
        {" "}
        <Grid size={12} sx={{ mt: 7,display:'flex',justifyContent:'center' }}>
          <Box
            sx={{
              width: "80%",
              bgcolor: "white",
              height: "8vh",
              borderRadius: 15,

            }}
          ></Box>
        </Grid>
      </AppBar>
      
    </Grid>
  );
};

export default IceCreamShop;
