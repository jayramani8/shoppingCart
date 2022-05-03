import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const AdminNavbar = () => {
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
                    <Link href="/admin/adminhome">
                      <h4
                        role="button"
                        className="text-gray-300  hover:text-gray-400  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                      >
                        Products
                      </h4>
                    </Link>
                    <Link href="/admin/category">
                      <h4
                        role="button"
                        className="text-gray-300  hover:text-gray-400  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                      >
                        Category
                      </h4>
                    </Link>
                    <Link href="/">
                      <button
                        type="button"
                        className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        onClick={() => {
                          localStorage.removeItem("adminjwt");
                        }}
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

export default AdminNavbar;
