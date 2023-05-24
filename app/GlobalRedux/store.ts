import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
// import { , configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers';


const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here if you have more slices in your store
  });
  
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
