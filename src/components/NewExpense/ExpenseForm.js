import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //const titleHandler = (event) => {
  //console.log(event.target.value);
  //setUserInput({
  //...userInput,
  //  enteredTitle: event.target.value
  //})
  //setUserInput((prevState)=>{
  //  return {...prevState, enteredTitle: event.target.value}
  //})
  //}

  //const amountHandler = (event) => {
  //console.log(event.target.value);
  //setUserInput({
  //  ...userInput,
  //  enteredAmount: event.target.value
  //})

  //setUserInput((prevState)=>{
  //  return {...prevState, enteredAmount: event.target.value}
  //})
  //}

  //const dateHandler = (event) => {
  //console.log(event.target.value);
  //setUserInput({
  //  ...userInput,
  //  enteredDate: event.target.value
  //})
  //setUserInput((prevState)=>{
  //  return {...prevState, enteredDate: event.target.value}
  //})
  //}

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if(identifier === 'amount') {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: +value };
      });
    } else if(identifier === 'date') {
      //console.log(value);
      //console.log(value.split("-").reverse().join("-"));
      //console.log(value.toString());
      //console.log(value.split("-").join(" "));
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value.split("-").join("-")};
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputObj = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    props.onNewExpense(inputObj);
    props.onCancel();
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2020"
            max="01-01-2025"
            value={userInput.enteredDate}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
