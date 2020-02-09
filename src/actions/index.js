import { axiosWithAuth } from "../utils/axiosWithAuth";
import { DATA_START, DATA_SUCCESS, DATA_FAILURE, ADD_NEW_BUDGET } from "../reducers";
import { useParams } from "react-router";

export const fetchUser = () => dispatch => {
  dispatch({ type: DATA_START });
  let id = localStorage.getItem("userID");
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
      console.log(`res from actions line 12: ${res.data}`)
      dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err) 
      dispatch({ type: DATA_FAILURE, payload: err })
    })
}

export const addBudget = user => dispatch => {
  let id = localStorage.getItem("userID")
  axiosWithAuth()
    .post(`/users/${id}/personal`)
    .then(res => {
      console.log(`res from actions line 26 ${res}`)
      dispatch({ type: ADD_NEW_BUDGET, payload: res })
    })
    .catch(err => {
      console.log(`error action line 29 ${err}`)
    })
}