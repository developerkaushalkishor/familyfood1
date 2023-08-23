import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.png";

const option = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

const Founder = () => {
  return(
    <section className="founder">
    <motion.div {...option}>
      <img src={me} alt="Founder" height={200} />
      <h3>Kaushal Kishor</h3>
      <p>
        Hello, I am the Founder & CEO of the Family Food.
      </p>
      <p>We want every femily will come in our shop and make some fun.</p>
    </motion.div>
  </section>
  )
};

export default Founder;
