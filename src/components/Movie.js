import React, { useState } from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const [deleteState, setDeleteState] = useState(false);

  const deleteHandler = async () => {
    await fetch(
      `https://react-http-41d8a-default-rtdb.firebaseio.com/movies/${props.movieId}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setDeleteState((deleteS) => !deleteS);
  };

  props.saveDeleteState(deleteState);

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete Movie</button>
    </li>
  );
};

export default Movie;
