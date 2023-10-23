import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2022");

  const onChangeFilter = (year) => {
    //console.log(year);
    setYearSelected(year);
  };
  
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={onChangeFilter}
          selectedYear={yearSelected}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
