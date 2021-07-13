import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import * as S from './styles'

const Header = ({ currentUser, hidden }) => (
  <S.HeaderContainer>
    <S.LogoContainer>
      <Logo />
    </S.LogoContainer>
    <S.NavOptions>
      <S.OptionLink to='/products'>Products</S.OptionLink>
      {currentUser ? (
        <S.OptionDiv onClick={() => auth.signOut()}>Sign Out</S.OptionDiv>
      ) : (
        <S.OptionLink to='/signin'>Sign In</S.OptionLink>
      )}
      <CartIcon />
    </S.NavOptions>
    {!hidden && <CartDropdown />}
  </S.HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
