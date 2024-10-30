import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import apple from "../images/Apple.png";
import microsoft from "../images/Microsoft.png";
import slack from "../images/Slack.png";
import Google from "../images/Google.png";
const SponsorsSection = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 800,
          display: "inline-block",
          position: "relative",
        }}
      >
        Our sponsors
        <Box
          component="span"
          sx={{
            position: "absolute",
            left: 0,
            bottom: -6,
            width: "100%",
            height: "4px",
            backgroundColor: "#FDD835",
            zIndex: -1,
          }}
        />
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        <Grid item xs={6} sm={3} md={2} textAlign="center">
          <img
            src={apple}
            alt="Apple"
            style={{ width: "100%", maxWidth: "75px" }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2} textAlign="center">
          <img
            src={microsoft}
            alt="Microsoft"
            style={{ width: "100%", maxWidth: "150px" }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2} textAlign="center">
          <img
            src={slack}
            alt="Slack"
            style={{ width: "100%", maxWidth: "150px" }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2} textAlign="center">
          <img
            src={Google}
            alt="Google"
            style={{ width: "100%", maxWidth: "150px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SponsorsSection;
