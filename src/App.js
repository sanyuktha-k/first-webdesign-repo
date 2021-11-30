import "./App.scss";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Login from "./Components/login/Login";
import localStore from "./Components/localStorage/LocalStore";
import { loadUser } from "./Components/reducers/reducerAction/Login";
import tokenToHeader from "./Components/localStorage/TokenToHeader";
import { BrowserRouter as Router } from "react-router-dom";

console.log("fetching token");
if (localStorage.token) {
  console.log("token found!");
  tokenToHeader(localStorage.token);
}

console.log("calling local store component");
const App = () => {
  useEffect(() => {
    localStore.dispatch(loadUser());
  }, []);

  return (
    <Provider store={localStore}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
};

export default App;
