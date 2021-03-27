import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./components/reducers/";
import { Provider } from "react-redux";
import getPosts from "./components/reducers/get-posts";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import { createStore } from "redux";
// import allReducers from "./reducers";
// import { Provider } from "react-redux";

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
