import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51Io0YXD6lU6s8HD0tIwNHDBt1BZ7x3eMIhl3uWtLkktUgmXaUQjCHmMLYNkQAjPJOcJ19luoA6DGH7Lceb9p2E4v00TUSj0GAR'

  const onToken = token => {
    console.log('token', token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='My E-commerce'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now2'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
