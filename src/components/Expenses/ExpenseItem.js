import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //const [title, setTitle] =  useState(props.expense.title);

  /**
   * const clickHandler = () =>{
   * setTitle('new title')
   *}
   */

  //console.log("en expenseItem");
  //console.log(props.expense);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
