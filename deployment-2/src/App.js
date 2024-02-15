import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";
import SceneFlow from "./SceneFlow";
import SplashExperience from "./SplashExperience";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Elevator Pitch {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 5 }}>
          Elevator Pitch Deployment #2
        </Typography>

        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Prototype Design Documentation
        </Typography>
        <Typography variant="body1" align="left" sx={{ mb: 5 }}>
          This is the second prototype deployment of Elevator Pitch.
        </Typography>
        <PrototypeResult />

        <Copyright />
      </Box>
    </Container>
  );
}
