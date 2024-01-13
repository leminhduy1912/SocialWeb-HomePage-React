import { API_BASE_URL, api } from "../../components/configs/api";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
} from "../Auth/auth.actionType";
import axios from "axios";

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/auth/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    console.log("profile------", data.jwt);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("error-----", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};
export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.put(
      `${API_BASE_URL}/auth/user/profile`,
      reqData
      // headers: {
      //   Authorization: `Bearer ${jwt}`,
      // },
    );
    if (data) {
      localStorage.setItem("jwt", data.jwt);
    }
    console.log("profile------", data.jwt);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("error-----", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};
