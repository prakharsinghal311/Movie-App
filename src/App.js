import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieForm from "./components/NewMovie/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function stopRetrying() {
    setError(null);
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch(
        "https://react-http-41d8a-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].opening,
          releaseDate: data[key].date,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  useEffect(() => {
    if (error) {
      var fetchId = setInterval(fetchMoviesHandler, 2000);
    }
    return () => clearInterval(fetchId);
  }, [fetchMoviesHandler, error]);

  const saveMovieDataHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-41d8a-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
  };

  let deleteValue;
  const deleteStateFunctionHandler = (deleteState) => {
    deleteValue = deleteState;
  };

  let content = <p>Found No Movies.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        deleteStateFunction={deleteStateFunctionHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <MovieForm saveMovieData={saveMovieDataHandler} />
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={stopRetrying}>Cancel</button>
        {deleteValue};<br></br>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
