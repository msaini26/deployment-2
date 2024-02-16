import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PrototypeResult from "./PrototypeResult";
import ElevatorPitch from "./assets/Elevator_Pitch_Prototype.zip";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

// function will download a zip file of elevator pitch prototype
const downloadPrototype = () => {
  // using js fetch method to download elevator pitch zip file
  fetch(ElevatorPitch).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);

      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Elevator_Pitch.zip";
      alink.click();
    });
  });
};

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
          Download Interactive Prototype
        </Typography>
        <Typography variant="body1" align="left" sx={{ mb: 5 }}>
          Welcome to Elevator Pitch! Click the download button below to download
          the interactive Unity prototype of Elevator Pitch.
        </Typography>
        <Typography variant="body2" align="left" sx={{ mb: 5 }}>
          1. Click the download button below to download the interactive Unity
          prototype of Elevator Pitch.
          <br></br>
          2. Unzip the downloaded folder.
          <br></br>
          3. Open the unzipped folder and double click on the{" "}
          <strong>
            <code>Elevator Pitch.exe </code>
          </strong>
          file to run the prototype.
          <br></br>
          4. Use your mouse or trackpad to experiment in the prototype
          environment. Enjoy! 🎉
        </Typography>
        <Button
          variant="outlined"
          sx={{ mb: 5 }}
          onClick={downloadPrototype}
          value="download"
        >
          Download Prototype
        </Button>

        <PrototypeResult />

        <Copyright />
      </Box>
    </Container>
  );
}
