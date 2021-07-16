import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Homepage from './pages/homepage/Homepage'
import ProductsPage from './pages/products/ProductsPage'
import SignInOrSignUp from './pages/signInOrSignUp/SignInOrSignUp'
import Checkout from './pages/checkout/Checkout'

import Header from './components/header/Header'

import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.actions'

import './App.css'
import { useEffect } from 'react'

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }, [setCurrentUser])

  console.log('app rendered')

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInOrSignUp />
          }
        />
        <Route path='/products' component={ProductsPage} />
      </Switch>
    </div>
  )
}

// class App extends React.Component {
//   unsubscribeFromAuth = null

//   componentDidMount() {
//     const { setCurrentUser } = this.props
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDoc(userAuth)
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           })
//         })
//       }
//       setCurrentUser(userAuth)
//     })
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth()
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={Homepage} />
//           <Route exact path='/checkout' component={Checkout} />
//           <Route
//             exact
//             path='/signin'
//             render={() =>
//               this.props.currentUser ? <Redirect to='/' /> : <SignInOrSignUp />
//             }
//           />
//           <Route path='/products' component={ProductsPage} />
//         </Switch>
//       </div>
//     )
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
