import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import notesReducer from "./reducers/notesReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(notesReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
