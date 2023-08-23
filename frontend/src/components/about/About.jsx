import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Family Food</h4>
          <p>Come with your Family</p>
          <p>Explore Our Shop by clicking the given button below.</p>
          <Link to="/#menu">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Kaushal</h3>
            </div>
            <p>
              Hello, I am the Founder & CEO of the Family Food. We want every
              femily will come in our shop and make some fun.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
