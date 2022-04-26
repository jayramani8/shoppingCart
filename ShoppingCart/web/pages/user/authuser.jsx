import React, { useEffect, useState } from "react";
import Router from "next/router";
import Axios from "axios";

const authuser = () => {
  const homePage = async () => {
    const saveToken = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      Router.push("/user/login");
    }

    const res = await Axios.get("http://localhost:8080/userAuth", {
      headers: {
        passToken: "Bearer " + saveToken,
      },
      // credentials: "include",
    });
    if (res.status === 200) {
      Router.push("/user/userdashboard");
    } else {
      Router.push("/user/login");
    }
  };

  useEffect(() => {
    homePage();
  }, []);
};

export default authuser;
