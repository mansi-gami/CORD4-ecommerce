export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const INITIALIZE_AUTH = 'INITIALIZE_AUTH';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const initializeAuth = (user) => ({
  type: INITIALIZE_AUTH,
  payload: user,
});