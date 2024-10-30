import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Button,
  MobileStepper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
  {
    title: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
];

const PriceSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "900" }}
      >
        Choose Your Plan
      </Typography>
      <Typography
        align="center"
        color="#000"
        paragraph
        sx={{ py: 2, fontWeight: "400", fontSize: "18px" }}
      >
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, find the right plan for you.
      </Typography>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.title}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
          {plans.map((plan, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <PricingCard plan={plan} />
            </Box>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={plans.length}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          sx={{
            justifyContent: "center",
            backgroundColor: "transparent",
            mt: 2,
          }}
        />
      </Box>
    </Container>
  );
};

const PricingCard = ({ plan }) => (
  <Paper
    elevation={plan.highlight ? 4 : 1}
    sx={{
      p: 3,
      textAlign: "center",
      backgroundColor: plan.highlight ? "#0C3D8B" : "#fff",
      color: plan.highlight ? "#fff" : "text.primary",
      borderRadius: 2,
      border: plan.highlight ? "none" : "1px solid #FFD700",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.10)",
        cursor: "pointer",
      },
    }}
  >
    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
      {plan.title}
    </Typography>
    <Typography variant="h4" gutterBottom>
      {plan.price}
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      {plan.description}
    </Typography>
    <Box sx={{ my: 2 }}>
      {plan.features.map((feature, index) => (
        <Typography
          variant="body2"
          key={index}
          sx={{ display: "flex", alignItems: "center", mb: 1 }}
        >
          <CheckCircleIcon
            sx={{ mr: 1, color: plan.highlight ? "#FFD700" : "#000" }}
          />
          {feature}
        </Typography>
      ))}
    </Box>
    <Button
      variant="contained"
      sx={{
        backgroundColor: plan.highlight ? "#448AFF" : "inherit",
        color: plan.highlight ? "#fff" : "#000",
        mt: 2,
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: plan.highlight ? "#357ABD" : "inherit",
        },
      }}
    >
      {plan.buttonText}
    </Button>
  </Paper>
);

export default PriceSection;
