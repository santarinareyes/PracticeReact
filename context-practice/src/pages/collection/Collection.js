import CategoryItem from '../../components/category-item/CategoryItem'
import './collection.scss'
import CollectionsContext from '../../contexts/collections/collections.context'
import { useContext } from 'react'

const Collection = ({ match }) => {
  const collections = useContext(CollectionsContext)
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
}

export default Collection
