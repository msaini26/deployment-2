import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import protoResult from "./assets/crazy.gif";
import anotherResult from "./assets/yessir.gif";

export default function PrototypeResult() {
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
      <Card sx={{ maxWidth: "100%", paddingBottom: "10%" }}>
        <CardMedia
          component="img"
          height="50%"
          image={anotherResult}
          alt="prototype result"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Push-and-Pull Mechanic Preview #1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here is an image of what the player might encounter in the
            interactive prototype.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: "100%", paddingBottom: "10%" }}>
        <CardMedia
          component="img"
          height="50%"
          image={protoResult}
          alt="another prototype"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Push-and-Pull Mechanic Preview #2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here is another preview image for the interactive prototype of what
            the player might encounter.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
