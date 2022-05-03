import React, { useEffect, useState } from "react";
import Router from "next/router";
import Axios from "axios";
import UseApi from "../../callApi/UseApi";

const authuser = () => {
  const { userAuthUrl } = UseApi();
  const homePage = async () => {
    const saveToken = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      Router.push("/user/login");
    }
    const headers: object = {
      headers: {
        passToken: "Bearer " + saveToken,
      },
    };
    const res = await userAuthUrl(headers);
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
