import "./App.scss";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Login from "./Components/login/Login";
import localStore from "./Components/localStorage/localStore";
import { loadUser } from "./Components/reducers/reducerAction/login";
import tokenToHeader from "./Components/localStorage/tokenToHeader"
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
