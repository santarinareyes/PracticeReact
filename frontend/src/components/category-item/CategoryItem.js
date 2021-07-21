import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'
import * as S from './styles'

const CategoryItem = ({ item, addItemToCart }) => {
  const { imageURL, name, price } = item

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
          addItemToCart(item)
        }}
      >
        Add to cart
      </S.AddButton>
    </S.CategoryItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
})

export default connect(null, mapDispatchToProps)(CategoryItem)
