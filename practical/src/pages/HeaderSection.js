import React from "react";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import apple from "../images/apple-black-logo 2.png";
import window from "../images/windows-logo 1.png";
import Android from "../images/android-logo 1.png";
const HeaderSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C4587",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Try Whitepace <br></br> today
      </Typography>
      <Typography variant="h6" sx={{ marginTop: "20px" }}>
        Get started for free. <br></br> Add your whole team as your needs grow.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#4684FF",
          textTransform: "capitalize",
          marginTop: "20px",
          padding: "10px 40px",
        }}
      >
        Try Taskey free →
      </Button>

      <Typography variant="h6" sx={{ marginTop: "30px" }}>
        On a big team? Contact sales
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <img src={apple} alt="Apple" style={{ width: "40px" }} />
        <img src={window} alt="Windows" style={{ width: "40px" }} />
        <img src={Android} alt="Android" style={{ width: "40px" }} />
      </Box>
    </Box>
  );
};
export default HeaderSection;
