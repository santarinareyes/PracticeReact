import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/product/product.actions'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const ProductsPage = ({ match, updateCollections }) => {
  const unsubscribeFromSnapshot = null

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }, [])

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collection`} component={Collection} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ProductsPage)
