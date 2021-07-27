import { lazy, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/product/product.actions'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionsOverview.container')
)

const CollectionContainer = lazy(() =>
  import('../collection/Collection.container')
)

const ProductsPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ProductsPage)
