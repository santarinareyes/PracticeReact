import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/product/product.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

const ProductsPage = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setIsLoading(false)
    })
  }, [updateCollections])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collection`}
        render={props => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ProductsPage)
