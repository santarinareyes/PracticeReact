import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/product/product.selectors'
import CategoryPreview from '../category-preview/CategoryPreview'
import { CollectionsOverviewContainer } from './styles'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CategoryPreview key={id} {...otherProps} />
      ))}
    </div>
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
