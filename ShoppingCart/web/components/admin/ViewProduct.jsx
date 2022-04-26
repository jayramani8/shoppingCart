import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";

const ViewProduct = (props) => {
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
  // console.log(price);
  return (
    <>
      <section className=" bg-image ">
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
                      <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="product-deatil">
                          <h5 className="name">
                            <a href="#">
                              <h4>{title}</h4>{" "}
                              <span>
                                Category : {category}, Quantity : {quantity}
                              </span>
                            </a>
                          </h5>
                          <p className="price-container">
                            <span>${price}</span>
                          </p>
                          {/* <span class="tag1"></span> */}
                        </div>
                        <div className="description">
                          <p className="pt-1">{Description}</p>
                        </div>
                        <div className="createat">
                          <span>
                            <span className="font-bold">CreatedAt : </span>
                            {createdAt}
                          </span>
                          <p>
                            <span className="font-bold">UpdatedAt : </span>
                            {updatedAt}
                          </p>
                        </div>
                        <div className="product-info smart-form">
                          <Link href="/admin/adminhome" passHref>
                            <button className="btn btn-primary">Back</button>
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

export default ViewProduct;
