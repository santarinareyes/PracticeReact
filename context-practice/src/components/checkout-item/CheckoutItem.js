import { connect } from 'react-redux'
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions'
import * as S from './styles'
import { CartContext } from '../../providers/cart/cart.provider'
import { useContext } from 'react'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)
  return (
    <S.CheckoutItemContainer className='checkout-item'>
      <S.ImageContainer className='image-container'>
        <img src={imageURL} alt='a' />
      </S.ImageContainer>
      <S.TextContainer className='name'>{name}</S.TextContainer>
      <S.QuantityContainer className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span classname='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </S.QuantityContainer>
      <S.TextContainer className='price'>{price} SEK</S.TextContainer>
      <S.RemoveButtonContainer
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </S.RemoveButtonContainer>
    </S.CheckoutItemContainer>
  )
}

// const mapDispatchToProps = dispatch => ({
//   // clearItem: item => dispatch(clearItemFromCart(item)),
//   // addItem: item => dispatch(addItemToCart(item)),
//   // removeItem: item => dispatch(removeItemFromCart(item)),
// })

export default CheckoutItem
