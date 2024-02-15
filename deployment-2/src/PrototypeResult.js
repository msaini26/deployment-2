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
      <Card sx={{ maxWidth: "100%", paddingBottom: '10%' }}>
        <CardMedia
          component="img"
          height="50%"
          image={anotherResult}
          alt="prototype result"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Push-and-Pull Mechanic Result #1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The GIF above depicts an interactive prototype developed in Unity.
            You can see the player's pull movement towards the orange cylinder
            on the screen. As the player moves towards the object, the player's
            gravity will be rotated to match the new setting.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: "100%", paddingBottom: '10%' }}>
        <CardMedia
          component="img"
          height="50%"
          image={protoResult}
          alt="another prototype"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            Lo-fi Push-and-Pull Mechanic Result #2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The GIF above depicts a Unity prototype with the player's utilization of the walls and
            orange cylinder to progress further in the game. As the player pulls
            themselves towards the orange cylinder, their gravity is rotated
            once again to match the new setting.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
