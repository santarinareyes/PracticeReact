import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Homepage from './pages/homepage/Homepage'
import ProductsPage from './pages/products/ProductsPage'
import SignInOrSignUp from './pages/signInOrSignUp/SignInOrSignUp'
import Checkout from './pages/checkout/Checkout'

import Header from './components/header/Header'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import { useEffect } from 'react'

import './App.css'

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
    // auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDoc(userAuth)
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       })
    //     })
    //   }
    //   setCurrentUser(userAuth)
    // })
  }, [checkUserSession])

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
