import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, decrease, increase } from "../store/cartSlice";
import { BsArrowClockwise } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { FormControl } from "react-bootstrap";
import SearchFilter from "react-filter-search";

const Home = () => {
  const dispatch = useDispatch();
  const { cartItem, quantity } = useSelector((state) => state.cart);
  // const [qun, setQun] = useState(1);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState([]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      setFilter(data);
    };

    fetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handleDec = (product) => {
    dispatch(decrease(product));
    window.location.reload();
  };

  // const handleDecrease = (product) => {
  //  setCount(count - 1);

  // };

  // const incrementCount = () => {
  //   // Update state with incremented value
  //   setCount(count + 1);
  // };

  const productFilter = (c) => {
    const updatedList = data.filter((prod) => {
      return prod.category === c;
    });
    setFilter(updatedList);
  };

  return (
    <>
      <br></br>
      <div className="container con1 ">
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle
              variant="none"
              className="button3"
              id="dropdown-basic"
            >
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => productFilter("men's clothing")}>
                <button className="button">Mens</button>
              </Dropdown.Item>
              <hr></hr>
              <Dropdown.Item onClick={() => productFilter("women's clothing")}>
                <button className="button ">Women</button>
              </Dropdown.Item>
              <hr></hr>
              <Dropdown.Item onClick={() => productFilter("jewelery")}>
                <button className="button ">Jewelery</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="button3 mx-2" onClick={() => setFilter(data)}>
            <BsArrowClockwise className="mx-1" />
            Clear Filter
          </button>
        </div>
        <div className=" d-flex">
          <FormControl
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ height: "3rem", width: "15rem" }}
            className="mx-1"
          />
          <Link to="/cart" className="button3">
            Add to cart ({cartItem.length})
          </Link>
        </div>
      </div>
      <hr></hr>

      <div className="container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-2 h5">Image</div>
          <div className="col-md-2 h5">Name</div>
          <div className="col-md-2 h5">Price</div>
          <div className="col-md-2 h5">Category</div>
          <div className="col-md-2 h5">quantitiy</div>
          <div className="col-md-2 h5">buy</div>
        </div>
        <hr></hr>
        <SearchFilter
          value={searchInput}
          data={filter}
          renderResults={(product) => (
            <div className="justify-content-center">
              {product.map((product, i) => (
                <div
                  className="row mt-4 "
                  key={i}
                  style={{ textAlign: "center" }}
                >
                  <div className="col-md-2">
                    <img src={product.image} alt="error" className="size" />
                  </div>
                  <div className="col-md-2">
                    <p className="mt-1 color3">{product.title}</p>
                  </div>
                  <div className="col-md-2">
                    <h5 className="mt-1">${product.price}</h5>
                  </div>
                  <div className="col-md-2">
                    <h5 className="mt-1 color3">{product.category}</h5>
                  </div>
                  <div className="col-md-2">
                    <div className="center">
                      <button
                        className="button3 mx-1"
                        onClick={() => handleAdd(product)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        className="button3 mx-1"
                        onClick={() => handleDec(product)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="button3 mx-1"
                      onClick={() => handleAdd(product)}
                    >
                      <AiOutlineShoppingCart className="h3 m-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        />

        {/* {filter.map((product) => (
          
        ))} */}
      </div>
    </>
  );
};

export default Home;
