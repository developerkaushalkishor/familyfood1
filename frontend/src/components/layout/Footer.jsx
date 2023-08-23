import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Family Food</h2>
        <p>We are the one of the top company in the world.</p>
        <br />
        <em>We give attention to genuine feedack. </em>
        <strong>All right receved &#169; 2022</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.google.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.google.com/">
          <AiFillYoutube />
        </a>
        <a href="https://www.google.com/">
          <AiFillFacebook />
        </a>
        <a href="https://www.google.com/">
          <AiFillLinkedin />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
