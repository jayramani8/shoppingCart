import { React, useState } from "react";
import Link from "next/link";
import Axios from "axios";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const inputHandler = (event) => {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value,
    });
  };
  //   console.log(userData);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userData.username.trim() === "") {
      toast("username is empty");
    } else if (userData.email.trim() === "") {
      toast("email is empty");
    } else if (userData.mobile === "") {
      toast("mobile is empty");
    } else if (userData.password.trim() === "") {
      toast("password is empty");
    } else {
      const registerData = {
        username: userData.username,
        email: userData.email,
        mobile: userData.mobile,
        password: userData.password,
      };
      console.log(registerData);
      const res = await Axios.post(
        "http://localhost:8080/registerUser",
        registerData
      );
      if (res.status === 200) {
        alert("User Created");
        Router.push("/user/login");
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <section
        className=" bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 login-box">
                <div className="card border border-dark">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      User Registration
                    </h2>

                    <form method="post">
                      <div className="form-outline mb-4">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          name="username"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Mobile</label>
                        <input
                          type="number"
                          name="mobile"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          onClick={submitHandler}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
