import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newExpenseHandler = (expenseData) => {
    //console.log("NewExpense");
    //console.log(expenseData);
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
  };

  const addNewExpenseHandler = () => {
    setShowForm(!showForm);
  };

  let addNewExpense = "";

  if (showForm) {
    addNewExpense = (
      <ExpenseForm
        onNewExpense={newExpenseHandler}
        onCancel={addNewExpenseHandler}
      />
    );
  } else {
    addNewExpense = (
      <div className="new-expense__actions">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return <div className="new-expense">{addNewExpense}</div>;
};

export default NewExpense;
