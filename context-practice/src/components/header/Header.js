import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import * as S from './styles'
import CurrentUserContext from '../../contexts/current-user/current-user.context'
import { useContext } from 'react'

const Header = () => {
  const currentUser = useContext(CurrentUserContext)

  return (
    <S.HeaderContainer>
      <S.LogoContainer to='/'>
        <Logo />
      </S.LogoContainer>
      <S.NavOptions>
        <S.OptionLink to='/products'>Products</S.OptionLink>
        {currentUser ? (
          <S.OptionLink as='div' onClick={signOutStart}>
            Sign Out
          </S.OptionLink>
        ) : (
          <S.OptionLink to='/signin'>Sign In</S.OptionLink>
        )}
        <CartIcon />
      </S.NavOptions>
      {<CartDropdown />}
    </S.HeaderContainer>
  )
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
// })

// const mapDispatchToProps = dispatch => ({
//   signOutStart: () => dispatch(signOutStart()),
// })

export default Header
