import React, { useEffect, useState } from "react";
import AddToCart from "../../components/user/AddToCart";
import UserNavbar from "../../components/user/UserNavbar";
import authuser from "./authuser";
import Axios from "axios";
import Router from "next/router";
import { GetServerSideProps, GetStaticProps } from "next";

const addTocart = () => {
  authuser();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const saveToken = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorized");
      Router.push("/user/login");
    }
    const userCart = localStorage.getItem("UserCart");
    const userCartData = userCart.slice(1, userCart.length - 1).split(",");
    Axios.get("http://localhost:8080/viewCart", {
      headers: {
        passToken: "Bearer " + saveToken,
        passCart: "Bearer " + userCartData,
      },
    })
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
