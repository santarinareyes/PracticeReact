import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Products from "./pages/products/Products";
import SignInOrSignUp from "./pages/signInOrSignUp/SignInOrSignUp";
import Header from "./components/header/Header";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
