import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Let's create a simple number counter, starting from 0 until infinity!

// Create 3 functional components called <Counter>, <Count> and <Button>
// Inside <Counter> define a state variable called count (initialized with value 0) and state handler called setCount
// Inside <Button> create a <button> with the text Add 1! and onClick attribute
// Pass down the count state variable to <Count>, and the setCount to <Button>
// Inside <Counter>, declare a variable called feedback above the return statement. Give this variable a ternary operator value: if count is higher than 10 it should display the string "It's higher than 10!", else it displays "Keep counting..."
// Test out if it works by importing <Counter> into the top level component, which is <App></App>
