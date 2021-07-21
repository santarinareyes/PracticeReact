import { connect } from 'react-redux'
import CategoryItem from '../../components/category-item/CategoryItem'
import { selectCollection } from '../../redux/product/product.selectors'
import './collection.scss'
import CollectionsContext from '../../contexts/collections/collections.context'

const Collection = ({ collection, match }) => {
  return (
    <CollectionsContext.Consumer>
      {collections => {
        const collection = collections[match.params.collection]
        const { title, items } = collection

        return (
          <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
              {items.map(item => (
                <CategoryItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )
      }}
    </CollectionsContext.Consumer>
  )
}

export default Collection
