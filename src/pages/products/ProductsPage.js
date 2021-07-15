import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const ProductsPage = ({ match }) => {
  const unsubscribeFromSnapshot = null

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot)
    })
  }, [])

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collection`} component={Collection} />
    </div>
  )
}

export default ProductsPage
