import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'
import CollectionContainer from '../collection/Collection.container'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/product/product.actions'

const ProductsPage = ({ match, fetchCollectionsStart }) => {
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
