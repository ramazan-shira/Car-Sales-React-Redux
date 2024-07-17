import rootReducer from "./Reducers";

import { createStore } from "@reduxjs/toolkit";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
