import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Conformed</h1>
        <p>Order Placed Successfully, Now You can check order status below</p>
        <Link to="/myorder">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
