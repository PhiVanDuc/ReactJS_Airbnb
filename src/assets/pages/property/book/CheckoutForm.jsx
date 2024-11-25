import { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';

import { axiosInstance } from "@/utils/axiousFetch";
import convertToSubCurrency from '@/utils/convertToSubCurrency';

export default function CheckoutForm({ amount }) {
    const stripe = useStripe();
    const element = useElements();

    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await axiosInstance.post(
                "/stripe/create_payment_intent",
                { amount: convertToSubCurrency(amount) },
            );

            const { data } = result;
            if (data?.result?.clientSecret) setClientSecret(data?.result?.clientSecret);
        })();
    }, [amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        if (!stripe || !element) return;

        const { error: submitError } = await element.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements: element,
            clientSecret,
            confirmParams: {
                return_url: `${import.meta.env.VITE_FRONT_END_URL}/success-payment?amount=${amount}`
            },
            redirect: "if_required"
        });

        if (error) {
            setErrorMessage(error.message);
        } else {}

        setLoading(false);
    }

    if (!clientSecret || !stripe || !element) {
        return <div>Loading...</div>
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='space-y-[20px]'
        >
            {
                clientSecret && <PaymentElement />
            }

            <Button
                className="bg-root text-[16px] font-semibold px-[25px] py-[25px]"
                disabled={!stripe || loading}
            >
                {
                    loading ? "Processing..." : "Request to book"
                }
            </Button>
        </form>
    )
}
