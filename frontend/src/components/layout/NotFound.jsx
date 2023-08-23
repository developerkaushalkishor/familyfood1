import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <div>
          <p>Page not found! Click below to go to Home Page</p>
          <Link to="/">Back to Home</Link>
        </div>
      </main>
    </section>
  );
};

export default NotFound;