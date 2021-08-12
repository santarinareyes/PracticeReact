import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectIsCollectionLoaded } from '../../../redux/product/product.selectors'
import WithSpinner from '../../with-spinner/WithSpinner'
import AllProducts from './AllProducts'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
})

const AllProductsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AllProducts)
export default AllProductsContainer
