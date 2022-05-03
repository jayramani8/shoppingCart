import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const UserNavbar = () => {
  return (
    <>
      <div>
        <nav className="nav-bg dark:bg-gray-800 p-2 shadow ">
          <div className="max-w-7xl mx-auto ">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                {/* <a className="flex-shrink-0" href="/"> */}
                <h2 className="text-white ml-2">Amazon</h2>
                {/* </a> */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/user/userdashboard">
                      <h4
                        role="button"
                        className="text-gray-300  hover:text-gray-400  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                      >
                        Dashboard
                      </h4>
                    </Link>
                    <Link href="/user/addTocart">
                      <span
                        role="button"
                        className="text-gray-300  hover:text-gray-400  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium d-flex "
                      >
                        <span className="mr-1">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            color="white"
                            fontSize="25px"
                            cursor="pointer"
                            className="text-gray-300  hover:text-gray-400  dark:hover:text-white  rounded-md text-medium font-medium"
                          />
                        </span>
                      </span>
                    </Link>
                    <Link href="/user/login">
                      <button
                        type="button"
                        onClick={() => {
                          localStorage.removeItem("userjwt");
                          localStorage.removeItem("userid");
                          localStorage.removeItem("UserCart");
                        }}
                        className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default UserNavbar;
