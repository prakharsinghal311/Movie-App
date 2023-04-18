import { useState } from "react";

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
    const movieData = {
      title: enteredTitle,
      opening: enteredOpening,
      date: new Date(enteredDate),
    };
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}></input>
        <label>Opening Text</label>
        <input type="text" onChange={openingTextChangeHandler}></input>
        <label>Release Date</label>
        <input type="date" onChange={releaseDateChangeHandler}></input>
      </form>
    </>
  );
};

export default MovieForm;
