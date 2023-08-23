import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address: </b>
            {"lkjlhk"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name: </b>
            {"Kaushal"}
          </p>
          <p>
            <b>Mobile No: </b>
            {4561234512}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status: </b>
            {"In Process"}
          </p>
          <p>
            <b>Placed at: </b>
            {"11 - 01 - 2022"}
          </p>
          <p>
            <b>Delivered at: </b>
            {"13 - 01 - 2022"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method: </b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference: </b>
            {"#Ghjknm"}
          </p>
          <p>
            <b>Paid at: </b>
            {"11 - 01 - 2022"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Item's Total: </b>₹{2000}
          </p>
          <p>
            <b>Shipping Charges: </b>₹{80}
          </p>
          <p>
            <b>Tax: </b>₹{20}
          </p>
          <p>
            <b>Total Amount: </b>₹{2000 + 80 + 20}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{11}</span> x <span>{200}</span>
            </div>
          </div>
          <div>
            <h4>Veg-Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Frise</h4>
            <div>
              <span>{11}</span> x <span>{800}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{84161}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
