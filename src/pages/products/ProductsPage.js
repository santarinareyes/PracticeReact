import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'
import { connect } from 'react-redux'
import {
  fetchCollectionsStartAsync,
  updateCollections,
} from '../../redux/product/product.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { createStructuredSelector } from 'reselect'
import { selectCollectionIsFetching } from '../../redux/product/product.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

const ProductsPage = ({ match, isFetching, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])

  console.log('rendered productPage')

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collection`}
        render={props => (
          <CollectionWithSpinner isLoading={isFetching} {...props} />
        )}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionIsFetching,
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
