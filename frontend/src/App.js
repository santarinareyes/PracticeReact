import { lazy, Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ProductsPage from './pages/products/ProductsPage'
import SignInOrSignUp from './pages/signInOrSignUp/SignInOrSignUp'
import Checkout from './pages/checkout/Checkout'
import Header from './components/header/Header'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import { GlobalStyle } from './global.styles'

const Homepage = lazy(() => import('./pages/homepage/Homepage'))

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Homepage} />
        </Suspense>
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
