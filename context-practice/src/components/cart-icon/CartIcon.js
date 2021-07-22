import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import * as S from './styles'
import CartContext from '../../contexts/cart/cart.context'
import { useContext } from 'react'

const CartIcon = () => {
  const { toggleHidden } = useContext(CartContext)

  return (
    <S.CartIconContainer onClick={toggleHidden}>
      <S.ShoppingBagIcon className='shopping-bag-icon' />
      <S.ItemCount className='item-count'>1</S.ItemCount>
    </S.CartIconContainer>
  )
}

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// })

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// })

export default CartIcon
