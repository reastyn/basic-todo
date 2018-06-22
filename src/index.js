// @flow
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import type { Store } from "./constants/types.js";
import reducers from "./reducers";
import { saveState, loadState } from "./helpers/localStorage";

const store: Store = createStore(
  reducers,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.getElementById("root");
if (!root) {
  throw new Error("No element with id root!");
}

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
registerServiceWorker();
