import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'
import CollectionContainer from '../collection/Collection.container'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/product/product.actions'

const ProductsPage = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collection`}
        component={CollectionContainer}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ProductsPage)
