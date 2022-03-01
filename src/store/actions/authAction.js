import {
  AUTH_ERROR,
  ERRORS,
  FAILURE_REGISTER,
  SET_CURRENT_USER,
  SUCCESSFUL_REGISTER,
} from '../types';
import axios from 'axios';
import { setAuthToken, getServer } from '../../util';

export const setCurrentUser = (user) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await axios.get(`${getServer()}/api/users`);
    dispatch({
      type: SET_CURRENT_USER,
      payload: response.data,
    });
  } catch (err) {
    const error = err.response.data.error;
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

// export const register = (userData) => async (dispatch) => {
//   try {
//     const response = await fetch('http://localhost:8848/api/users/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     const result = await response.json();
//     dispatch({
//       type: SUCCESSFUL_REGISTER,
//       payload: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const registerUserWithAxios = (userData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      `${getServer()}/api/users/register`,
      userData,
      config,
    );
    dispatch({
      type: SUCCESSFUL_REGISTER,
      payload: response.data,
    });
  } catch (err) {
    const error = err.response.data.errors;
    if (error) {
      dispatch({
        type: ERRORS,
        payload: error,
      });
    } else {
      dispatch({
        type: FAILURE_REGISTER,
      });
    }
  }
};
