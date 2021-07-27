import { lazy, Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Header from './components/header/Header'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import { GlobalStyle } from './global.styles'
import Spinner from './components/spinner/Spinner'

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const SignInOrSignUp = lazy(() =>
  import('./pages/signInOrSignUp/SignInOrSignUp')
)

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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
