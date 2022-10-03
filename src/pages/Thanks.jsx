import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Thanks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="thanks-you ">
        <div className="conter-div-color" data-aos="flip-left">
          <AiFillCheckCircle fontSize="50px" color="green" />
          <br></br>
          <br></br>
          <h1>Thank you for Your Purchase</h1>
          <br></br>
          <h4>We'll be in your inbox soon :)</h4>
          <br></br>
          <br></br>
          <a className="button5" href="/">
            Back to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Thanks;
