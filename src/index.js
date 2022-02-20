import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./main.scss";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reservatiorReducer from "./features/reservation";

const store = configureStore({
  reducer: {
    reservation: reservatiorReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
