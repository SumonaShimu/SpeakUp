import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NGmg7JmRLyiXZzptwAgMidE6Zf2UljfVoI0bgumKQZUacIGvHC4KHvuwpr7CqQB5R79tviWMgJEySGNWgZqK3xo00T7kGTEJC');
const Payment = () => {
    return (
        <div>
            <h1>Please complete your payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;