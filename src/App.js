import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Products from "./pages/products/Products";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
