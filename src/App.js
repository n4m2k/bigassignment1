import React from "react";
import Form from "./Form";
import ListChart from "./ListChart";
import ListExpense from "./ListExpense";
import Filter from "./Filter";
import { useState } from "react";

const App = () => {
  const [List, setList] = useState([
    {
      name: "Some Book",
      money: 50,
      date: "2022-04-16",
    },
    {
      name: "Electric Bill",
      money: 75,
      date: "2022-03-16",
    },
    {
      name: "New Bike2",
      money: 100,
      date: "2022-06-16",
    },
  ]);

  const [dataInput, setDataInput] = useState({ name: "", money: "", date: "" });
  const [form, setForm] = useState(true);
  const [filterYear, setFilterYear] = useState(2022);
  const [listChart, setListChart] = useState([]);
  const [month1, setMonth] = useState([
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
  const handleSubmit = () => {
    const listDataTemp = [...List];
    listDataTemp.push(dataInput);
    setList(listDataTemp);
    setForm(true);
    setDataInput("");
    console.log(listDataTemp);
  };
  const convertMonth = (month) => {
    for (let i = 0; i < 11; i++) {
      if (month == monthNumber[i]) {
        month = month1[i];
      }
    }
    return month;
  };
  const handleGetYearFilter = (e) => {
    let total = 0;
    setFilterYear(e.target.value);
    const listData = List.filter((element) => {
      return element.date.split("-")[0] == e.target.value;
    });
    for (let i = 0; i < listData.length; i++) {
      total = total + parseInt(listData[i].money);
    }
    for (let i = 0; i < listData.length; i++) {
      listData[i].percent = listData[i].money / total;
    }
    setListChart(listData);
  };
  return (
    <div>
      <Form
        form={form}
        setForm={setForm}
        dataInput={dataInput}
        setDataInput={setDataInput}
        handleSubmit={handleSubmit}
      ></Form>
      <div className="container">
        <Filter handleGetYearFilter={handleGetYearFilter}></Filter>
        <div className="chart">
          {listChart.map((item) => {
            return (
              <ListChart
                month={convertMonth(item.date.split("-")[1])}
                money={item.percent}
              ></ListChart>
            );
          })}
        </div>
        {List.map((item) => {
          return (
            <ListExpense
              name={item.name}
              money={item.money}
              date={item.date}
            ></ListExpense>
          );
        })}
      </div>
    </div>
  );
};

export default App;
