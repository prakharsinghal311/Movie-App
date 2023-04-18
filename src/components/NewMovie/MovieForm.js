import { useState } from "react";
import "./MovieForm.css";

const MovieForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredOpening, setEnteredOpening] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const openingTextChangeHandler = (event) => {
    setEnteredOpening(event.target.value);
  };

  const releaseDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const NewMovieObj = {
      title: enteredTitle,
      opening: enteredOpening,
      date: new Date(enteredDate),
    };
    console.log(NewMovieObj);
  };

  return (
    <>
      <section>
        <form onSubmit={submitHandler}>
          <label>
            <b>Title</b>
          </label>
          &nbsp;
          <br />
          <input type="text" onChange={titleChangeHandler}></input>
          &nbsp;
          <br />
          <label>
            <b>Opening Text</b>
          </label>
          &nbsp;
          <br />
          <input type="text" onChange={openingTextChangeHandler}></input>
          &nbsp;
          <br />
          <label>
            <b>Release Date</b>
          </label>
          &nbsp;
          <br />
          <input type="date" onChange={releaseDateChangeHandler}></input>
          &nbsp;
          <br />
          <button type="submit">Add Movie</button>
        </form>
      </section>
    </>
  );
};

export default MovieForm;
