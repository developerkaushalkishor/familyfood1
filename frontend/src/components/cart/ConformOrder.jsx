import React from "react";

const ConformOrder = () => {
  return (
    <section className="conformOrder">
      <main>
        <h1>Conform Order</h1>
        <form>
          <div>
            <label>Cash on Delivery (COD)</label>
            <input type="radio" name="payment" />
          </div>
          <div>
            <label>Online Payment</label>
            <input type="radio" name="payment" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConformOrder;
