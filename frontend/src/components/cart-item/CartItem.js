import { clearItemFromCart } from '../../redux/cart/cart.actions'
import * as S from './styles'
import { connect } from 'react-redux'

const CartItem = ({ item, clearItem }) => {
  const { imageURL, price, name, quantity } = item

  return (
    <S.CartItemContainer>
      <img src={imageURL} alt={name} />
      <S.CartItemDetails>
        <S.ItemDetail>{name}</S.ItemDetail>
        <S.ItemDetail>
          {quantity} x {price} SEK
        </S.ItemDetail>
      </S.CartItemDetails>
      <S.RemoveButtonContainer onClick={() => clearItem(item)}>
        &#10005;
      </S.RemoveButtonContainer>
    </S.CartItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CartItem)
