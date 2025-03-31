import React from "react";

const StripePayment = ({
  priceInCents,
  orderId,
  client_secret,
}: {
  priceInCents: number;
  orderId: string;
  client_secret: string;
}) => {
  return <>STRIPE FORM</>;
};

export default StripePayment;
