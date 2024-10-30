import React from "react";
import { Box, Grid, Typography, Button, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Group from "../images/Group.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C4587",
        color: "white",
        padding: { xs: "20px 10px", sm: "40px 20px" },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6" gutterBottom>
              <img
                src={Group}
                alt="Whitespace Logo"
                style={{ width: "20px", marginRight: 8 }}
              />
              whitepace
            </Typography>
            <Typography variant="body2" paragraph>
              whitepace was created for
            </Typography>
            <Typography variant="body2" paragraph>
              the new ways we live and
            </Typography>
            <Typography variant="body2" paragraph>
              work. We make a better
            </Typography>
            <Typography variant="body2">workspace around the world.</Typography>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <Typography variant="body2" my={1}>
              Overview
            </Typography>
            <Typography variant="body2" my={1}>
              Pricing
            </Typography>
            <Typography variant="body2">Customer stories</Typography>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Typography variant="body2" my={1}>
              Blog
            </Typography>
            <Typography variant="body2" my={1}>
              Guides & tutorials
            </Typography>
            <Typography variant="body2">Help center</Typography>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2" my={1}>
              About us
            </Typography>
            <Typography variant="body2" my={1}>
              Careers
            </Typography>
            <Typography variant="body2">Media kit</Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Try It Today
            </Typography>
            <Typography variant="body2">
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4684FF",
                mt: 2,
                width: "50%",
                textTransform: "capitalize",
              }}
            >
              Start today →
            </Button>
          </Grid>
        </Grid>
        <hr color="#fff"></hr>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: { xs: "30px", sm: "40px" } }}
        >
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography variant="body2">©2021 Whitepace LLC.</Typography>
            <Box sx={{ mt: 1, "& > a": { margin: "0 10px", color: "white" } }}>
              <Link href="#">Terms & privacy</Link>
              <Link href="#">Security</Link>
              <Link href="#">Status</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link
                href="https://m.facebook.com/"
                aria-label="Facebook"
                color="inherit"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://twitter.com/"
                aria-label="Twitter"
                color="inherit"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                color="inherit"
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
