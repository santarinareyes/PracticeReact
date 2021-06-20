import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Products from "./pages/products/Products";
import SignInOrSignUp from "./pages/signInOrSignUp/SignInOrSignUp";
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={SignInOrSignUp} />
      </Switch>
    </div>
  );
}

export default App;
