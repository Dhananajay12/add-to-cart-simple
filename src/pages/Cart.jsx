import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { add, decrease, remove, getTotals } from "../store/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
// import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem, total } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };
  // const clearCacheData = () => {
  //   caches.keys().then((names) => {
  //     names.forEach((name) => {
  //       caches.delete(name);
  //     });
  //   });
  //   alert("Complete Cache Cleared");
  // };
  return (
    <div className="cart">
      <div className="size2 mx-2 ">
        {/* <h1 className="heading-cart">Your Cart ({cartItem.length} Item)</h1> */}
        <br></br>

        <div className="row mt-4 " style={{ textAlign: "center" }}>
          <div className="col-md-2">
            <h5 className="mt-1">Products</h5>
          </div>
          <div className="col-md-4">
            <h5 className="mt-1">Description</h5>
          </div>
          <div className="col-md-2">
            <h5 className="mt-1">Price</h5>
          </div>
          <div className="col-md-2">
            <h5 className="mt-1">Quantitiy</h5>
          </div>
          <div className="col-md-2">
            <h5 className="mt-1">Subtotaltal </h5>
          </div>
        </div>
        <hr></hr>
        <br></br>

        <div>
          {cartItem.map((product) => (
            <>
              <div className="row mt-4 " style={{ textAlign: "center" }}>
                <div className="col-md-2">
                  <img src={product.image} alt="error" className="size" />
                </div>

                <div className="col-md-4">
                  <h5 className="mt-1">{product.title}</h5>
                </div>
                <div className="col-md-2">
                  <h5 className="mt-1">${product.price}</h5>
                </div>
                <div className="col-md-2">
                  <div className="center">
                    <button
                      className="btn  "
                      onClick={() => handleAdd(product)}
                    >
                      +
                    </button>
                    <h5 className="mt-2 mx-2">{product.quantity}</h5>
                    <button
                      className="btn "
                      onClick={() => handleDecrease(product)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="subtotal2">
                    <h5 className="mt-2 mx-2">
                      ${product.price * product.quantity}
                    </h5>
                    <button
                      className="btn mt-1"
                      onClick={() => handleRemove(product)}
                    >
                      {" "}
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>

                <div className="col-md-2"></div>
              </div>
              <hr></hr>
            </>
          ))}
        </div>
      </div>

      <div className="total mx-2">
        <br></br>

        <div className="subtotal">
          <h2>Cart Total</h2>
          <Link to="/" className="button3">
            Back to Shop
          </Link>
        </div>
        <br></br>
        <br></br>
        <div className="subtotal">
          <h5>Subtotal</h5>
          <h5>${total}</h5>
        </div>
        <hr></hr>
        <div className="subtotal">
          <h5>Total</h5>
          <h5>${total}</h5>
        </div>
        <br></br>
        <br></br>
        <center>
          <a href="/thanks" className="button2 ">
            PROCEED TO CHECKOUT
          </a>
        </center>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Cart;
