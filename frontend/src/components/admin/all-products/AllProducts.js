import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../../redux/product/product.selectors'
import ProductItem from './product-item/ProductItem'

const AllProducts = ({ collections }) => (
  <div>
    {collections.map(collection => (
      <ProductItem collection={collection} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(AllProducts)
