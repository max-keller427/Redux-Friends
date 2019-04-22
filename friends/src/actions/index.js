import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FRIENDS_START = "FRIENDS_START";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_FAILURE = "FRIENDS_FAILURE";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS });
  });
};

export const getFriendsData = () => dispatch => {
  dispatch({ type: FRIENDS_START });
  axios
    .get("http://localhost5000/api/data", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: FRIENDS_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FRIENDS_FAILURE, payload: err.response });
    });
};
