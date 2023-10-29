import axios from "axios";
import { GET } from "./actionType";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET,
      payload: res.data,
      
    });
  } catch (error) {
    console.log(error);
  }
};
