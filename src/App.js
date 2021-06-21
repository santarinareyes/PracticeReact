import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Products from "./pages/products/Products";
import SignInOrSignUp from "./pages/signInOrSignUp/SignInOrSignUp";
import Header from "./components/header/Header";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/products" component={Products} />
//         <Route path="/signin" component={SignInOrSignUp} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Products} />
          <Route path="/signin" component={SignInOrSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
