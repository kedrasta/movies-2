import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FilmDetailsCard } from "./Card_movies";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsMovie } from "../asyncActions/get.getails.movies";

export function FilmDetails() {
  const { moiveId } = useParams();

  const movie = useSelector((state) => state.detailsMovies.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsMovie(moiveId));
  }, [dispatch, moiveId]);

  return (
    <Box>
      <FilmDetailsCard {...movie} />;
    </Box>
  );
}
