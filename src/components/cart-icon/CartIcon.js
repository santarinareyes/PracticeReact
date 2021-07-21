import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import * as S from './styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <S.CartIconContainer onClick={toggleCartHidden}>
    <S.ShoppingBagIcon className='shopping-bag-icon' />
    <S.ItemCount className='item-count'>{itemCount}</S.ItemCount>
  </S.CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
