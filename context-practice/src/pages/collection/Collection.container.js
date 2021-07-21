import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Collection from './Collection'
import { compose } from 'redux'
import { selectIsCollectionLoaded } from '../../redux/product/product.selectors'
import WithSpinner from '../../components/with-spinner/WithSpinner'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer
