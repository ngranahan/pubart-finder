import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 window.userGlobal = "hacky garbage";
// console.log(window.userGlobal);
ReactDOM.render(<App />, document.getElementById('root'));
