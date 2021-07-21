import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/product/product.selectors'
import CategoryPreview from '../category-preview/CategoryPreview'

import './collectionsOverview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CategoryPreview key={id} {...otherProps} />
      ))}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
