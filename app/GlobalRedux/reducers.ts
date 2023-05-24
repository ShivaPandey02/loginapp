import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  username: string;
  password: string;
  error: string;
}

const initialState: AuthState = {
  username: '',
  password: '',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});

export const { setUsername, setPassword, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
