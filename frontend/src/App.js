import { lazy, Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Header from './components/header/Header'
import {
  selectCurrentUser,
  selectUserIsLoading,
} from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import { GlobalStyle } from './global.styles'
import Spinner from './components/spinner/Spinner'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import ContactPage from './pages/contact/Contact'
import AccountPage from './pages/account/Account'

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const SignInOrSignUp = lazy(() =>
  import('./pages/signInOrSignUp/SignInOrSignUp')
)

const App = ({ currentUser, checkUserSession, isLoading }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/account' component={AccountPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInOrSignUp />
              }
            />
            <Route path='/products' component={ProductsPage} />
            <Route path='/contact' component={ContactPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectUserIsLoading,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
