import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Error, Info, StarBorder, StarRate } from "@mui/icons-material";
import {
  IconButton,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { getFavMovies } from "../asyncActions/get.favorites.movies";
import { searchMovies } from "../asyncActions/set.search.movies";
import { URL_MOVIES } from "../asyncActions/data";
import { addFavMovies } from "../asyncActions/add.favorites.movies";
import { getMoviesCards } from "../asyncActions/get.movies";

export function MediaCard() {
  const {
    pagination: { currentPage },
    filters: { filtersSorting, error },
    movies: {
      movies: { results },
      eventFavoritesMovies,
      favoritesMoviesId,
    },
    search: { event: eventSearchMovie },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavMovies());
  }, [dispatch, eventFavoritesMovies]);

  useEffect(() => {
    dispatch(getMoviesCards(filtersSorting, currentPage));
  }, [dispatch, filtersSorting, currentPage, eventSearchMovie]);

  useEffect(() => {
    if (eventSearchMovie) {
      dispatch(searchMovies(eventSearchMovie));
    }
  }, [dispatch, eventSearchMovie]);

  const handleChangeFanMovies = (id, isFavorite) => {
    dispatch(addFavMovies(id, isFavorite));
  };

  return results?.map((movie) => {
    const isFavorite = favoritesMoviesId.includes(movie.id);
    return (
      <Card
        key={movie.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 200,
          margin: 1,
          padding: 2,
          boxShadow: 3,
        }}
      >
        <CardMedia
          sx={{
            height: 275,
            border: 1,
          }}
          image={`${URL_MOVIES.IMAGE}${
            movie.poster_path || movie.backdrop_path
          }`}
        />
        <CardContent>
          <Typography align="center" gutterBottom fontSize={15} component="div">
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.vote_average}
          </Typography>
          {!error ? (
            !isFavorite ? (
              <>
                <IconButton
                  onClick={() => handleChangeFanMovies(movie.id, true)}
                  aria-label="StarBorder"
                >
                  <StarBorder />
                </IconButton>
                <IconButton
                  component={Link}
                  to={`/film/${movie.id}`}
                  aria-label="StarBorder"
                >
                  <Info />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  onClick={() => handleChangeFanMovies(movie.id, false)}
                  aria-label="Star"
                >
                  <StarRate />
                </IconButton>
                <IconButton
                  component={Link}
                  to={`/film/${movie.id}`}
                  aria-label="StarBorder"
                >
                  <Info />
                </IconButton>
              </>
            )
          ) : (
            <IconButton onClick={() => alert(error)} aria-label="Error">
              <Error />
              <Typography variant="body">error</Typography>
            </IconButton>
          )}
        </CardActions>
      </Card>
    );
  });
}
