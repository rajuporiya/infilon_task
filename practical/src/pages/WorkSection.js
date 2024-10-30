import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0C3D8B",
        color: "#fff",
        py: 8,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/path-to-pattern-image.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Your work, everywhere you are
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, color: "rgba(255, 255, 255, 0.9)" }}
        >
          Access your notes from your computer, phone, or tablet by
          synchronizing with various services, including whitespace, Dropbox,
          and OneDrive. The app is available on Windows, macOS, Linux, Android,
          and iOS. A terminal app is also available!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#448AFF",
            textTransform: "capitalize",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#357ABD",
            },
          }}
        >
          Try Taskey →
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
