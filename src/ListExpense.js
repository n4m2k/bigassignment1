import React from "react";
import { useState } from "react";
const ListExpense = (props) => {
  const date1 = props.date.split("-");
  const [month, setMonth] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [monthNumber, setMonthNumer] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  for (let i = 0; i < 11; i++) {
    if (date1[1] == monthNumber[i]) {
      date1[1] = month[i];
    }
  }
  return (
    <div>
      <div className="expense_list">
        {/* expense_item1 */}
        <div className="expense_item">
          {/* box-time */}
          <div className="date">
            <div className="month">{date1[1]}</div>
            <div className="year">{date1[0]}</div>
            <div className="day">{date1[2]}</div>
          </div>
          {/* title */}
          <div className="title_expense">
            <p className="title_expense_item">{props.name}</p>
          </div>
          {/* box-money */}
          <div className="box_money">
            <p className="title_money">${props.money}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListExpense;
