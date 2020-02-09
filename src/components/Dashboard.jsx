import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions";

const Dashboard = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);

  return(
    <div>
      <h1>Welcome {state.data.user.userName}</h1>
      {console.log(`state from dashboard line 16: ${state.data.user}`)}
      {state.data.personalBudget.map(item => (
        <ul key={item.id}>
          <li>id: {item.id}</li>
          <li>Transportation: {item.transportation}</li>
          <li>Food: {item.food}</li>
          <li>Health Insurance: {item.healthInsurance}</li>
          <li>Car Insurance{item.carInsurance}</li>
          <li>Car Loans: {item.carLoans}</li>
          <li>Health Care: {item.healthCare}</li>
          <li>PersonalLoans: {item.personalLoans}</li>
          <li>Other: {item.other}</li>
        </ul>
      ))}
    <Link to="/budgetform">Add Budget</Link>
    </div>
  )
}

export default Dashboard;