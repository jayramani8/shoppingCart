import React, { useEffect, useState } from "react";
import AddToCart from "../../components/user/AddToCart";
import UserNavbar from "../../components/user/UserNavbar";
import authuser from "./authuser";
import Axios from "axios";
import Router from "next/router";
import { GetServerSideProps, GetStaticProps } from "next";
import UseApi from "../../callApi/UseApi";
const addTocart = () => {
  const { viewCartUrl } = UseApi();
  authuser();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const saveToken: string = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorized");
      Router.push("/user/login");
    }
    const userCart: string = localStorage.getItem("UserCart");
    const userCartData = userCart.slice(1, userCart.length - 1).split(",");
    const headers: object = {
      headers: {
        passToken: "Bearer " + saveToken,
        passCart: "Bearer " + userCartData,
      },
    };
    viewCartUrl(headers)
      .then((result) => {
        return result;
      })
      .then((data) => {
        if (data.data.msg === "unAuthorized") {
          alert("you are not authorized");
          Router.push("/user/login");
        }
        setCartData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(cartData);

  return (
    <>
      <UserNavbar />
      <AddToCart cartData={cartData} />
    </>
  );
};

export default addTocart;
