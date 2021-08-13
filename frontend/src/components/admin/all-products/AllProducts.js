import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../../redux/product/product.selectors'
import ProductItem from './product-item/ProductItem'
import { AllProductsContainer } from './styles'

const AllProducts = ({ collections }) => (
  <AllProductsContainer>
    {collections.map(({ id, ...otherProps }) => (
      <ProductItem key={id} collection={otherProps} />
    ))}
  </AllProductsContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(AllProducts)
