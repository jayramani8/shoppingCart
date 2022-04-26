import React, { useEffect, useState } from "react";
import Router from "next/router";
import Axios from "axios";

const adminAuth = () => {
  const homePage = async () => {
    const saveToken = localStorage.getItem("adminjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorizes");
      Router.push("/");
    }

    const res = await Axios.get("http://localhost:8080/adminAuth", {
      headers: {
        passToken: "Bearer " + saveToken,
      },
      // credentials: "include",
    });
    if (res.status === 200) {
      Router.push("/admin/adminhome");
    } else {
      Router.push("/");
    }
  };

  useEffect(() => {
    homePage();
  }, []);
};

export default adminAuth;
