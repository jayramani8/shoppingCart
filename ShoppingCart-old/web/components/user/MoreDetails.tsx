import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AddToCart from "./AddToCart";
const MoreDetails = (props: any) => {
  const {
    id,
    title,
    price,
    category,
    quantity,
    Description,
    image,
    createdAt,
    updatedAt,
  } = props.viewData;

  if (localStorage.getItem("UserCart") == null) {
    localStorage.setItem("UserCart", "[]");
  }
  let oldStorage = JSON.parse(localStorage.getItem("UserCart"));
  const AddToCartHandler = (id: number) => {
    oldStorage.push(id);
    localStorage.setItem("UserCart", JSON.stringify(oldStorage));
  };
  // console.log(saveCart);

  return (
    <>
      <section
        className=" bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 login-box">
                <div className="">
                  <div className="product-content product-wrap clearfix">
                    <div className="row">
                      <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="product-image">
                          <img
                            src={`http://localhost:8080/${image}`}
                            className="card-img"
                          />

                          {/* <span class="tag2 hot">HOT</span> */}
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12 col-xs-12 ">
                        <div className="product-deatil">
                          <h5 className="name">
                            <a href="#">
                              <h3>{title}</h3>{" "}
                              <span>
                                Category : {category}, Quantity : {quantity}
                              </span>
                            </a>
                          </h5>
                          <p className="price-container mt-4">
                            <span>₹ {price}</span>
                          </p>
                          {/* <span className="tag1"></span> */}
                        </div>
                        <div className="description">
                          <p className="Description-size">{Description}</p>
                        </div>
                      </div>
                      <div className="flex col-lg-12 justify-content-around mt-2 mb-2">
                        <div className="d-flex col-lg-5 justify-content-center ">
                          <Link href={`/../user/userdashboard`} passHref>
                            <button
                              type="submit"
                              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                              // onClick={submitHandler}
                            >
                              Back
                            </button>
                          </Link>
                        </div>
                        <div className="d-flex col-lg-5 justify-content-center ">
                          <Link href={`/user/addTocart`} passHref>
                            <button
                              type="submit"
                              className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                              onClick={() => {
                                AddToCartHandler(id);
                              }}
                            >
                              Add to Cart
                              <span className="ml-2">
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                  color="white"
                                  fontSize="18px"
                                  cursor="pointer"
                                />
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreDetails;
