import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import AllRoute from './routes';

function App() {
  return (
    <Provider store={store}>
      <AllRoute />
    </Provider>
  );
}

export default App;
