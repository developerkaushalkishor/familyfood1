import React from "react";
import { motion } from "framer-motion";
import { MdOutlineFastfood } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vh",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>
          Contact Us
          {/* <SiIfood /> */}
        </h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Type Your Message..."
        ></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vh",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{ delay: 0.7 }}
        >
          <MdOutlineFastfood />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
