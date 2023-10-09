import React from "react";
import { Link } from "react-router-dom";
import { URL_MOVIES } from "../asyncActions/data";
import {
  IconButton,
  Typography,
  CardMedia,
  CardActions,
  Card,
  CardContent,
} from "@mui/material";
import { Backspace } from "@mui/icons-material";

export function FilmDetailsCard({
  poster_path,
  backdrop_path,
  original_title,
  overview,
  vote_average,
  release_date,
}) {
  return (
    <>
      <Card
        sx={{
          width: 500,
          height: 800,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 5,
          padding: 2,
        }}
      >
        <CardMedia
          sx={{ width: 400, height: 500, boxShadow: 5 }}
          image={`${URL_MOVIES.IMAGE}${poster_path || backdrop_path}`}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography align="center" fontSize={13} color="text.secondary">
            {overview}
          </Typography>
          <Typography align="center" fontSize={25} color="text.secondary">
            Rating: {vote_average}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton component={Link} to={"/"} aria-label="Backspace">
            <Backspace />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
