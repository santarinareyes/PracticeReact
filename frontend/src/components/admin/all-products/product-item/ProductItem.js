import Spacer from '../../../spacer/Spacer'
import * as S from './styles'

const ProductItem = ({ collection: { items, title } }) => (
  <div>
    <S.Title>{title}</S.Title>
    <div>
      {items.map(({ name, id, price, imageURL }) => (
        <>
          <S.ProductInfoContainer key={id}>
            <S.Text>{name}</S.Text>
            <S.Text>Price: {price} SEK</S.Text>
            <S.Text>View image</S.Text>
            <S.Text>Edit</S.Text>
          </S.ProductInfoContainer>
          <Spacer h='10' />
        </>
      ))}
    </div>
  </div>
)

export default ProductItem
