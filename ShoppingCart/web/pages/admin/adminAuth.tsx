import React, { useEffect, useState } from "react";
import Router from "next/router";
import Axios from "axios";
import UseApi from "../../callApi/UseApi";

const adminAuth = () => {
  const homePage = async () => {
    const { adminAuthUrl } = UseApi();

    const saveToken = localStorage.getItem("adminjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorizes");
      Router.push("/");
    }

    const headers: object = {
      headers: {
        passToken: "Bearer " + saveToken,
      },
    };
    const res = await adminAuthUrl(headers);
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
