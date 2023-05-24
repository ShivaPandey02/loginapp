"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginScreen from './Pages/loginscreen';
import store from './GlobalRedux/store'

const DashboardPage = () => {
  return ( <Provider store={store}>
    <div>
      <Router><LoginScreen />
      </Router>
      </div>
    </Provider>
  );
};

export default DashboardPage;

