import React from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "./images/Image-container.png";
import Header from "./components/Header";
import WorkSection from "./pages/WorkSection";
import Footer from "./components/Footer";
import HeaderSection from "./pages/HeaderSection";
import PriceSection from "./pages/PriceSection";
import SponsorsSection from "./pages/SponsorsSection";

function App() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box sx={{ backgroundColor: "#0C3D8B" }}>
        <Container maxWidth="lg" sx={{ backgroundColor: "#0C3D8B" }}>
          <Header />
          <Box
            sx={{
              color: "#fff",
              padding: theme.spacing(6, 2),
              textAlign: { xs: "center", md: "left" },
              minHeight: "70vh",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h1" gutterBottom>
                  Get More Done with Whitespace →
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Project management software that enables your teams to
                  collaborate, plan, analyze, and manage everyday tasks
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#448AFF",
                    color: "#fff",
                    textTransform: "capitalize",
                    marginTop: theme.spacing(4),
                    "&:hover": {
                      backgroundColor: "#357ABD",
                    },
                  }}
                >
                  Try Whitespace free →
                </Button>
              </Grid>
              {isMdUp && (
                <Grid item md={6}>
                  <Box display="flex" justifyContent="center">
                    <img
                      src={logo}
                      alt="Analytics illustration"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
      <PriceSection />
      <WorkSection />
      <SponsorsSection />
      <HeaderSection />
      <Footer />
    </>
  );
}

export default App;
