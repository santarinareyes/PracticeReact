import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import './checkout.scss'

const Checkout = ({ cartItems, cartTotal }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Descriptions</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='cart-total'>
      <span>TOTAL: {cartTotal} SEK</span>
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout)
