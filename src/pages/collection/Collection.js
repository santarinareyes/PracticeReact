import { connect } from 'react-redux'
import CategoryItem from '../../components/category-item/CategoryItem'
import { selectCollection } from '../../redux/product/product.selectors'
import './collection.scss'

const Collection = ({ collection }) => {
  const { title, items } = collection
  console.log('collection', collection)
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
})

export default connect(mapStateToProps)(Collection)
