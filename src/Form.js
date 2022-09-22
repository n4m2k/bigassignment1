import React from "react";
import { useState } from "react";

const Form = ({ form, setForm, dataInput, setDataInput, handleSubmit }) => {
  const handleAdd = () => {
    setForm(false);
  };
  const handleCancel = () => {
    setForm(true);
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataInput({ ...dataInput, [name]: value });
  };
  return (
    <div>
      <div>
        {form ? (
          <div className="header">
            <button className="btn_add" onClick={handleAdd}>
              Add new expense
            </button>
          </div>
        ) : (
          <div className="Add">
            <div className="input_list">
              <div className="input_item">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter name here..."
                  name="name"
                  value={dataInput.name}
                  onChange={handleInput}
                />
              </div>
              <div className="input_item">
                <label>Money</label>
                <input
                  type="text"
                  placeholder="Enter name here..."
                  name="money"
                  value={dataInput.money}
                  onChange={handleInput}
                />
              </div>
              <div className="input_item">
                <label>Date</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  name="date"
                  value={dataInput.date}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="btn_item">
              <button className="btn_add2" onClick={handleSubmit}>
                ADD
              </button>
              <button className="btn_cancel" onClick={handleCancel}>
                CANCEL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
