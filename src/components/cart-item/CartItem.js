import * as S from './styles'

const CartItem = ({ item: { imageURL, price, name, quantity } }) => (
  <S.CartItemContainer>
    <img src={imageURL} alt={name} />
    <S.CartItemDetails>
      <S.ItemDetail>{name}</S.ItemDetail>
      <S.ItemDetail>
        {quantity} x {price} SEK
      </S.ItemDetail>
    </S.CartItemDetails>
  </S.CartItemContainer>
)

export default CartItem
