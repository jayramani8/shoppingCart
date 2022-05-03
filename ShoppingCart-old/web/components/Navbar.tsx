import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="nav-bg  dark:bg-gray-800  ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <h2 className="text-white">Amazon</h2>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <h4
                      role="button"
                      className="text-gray-300  hover:text-gray-800  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                    >
                      Admin
                    </h4>
                  </Link>
                  <Link href="/user/login">
                    <h4
                      role="button"
                      className="text-gray-300  hover:text-gray-800  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                    >
                      User
                    </h4>
                  </Link>
                  <Link href="/user/register">
                    <h4
                      role="button"
                      className="text-gray-300  hover:text-gray-800  dark:hover:text-white px-3 py-2 rounded-md text-medium font-medium"
                    >
                      Ragistration
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
