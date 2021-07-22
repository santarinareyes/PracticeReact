import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'
import * as S from './styles'
import { CartContext } from '../../providers/cart/cart.provider'
import { useContext } from 'react'

const CategoryItem = ({ item }) => {
  const { imageURL, name, price } = item
  const { addItem } = useContext(CartContext)

  return (
    <S.CategoryItem>
      <S.Image imageURL={imageURL} />
      <S.ProductInfoContainer>
        <S.Name className='name'>{name}</S.Name>
        <S.Price className='price'>{price}</S.Price>
      </S.ProductInfoContainer>
      <S.AddButton
        inverted
        onClick={() => {
          addItem(item)
        }}
      >
        Add to cart
      </S.AddButton>
    </S.CategoryItem>
  )
}

// const mapDispatchToProps = dispatch => ({
//   addItemToCart: item => dispatch(addItemToCart(item)),
// })

export default CategoryItem
