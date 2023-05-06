import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const saveDeleteStateHandler = (deleteState) => {
    props.deleteStateFunction(deleteState);
  };

  return (
    <>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            movieId={movie.id}
            saveDeleteState={saveDeleteStateHandler}
            deleteMovie={props.deleteMovie}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
