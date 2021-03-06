import { React, useEffect, useState } from "react";
import Router from "next/router";
import Axios from "axios";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Category from "../../components/admin/Category";
import adminAuth from "./adminAuth";
const category = () => {
  adminAuth();
  const [category, setCategory] = useState();

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
    Axios.get("http://localhost:8080/showCategory", headers)
      .then((result) => {
        return result;
      })
      .then((data) => {
        if (data.data.msg === "unAuthorized") {
          alert("you are not authorized");
          Router.push("/");
        }
        setCategory(data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AdminNavbar />
      <Category categoryData={category} />
    </>
  );
};

export default category;
