import { actionTypes } from './actions';

interface AppState {
  username: string;
  password: string;
  error: string;
}

const initialState: AppState = {
  username: '',
  password: '',
  error: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return { ...state, username: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default reducer;
