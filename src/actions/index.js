import { axiosWithAuth } from "../utils/axiosWithAuth";
import { DATA_START, DATA_SUCCESS, DATA_FAILURE } from "../reducers";
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