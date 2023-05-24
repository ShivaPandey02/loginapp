export const actionTypes = {
  SET_USERNAME: 'SET_USERNAME',
  SET_PASSWORD: 'SET_PASSWORD',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

export const setUsername = (username: string) => ({
  type: actionTypes.SET_USERNAME,
  payload: username,
});

export const setPassword = (password: string) => ({
  type: actionTypes.SET_PASSWORD,
  payload: password,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
