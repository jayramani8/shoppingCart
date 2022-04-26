import React, { useEffect, useState } from "react";
import AdminHome from "../../components/admin/AdminHome";
import AdminNavbar from "../../components/admin/AdminNavbar";
import adminAuth from "./adminAuth";
import Router from "next/router";
import Axios from "axios";
const adminhome = () => {
  adminAuth();
  const [product, setProduct] = useState();

  useEffect(() => {
    const saveToken = localStorage.getItem("adminjwt");
    if (saveToken === null) {
      alert("you are not authorized");
      Router.push("/");
    }
    const headers = {
      headers: {
        passToken: "Bearer " + saveToken,
      },
    };

    Axios.get("http://localhost:8080/showProduct", headers)
      .then((result) => {
        return result;
      })
      .then((data) => {
        if (data.data.msg === "unAuthorized") {
          alert("you are not authorized");
          Router.push("/");
        }
        setProduct(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <AdminNavbar />
      <AdminHome productData={product} />
    </>
  );
};

export default adminhome;
