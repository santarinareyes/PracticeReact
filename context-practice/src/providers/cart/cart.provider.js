import { createContext, useState, useEffect } from 'react'
import {
  cartItemQuantity,
  removeItemFromCart,
} from '../../redux/cart/cart.utils'

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: () => {},
})

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const addItem = itemToAdd =>
    setCartItems(cartItemQuantity(cartItems, itemToAdd))

  const removeItem = itemToRemove =>
    setCartItems(removeItemFromCart(cartItems, itemToRemove))

  const toggleHidden = () => setHidden(!hidden)

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (prev, cartItem) => prev + cartItem.quantity * cartItem.price,
        0
      )
    )
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        toggleHidden,
        addItem,
        cartItemsCount,
        removeItem,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
