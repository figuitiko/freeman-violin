"use client";
import { Checkout } from "@/components/check-out";
import convertToSubcurrency from "@/lib/convert-currency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const amount = 29.99;

const CheckOutPage = () => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
      }}
    >
      <Checkout amount={amount} />
    </Elements>
  );
};
export default CheckOutPage;
