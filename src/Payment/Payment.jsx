import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NGmg7JmRLyiXZzptwAgMidE6Zf2UljfVoI0bgumKQZUacIGvHC4KHvuwpr7CqQB5R79tviWMgJEySGNWgZqK3xo00T7kGTEJC');
const Payment = () => {
    const data=useLocation();
    const {item}=data.state;
    const price=item.price;
    console.log(price)
    return (
        <div>
            <h1>Please complete your payment</h1>
            <p>{price}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm item={item}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;