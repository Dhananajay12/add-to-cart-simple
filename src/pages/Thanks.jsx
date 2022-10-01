import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <>
      <div className="thanks-you">
        <AiFillCheckCircle fontSize="50px" color="green" />
        <br></br>
        <br></br>
        <h1>Thanks for Buying</h1>
        <br></br>
        <br></br>
        <Link className="button5" to="/">
          Back to Cart
        </Link>
      </div>
    </>
  );
};

export default Thanks;
