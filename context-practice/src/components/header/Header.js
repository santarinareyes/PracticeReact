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
import { useContext, useState } from 'react'
import CartContext from '../../contexts/cart/cart.context'

const Header = () => {
  const currentUser = useContext(CurrentUserContext)
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => setHidden(!hidden)

  return (
    <S.HeaderContainer>
      <S.LogoContainer to='/'>
        <Logo />
      </S.LogoContainer>
      <S.NavOptions>
        <S.OptionLink to='/products'>Products</S.OptionLink>
        {currentUser ? (
          <S.OptionLink as='div' onClick={toggleHidden}>
            Sign Out
          </S.OptionLink>
        ) : (
          <S.OptionLink to='/signin'>Sign In</S.OptionLink>
        )}
        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </S.NavOptions>
      {!hidden && <CartDropdown />}
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
