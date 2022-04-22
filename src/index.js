import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App8 from './App8';
import { BrowserRouter } from 'react-router-dom';
// import App7 from './App7';
//import App3 from './App3';
//import App from './App';
//import App2 from './App2';
// import App4 from './App4';
// import App5 from './App5';
// import App6 from './App6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App8/>
  </BrowserRouter>,
  document.getElementById('root'),
);
// ReactDOM.render(
//   <BrowserRouter>
//     <App8/>
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/*<App />*/}
//     {/* <App2 /> */}
//     {/* <App3 /> */}
//     {/* <App4 /> */}
//     {/* <App5 /> */}
//     {/* <App6 /> */}
//     {/* <App7 /> */}
//     <App8 />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
