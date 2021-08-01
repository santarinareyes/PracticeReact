import { connect } from 'react-redux'
import CategoryItem from '../../components/category-item/CategoryItem'
import { selectCollection } from '../../redux/product/product.selectors'
import * as S from './styles'

const Collection = ({ collection }) => {
  const { title, items } = collection
  return (
    <S.CollectionContainer className='collection-page'>
      <S.Title className='title'>{title}</S.Title>
      <S.ItemsContainer className='items'>
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </S.ItemsContainer>
    </S.CollectionContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
})

export default connect(mapStateToProps)(Collection)
