import { useState } from "react";
import "./MovieForm.css";

const MovieForm = (props) => {
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
    props.saveMovieData(NewMovieObj);
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
          <br />
          <input type="text" onChange={titleChangeHandler}></input>
          &nbsp;
          <br />
          <br />
          <label>
            <b>Opening Text</b>
          </label>
          &nbsp;
          <br />
          <br />
          <input type="text" onChange={openingTextChangeHandler}></input>
          &nbsp;
          <br />
          <br />
          <label>
            <b>Release Date</b>
          </label>
          &nbsp;
          <br />
          <br />
          <input type="date" onChange={releaseDateChangeHandler}></input>
          &nbsp;
          <br />
          <br />
          <button type="submit">Add Movie</button>
        </form>
      </section>
    </>
  );
};

export default MovieForm;
