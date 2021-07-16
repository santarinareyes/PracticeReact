import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionIsFetching } from '../../redux/product/product.selectors'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
