import React, { useEffect, useState } from "react";
import UserDashboard from "../../components/user/UserDashboard";
import UserNavbar from "../../components/user/UserNavbar";
import authuser from "./authuser";
import Axios from "axios";
import Router from "next/router";
import UseApi from "../../callApi/UseApi";

const userdashboard = () => {
  const { showProductUrl } = UseApi();

  authuser();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const saveToken = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorized");
      Router.push("/user/login");
    }
    const headers: object = {
      headers: {
        passToken: "Bearer " + saveToken,
      },
    };
    showProductUrl(headers)
      .then((result) => {
        return result;
      })
      .then((data) => {
        if (data.data.msg === "unAuthorized") {
          alert("you are not authorized");
          Router.push("/user/login");
        }
        setProduct(data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(product);
  return (
    <>
      <UserNavbar />
      <UserDashboard productData={product} />
    </>
  );
};

export default userdashboard;
