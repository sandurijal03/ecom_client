import { ERRORS, SET_CURRENT_USER, SUCCESSFUL_REGISTER } from '../types';
import { isEmpty, min } from 'lodash';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: {},
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
      };
    case SUCCESSFUL_REGISTER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case ERRORS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
