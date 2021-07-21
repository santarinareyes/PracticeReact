import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import * as S from './styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <S.CartDropdownContainer>
    <S.ItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <S.EmptyMessage>You cart is empty</S.EmptyMessage>
      )}
    </S.ItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      CHECKOUT
    </CustomButton>
  </S.CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
