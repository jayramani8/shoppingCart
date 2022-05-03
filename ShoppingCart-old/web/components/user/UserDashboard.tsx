import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-bootstrap-icons";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const UserDashboard = (props: any) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-4 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            All Products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.productData.map((item) => (
              <div key={item.id} className="group relative">
                <div className="w-full min-h-85 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-85 lg:aspect-none">
                  <img
                    src={`http://localhost:8080/${item.image}`}
                    alt={item.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <div>
                    <h3 className="text-sm text-center text-gray-700">
                      <span className="text-sm text-center font-medium text-gray-900">
                        <h4>{item.title}</h4>
                      </span>
                    </h3>
                  </div>
                </div>
                <span className="text-sm text-center font-medium text-gray-900">
                  <h5>₹{item.price}</h5>
                </span>
                <div className="d-flex justify-content-center mt-4">
                  <Link href={`/user/moreDetails/${item.id}`} passHref>
                    <button
                      type="submit"
                      className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      // onClick={submitHandler}
                    >
                      More Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
