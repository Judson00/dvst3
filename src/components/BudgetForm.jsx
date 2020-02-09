import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBudget } from "../actions";

const BudgetForm = () => {
  const [budget, setBudget] = useState({
    id: "",
    transportation: 0,
    food: 0,
    healthInsurance: 0,
    carInsurance: 0,
    healthCare: 0,
    carLoans: 0,
    personalLoans: 0,
    other: 0,
    user_id: 0
  })

  const dispatch = useDispatch();

  const handleChanges = e => {
    e.preventDefault();
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newBudget = {
      ...budget
    };

    dispatch(addBudget(newBudget));

    setBudget({
        id: "",
        transportation: 0,
        food: 0,
        healthInsurance: 0,
        carInsurance: 0,
        healthCare: 0,
        carLoans: 0,
        personalLoans: 0,
        other: 0,
        user_id: 0
    });
  };

  return(
    <form onSubmit={submitForm}>
      <input  
        id="transportation"
        name="transportation"
        placeholder="Transportation"
        type="number"
        value={budget.transportation}
        onChange={handleChanges}
      />
      <input 
        id="food"
        name="food"
        placeholder="Food"
        type="number"
        value={budget.food}
        onChange={handleChanges}
      />
      <input  
        id="healthInsurance"
        name="healthInsurance"
        placeholder="Health Insurance"
        type="number"
        value={budget.healthInsurance}
        onChange={handleChanges}
      />
      <input 
        id="carInsurance"
        name="carInsurance"
        placeholder="Car Insurance"
        type="number"
        value={budget.carInsurance}
        onChange={handleChanges}
      />
      <input  
        id="healthCare"
        name="healthCare"
        placeholder="Health Care"
        type="number"
        value={budget.healthCare}
        onChange={handleChanges}
      />
      <input 
        id="carLoans"
        name="carLoans"
        placeholder="Car Loans"
        type="number"
        value={budget.carLoans}
        onChange={handleChanges}
      />
      <input  
        id="personalLoans"
        name="personalLoans"
        placeholder="Personal Loans"
        type="number"
        value={budget.personalLoans}
        onChange={handleChanges}
      />
      <input 
        id="other"
        name="other"
        placeholder="Other"
        type="Number"
        value={budget.other}
        onChange={handleChanges}
      />

      <button type="Submit">Add Budget</button>
    </form>
  )
}

export default BudgetForm;