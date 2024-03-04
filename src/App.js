import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PrototypeResult from "./PrototypeResult";
import ElevatorPitch from "./assets/Elevator_Pitch_Prototype.zip";
import Button from "@mui/material/Button";
import "./fade.css";
import colors from "./css-colors";

// font importing
import "./font.css";
import "./fonts/Verve.ttf";
import "./fonts/VerveAlternate.ttf";
import "./fonts/VerveShadow.ttf";
import "./fonts/Titania-Outline.ttf";
import "./fonts/Titania-Shadow.ttf";
import "./fonts/Titania-Regular.ttf";
import "./fonts/Book.otf";
import "./fonts/Chopper.ttf";

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
      console.log("Downloading Elevator Pitch prototype...");
    });
  });
};

const gradientColors = [
  "hsla(24, 100%, 50%, 1) 10%",
  "hsla(37, 100%, 48%, 1) 37%",
  "hsla(45, 100%, 50%, 1) 69%",
  "hsla(60, 100%, 50%, 1) 100%",
];

const gradientStyle = {
  background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ fontFamily: "Chop" }}
    >
      {"Copyright © "}
      Elevator Pitch {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <FadeInSection>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            className="blink"
            sx={{ mb: 5, fontFamily: "VerveRegular" }}
          >
            Elevator Pitch Deployment #2
          </Typography>

          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontFamily: "VerveAlt" }}
          >
            Download Interactive Prototype
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{ mb: 5, fontFamily: "Chop", letterSpacing: "3px" }}
          >
            Welcome to Elevator Pitch! Click the download button below to
            download the interactive Unity prototype of Elevator Pitch.
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ mb: 5, fontFamily: "Chop", letterSpacing: "3px" }}
          >
            1. Click the download button below to download the interactive Unity
            prototype of Elevator Pitch.
            <br></br>
            <strong>
              <i>
                Note: It may take a second to download depending on your
                internet speed.
              </i>
            </strong>
            <br></br>
            <br></br>
            2. Unzip the downloaded folder.
            <br></br>
            <br></br>
            3. Open the unzipped folder and double click on the{" "}
            <strong>
              <code>Elevator Pitch.exe </code>
            </strong>
            file to run the prototype.
            <br></br>
            <br></br>
            4. Use your mouse or trackpad to experiment in the prototype
            environment. Enjoy! 🎉
          </Typography>
          <Button
            variant="outlined"
            className="blink"
            sx={{
              mb: 5,
              fontSize: "20px",
              fontFamily: "TitaniaRegular",
              textTransform: "none",
            }}
            onClick={downloadPrototype}
            value="download"
            style={gradientStyle}
          >
            Download Prototype
          </Button>

          <PrototypeResult />

          <Copyright />
        </Box>
      </FadeInSection>
    </Container>
  );
}
