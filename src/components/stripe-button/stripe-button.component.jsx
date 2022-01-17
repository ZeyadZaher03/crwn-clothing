import React from "react"
import StripCheckout from "react-stripe-checkout";


const StripCheckOutButton = ({ price }) => {
  const priceForStrip = price * 100
  const publishableKey = "pk_test_51KJ3VnEztlyP85jcbatNQ6SEOTGzoOCOHqQUh5Jlysbzy5U7uDAKW5KiYthYOSn5qbfWFZMfMHHaxiJ1md04DdrK00D0KphxjS";

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripCheckout 
      label='Pay Now'
      name='Crown Clothing, INc.'
      billAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripCheckOutButton;