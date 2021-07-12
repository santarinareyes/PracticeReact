import { connect } from 'react-redux'
import CategoryItem from '../../components/category-item/CategoryItem'
import { selectCollection } from '../../redux/product/product.selectors'
import './collection.scss'

const Collection = ({ collection }) => {
  console.log('collection', collection)
  return (
    <div className='collection-page'>
      <h2>category1</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
})

export default connect(mapStateToProps)(Collection)
