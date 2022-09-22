import React from "react";

const Filter = ({ handleGetYearFilter }) => {
  return (
    <div>
      <div className="filter">
        <p className="text_filter">Filter by year</p>
        <select className="year_selector" onChange={handleGetYearFilter}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
