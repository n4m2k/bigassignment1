import React from "react";

const ListChart = (datas) => {
  return (
    <div>
      {/* char_item1 */}
      <div className="chart_item">
        <div className="bar">
          <fill style={{ height: `${datas.money * 100}%` }} />
        </div>
        <p className="text_chart">{datas.month}</p>
      </div>
    </div>
  );
};

export default ListChart;
