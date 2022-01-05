import { SET_CURRENT_USER, SUCCESSFUL_REGISTER } from '../types';

export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USER, payload: user };
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8848/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    dispatch({
      type: SUCCESSFUL_REGISTER,
      payload: result,
    });
  } catch (err) {
    console.log(err);
  }
};
