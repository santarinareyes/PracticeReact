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
import { useEffect, useState } from 'react'
import './App.css'
import CurrentUserContext from './contexts/current-user/current-user.context'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      }
    })
  }, [])

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
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

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// })

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// })

export default App
