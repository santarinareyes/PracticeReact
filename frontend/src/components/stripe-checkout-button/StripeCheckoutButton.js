import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51Io0YXD6lU6s8HD0tIwNHDBt1BZ7x3eMIhl3uWtLkktUgmXaUQjCHmMLYNkQAjPJOcJ19luoA6DGH7Lceb9p2E4v00TUSj0GAR'

  const onToken = token => {
    const data = {
      amount: priceForStripe,
      token,
    }

    axios
      .post('payment', data)
      .then(response => {
        console.log('response', response)
        alert('Payment successful')
      })
      .catch(err => {
        console.log('err', JSON.parse(err))
        alert('Make sure to use 4242 4242 4242 4242, 01/22, 123')
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='My E-commerce'
      billingAddress
      shippingAddress
      description={`Your total is ${price} SEK`}
      amount={priceForStripe}
      panelLabel='Pay Now2'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
