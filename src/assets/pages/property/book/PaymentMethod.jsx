import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

import convertToSubCurrency from "@/utils/convertToSubCurrency";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function PaymentMethod() {
    const amount = 49.99;

    return (
        <div className='seperate-line-property space-y-[30px]'>
            <h3 className="text-[22px] font-semibold">Pay with</h3>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubCurrency(amount),
                    currency: "usd",
                    appearance: {
                        theme: 'flat',
                        rules: {
                            '.Input': {
                                color: '#333',
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                fontSize: '16px',
                                padding: '20px',
                            },
                            '.Label': {
                                fontSize: '15px',
                                fontWeight: '500',
                                marginBottom: '10px',
                            }
                        }
                    }
                }}
            >
                <CheckoutForm amount={amount} />
            </Elements>
        </div>
    )
}
