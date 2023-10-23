import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          yearFiltered={props.yearSelected}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
