import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import Collection from '../collection/Collection'

const Products = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collection`} component={Collection} />
  </div>
)

export default Products
