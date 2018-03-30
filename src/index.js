import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/ConfigureStore";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
