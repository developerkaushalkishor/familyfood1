import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";

Chartjs.register(Tooltip, ArcElement, Legend);

const loading = false;

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Deshboard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159,63,176, 0.1)",
          "rgba(78,63,176, 0.2)",
          "rgba(159,0,60, 0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(159,0,60)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="deshboard">
      {loading === false ? (
        <main>
          <article>
            <Box title="Users" value={4512} />
            <Box title="Orders" value={42} />
            <Box title="Income" value={4676} />
          </article>
          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Deshboard;
