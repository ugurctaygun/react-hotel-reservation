import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./main.scss";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reservatiorReducer from "./features/reservation";
import { updateState } from "./features/reservation";
import { loadState, saveState } from "./helper/localStorage";

const persistedState = loadState();

const store = configureStore({
  persistedState,
  reducer: {
    reservation: reservatiorReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

if (persistedState) {
  store.dispatch(
    updateState({
      step: persistedState.reservation.value.step,
      selectedHotel: persistedState.reservation.value.selectedHotel,
      selectedHotelName: persistedState.reservation.value.selectedHotelName,
    })
  );
}

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
