import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PrototypeResult from "./PrototypeResult";
import ElevatorPitch from "./assets/Elevator_Pitch_Prototype.zip";

 // Function will execute on click of button
 const onButtonClick = () => {
     
  // using js fetch method to download elevator pitch zip file
  fetch(ElevatorPitch).then((response) => {
      response.blob().then((blob) => {
       
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
               
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Elevator_Pitch.zip";
          alink.click();
      });
  });
};

const downloadExeFile = () => {
  // file object
  const file = new Blob([ElevatorPitch], { type: "application/octet-stream" });
  // anchor link
  const element = document.createElement("a");
  element.href = URL.createObjectURL(file);
  element.download = "Elevator_Pitch.exe";
  // simulate link click
  document.body.appendChild(element); // Required for this to work in FireFox
  console.log(element);
  element.click();
  document.body.removeChild(element);
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
          This is the second prototype deployment of Elevator Pitch.
        </Typography>
        <div className="btnDiv">
          <button id="downloadBtn" onClick={onButtonClick} value="download">
            Download
          </button>
        </div>

        <PrototypeResult />

     
        <Copyright />
      </Box>
    </Container>
  );
}
