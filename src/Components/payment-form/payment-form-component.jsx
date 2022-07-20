/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart-selector";
import userSelector from "../../store/user/user-selector";
import { FormContainer, PaymentFormContainer, PaymentButton } from "./payment-form-styles";
import { BUTTON_TYPE_CLASSES } from "../customButton/Button.component";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(userSelector);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user ? user.displayName : "marshal sebastne",
          },
        },
      },
    );
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else if (paymentResult.paymentIntent.status === 'succeeded') {
      alert('Payment Successful!');
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );

}

export default PaymentForm;
