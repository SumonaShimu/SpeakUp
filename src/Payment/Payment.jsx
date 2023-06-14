import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import Headings from "../components/Headings";

// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NGmg7JmRLyiXZzptwAgMidE6Zf2UljfVoI0bgumKQZUacIGvHC4KHvuwpr7CqQB5R79tviWMgJEySGNWgZqK3xo00T7kGTEJC');
const Payment = () => {
    const data=useLocation();
    const {item}=data.state;
    const price=item.price;
    console.log(price)
    return (
        <div>
            <Headings title='Please complete your payment' sub={`total price to be paid: $ ${price}`}></Headings>
            <Elements stripe={stripePromise}>
                <CheckoutForm item={item}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;