import { createContext } from 'react'
import { collections } from '../../pages/products/products.data'

const CollectionsContext = createContext(collections)

export default CollectionsContext
